'use strict';
const test=require('node:test'),assert=require('node:assert/strict');
const D=require('../src/data.js'),EN=require('../src/translations.js');
const japanese=/[\u3040-\u30ff\u3400-\u9fff]/u;
test('English catalog covers every curriculum field while canonical answers and identifiers remain separate',()=>{
 let count=0;function walk(value,path=[]){
  if(path.includes('answer'))return;
  if(typeof value==='string'&&japanese.test(value)){assert.ok(Object.hasOwn(EN,value),'missing '+path.join('.'));assert.equal(japanese.test(EN[value]),false,'untranslated '+path.join('.'));assert.ok(EN[value].trim());count++;}
  else if(Array.isArray(value))value.forEach((v,i)=>walk(v,[...path,i]));
  else if(value&&typeof value==='object')Object.entries(value).forEach(([k,v])=>walk(v,[...path,k]));
 }walk(D);assert.ok(count>1800);assert.equal(D.missions.length,63);
});
