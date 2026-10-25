const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const { execFileSync } = require('node:child_process');

const source = fs.readFileSync(path.join(__dirname, '../src/engine.js'), 'utf8');
const clone = value => JSON.parse(JSON.stringify(value));
const common = { hints: ['項目名を見る', '対象を比較する', '課題文を読み直す'], solution: '解答を説明', answerExplanation: '根拠を確認できました。' };
const reportChoices = [
  { id: 'fact-right', group: 'fact', feedback: '事実の説明' }, { id: 'fact-wrong', group: 'fact', feedback: '事実と推測を分ける' },
  { id: 'limit-right', group: 'limit', feedback: '未確認の説明' }, { id: 'limit-wrong', group: 'limit', feedback: '未確認を断定しない' },
  { id: 'next-right', group: 'next', feedback: '次の確認の説明' }, { id: 'next-wrong', group: 'next', feedback: '根拠に合う確認を選ぶ' }
];
const definitions = [
  { id: 'token', kind: 'token', tokens: [{ id: 'time' }, { id: 'result' }], rows: [{ id: 't-log' }], answer: { tokenId: 'result' } },
  { id: 'text', kind: 'text', rows: [{ id: 'x-log' }], answer: { values: ['client-02'] } },
  { id: 'rows', kind: 'rows', rows: [{ id: 'row-a' }, { id: 'row-b' }, { id: 'row-c' }], answer: { rowIds: ['row-a', 'row-c'] } },
  { id: 'filter', kind: 'filter', rows: [{ id: 'filter-a' }, { id: 'filter-b' }], answer: { query: 'login_failed', rowIds: ['filter-a'] } },
  { id: 'order', kind: 'order', rows: [{ id: 'later' }, { id: 'first' }, { id: 'middle' }], answer: { rowIds: ['first', 'middle', 'later'] } },
  { id: 'choice', kind: 'choice', rows: [], choices: [{ id: 'legitimate', feedback: '成功だけでは本人か判断できません。' }, { id: 'unknown', feedback: '本人の確認が必要です。' }], answer: { choiceId: 'unknown' } },
  { id: 'evidence', kind: 'evidence', rows: [{ id: 'document' }, { id: 'log' }, { id: 'noise' }], answer: { rowIds: ['document', 'log'] } },
  { id: 'report', kind: 'report', rows: [], choices: reportChoices, answer: { parts: { fact: 'fact-right', limit: 'limit-right', next: 'next-right' } } },
  { id: 'graduate', kind: 'investigation', steps: [
    { id: 'g-observe', kind: 'rows', rows: [{ id: 'g-fail' }, { id: 'g-other' }], answer: { rowIds: ['g-fail'] } },
    { id: 'g-prove', kind: 'evidence', rows: [{ id: 'g-log' }, { id: 'g-reply' }], answer: { rowIds: ['g-log', 'g-reply'] } },
    { id: 'g-decide', kind: 'choice', rows: [], choices: [{ id: 'g-attack' }, { id: 'g-unknown' }], answer: { choiceId: 'g-unknown' } },
    { id: 'g-report', kind: 'report', rows: [], choices: reportChoices, answer: { parts: { fact: 'fact-right', limit: 'limit-right', next: 'next-right' } } }
  ].map(step => ({ ...common, ...step })) }
].map(mission => ({ ...common, ...mission }));
function harness(customMissions = definitions) {
  const sandbox = { EASY_DATA: { version: 'socroom-easy-2', missions: clone(customMissions) }, module: { exports: {} } };
  vm.runInNewContext(source, sandbox, { filename: 'engine.js' });
  const engine = sandbox.module.exports;
  return { E: engine, p: engine.createProgress() };
}
function inputFor(step) {
  switch (step.kind) {
    case 'token': return { tokenId: step.answer.tokenId };
    case 'text': return { text: step.answer.values[0] };
    case 'rows': case 'evidence': return { rowIds: step.answer.rowIds.slice() };
    case 'filter': return { query: step.answer.query, rowIds: step.answer.rowIds.slice() };
    case 'order': return { orderIds: step.answer.rowIds.slice() };
    case 'choice': return { choiceId: step.answer.choiceId };
    case 'report': return { parts: { ...step.answer.parts } };
  }
}
function solve(E, p, id) {
  const mission = E.getMission(id);
  const count = mission.kind === 'investigation' ? mission.steps.length : 1;
  for (let stage = 0; stage < count; stage++) {
    E.setInput(p, id, inputFor(E.currentStep(p, id)));
    assert.equal(E.submit(p, id).passed, true);
    if (stage < count - 1) E.advanceStep(p, id);
  }
}
function unlock(E, p, id) {
  for (const mission of definitions) {
    if (mission.id === id) break;
    solve(E, p, mission.id);
  }
  E.openMission(p, id);
}

