'use strict';
// Parse source code rather than running UI paths: a newly added sentence must
// have an exact catalog entry even if the runtime substring fallback translates it.
const fs=require('node:fs'),path=require('node:path');
const acorn=require('acorn'),{JSDOM}=require('jsdom');
const root=path.join(__dirname,'..');
const japanese=/[\u3040-\u30ff\u3400-\u9fff]/u;
const slot='__SOCROOM_TRANSLATION_SLOT__';
function readCatalog(){return Object.assign({},...fs.readdirSync(path.join(root,'content')).filter(file=>/^en-.*\.json$/.test(file)).sort().map(file=>JSON.parse(fs.readFileSync(path.join(root,'content',file),'utf8'))));}
function validateSources(sources,catalog){
  const missing=[];
  const keys=new Set(Object.keys(catalog).filter(key=>typeof catalog[key]==='string'&&catalog[key].trim()&&!japanese.test(catalog[key])).map(key=>key.trim()));
  function check(text,location){for(const part of text.split(slot)){const value=part.trim();if(japanese.test(value)&&!keys.has(value))missing.push({location,text:value});}}
  function markup(text,location){
    if(!japanese.test(text))return;
    const fragment=JSDOM.fragment(text),document=fragment.ownerDocument;
    const walker=document.createTreeWalker(fragment,4);let node;
    while((node=walker.nextNode()))if(!node.parentElement?.closest('script,style,[data-language-name]'))check(node.nodeValue,location);
    for(const el of fragment.querySelectorAll('[aria-label],[title],[placeholder],[alt]'))for(const attr of ['aria-label','title','placeholder','alt'])if(el.hasAttribute(attr))check(el.getAttribute(attr),location+' ['+attr+']');
  }
  for(const [file,source] of Object.entries(sources)){
    if(file.endsWith('.html')){markup(source,file);continue;}
    const tree=acorn.parse(source,{ecmaVersion:'latest',sourceType:'script',locations:true});
    function visit(node){
      if(!node||typeof node!=='object')return;
      if(node.type==='Literal'&&typeof node.value==='string')markup(node.value,file+':'+node.loc.start.line);
      if(node.type==='TemplateLiteral')markup(node.quasis.map(q=>q.value.cooked??q.value.raw).join(slot),file+':'+node.loc.start.line);
      for(const [key,value] of Object.entries(node))if(!['loc','start','end','quasis'].includes(key)){if(Array.isArray(value))value.forEach(visit);else if(value&&typeof value==='object')visit(value);}
    }
    visit(tree);
  }
  return missing;
}
function validateCurriculum(value,catalog,parts=[]){
  if(parts.includes('answer'))return [];
  if(typeof value==='string'&&japanese.test(value))return Object.hasOwn(catalog,value)&&catalog[value].trim()&&!japanese.test(catalog[value])?[]:[{location:'data.'+parts.join('.'),text:value}];
  if(Array.isArray(value))return value.flatMap((item,index)=>validateCurriculum(item,catalog,[...parts,index]));
  if(value&&typeof value==='object')return Object.entries(value).flatMap(([key,item])=>validateCurriculum(item,catalog,[...parts,key]));
  return [];
}
function checkRepository(){const files=['src/app.js','src/engine.js','src/i18n.js','src/ui.html'],catalog=readCatalog();return [...validateCurriculum(require('../src/data.js'),catalog),...validateSources(Object.fromEntries(files.map(file=>[file,fs.readFileSync(path.join(root,file),'utf8')])),catalog)];}
if(require.main===module){const missing=checkRepository();if(missing.length){for(const item of missing)console.error(item.location+': '+JSON.stringify(item.text));process.exitCode=1;}else console.log('English coverage: curriculum, UI, accessibility attributes and engine messages are registered.');}
module.exports={validateSources,validateCurriculum,checkRepository};
