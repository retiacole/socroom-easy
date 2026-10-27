'use strict';
const fs=require('node:fs'),path=require('node:path');
const read=name=>JSON.parse(fs.readFileSync(path.join(__dirname,'content',name+'.json'),'utf8'));
const a=read('foundations'),b=read('response'),medium=read('intermediate'),high=read('advanced');
const beginnerChapters=[...a.chapters.map(c=>({...c,title:c.title})),{id:'evidence',title:'根拠を集めて確かめる',subtitle:'端末の役割、作業の予定、担当者の回答を照合する。'},{id:'respond',title:'判断して、短く伝える',subtitle:'事実と推測を分け、次の対応と報告を考える。'},{id:'graduate',title:'小さな調査をやり遂げる',subtitle:'これまでの操作をつないで、1件の調査に挑戦。'}];
const levels=[
  {id:'beginner',title:'初級',tagline:'ログを読むところから',description:'時刻・アカウント・結果の読み取りから、検索、証拠選び、短い報告まで。',prerequisite:'ログを初めて読む人に',chapters:beginnerChapters},
  {id:'intermediate',title:'中級',tagline:'複数の記録を照合する',description:'HTTP・DNS・MFAなどを読み、共通のIDや条件で情報をつなぎ、判断の根拠を確かめます。',prerequisite:'初級の操作に慣れた人に',chapters:medium.chapters},
  {id:'advanced',title:'上級',tagline:'証拠の限界まで考える',description:'時差や記録の欠落・食い違いを扱い、どこまで分かったか、どこへ対応するかを判断します。',prerequisite:'中級の照合を練習した人に',chapters:high.chapters}
];
const deduplicated=new Map();
for(const entry of [...a.glossary,...b.glossary,...medium.glossary,...high.glossary])if(!deduplicated.has(entry.term))deduplicated.set(entry.term,entry);
const data={version:'socroom-easy-2',releaseVersion:require('./package.json').version,levels,glossary:[...deduplicated.values()],missions:[...[...a.missions,...b.missions].map(m=>({...m,level:'beginner'})),...medium.missions.map(m=>({...m,level:'intermediate'})),...high.missions.map(m=>({...m,level:'advanced'}))]};
if(data.missions.length!==63||new Set(data.missions.map(m=>m.id)).size!==63||new Set(data.missions.map(m=>m.flag)).size!==63)throw new Error('Expected 63 unique missions and flags');
for(const level of levels){const ms=data.missions.filter(m=>m.level===level.id);if(ms.length!==21||level.chapters.length!==6)throw new Error('Expected 21 missions and 6 chapters: '+level.id);for(const chapter of level.chapters)if(ms.filter(m=>m.chapter===chapter.id).length!==(chapter.id==='graduate'?1:4))throw new Error('Invalid chapter size: '+level.id+'/'+chapter.id);}
fs.writeFileSync(path.join(__dirname,'src/data.js'),'/* Fictional teaching data, bundled for offline use. */\nglobalThis.EASY_DATA = '+JSON.stringify(data,null,2)+';\nif (typeof module !== "undefined" && module.exports) module.exports = globalThis.EASY_DATA;\n');
console.log('Assembled '+data.missions.length+' missions / '+levels.length+' levels.');

// Exact Japanese source strings are the display catalog keys. Grading data is not rewritten.
const english={};
for(const file of fs.readdirSync(path.join(__dirname,'content')).filter(f=>/^en-.*\.json$/.test(f)).sort())Object.assign(english,read(file.slice(0,-5)));
const hasJapanese=/[\u3040-\u30ff\u3400-\u9fff]/u;
function validateTranslation(value,parts=[]){
  if(parts.includes('answer'))return;
  if(typeof value==='string'&&hasJapanese.test(value)){
    if(!Object.hasOwn(english,value)||!english[value].trim()||hasJapanese.test(english[value]))throw new Error('Missing English translation: '+parts.join('.'));
  }else if(Array.isArray(value))value.forEach((item,index)=>validateTranslation(item,[...parts,index]));
  else if(value&&typeof value==='object')Object.entries(value).forEach(([key,item])=>validateTranslation(item,[...parts,key]));
}
validateTranslation(data);
fs.writeFileSync(path.join(__dirname,'src/translations.js'),'/* English display catalog, bundled offline. */\nglobalThis.EASY_EN = '+JSON.stringify(english,null,2)+';\nif(typeof module!=="undefined"&&module.exports)module.exports=globalThis.EASY_EN;\n');