test('new learners have one unlocked mission, empty progress, and cannot answer later missions', () => {
  const { E, p } = harness();
  assert.equal(p.currentId, 'token');
  assert.equal(E.stats(p).points, 0);
  assert.equal(E.isUnlocked(p, 'token'), true);
  assert.equal(E.isUnlocked(p, 'text'), false);
  for (const action of [() => E.openMission(p, 'text'), () => E.submit(p, 'text'), () => E.setInput(p, 'text', { text: 'client-02' }), () => E.revealHint(p, 'text'), () => E.retry(p, 'text')]) assert.throws(action, /先に/);
  assert.throws(() => E.getMission('__proto__'), /存在しない/);
});

test('token selection checks the requested field and awards a flag only once', () => {
  const { E, p } = harness();
  E.setInput(p, 'token', { tokenId: 'time' });
  assert.equal(E.submit(p).passed, false);
  assert.equal(E.stats(p).completed, 0);
  E.setInput(p, 'token', { tokenId: 'result' });
  assert.equal(E.submit(p).passed, true);
  E.submit(p);
  assert.equal(E.stats(p).points, 100);
  assert.equal(E.isUnlocked(p, 'text'), true);
  assert.equal(p.records.token.attempts, 3);
});

test('text accepts surrounding whitespace and declared case handling but not unrelated values', () => {
  const { E, p } = harness(); unlock(E, p, 'text');
  E.setInput(p, 'text', { text: 'client-03' }); assert.equal(E.submit(p).passed, false);
  E.setInput(p, 'text', { text: ' CLIENT-02  ' }); assert.equal(E.submit(p).passed, true);
  const strict = harness([{ ...definitions[1], answer: { values: ['CaseSensitive'], caseSensitive: true } }]);
  strict.E.setInput(strict.p, 'text', { text: 'casesensitive' }); assert.equal(strict.E.submit(strict.p).passed, false);
  strict.E.setInput(strict.p, 'text', { text: 'CaseSensitive' }); assert.equal(strict.E.submit(strict.p).passed, true);
});

test('row selection is an exact set: missing and extra evidence both fail', () => {
  const { E, p } = harness(); unlock(E, p, 'rows');
  E.setInput(p, 'rows', { rowIds: ['row-a'] }); assert.equal(E.submit(p).passed, false);
  E.setInput(p, 'rows', { rowIds: ['row-a', 'row-b', 'row-c'] }); assert.equal(E.submit(p).passed, false);
  E.setInput(p, 'rows', { rowIds: ['row-c', 'row-a'] }); assert.equal(E.submit(p).passed, true);
});

test('filter exercises require both using the search query and selecting matching evidence', () => {
  const { E, p } = harness(); unlock(E, p, 'filter');
  E.setInput(p, 'filter', { query: '', rowIds: ['filter-a'] });
  const noSearch = E.submit(p); assert.equal(noSearch.passed, false); assert.match(noSearch.message, /検索欄/);
  E.setInput(p, 'filter', { query: 'login_failed', rowIds: [] }); assert.equal(E.submit(p).passed, false);
  E.setInput(p, 'filter', { query: ' LOGIN_FAILED ', rowIds: ['filter-a'] }); assert.equal(E.submit(p).passed, true);
});

test('chronology validates full order rather than just selecting the correct set', () => {
  const { E, p } = harness(); unlock(E, p, 'order');
  assert.equal(E.submit(p).passed, false);
  E.setInput(p, 'order', { orderIds: ['first', 'later', 'middle'] }); assert.equal(E.submit(p).passed, false);
  assert.throws(() => E.setInput(p, 'order', { orderIds: ['first', 'later'] }), /すべて/);
  E.setInput(p, 'order', { orderIds: ['first', 'middle', 'later'] }); assert.equal(E.submit(p).passed, true);
});

