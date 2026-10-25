'use strict';
const fs=require('node:fs'),path=require('node:path');
let html=fs.readFileSync(path.join(__dirname,'src/ui.html'),'utf8');
for(const [key,file] of Object.entries({CSS:'style.css',DATA:'data.js',TRANSLATIONS:'translations.js',I18N:'i18n.js',ENGINE:'engine.js',APP:'app.js'})){
  const marker=`/*__${key}__*/`;
  if(html.split(marker).length!==2)throw new Error('Invalid template marker: '+key);
  const source=fs.readFileSync(path.join(__dirname,'src',file),'utf8');
  html=html.replace(marker,()=>file.endsWith('.js')?source.replace(/<\/script/gi,'<\\/script'):source);
}
const license=fs.readFileSync(path.join(__dirname,'LICENSE'),'utf8');
html=html.replace('<!doctype html>','<!doctype html>\n<!--\n'+license+'\n-->');
const target=path.resolve(process.argv[2]||path.join(__dirname,'socroom-easy.html'));
fs.mkdirSync(path.dirname(target),{recursive:true});fs.writeFileSync(target,html);
console.log(`Built ${target} (${Math.round(Buffer.byteLength(html)/1024)} KiB)`);
