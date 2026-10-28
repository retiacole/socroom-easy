/* Offline display localization. Canonical evidence, answer IDs and progress stay unchanged. */
(function(root){
  'use strict';
  const dictionary=root.EASY_EN||(typeof require==='function'?require('./translations.js'):{}),key='socroom-easy.language.v1',hasJapanese=/[\u3040-\u30ff\u3400-\u9fff]/u;
  const escape=s=>s.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');
  const pattern=new RegExp(Object.keys(dictionary).sort((a,b)=>b.length-a.length).map(escape).join('|'),'g');
  const textSources=new WeakMap(),attributeSources=new WeakMap();
  function browserLocale(){
    try{
      const browser=root.navigator;
      const preferred=Array.isArray(browser?.languages)?browser.languages.find(value=>typeof value==='string'&&value.trim()):null;
      const language=preferred||(typeof browser?.language==='string'?browser.language:'');
      return /^ja(?:-|$)/i.test(language.trim())?'ja':'en';
    }catch(error){return 'en';}
  }
  let locale=browserLocale();
  try{const saved=root.localStorage?.getItem(key);if(['ja','en'].includes(saved))locale=saved;}catch(error){/* The language menu works without storage. */}
  function english(value){const text=String(value??'');if(!hasJapanese.test(text))return text;return Object.hasOwn(dictionary,text)?dictionary[text]:text.replace(pattern,match=>dictionary[match]);}
  function t(value){return locale==='en'?english(value):String(value??'');}
  function format(template,values={}){return t(template).replace(/\{([a-zA-Z][a-zA-Z0-9]*)\}/g,(match,key)=>Object.hasOwn(values,key)?String(values[key]):match);}
  function setLocale(value){if(!['ja','en'].includes(value))return false;locale=value;try{root.localStorage?.setItem(key,value);}catch(error){/* Progress export remains available. */}return true;}
  function apply(scope=root.document){
    if(!scope)return;
    const document=scope.ownerDocument||scope;
    document.documentElement.lang=locale;
    document.title=t('SOCroom-easy — 小さな発見から、SOCへ。');
    const selector=document.getElementById('language-select');if(selector)selector.value=locale;
    const walker=document.createTreeWalker(scope,root.NodeFilter.SHOW_TEXT);let node;
    while((node=walker.nextNode())){if(node.parentElement?.closest('script,style,textarea,[data-language-name]'))continue;const previous=textSources.get(node),source=previous&&previous.rendered===node.nodeValue?previous.source:node.nodeValue,rendered=t(source);textSources.set(node,{source,rendered});if(node.nodeValue!==rendered)node.nodeValue=rendered;}
    const selectorAttributes='[aria-label],[title],[placeholder],[alt]';
    const elements=[...(scope.matches?.(selectorAttributes)?[scope]:[]),...(scope.querySelectorAll?.(selectorAttributes)||[])];
    for(const el of elements){if(el.matches('[data-language-name]'))continue;for(const attr of ['aria-label','title','placeholder','alt'])if(el.hasAttribute(attr)){const cache=attributeSources.get(el)||{},value=el.getAttribute(attr),previous=cache[attr],source=previous&&previous.rendered===value?previous.source:value,rendered=t(source);cache[attr]={source,rendered};attributeSources.set(el,cache);if(value!==rendered)el.setAttribute(attr,rendered);}}
  }
  root.EasyI18n=Object.freeze({t,english,format,setLocale,apply,key,get locale(){return locale;}});
  if(typeof module!=='undefined'&&module.exports)module.exports=root.EasyI18n;
})(globalThis);