test('choice feedback teaches why successful authentication cannot prove legitimacy', () => {
  const { E, p } = harness(); unlock(E, p, 'choice');
  E.setInput(p, 'choice', { choiceId: 'legitimate' });
  const result = E.submit(p); assert.equal(result.passed, false); assert.match(result.message, /本人か判断できません/);
  E.setInput(p, 'choice', { choiceId: 'unknown' }); assert.equal(E.submit(p).passed, true);
});

test('evidence tasks need all independent sources without unrelated material', () => {
  const { E, p } = harness(); unlock(E, p, 'evidence');
  E.setInput(p, 'evidence', { rowIds: ['log'] }); assert.equal(E.submit(p).passed, false);
  E.setInput(p, 'evidence', { rowIds: ['document', 'log', 'noise'] }); assert.equal(E.submit(p).passed, false);
  E.setInput(p, 'evidence', { rowIds: ['log', 'document'] }); assert.equal(E.submit(p).passed, true);
});

test('reports distinguish fact, uncertainty, and next action, validating each choice group', () => {
  const { E, p } = harness(); unlock(E, p, 'report');
  assert.throws(() => E.setInput(p, 'report', { parts: { fact: 'next-right' } }), /存在しない/);
  E.setInput(p, 'report', { parts: { fact: 'fact-right', limit: 'limit-wrong', next: 'next-right' } });
  const result = E.submit(p); assert.equal(result.passed, false); assert.match(result.message, /未確認を断定しない/);
  E.setInput(p, 'report', { parts: { limit: 'limit-right' } }); assert.equal(E.submit(p).passed, true);
});

test('investigation needs all four actual submissions before its flag is earned', () => {
  const { E, p } = harness(); unlock(E, p, 'graduate');
  assert.throws(() => E.advanceStep(p), /クリア/);
  const base = E.stats(p).points;
  for (let stage = 0; stage < 4; stage++) {
    E.setInput(p, 'graduate', inputFor(E.currentStep(p)));
    assert.equal(E.submit(p).passed, true);
    assert.equal(p.records.graduate.completed, stage === 3);
    assert.equal(E.stats(p).points, base + (stage === 3 ? 100 : 0));
    if (stage < 3) E.advanceStep(p);
  }
  assert.equal(E.stats(p).ready, true);
  assert.equal(E.stats(p).nextId, null);
  assert.throws(() => E.advanceStep(p), /ありません/);
});

test('editing a passed stage removes its current pass until resubmitted', () => {
  const { E, p } = harness(); unlock(E, p, 'graduate');
  E.setInput(p, 'graduate', { rowIds: ['g-fail'] }); E.submit(p);
  E.setInput(p, 'graduate', { rowIds: ['g-other'] });
  assert.equal(p.records.graduate.feedback, null);
  assert.throws(() => E.advanceStep(p), /クリア/);
  assert.equal(E.submit(p).passed, false);
  E.setInput(p, 'graduate', { rowIds: ['g-fail'] }); E.submit(p); E.advanceStep(p);
  assert.equal(p.records.graduate.stage, 1);
});

test('hints and solutions never solve a mission; review keeps help provenance and points', () => {
  const { E, p } = harness();
  for (let index = 0; index < 8; index++) E.revealHint(p);
  E.revealSolution(p); E.revealSolution(p);
  assert.equal(p.records.token.hints, 3);
  assert.equal(p.records.token.completed, false);
  E.retry(p); assert.equal(p.records.token.hints, 3); assert.equal(p.records.token.revealed, true);
  solve(E, p, 'token'); E.retry(p);
  assert.equal(E.stats(p).points, 100); assert.equal(E.stats(p).assisted, 1); assert.equal(E.stats(p).independent, 0);
  E.setInput(p, 'token', { tokenId: 'time' }); assert.equal(E.submit(p).passed, false);
  assert.equal(E.stats(p).points, 100);
  const restored = E.hydrate(E.exportProgress(p));
  assert.equal(restored.records.token.completed, true); assert.equal(restored.records.token.feedback.passed, false);
  assert.equal(E.stats(restored).assisted, 1);
});

