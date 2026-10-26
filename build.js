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
// A normal build also updates the GitHub Pages site. An explicit output path
// stays isolated, so release checks can build into a temporary directory.
if(!process.argv[2]){
  const docs=path.join(__dirname,'docs');
  fs.mkdirSync(docs,{recursive:true});
  fs.writeFileSync(path.join(docs,'index.html'),html);
  fs.writeFileSync(path.join(docs,'socroom-easy.html'),html);
  fs.writeFileSync(path.join(docs,'.nojekyll'),'');
  fs.writeFileSync(path.join(docs,'socroom.html'),`<!doctype html>
<html lang="ja">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta http-equiv="refresh" content="0; url=https://retiacole.github.io/socroom/">
<title>SOCroom</title>
</head>
<body><a href="https://retiacole.github.io/socroom/">SOCroomを開く / Open SOCroom</a></body>
</html>
`);
}
console.log(`Built ${target} (${Math.round(Buffer.byteLength(html)/1024)} KiB)`);
