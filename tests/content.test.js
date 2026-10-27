'use strict';
const test=require('node:test'),assert=require('node:assert/strict');
const D=require('../src/data.js');
const normalized=value=>String(value||'').normalize('NFKC').trim().replace(/\s+/g,' ').toLowerCase();

test('three genuinely distinct courses each contain five four-task chapters and one four-stage investigation',()=>{
  assert.deepEqual(D.levels.map(l=>l.id),['beginner','intermediate','advanced']);
  assert.equal(D.missions.length,63);
  assert.equal(new Set(D.missions.map(m=>m.id)).size,63);
  assert.equal(new Set(D.missions.map(m=>m.flag)).size,63);
  assert.equal(new Set(D.missions.map(m=>m.title)).size,63,'each task presents its own question');
  for(const level of D.levels){
    const ms=D.missions.filter(m=>m.level===level.id);
    assert.equal(ms.length,21);
    assert.deepEqual(level.chapters.map(c=>c.id),['read','find','connect','evidence','respond','graduate']);
    for(const ch of level.chapters)assert.equal(ms.filter(m=>m.chapter===ch.id).length,ch.id==='graduate'?1:4);
    const capstone=ms.find(m=>m.kind==='investigation');
    assert.equal(capstone.steps.length,4);
    assert.deepEqual(capstone.steps.map(s=>s.kind),['rows','evidence','choice','report']);
    assert.ok(new Set(ms.map(m=>m.kind)).size>=7,'course has varied hands-on operations');
  }
});

test('every task supplies teaching, an example, staged help, and reachable source evidence',()=>{
  const known=new Set(['token','text','filter','rows','order','choice','evidence','report']);
  for(const m of D.missions){
    for(const key of ['title','skill','brief','sourceLabel','flag'])assert.equal(typeof m[key],'string',m.id+' '+key);
    assert.ok(m.learn.length>=2,m.id+' teaches before asking');
    assert.ok(m.example?.title&&m.example?.text,m.id+' has a worked example');
    assert.ok(m.bridge?.tool&&m.bridge?.how,m.id+' connects to SOCroom');
    for(const s of m.steps||[m]){
      assert.ok(known.has(s.kind),m.id+' supported interaction');
      assert.ok(s.task&&s.solution&&s.answerExplanation,m.id+' complete explanation');
      assert.equal(s.hints.length,3,m.id+' three progressive hints');
      assert.ok(s.hints.every(h=>typeof h==='string'&&h.length>4));
      assert.ok(s.rows.length>0,m.id+' has sources');
      const ids=s.rows.map(r=>r.id);
      assert.equal(new Set(ids).size,ids.length,m.id+' distinct source IDs');
      assert.ok(s.rows.every(r=>r.raw||r.body),m.id+' all sources visible');
      if(s.kind==='filter'){
        assert.ok(s.task.includes(s.answer.query),m.id+' supplies a literal search example or required query');
        for(const id of s.answer.rowIds){
          const r=s.rows.find(r=>r.id===id);
          assert.ok(r,m.id+' known answer');
          assert.ok(normalized([r.raw,r.event,r.body,r.title,r.note].join(' ')).includes(normalized(s.answer.query)),m.id+' correct evidence reachable through search');
        }
      }
      if(s.kind==='order'){
        assert.deepEqual([...s.answer.rowIds].sort(),[...ids].sort(),m.id+' every row ordered once');
        assert.notDeepEqual(s.answer.rowIds,ids,m.id+' learner must reorder');
      }
      if(s.kind==='token'){
        const raw=s.rows.map(r=>r.raw||r.body).join(' ');
        assert.ok(s.tokens.some(t=>t.id===s.answer.tokenId),m.id+' valid token answer');
        for(const t of s.tokens)assert.ok(raw.includes(t.label),m.id+' token is a literal part of the source: '+t.label);
      }
      if(['rows','evidence'].includes(s.kind))assert.ok(s.answer.rowIds.every(id=>ids.includes(id)),m.id+' selected evidence exists');
      if(s.kind==='choice')assert.ok(s.choices.some(c=>c.id===s.answer.choiceId),m.id+' choice exists');
      if(s.kind==='report')for(const group of ['fact','limit','next'])assert.ok(s.choices.some(c=>c.group===group&&c.id===s.answer.parts[group]),m.id+' report part exists');
    }
  }
});