test('investigation hints are counted per stage and retained when restarting', () => {
  const { E, p } = harness(); unlock(E, p, 'graduate');
  E.revealHint(p); E.setInput(p, 'graduate', inputFor(E.currentStep(p))); E.submit(p); E.advanceStep(p);
  E.revealHint(p); E.revealHint(p); E.revealSolution(p);
  assert.deepEqual(clone(p.records.graduate.hintCounts), [1, 2, 0, 0]);
  E.retry(p);
  assert.equal(p.records.graduate.hints, 3); assert.deepEqual(clone(p.records.graduate.revealedStages), [1]);
  assert.equal(p.records.graduate.stage, 0); assert.equal(p.records.graduate.solved.length, 1);
  const restored = E.hydrate(p);
  assert.equal(restored.records.graduate.assisted, true); assert.equal(restored.records.graduate.completed, false);
});

test('round trip preserves drafts, cleared flags, investigation stage, and every interaction type', () => {
  const { E, p } = harness(); unlock(E, p, 'graduate');
  E.setInput(p, 'graduate', inputFor(E.currentStep(p))); E.submit(p); E.advanceStep(p);
  E.setInput(p, 'graduate', { rowIds: ['g-log'] }); E.submit(p);
  const wrapped = E.exportProgress(p);
  wrapped.progress.records.token.input.tokenId = 'time';
  assert.equal(p.records.token.input.tokenId, 'result', 'export snapshot is detached');
  const restored = E.hydrate(E.exportProgress(p));
  assert.deepEqual(clone(restored), clone(p));
  assert.equal(E.stats(restored).completed, 8);
});

test('an unverified completed boolean cannot unlock subsequent lessons', () => {
  const { E, p } = harness();
  p.records.token.completed = true; p.currentId = 'text'; p.currentByLevel.beginner = 'text';
  const restored = E.hydrate(p);
  assert.equal(restored.records.token.completed, false);
  assert.equal(restored.currentId, 'token');
  assert.equal(E.isUnlocked(restored, 'text'), false);
});

test('tampered successful submissions and skipped investigation steps are rejected atomically', () => {
  const { E, p } = harness(); unlock(E, p, 'graduate');
  const tampered = clone(p); tampered.records.token.solved[0].input.tokenId = 'time';
  assert.throws(() => E.hydrate(tampered), /条件と一致しません/);
  assert.equal(E.stats(p).completed, 8);
  const skipped = clone(p); skipped.records.graduate.stage = 2;
  assert.throws(() => E.hydrate(skipped), /飛ばした/);
  const wrongStage = clone(p); wrongStage.records.graduate.stage = 4;
  assert.throws(() => E.hydrate(wrongStage), /ステップ/);
  const unknown = clone(p); unknown.records.extra = clone(p.records.token);
  assert.throws(() => E.hydrate(unknown), /一覧/);
});

test('import recomputes hint and reveal aliases and cannot hide retained help evidence', () => {
  const { E, p } = harness(); E.revealHint(p); E.revealSolution(p); solve(E, p, 'token');
  const edited = clone(p); edited.records.token.hints = 0; edited.records.token.revealed = false; edited.records.token.assisted = false;
  const restored = E.hydrate(edited);
  assert.equal(restored.records.token.hints, 1); assert.equal(restored.records.token.revealed, true); assert.equal(E.stats(restored).assisted, 1);
  edited.records.token.hintCounts = [0]; edited.records.token.revealedStages = []; edited.records.token.solved[0].assisted = false; edited.records.token.stageResults[0].assisted = false;
  const fromHistory = E.hydrate(edited);
  assert.equal(fromHistory.records.token.assisted, true); assert.equal(fromHistory.records.token.hints, 1); assert.equal(fromHistory.records.token.revealed, true);
});

test('bounded inputs reject excessive strings, duplicate rows, unknown IDs, and invalid report values', () => {
  const { E, p } = harness(); unlock(E, p, 'report');
  assert.throws(() => E.setInput(p, 'text', { text: 'x'.repeat(241) }), /長すぎる/);
  assert.throws(() => E.setInput(p, 'filter', { query: 'x'.repeat(161) }), /長すぎる/);
  assert.throws(() => E.setInput(p, 'rows', { rowIds: ['row-a', 'row-a'] }), /形式/);
  assert.throws(() => E.setInput(p, 'rows', { rowIds: ['intruder'] }), /存在しない/);
  assert.throws(() => E.setInput(p, 'token', { tokenId: 'intruder' }), /存在しない/);
  assert.throws(() => E.setInput(p, 'report', { parts: null }), /形式/);
  assert.throws(() => E.setInput(p, 'report', { parts: { fact: false } }), /存在しない/);
  assert.throws(() => E.setInput(p, 'text', { executable: 'anything' }), /使わない/);
});

