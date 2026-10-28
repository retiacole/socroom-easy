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

const {validateSources,checkRepository}=require('../scripts/check-i18n.js');
test('source UI, accessibility and engine strings require exact catalog registration',()=>{
  assert.deepEqual(checkRepository(),[]);
});
test('coverage rejects partially translated new strings, including template fragments and attributes',()=>{
  const missing=validateSources({'example.js':"const text='ログを読む'; const html=`<p>${count}件追加</p><button aria-label=\"新しい操作\">操作</button>`;"},{'ログ':'Log','件':'records','操作':'Action'});
  assert.deepEqual(missing.map(item=>item.text),['ログを読む','件追加','新しい操作']);
});
test('coverage understands exact templates, ignores comments, and checks static HTML',()=>{
  assert.deepEqual(validateSources({'example.js':"// 未登録のコメント\nconst s=format('{level}の{count}問',{level,count});",'page.html':'<p>新しい画面</p><option data-language-name>日本語</option>'},{'{level}の{count}問':'{count} missions in {level}','新しい画面':'New screen'}),[]);
});
test('format substitutes translated templates without translating variable data',()=>{
  const I=require('../src/i18n.js');I.setLocale('en');
  assert.equal(I.format('{level}の{count}問を体験しました。',{level:'Beginner',count:22}),'You completed all 22 Beginner missions.');
  I.setLocale('ja');
  assert.equal(I.format('{level}の{count}問を体験しました。',{level:'初級',count:22}),'初級の22問を体験しました。');
});
test('subtree localization includes its own accessible name and can restore Japanese',()=>{
  const {JSDOM}=require('jsdom'),vm=require('node:vm'),fs=require('node:fs');
  const dom=new JSDOM('<button aria-label="閉じる"><span>戻る</span></button>',{runScripts:'outside-only'});
  for(const file of ['translations','i18n'])vm.runInContext(fs.readFileSync(require.resolve('../src/'+file+'.js'),'utf8'),dom.getInternalVMContext());
  const I=dom.window.EasyI18n,button=dom.window.document.querySelector('button');I.setLocale('en');I.apply(button);
  assert.equal(button.getAttribute('aria-label'),'Close');assert.equal(button.textContent,'Back');
  I.setLocale('ja');I.apply(button);assert.equal(button.getAttribute('aria-label'),'閉じる');assert.equal(button.textContent,'戻る');dom.window.close();
});


function initialLanguage(browser, saved, blocked = false) {
  const vm = require('node:vm'), fs = require('node:fs');
  const writes = [];
  const context = {EASY_EN: {}, navigator: browser};
  Object.defineProperty(context, 'localStorage', {get() {
    if (blocked) throw new Error('Storage disabled');
    return {getItem() {return saved ?? null;}, setItem(key, value) {writes.push([key, value]);}};
  }});
  vm.runInNewContext(fs.readFileSync(require.resolve('../src/i18n.js'), 'utf8'), context);
  return {i18n: context.EasyI18n, writes};
}

test('the first browser language selects Japanese or the English fallback without saving a preference', () => {
  for (const [browser, expected] of [
    [{languages: ['ja-JP', 'en-US'], language: 'en-US'}, 'ja'],
    [{languages: ['JA-jp']}, 'ja'],
    [{languages: ['fr-FR', 'ja-JP'], language: 'ja-JP'}, 'en'],
    [{languages: ['th-TH']}, 'en'],
    [{languages: ['', null, 'ja'], language: 'en-US'}, 'ja'],
    [{languages: [], language: 'ja-JP'}, 'ja'],
    [{language: 'en-GB'}, 'en'],
    [undefined, 'en']
  ]) {
    const app = initialLanguage(browser);
    assert.equal(app.i18n.locale, expected, JSON.stringify(browser));
    assert.deepEqual(app.writes, []);
  }
});

test('both saved languages override the browser, invalid saves fall back, and storage is optional', () => {
  assert.equal(initialLanguage({languages: ['en-US']}, 'ja').i18n.locale, 'ja');
  assert.equal(initialLanguage({languages: ['ja-JP']}, 'en').i18n.locale, 'en');
  assert.equal(initialLanguage({languages: ['ja-JP']}, 'invalid').i18n.locale, 'ja');
  assert.equal(initialLanguage({languages: ['ja-JP']}, undefined, true).i18n.locale, 'ja');
  const app = initialLanguage({languages: ['en-US']});
  assert.equal(app.i18n.setLocale('ja'), true);
  assert.equal(app.i18n.locale, 'ja');
  assert.deepEqual(app.writes, [['socroom-easy.language.v1', 'ja']]);
});