test('quantitative answers agree with actual log timestamps, scope, and deduplicated units',()=>{
  const get=id=>D.missions.find(m=>m.id===id);
  const value=(raw,key)=>raw.match(new RegExp('(?:^|\\s)'+key+'=([^\\s]+)'))?.[1];
  const mfa=get('m-f3');
  const attempts=new Set(mfa.rows.filter(r=>value(r.raw,'result')==='denied').map(r=>value(r.raw,'attempt')));
  assert.equal(attempts.size,3);
  assert.ok(mfa.answer.values.includes(String(attempts.size)));
  const objects=get('a-f3');
  const distinct=new Set(objects.rows.filter(r=>value(r.raw,'event')==='share_created'&&value(r.raw,'result')==='success').map(r=>value(r.raw,'object_id')));
  assert.equal(distinct.size,3);
  assert.ok(objects.answer.values.includes(String(distinct.size)));
  const clock=get('a-r1'),utc=new Date(clock.rows[0].raw.split(' ')[0]).toISOString().replace('.000Z','Z');
  assert.equal(utc,'2026-10-21T15:08:30Z');
  assert.ok(clock.answer.values.includes(utc));
  const windowed=get('a-f4'),start=Date.parse('2026-10-22T10:00:00Z'),end=Date.parse('2026-10-22T10:10:00Z');
  const scoped=windowed.rows.filter(r=>{const timestamp=Date.parse(r.raw.split(' ')[0]);return timestamp>=start&&timestamp<end&&value(r.raw,'event')==='share_created';}).map(r=>r.id);
  assert.deepEqual([...windowed.answer.rowIds].sort(),scoped.sort());
  const chronology=get('m-c1');
  assert.deepEqual(chronology.answer.rowIds,[...chronology.rows].sort((a,b)=>Date.parse(a.raw.split(' ')[0])-Date.parse(b.raw.split(' ')[0])).map(r=>r.id));
});

test('chapter and investigation labels leave numbering to the UI',()=>{
  for(const level of D.levels)for(const chapter of level.chapters){
    assert.doesNotMatch(chapter.title,/^\d+[\s./]/,level.id+' '+chapter.id);
  }
  for(const mission of D.missions)for(const step of mission.steps||[]){
    assert.doesNotMatch(step.title,/^\d+[\s./]/,step.id);
  }
});

test('flags identify intermediate and advanced courses and count answers use one canonical value',()=>{
  for(const mission of D.missions){
    if(mission.level==='intermediate')assert.match(mission.flag,/^EASY\{MID_/);
    if(mission.level==='advanced')assert.match(mission.flag,/^EASY\{ADV_/);
    if(mission.kind==='text'){
      assert.equal(new Set(mission.answer.values.map(normalized)).size,mission.answer.values.length,mission.id+' has no NFKC-equivalent aliases');
    }
  }
  for(const id of ['f4','m-f3','a-f3']){
    const answer=D.missions.find(m=>m.id===id).answer;
    assert.equal(answer.numericCount,true,id+' uses uniform count grading');
    assert.deepEqual(answer.values,['3']);
  }
});

test('source records contain displayed fields and investigation sources live in stages',()=>{
  const displayed=new Set(['id','raw','body','title','sourceType','event','note']);
  for(const mission of D.missions){
    if(mission.kind==='investigation')assert.deepEqual(mission.rows,[],mission.id+' has no unused top-level source copy');
    for(const step of mission.steps||[mission])for(const row of step.rows){
      for(const key of Object.keys(row))assert.ok(displayed.has(key),mission.id+' unused source field '+key);
    }
  }
});

test('selection IDs are unique within each interaction and reports declare all three groups',()=>{
  for(const mission of D.missions)for(const step of mission.steps||[mission]){
    for(const key of ['tokens','choices'])if(step[key]){
      const ids=step[key].map(item=>item.id);
      assert.equal(new Set(ids).size,ids.length,mission.id+' '+key+' unique IDs');
    }
    if(step.kind==='report'){
      assert.deepEqual([...new Set(step.choices.map(choice=>choice.group))].sort(),['fact','limit','next']);
      for(const group of ['fact','limit','next'])assert.ok(step.choices.filter(choice=>choice.group===group).length>=2,mission.id+' '+group+' offers a meaningful choice');
    }
  }
});

test('beginner searches teach evidence-preserving queries and UTC scope excludes advanced exercises',()=>{
  for(const id of ['f1','f2'])assert.equal(D.missions.find(m=>m.id===id).searchMode,'evidence');
  const timestampLesson=D.missions.find(m=>m.id==='r1').learn.join('\n');
  assert.match(timestampLesson,/初級・中級では/);
  assert.match(timestampLesson,/T は日付と時刻の区切り/);
  assert.doesNotMatch(timestampLesson,/この教材ではすべて UTC/);
  const meaning=D.glossary.find(item=>item.term==='UTC').meaning;
  assert.match(meaning,/初級・中級では/);
  assert.match(meaning,/上級では時差/);
});