test('save importer rejects foreign formats, excessive histories, invalid counts and stages', () => {
  const { E, p } = harness();
  assert.throws(() => E.hydrate({ format: 'socroom-save', version: 1, progress: p }), /SOCroom-easy/);
  assert.throws(() => E.hydrate({ ...clone(p), version: 'other' }), /バージョン/);
  const cases = [
    raw => { raw.records.token.attempts = -1; },
    raw => { raw.records.token.hintCounts = [99]; },
    raw => { raw.records.token.revealedStages = [0, 0]; },
    raw => { raw.records.token.solved = [null]; },
    raw => { raw.records.token.solved = new Array(1); },
    raw => { raw.history = Array.from({ length: 101 }, () => ({ type: 'retry', id: 'token', stage: 0 })); },
    raw => { raw.history = [{ type: 'execute', id: 'token', stage: 0 }]; }
  ];
  for (const edit of cases) { const raw = clone(p); edit(raw); assert.throws(() => E.hydrate(raw)); }
});

test('history remains bounded during repeated practice and completed points cannot be duplicated', () => {
  const { E, p } = harness(); solve(E, p, 'token');
  for (let index = 0; index < 130; index++) { E.retry(p); solve(E, p, 'token'); }
  assert.equal(p.history.length, 100);
  assert.equal(E.stats(p).points, 100);
  const restored = E.hydrate(p);
  assert.equal(restored.history.length, 100); assert.equal(E.stats(restored).points, 100);
});

test('all missions can be completed, retried, exported and resumed without losing earned flags', () => {
  const { E, p } = harness();
  for (const mission of definitions) solve(E, p, mission.id);
  E.retry(p, 'graduate');
  const restored = E.hydrate(E.exportProgress(p));
  assert.equal(E.stats(restored).ready, true); assert.equal(E.stats(restored).points, 900);
  assert.equal(restored.records.graduate.stage, 0); assert.equal(restored.records.graduate.stageResults.length, 0);
  assert.equal(restored.records.graduate.completed, true);
});

function productionHarness() {
  const sandbox = { module: { exports: {} } };
  vm.runInNewContext(fs.readFileSync(path.join(__dirname, '../src/data.js'), 'utf8'), sandbox, { filename: 'data.js' });
  vm.runInNewContext(source, sandbox, { filename: 'engine.js' });
  return { E: sandbox.EasyEngine, D: sandbox.EASY_DATA, p: sandbox.EasyEngine.createProgress() };
}

test('production engine loads independently through CommonJS with all 63 missions', () => {
  const enginePath = path.resolve(__dirname, '../src/engine.js');
  const output = execFileSync(process.execPath, ['-e', `const E=require(${JSON.stringify(enginePath)});process.stdout.write(JSON.stringify(E.stats(E.createProgress())));`], { encoding: 'utf8' });
  const result = JSON.parse(output);
  assert.equal(result.total, 63); assert.equal(result.nextId, 'r1'); assert.equal(result.ready, false);
});

test('all production missions unlock in sequence and survive save/resume after every submitted stage', () => {
  const production = productionHarness(); const { E, D } = production; let p = production.p;
  assert.equal(D.missions.length, 63);
  for (let index = 0; index < D.missions.length; index++) {
    const mission = D.missions[index];
    assert.equal(E.isUnlocked(p, mission.id), true, `${mission.id} is unlocked`);
    for (const later of D.missions.slice(index + 1).filter(other => other.level === mission.level)) assert.equal(E.isUnlocked(p, later.id), false, `${later.id} stays locked within ${mission.level}`);
    E.openMission(p, mission.id);
    if (mission.id === 'f1') E.revealHint(p);
    const count = mission.kind === 'investigation' ? mission.steps.length : 1;
    for (let stage = 0; stage < count; stage++) {
      const step = E.currentStep(p);
      assert.equal(E.submit(p).passed, false, `${mission.id}/${stage} cannot pass on an empty or initial draft`);
      E.setInput(p, mission.id, inputFor(step));
      assert.equal(E.submit(p).passed, true, `${mission.id}/${stage} accepts its supported answer`);
      assert.equal(p.records[mission.id].completed, stage === count - 1);
      p = E.hydrate(E.exportProgress(p));
      assert.equal(p.currentId, mission.id);
      assert.equal(p.records[mission.id].stage, stage);
      assert.equal(p.records[mission.id].feedback.passed, true);
      assert.equal(E.stats(p).completed, index + (stage === count - 1 ? 1 : 0));
      if (stage < count - 1) E.advanceStep(p);
    }
  }
  assert.equal(E.stats(p).points, 6300);
  assert.equal(E.stats(p).ready, true);
  assert.equal(E.stats(p).assisted, 1);
  assert.equal(E.stats(p).independent, 62);
  for (const mission of D.missions) {
    E.retry(p, mission.id);
    p = E.hydrate(E.exportProgress(p));
    assert.equal(E.stats(p).points, 6300, `reviewing ${mission.id} keeps all earned flags`);
    assert.equal(p.records[mission.id].stage, 0);
    assert.equal(p.records[mission.id].completed, true);
  }
  assert.equal(p.records.f1.hints, 1);
  assert.equal(p.records.f1.assisted, true);
  for (const level of D.levels) {
    assert.equal(E.stats(p, level.id).completed, 21);
    assert.equal(E.stats(p, level.id).points, 2100);
    assert.equal(E.stats(p, level.id).ready, true);
    assert.equal(E.stats(p, level.id).nextId, null);
    const graduation = D.missions.find(mission => mission.level === level.id && mission.kind === 'investigation');
    assert.equal(p.records[graduation.id].solved.length, 4);
  }
});

test('production filter proofs cannot be restored from a selected row without its actual search', () => {
  const { E, D, p } = productionHarness();
  for (const mission of D.missions) {
    solve(E, p, mission.id);
    if (mission.id === 'f1') break;
  }
  const changed = E.exportProgress(p);
  changed.progress.records.f1.solved[0].input.query = '';
  assert.throws(() => E.hydrate(changed), /条件と一致しません/);
  assert.equal(E.stats(p).completed, 5);
});

test('production evidence cards with log bodies are graded by their supported source IDs', () => {
  const { D } = productionHarness();
  const targets = D.missions.flatMap(mission => mission.kind === 'investigation' ? mission.steps : [mission])
    .filter(step => step.kind === 'evidence' && step.rows.some(row => row.sourceType === 'log' && row.body && !row.raw));
  assert.ok(targets.length > 0, 'production lessons include readable log cards stored in body');
  for (const step of targets) {
    const { E, p } = harness([step]);
    E.setInput(p, step.id, inputFor(step));
    assert.equal(E.submit(p).passed, true);
    assert.equal(E.hydrate(E.exportProgress(p)).records[step.id].completed, true);
  }
});


function threeLevelHarness() {
  return harness(['beginner', 'intermediate', 'advanced'].flatMap((level, index) => definitions.map(mission => ({
    ...clone(mission), id: `${index + 1}-${mission.id}`, level
  }))));
}

test('each level starts independently with one unlocked lesson and its own statistics', () => {
  const { E, p } = threeLevelHarness();
  assert.equal(p.version, 'socroom-easy-2');
  assert.equal(p.currentLevel, 'beginner');
  assert.deepEqual(clone(p.currentByLevel), { beginner: '1-token', intermediate: '2-token', advanced: '3-token' });
  assert.equal(E.stats(p).total, 27);
  for (const [index, level] of ['beginner', 'intermediate', 'advanced'].entries()) {
    assert.equal(E.stats(p, level).total, 9);
    assert.equal(E.stats(p, level).nextId, `${index + 1}-token`);
    assert.equal(E.isUnlocked(p, `${index + 1}-token`), true);
    assert.equal(E.isUnlocked(p, `${index + 1}-text`), false);
  }
  E.selectLevel(p, 'advanced');
  solve(E, p, '3-token');
  assert.equal(E.stats(p).points, 100);
  assert.equal(E.stats(p, 'advanced').points, 100);
  assert.equal(E.stats(p, 'beginner').points, 0);
  assert.equal(E.stats(p).nextId, '3-text');
  assert.equal(E.isUnlocked(p, '1-text'), false);
  assert.equal(E.isUnlocked(p, '2-text'), false);
  assert.equal(E.isUnlocked(p, '3-text'), true);
  assert.throws(() => E.selectLevel(p, 'intruder'), /存在しない難易度/);
  assert.throws(() => E.stats(p, 'intruder'), /存在しない難易度/);
});

test('level switching and direct mission opening retain independent cursors and drafts', () => {
  const { E, p } = threeLevelHarness();
  E.setInput(p, '1-token', { tokenId: 'time' });
  E.selectLevel(p, 'intermediate');
  solve(E, p, '2-token');
  E.openMission(p, '2-text');
  E.setInput(p, '2-text', { text: 'client-' });
  E.openMission(p, '3-token');
  E.revealHint(p); E.setInput(p, '3-token', { tokenId: 'result' });
  assert.equal(p.currentLevel, 'advanced');
  E.selectLevel(p, 'beginner');
  assert.equal(p.currentId, '1-token');
  assert.equal(p.records['1-token'].input.tokenId, 'time');
  E.selectLevel(p, 'intermediate');
  assert.equal(p.currentId, '2-text');
  assert.equal(p.records['2-text'].input.text, 'client-');
  const restored = E.hydrate(E.exportProgress(p));
  assert.deepEqual(clone(restored), clone(p));
  E.selectLevel(restored, 'advanced');
  assert.equal(restored.currentId, '3-token');
  assert.equal(restored.records['3-token'].input.tokenId, 'result');
  assert.equal(restored.records['3-token'].hints, 1);
});

test('completing advanced first neither completes other levels nor forces their progression', () => {
  const { E, p } = threeLevelHarness();
  for (const mission of definitions) { E.openMission(p, `3-${mission.id}`); solve(E, p, `3-${mission.id}`); }
  assert.equal(E.stats(p, 'advanced').ready, true);
  assert.equal(E.stats(p, 'advanced').completed, 9);
  assert.equal(E.stats(p).ready, false);
  assert.equal(E.stats(p).nextId, null);
  assert.equal(E.stats(p, 'beginner').nextId, '1-token');
  assert.equal(E.stats(p, 'intermediate').completed, 0);
  E.selectLevel(p, 'beginner');
  assert.equal(E.stats(p).nextId, '1-token');
  assert.equal(E.isUnlocked(p, '1-text'), false);
  assert.equal(E.hydrate(E.exportProgress(p)).records['3-graduate'].completed, true);
});

test('v2 import rejects contradictory or missing level cursors without changing existing progress', () => {
  const { E, p } = threeLevelHarness();
  const edits = [
    raw => { delete raw.currentLevel; },
    raw => { raw.currentLevel = 'unknown'; },
    raw => { delete raw.currentByLevel.intermediate; },
    raw => { raw.currentByLevel.other = '1-token'; },
    raw => { raw.currentByLevel.intermediate = '1-token'; },
    raw => { raw.currentByLevel.beginner = '1-text'; },
    raw => { raw.currentId = '3-token'; }
  ];
  for (const edit of edits) { const raw = clone(p); edit(raw); assert.throws(() => E.hydrate(raw)); }
  assert.equal(p.currentLevel, 'beginner');
  assert.equal(E.stats(p).completed, 0);
  assert.throws(() => E.hydrate({ format: 'socroom-easy-save', version: 1, progress: p }), /保存ファイル/);
  const rawLegacy = clone(p); rawLegacy.version = 'socroom-easy-1';
  assert.throws(() => E.hydrate({ format: 'socroom-easy-save', version: 2, progress: rawLegacy }), /保存ファイル/);
});

const legacyFixture = JSON.parse(fs.readFileSync(path.join(__dirname, 'fixtures/v1-graduation.json'), 'utf8'));

test('genuine v0.1 save migrates all beginner records, assistance and graduation drafts with 42 fresh lessons', () => {
  const { E, D } = productionHarness();
  const original = clone(legacyFixture);
  const restored = E.hydrate(original);
  assert.equal(restored.version, 'socroom-easy-2');
  assert.equal(restored.currentLevel, 'beginner');
  assert.equal(restored.currentId, 'g1');
  assert.deepEqual(clone(restored.currentByLevel), { beginner: 'g1', intermediate: 'm-r1', advanced: 'a-r1' });
  assert.equal(E.stats(restored).total, 63);
  assert.equal(E.stats(restored, 'beginner').completed, 20);
  assert.equal(E.stats(restored, 'beginner').points, 2000);
  assert.equal(E.stats(restored, 'beginner').hintsUsed, 4);
  assert.equal(E.stats(restored, 'beginner').revealed, 2);
  assert.equal(E.stats(restored, 'beginner').assisted, 3);
  assert.equal(restored.records.g1.stage, 2);
  assert.equal(restored.records.g1.stageResults.length, 2);
  assert.equal(restored.records.g1.solved.length, 2);
  assert.deepEqual(clone(restored.records.g1.input), { choiceId: 'g1-judge-approved' });
  for (const [id, oldRecord] of Object.entries(legacyFixture.progress.records)) assert.deepEqual(clone(restored.records[id]), oldRecord, `${id} survives unchanged`);
  assert.deepEqual(clone(restored.history), legacyFixture.progress.history);
  assert.deepEqual(original, legacyFixture, 'migration does not edit its source');
  for (const mission of D.missions.filter(mission => mission.level !== 'beginner')) {
    assert.equal(restored.records[mission.id].completed, false);
    assert.equal(restored.records[mission.id].attempts, 0);
    assert.equal(restored.records[mission.id].solved.length, 0);
  }
  for (const level of ['intermediate', 'advanced']) {
    assert.equal(E.stats(restored, level).completed, 0);
    assert.equal(E.stats(restored, level).total, 21);
    assert.equal(E.isUnlocked(restored, restored.currentByLevel[level]), true);
  }
  const rawRestored = E.hydrate(clone(legacyFixture.progress));
  assert.deepEqual(clone(rawRestored), clone(restored));
  const wrapped = E.exportProgress(restored);
  assert.equal(wrapped.version, 2);
  assert.deepEqual(clone(E.hydrate(wrapped)), clone(restored));
  assert.equal(E.submit(restored).passed, true);
  E.advanceStep(restored);
  E.setInput(restored, 'g1', inputFor(E.currentStep(restored)));
  assert.equal(E.submit(restored).completed, true);
  assert.equal(E.stats(restored, 'beginner').ready, true);
  assert.equal(E.stats(restored).ready, false);
  assert.equal(E.stats(restored).points, 2100);
});

test('legacy imports reject missing records, new-level contamination and unverified answers atomically', () => {
  const { E } = productionHarness();
  const edits = [
    raw => { delete raw.progress.records.r2; },
    raw => { raw.progress.records['m-r1'] = clone(raw.progress.records.r1); },
    raw => { raw.progress.records.r1.solved[0].input.tokenId = 'invalid'; },
    raw => { raw.progress.currentId = 'm-r1'; },
    raw => { raw.progress.history.push({ type: 'hint', id: 'm-r1', stage: 0 }); },
    raw => { raw.progress.records.g1.stage = 3; }
  ];
  for (const edit of edits) { const raw = clone(legacyFixture); edit(raw); assert.throws(() => E.hydrate(raw)); }
  const valid = E.hydrate(clone(legacyFixture));
  assert.equal(valid.records.g1.stage, 2);
  assert.equal(E.stats(valid, 'beginner').completed, 20);
});

test('switching away from a migrated graduation resumes the exact stage without affecting another level', () => {
  const { E } = productionHarness();
  const p = E.hydrate(clone(legacyFixture));
  const graduationBefore = clone(p.records.g1);
  E.selectLevel(p, 'intermediate');
  solve(E, p, 'm-r1');
  E.openMission(p, 'm-r2');
  E.setInput(p, 'm-r2', inputFor(E.currentStep(p)));
  E.revealHint(p);
  const middleBefore = clone(p.records['m-r2']);
  E.selectLevel(p, 'beginner');
  assert.equal(p.currentId, 'g1');
  assert.deepEqual(clone(p.records.g1), graduationBefore);
  assert.equal(E.stats(p, 'beginner').points, 2000);
  assert.equal(E.stats(p, 'intermediate').points, 100);
  assert.equal(E.stats(p).points, 2100);
  const restored = E.hydrate(E.exportProgress(p));
  E.selectLevel(restored, 'intermediate');
  assert.equal(restored.currentId, 'm-r2');
  assert.deepEqual(clone(restored.records['m-r2']), middleBefore);
  assert.deepEqual(clone(restored.records.g1), graduationBefore);
});
