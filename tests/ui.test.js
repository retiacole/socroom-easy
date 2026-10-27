'use strict';
// DOM-only integration checks. Only local application scripts execute; no
// browser navigation, external resources, network APIs, layout or real clocks.
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { JSDOM, VirtualConsole } = require(process.env.SOCROOM_JSDOM_MODULE || 'jsdom');
const E = require('../src/engine.js');
const D = globalThis.EASY_DATA;
const STORE = 'socroom-easy.progress.v2';
const LEGACY_STORE = 'socroom-easy.progress.v1';
const legacyText = fs.readFileSync(path.join(__dirname, 'fixtures/v1-graduation.json'), 'utf8');
const legacyFixture = JSON.parse(legacyText);
const SRC = path.join(__dirname, '../src');

function assembledHTML() {
  // Optionally exercise the exact distributed standalone artifact, including
  // CSS parsing and inline script boundaries, without opening it in a browser.
  if (process.env.SOCROOM_EASY_HTML) return fs.readFileSync(path.resolve(process.env.SOCROOM_EASY_HTML), 'utf8');
  let html = fs.readFileSync(path.join(SRC, 'ui.html'), 'utf8');
  for (const [marker, name] of Object.entries({ CSS: null, DATA: 'data.js', TRANSLATIONS: 'translations.js', I18N: 'i18n.js', ENGINE: 'engine.js', APP: 'app.js' })) {
    const content = name ? fs.readFileSync(path.join(SRC, name), 'utf8').replace(/<\/script/gi, '<\\/script') : '';
    html = html.replace(`/*__${marker}__*/`, () => content);
  }
  return html;
}

function harness(t, saved = null, options = {}) {
  const storage = new Map(saved ? [[STORE, typeof saved === 'string' ? saved : JSON.stringify(saved)]] : []);
  for (const [key, value] of Object.entries(options.otherStorage || {})) storage.set(key, value);
  const errors = [], downloads = [], blobs = new Map(), timers = new Map();
  let now = 0, nextId = 0, networkCalls = 0;
  const virtualConsole = new VirtualConsole();
  virtualConsole.on('jsdomError', error => errors.push(error));
  const markup = options.transformHTML ? options.transformHTML(assembledHTML()) : assembledHTML();
  const dom = new JSDOM(markup, {
    url: options.url,
    runScripts: 'dangerously', // The locally assembled scripts above only.
    // A URL only selects online/file link behavior; resources remain disabled.
    virtualConsole,
    beforeParse(window) {
      if(options.noSegmenter)window.Intl.Segmenter=undefined;
      Object.defineProperty(window, 'localStorage', { configurable: true, value: {
        getItem(key) { if (options.failStorage) throw new Error('storage unavailable'); return storage.get(key) ?? null; },
        setItem(key, value) { if (options.failStorage || options.failWriteKeys?.includes(key)) throw new Error('storage unavailable'); storage.set(key, String(value)); },
        removeItem(key) { storage.delete(key); }
      } });
      window.setTimeout = (fn, delay = 0) => { const id = ++nextId; timers.set(id, { fn, at: now + delay }); return id; };
      window.clearTimeout = id => timers.delete(id);
      window.scrollTo = () => {};
      window.Element.prototype.scrollIntoView = function () {};
      const denied = () => { networkCalls++; throw new Error('Network APIs are prohibited in DOM tests'); };
      window.fetch = denied;
      window.XMLHttpRequest = denied;
      window.WebSocket = denied;
      window.EventSource = denied;
      window.navigator.sendBeacon = denied;
      window.Blob = class MemoryBlob {
        constructor(parts, config = {}) { this.content = parts.map(String).join(''); this.type = config.type || ''; this.size = this.content.length; }
        async text() { return this.content; }
      };
      window.URL.createObjectURL = blob => { const url = 'blob:dom-only-' + (++nextId); blobs.set(url, blob); return url; };
      window.URL.revokeObjectURL = url => blobs.delete(url);
      window.HTMLAnchorElement.prototype.click = function () {
        if (this.download) downloads.push({ name: this.download, content: blobs.get(this.href)?.content || '', type: blobs.get(this.href)?.type });
      };
      window.HTMLDialogElement.prototype.showModal = function () { this.setAttribute('open', ''); };
      window.HTMLDialogElement.prototype.close = function () { this.removeAttribute('open'); };
    }
  });
  const { window } = dom, { document } = window;
  function get(selector) { const node = document.querySelector(selector); assert.ok(node, 'DOM node exists: ' + selector); return node; }
  function click(selector) {
    const node = get(selector);
    assert.equal(node.matches(':disabled'), false, 'control enabled: ' + selector);
    node.dispatchEvent(new window.MouseEvent('click', { bubbles: true, cancelable: true }));
  }
  function input(selector, value, type = 'input') {
    const node = get(selector);
    assert.equal(node.matches(':disabled'), false, 'input enabled: ' + selector);
    node.value = value;
    node.dispatchEvent(new window.Event(type, { bubbles: true }));
  }
  function radio(selector) {
    const node = get(selector);
    assert.equal(node.matches(':disabled'), false, 'radio enabled: ' + selector);
    node.checked = true;
    node.dispatchEvent(new window.Event('change', { bubbles: true }));
  }
  function submit() {
    assert.equal(get('#submit-answer').disabled, false, 'answer can be submitted');
    get('#answer-form').dispatchEvent(new window.Event('submit', { bubbles: true, cancelable: true }));
  }
  function tick(ms = 250) {
    now += ms;
    for (const [id, timer] of [...timers]) if (timer.at <= now) { timers.delete(id); timer.fn(); }
  }
  function snapshot() {
    window.dispatchEvent(new window.Event('pagehide'));
    return JSON.parse(storage.get(STORE));
  }
  async function importFile(content, size) {
    Object.defineProperty(get('#import-file'), 'files', { configurable: true, value: [{ name: 'progress.json', size: size ?? content.length, text: async () => content }] });
    get('#import-file').dispatchEvent(new window.Event('change', { bubbles: true }));
    await Promise.resolve(); await Promise.resolve();
  }
  t.after(() => {
    assert.equal(networkCalls, 0, 'application performs no network request');
    assert.deepEqual(errors.map(error => error.message), [], 'application raises no script error');
    dom.window.close();
  });
  return { window, document, storage, downloads, get, click, input, radio, submit, tick, snapshot, importFile };
}

function answerInput(step) {
  switch (step.kind) {
    case 'token': return { tokenId: step.answer.tokenId };
    case 'text': return { text: step.answer.values[0] };
    case 'rows': case 'evidence': return { rowIds: step.answer.rowIds };
    case 'filter': return { query: step.answer.query, rowIds: step.answer.rowIds };
    case 'order': return { orderIds: step.answer.rowIds };
    case 'choice': return { choiceId: step.answer.choiceId };
    case 'report': return { parts: step.answer.parts };
    default: throw new Error('Unknown kind: ' + step.kind);
  }
}

// Engine-driven fixtures only prepare earlier prerequisites for focused tests.
// The full-course test below completes every task using DOM events alone.
function saveBefore(id) {
  const progress = E.createProgress();
  for (const mission of D.missions.filter(mission => mission.level === E.getMission(id).level)) {
    if (mission.id === id) break;
    E.openMission(progress, mission.id);
    for (let index = 0; index < (mission.steps?.length || 1); index++) {
      E.setInput(progress, mission.id, answerInput(E.currentStep(progress, mission.id)));
      assert.equal(E.submit(progress, mission.id).passed, true);
      if (index < (mission.steps?.length || 1) - 1) E.advanceStep(progress, mission.id);
    }
  }
  E.openMission(progress, id);
  return E.exportProgress(progress);
}

function orderIds(h) {
  return [...h.document.querySelectorAll('.order-row')].map(row => row.querySelector('[data-move]').dataset.move);
}

function fillAnswerThroughDOM(h, step) {
  switch (step.kind) {
    case 'token': h.click(`[data-token="${step.answer.tokenId}"]`); break;
    case 'text': h.input('#answer-text', step.answer.values[0]); break;
    case 'filter': h.input('#log-query', step.answer.query); // Fall through to selecting filtered rows.
    case 'rows': case 'evidence':
      for (const id of step.answer.rowIds) h.click(`[data-select="${id}"]`);
      break;
    case 'order':
      for (const [index, id] of step.answer.rowIds.entries()) {
        while (orderIds(h).indexOf(id) > index) h.click(`[data-move="${id}"][data-direction="-1"]`);
      }
      break;
    case 'choice': h.radio(`input[name="answer-choice"][value="${step.answer.choiceId}"]`); break;
    case 'report':
      for (const [group, id] of Object.entries(step.answer.parts)) h.radio(`input[data-part="${group}"][value="${id}"]`);
      break;
    default: throw new Error('Unsupported interaction: ' + step.kind);
  }
}

test('new learner sees one unlocked beginner start, 21 scoped tasks, three levels and an accessible glossary', t => {
  const h = harness(t);
  if (process.env.SOCROOM_EASY_HTML) {
    assert.equal(h.document.querySelectorAll('script').length, 5, 'standalone HTML contains all five offline scripts');
    assert.ok(h.document.styleSheets[0]?.cssRules.length > 0, 'standalone stylesheet parses');
    assert.equal(h.document.querySelector('script[src],link[rel="stylesheet"]'), null, 'standalone app has no external code dependencies');
  }
  assert.equal(h.document.querySelectorAll('.level-card').length, 3);
  assert.equal(h.document.querySelectorAll('.mission-row').length, 21);
  assert.equal(h.document.querySelectorAll('.mission-row[aria-disabled="true"]').length, 20);
  assert.equal(h.get('.hero-start').dataset.open, 'r1');
  assert.match(h.get('.hero-badges').textContent, /時間制限なし/);
  h.click('[data-action="glossary"]');
  assert.equal(h.get('#dialog').open, true);
  assert.ok(h.document.querySelectorAll('.glossary dt').length >= 12);
  assert.match(h.get('.glossary').textContent, /UTC/);
  h.click('[data-action="close"]');
  h.click('.hero-start');
  assert.equal(h.get('.lesson-title h1').textContent, D.missions[0].title);
  assert.equal(h.get('#submit-answer').disabled, true);
  assert.match(h.get('.learn-card').textContent, /UTC/);
  assert.equal(h.document.activeElement, h.get('.lesson-title h1'));
});

test('wrong token receives feedback, correct token earns one flag and unlocks the next task', t => {
  const h = harness(t), mission = D.missions[0];
  h.click('.hero-start');
  const wrong = mission.tokens.find(token => token.id !== mission.answer.tokenId);
  h.click(`[data-token="${wrong.id}"]`);
  assert.equal(h.get(`[data-token="${wrong.id}"]`).getAttribute('aria-pressed'), 'true');
  assert.equal(h.get('.token-meaning').textContent, wrong.meaning);
  h.submit();
  assert.ok(h.document.querySelector('.feedback.try-again'));
  assert.equal(h.snapshot().progress.records.r1.completed, false);
  h.click(`[data-token="${mission.answer.tokenId}"]`);
  h.submit();
  assert.equal(h.get('.earned-flag').textContent, mission.flag);
  assert.equal(h.get('#submit-answer').disabled, true);
  assert.equal(h.get(`[data-token="${mission.answer.tokenId}"]`).disabled, true);
  const rec = h.snapshot().progress.records.r1;
  assert.equal(rec.attempts, 2);
  assert.equal(rec.completed, true);
  h.click('[data-action="map"]');
  assert.equal(h.get('.mission-row[data-open="r2"]').disabled, false);
  assert.equal(h.get('.mission-row[data-open="r3"]').getAttribute('aria-disabled'), 'true');
  assert.match(h.get('.points').textContent, /100/);
});

test('all 63 missions and twelve graduation stages complete through visible DOM controls', t => {
  const h = harness(t), allFlags = new Set();
  assert.equal(D.missions.length, 63);
  for (const [levelIndex, level] of D.levels.entries()) {
    assert.equal(h.get('.level-card.active').dataset.level, level.id);
    h.click('.hero-start');
    const missions = D.missions.filter(mission => mission.level === level.id);
    for (const [missionIndex, mission] of missions.entries()) {
      assert.equal(h.get('.lesson-title h1').textContent, mission.title);
      assert.equal(h.get('.lesson-position').textContent, `${missionIndex + 1} / 21`);
      const steps = mission.steps || [mission];
      for (const [index, step] of steps.entries()) {
        assert.equal(h.get('#task-heading').textContent, step.task);
        assert.equal(h.document.querySelector('.mobile-task'), null, 'task is not duplicated on narrow screens');
        if (!['token', 'order'].includes(step.kind)) {
          for (const row of step.rows.filter(row => row.title)) {
            assert.equal(h.get(`[data-row="${row.id}"] h3`).textContent, row.title, 'source card retains its meaningful title');
          }
        }
        if (step.kind === 'order') {
          for (const row of step.rows.filter(row => row.note)) {
            assert.equal(h.get(`[data-move="${row.id}"]`).closest('.order-row').querySelector('.row-note')?.textContent, row.note, 'timing and clock notes remain visible during ordering');
          }
        }
        fillAnswerThroughDOM(h, step);
        h.submit();
        assert.ok(h.document.querySelector('.feedback.success'), mission.id + ': correct answer is accepted');
        assert.equal([...h.document.querySelectorAll('.feedback > p')].filter(node => node.textContent === step.answerExplanation).length, 1, 'answer explanation is shown once');
        if (index < steps.length - 1) {
          assert.equal(h.document.querySelector('.earned-flag'), null, 'graduation flag waits for every stage');
          assert.equal(h.get('.top-flags b').textContent, String(levelIndex * 21 + 20));
          h.click('[data-action="advance"]');
        }
      }
      assert.equal(h.get('.earned-flag').textContent, mission.flag);
      allFlags.add(mission.flag);
      assert.equal(h.snapshot().progress.records[mission.id].completed, true);
      if (missionIndex < missions.length - 1) h.click('[data-action="next"]');
    }
    assert.equal(h.document.querySelector('[data-action="next"]'), null, 'last lesson finishes its own level');
    h.click('[data-action="finish"]');
    assert.equal(h.document.querySelectorAll('.mission-row.complete').length, 21);
    assert.match(h.get('.points').textContent, /2100/);
    assert.equal(h.get('.flag-score strong').textContent, '21');
    assert.equal(h.get('.top-flags b').textContent, String((levelIndex + 1) * 21));
    assert.equal(h.document.querySelectorAll('.graduation-reflection li').length, 3);
    if(level.id==='intermediate') assert.equal(h.document.querySelector('.optional-recommendation'), null);
    else assert.equal(h.get('.optional-recommendation a').getAttribute('href'), 'https://retiacole.github.io/' + (level.id==='beginner'?'linuxroom':'logroom') + '/');
    h.click('[data-action="collection"]');
    assert.equal(h.document.querySelectorAll('.flag-collection article').length, 21);
    assert.deepEqual([...h.document.querySelectorAll('.flag-collection code')].map(node => node.textContent), missions.map(mission => mission.flag));
    h.click('[data-action="close"]');
    if (levelIndex < D.levels.length - 1) h.click(`.bridge-card [data-level="${D.levels[levelIndex + 1].id}"]`);
  }
  assert.equal(allFlags.size, 63);
  assert.equal(h.get('.top-flags b').textContent, '63');
  assert.match(h.get('.all-complete').textContent, /63フラグ/);
  assert.equal(E.stats(E.hydrate(h.snapshot())).points, 6300);
});

test('filter updates visible rows, handles zero results and requires both query and row selection', t => {
  const h = harness(t, saveBefore('f1')), mission = E.getMission('f1');
  h.click('.hero-start');
  assert.equal(h.get('#log-query').maxLength, 160);
  assert.equal(h.document.querySelectorAll('[data-row]').length, mission.rows.length);
  h.input('#log-query', 'host=missing');
  assert.equal(h.document.querySelectorAll('[data-row]').length, 0);
  assert.match(h.get('.empty').textContent, /一致する記録がありません/);
  h.click('[data-action="clear-search"]');
  assert.equal(h.get('#log-query').value, '');
  assert.equal(h.document.activeElement, h.get('#log-query'));
  h.click(`[data-select="${mission.rows.find(row=>!mission.answer.rowIds.includes(row.id)).id}"]`);
  assert.equal(h.get('#submit-answer').disabled, true, 'selected row alone is not a search');
  h.input('#log-query', mission.answer.query);
  assert.deepEqual([...h.document.querySelectorAll('[data-row]')].map(node => node.dataset.row), mission.answer.rowIds);
  assert.equal(h.get('#filter-count').textContent, '1 / 4 件表示');
  assert.equal(h.get('mark').textContent, mission.answer.query);
  assert.equal(h.get(`[data-select="${mission.answer.rowIds[0]}"]`).getAttribute('aria-pressed'), 'false');
  assert.match(h.get('#selected-count').textContent, /0件選択中/, 'hidden selections are cleared when changing search');
  assert.equal(h.get('#submit-answer').disabled, true);
  h.input('#log-query', 'pc-kai');
  h.click(`[data-select="${mission.answer.rowIds[0]}"]`);
  h.submit();
  assert.ok(h.document.querySelector('.feedback.success'), 'alternative query preserves and narrows the necessary evidence');
  h.click('[data-action="retry"]');
  h.input('#log-query', '　ＨＯＳＴ＝ＰＣ－ＫＡＩ　');
  assert.equal(h.document.querySelector('.feedback'), null, 'retry clears previous feedback');
  assert.deepEqual([...h.document.querySelectorAll('[data-row]')].map(node => node.dataset.row), mission.answer.rowIds, 'filter accepts the same NFKC and case normalization as grading');
  h.click(`[data-select="${mission.answer.rowIds[0]}"]`);
  h.submit();
  assert.ok(h.document.querySelector('.feedback.success'));
});

test('filter composition preserves the input and refreshes results only after composition ends', t => {
  const h = harness(t, saveBefore('f2')), mission = E.getMission('f2');
  h.click('.hero-start');
  const field = h.get('#log-query');
  field.focus();
  field.dispatchEvent(new h.window.CompositionEvent('compositionstart', { bubbles: true }));
  h.input('#log-query', mission.answer.query);
  assert.equal(h.document.querySelectorAll('[data-row]').length, 5, 'do not rebuild results during IME composition');
  field.dispatchEvent(new h.window.CompositionEvent('compositionend', { bubbles: true }));
  assert.equal(h.get('#log-query'), field, 'input node survives live search');
  assert.equal(h.document.activeElement, field);
  assert.equal(h.document.querySelectorAll('[data-row]').length, 2);
  for (const id of mission.answer.rowIds) h.click(`[data-select="${id}"]`);
  assert.match(h.get('#selected-count').textContent, /2件/);
  h.submit();
  assert.ok(h.document.querySelector('.feedback.success'));
});

test('text draft survives save and reload and remains escaped as inert text', t => {
  const h = harness(t, saveBefore('r2'));
  h.click('.hero-start');
  assert.equal(h.get('#answer-text').maxLength, 240);
  const draft = '<img src=x onerror=alert(1)>';
  h.input('#answer-text', draft);
  h.tick();
  const reloaded = harness(t, h.snapshot());
  reloaded.click('.hero-start');
  assert.equal(reloaded.get('#answer-text').value, draft);
  assert.equal(reloaded.document.querySelector('img'), null);
  reloaded.submit();
  assert.ok(reloaded.document.querySelector('.feedback.try-again'));
  reloaded.input('#answer-text', '  rin  ');
  assert.equal(reloaded.document.querySelector('.feedback'), null, 'editing the answer removes stale wrong feedback');
  reloaded.submit();
  assert.ok(reloaded.document.querySelector('.feedback.success'));
  assert.equal(reloaded.snapshot().progress.records.r1.completed, true);
  assert.equal(reloaded.snapshot().progress.records.r2.completed, true);
});

test('ordering uses enabled up/down controls and saves the reordered draft', t => {
  const h = harness(t, saveBefore('c1')), mission = E.getMission('c1');
  h.click('.hero-start');
  assert.notDeepEqual(orderIds(h), mission.answer.rowIds);
  assert.equal(h.get(`[data-move="${orderIds(h)[0]}"][data-direction="-1"]`).disabled, true);
  h.submit();
  assert.ok(h.document.querySelector('.feedback.try-again'));
  const target = mission.answer.rowIds[0];
  h.click(`[data-move="${target}"][data-direction="-1"]`);
  const savedOrder = orderIds(h), restored = harness(t, h.snapshot());
  restored.click('.hero-start');
  assert.deepEqual(orderIds(restored), savedOrder);
  fillAnswerThroughDOM(restored, mission);
  assert.deepEqual(orderIds(restored), mission.answer.rowIds);
  restored.submit();
  assert.ok(restored.document.querySelector('.feedback.success'));
});

test('retry hides help and an independent pass upgrades status while preserving help history', t => {
  const h = harness(t), mission = E.getMission('r1');
  h.click('.hero-start');
  for (let index = 1; index <= 3; index++) {
    h.click('[data-action="hint"]');
    assert.equal(h.document.querySelectorAll('.hint-card .hint').length, index);
  }
  assert.equal(h.get('[data-action="hint"]').disabled, true);
  h.click('[data-action="solution"]');
  assert.equal(h.get('.solution p').textContent, mission.solution);
  assert.equal(h.snapshot().progress.records.r1.completed, false);
  assert.equal(h.get('#submit-answer').disabled, true);
  fillAnswerThroughDOM(h, mission); h.submit();
  assert.equal(h.snapshot().progress.records.r1.assisted, true);
  h.click('[data-action="retry"]');
  assert.equal(h.document.querySelector('.feedback'), null);
  assert.equal(h.document.querySelector('.hint-card .hint,.solution'), null);
  assert.equal(h.snapshot().progress.records.r1.attemptAssisted, false);
  assert.match(h.get('.review-note').textContent, /獲得済み/);
  assert.equal(h.get('#submit-answer').disabled, true);
  const reloaded = harness(t, h.snapshot());
  assert.match(reloaded.get('.mission-row[data-open="r1"]').textContent, /解説を見てクリア/);
  reloaded.click('.mission-row[data-open="r1"]');
  fillAnswerThroughDOM(reloaded, mission); reloaded.submit();
  reloaded.click('[data-action="map"]');
  assert.match(reloaded.get('.points').textContent, /100/);
  assert.equal(reloaded.snapshot().progress.records.r1.hints, 3);
  assert.equal(reloaded.snapshot().progress.records.r1.revealed, true);
  assert.match(reloaded.get('.mission-row[data-open="r1"]').textContent, /ヒントなしでクリア/);
  assert.equal(reloaded.snapshot().progress.records.r1.independent, true);
  const again = harness(t, reloaded.snapshot());
  assert.match(again.get('.mission-row[data-open="r1"]').textContent, /ヒントなしでクリア/);
});

test('report requires all three parts and explains an unsupported factual claim', t => {
  const mission = D.missions.find(m => m.kind === 'report');
  assert.ok(mission);
  const h = harness(t, saveBefore(mission.id));
  h.click('.hero-start');
  const wrong = mission.choices.find(c => c.group === 'fact' && c.id !== mission.answer.parts.fact);
  h.radio(`input[data-part="fact"][value="${wrong.id}"]`);
  h.radio(`input[data-part="limit"][value="${mission.answer.parts.limit}"]`);
  assert.equal(h.get('#submit-answer').disabled, true);
  h.radio(`input[data-part="next"][value="${mission.answer.parts.next}"]`);
  h.submit();
  assert.match(h.get('.feedback').textContent, new RegExp(wrong.feedback.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')));
  h.radio(`input[data-part="fact"][value="${mission.answer.parts.fact}"]`);
  assert.equal(h.document.querySelector('.feedback'), null, 'changing a report part removes stale wrong feedback');
  assert.equal(h.get(`input[data-part="limit"][value="${mission.answer.parts.limit}"]`).checked, true);
  assert.equal(h.get(`input[data-part="next"][value="${mission.answer.parts.next}"]`).checked, true);
  h.submit();
  assert.ok(h.document.querySelector('.feedback.success'));
});

test('graduation resumes the current stage and draft without awarding a flag before the report', t => {
  const mission = E.getMission('g1'), h = harness(t, saveBefore('g1'));
  h.click('.hero-start');
  fillAnswerThroughDOM(h, mission.steps[0]); h.submit();
  h.click('[data-action="advance"]');
  const firstEvidence = mission.steps[1].answer.rowIds[0];
  h.click(`[data-select="${firstEvidence}"]`);
  const reloaded = harness(t, h.snapshot());
  assert.equal(reloaded.get('.hero-start').dataset.open, 'g1');
  reloaded.click('.hero-start');
  assert.equal(reloaded.get('#task-heading').textContent, mission.steps[1].task);
  assert.equal(reloaded.get(`[data-select="${firstEvidence}"]`).getAttribute('aria-pressed'), 'true');
  assert.equal(reloaded.get('.top-flags b').textContent, '20');
  for (const id of mission.steps[1].answer.rowIds.slice(1)) reloaded.click(`[data-select="${id}"]`);
  reloaded.submit();
  for (const index of [2, 3]) {
    reloaded.click('[data-action="advance"]');
    assert.equal(reloaded.document.querySelector('.earned-flag'), null);
    fillAnswerThroughDOM(reloaded, mission.steps[index]);
    reloaded.submit();
  }
  assert.equal(reloaded.get('.earned-flag').textContent, mission.flag);
  const rec = reloaded.snapshot().progress.records.g1;
  assert.equal(rec.stage, 3);
  assert.equal(rec.completed, true);
  assert.equal(rec.solved.length, 4);
});

test('export and import use the easy format, require confirmation, and preserve work when cancelled', async t => {
  const h = harness(t);
  h.click('.hero-start');
  fillAnswerThroughDOM(h, E.getMission('r1')); h.submit();
  h.click('[data-action="export"]');
  assert.equal(h.downloads.length, 1);
  assert.equal(h.downloads[0].name, 'socroom-easy-progress.json');
  const exported = JSON.parse(h.downloads[0].content);
  assert.equal(exported.format, 'socroom-easy-save');
  assert.equal(exported.version, 2);
  assert.equal(exported.progress.version, 'socroom-easy-2');
  assert.equal(exported.progress.records.r1.completed, true);
  const next = JSON.stringify(saveBefore('c1'));
  await h.importFile(next);
  assert.equal(h.get('#dialog').open, true);
  assert.equal(h.snapshot().progress.records.f4.completed, false, 'preview does not replace current progress');
  h.click('[data-action="close"]');
  assert.equal(h.snapshot().progress.records.f4.completed, false);
  await h.importFile(next);
  h.click('[data-action="import-confirmed"]');
  assert.equal(h.get('#dialog').open, false);
  assert.equal(h.get('.hero-start').dataset.open, 'c1');
  assert.equal(h.snapshot().progress.records.f4.completed, true);
  const fresh = harness(t);
  await fresh.importFile(h.downloads[0].content);
  fresh.click('[data-action="import-confirmed"]');
  assert.equal(fresh.get('.hero-start').dataset.open, 'r2');
});

test('invalid, foreign, or oversized save imports leave the current progress unchanged', async t => {
  const h = harness(t, saveBefore('r2'));
  const before = h.snapshot();
  const badProof = saveBefore('r2');
  badProof.progress.records.r1.solved[0].input.tokenId = 'r1-host';
  for (const [content, size] of [
    ['{invalid', undefined],
    [JSON.stringify({ format: 'socroom-save', version: 1, session: {} }), undefined],
    [JSON.stringify(before), 2 * 1024 * 1024 + 1]
  ]) {
    await h.importFile(content, size);
    assert.equal(h.get('#dialog').open, false);
    assert.match(h.get('#toast').textContent, /読み込めませんでした|2MB以下/);
    assert.deepEqual(h.snapshot(), before);
  }
  await h.importFile(JSON.stringify(badProof));
  assert.equal(h.get('#dialog').open, true);
  assert.deepEqual(h.snapshot(), before, 'partial recovery requires confirmation');
  h.click('[data-action="import-confirmed"]');
  assert.equal(h.snapshot().progress.records.r1.completed, false, 'forged proof never awards a flag');
});

test('manual export works when browser storage is unavailable', t => {
  const h = harness(t, null, { failStorage: true });
  assert.match(h.get('#save-status').textContent, /自動保存できません/);
  h.click('.hero-start');
  fillAnswerThroughDOM(h, E.getMission('r1')); h.submit();
  h.click('[data-action="export"]');
  const save = JSON.parse(h.downloads[0].content);
  assert.equal(save.progress.records.r1.completed, true);
  assert.equal(save.format, 'socroom-easy-save');
});

test('reset confirms deletion of all three easy levels and leaves SOCroom and legacy storage untouched', t => {
  const normalKey = 'socroom.offline.v2', normalSave = '{"preserved":"socroom"}';
  const progress = E.hydrate(saveBefore('f1'));
  for (const id of ['m-r1', 'a-r1']) {
    E.openMission(progress, id);
    E.setInput(progress, id, answerInput(E.currentStep(progress))); E.submit(progress);
  }
  E.openMission(progress, 'f1');
  const h = harness(t, E.exportProgress(progress), { otherStorage: { [normalKey]: normalSave, [LEGACY_STORE]: legacyText } });
  h.click('[data-action="reset"]');
  assert.equal(h.get('#dialog').open, true);
  h.click('[data-action="close"]');
  assert.equal(h.snapshot().progress.records.r4.completed, true);
  h.click('[data-action="reset"]');
  h.click('[data-action="reset-confirmed"]');
  assert.equal(h.get('.hero-start').dataset.open, 'r1');
  assert.equal(h.snapshot().progress.records.r1.completed, false);
  assert.equal(h.storage.get(normalKey), normalSave);
  assert.equal(h.storage.get(LEGACY_STORE), legacyText);
  assert.equal(h.snapshot().progress.records['m-r1'].completed, false);
  assert.equal(h.snapshot().progress.records['a-r1'].completed, false);
  assert.equal(h.get('.top-flags b').textContent, '0');
  assert.equal(h.document.querySelectorAll('.mission-row[aria-disabled="true"]').length, 20);
});


test('each level is selectable immediately and shows only its own first unlocked mission', t => {
  const h = harness(t);
  for (const level of D.levels) {
    h.click(`.level-card[data-level="${level.id}"]`);
    const missions = D.missions.filter(mission => mission.level === level.id);
    assert.equal(h.get('.level-card.active').dataset.level, level.id);
    assert.equal(h.get('.level-card.active').getAttribute('aria-pressed'), 'true');
    assert.equal(h.document.querySelectorAll('.mission-row').length, 21);
    assert.equal(h.document.querySelectorAll('.mission-row[aria-disabled="true"]').length, 20);
    assert.deepEqual([...h.document.querySelectorAll('.mission-row')].map(node => node.dataset.open), missions.map(mission => mission.id));
    assert.equal(h.get('.hero-start').dataset.open, missions[0].id);
    assert.equal(h.get('.flag-score strong').textContent, '0');
    assert.match(h.get('.top-flags').textContent, /0.*63/);
    h.click('.hero-start');
    assert.equal(h.get('.lesson-title h1').textContent, missions[0].title);
    assert.match(h.get('.lesson-breadcrumb').textContent, new RegExp(level.title));
    assert.equal(h.get('.lesson-position').textContent, '1 / 21');
    h.click('[data-action="map"]');
  }
});

function assertDraftThroughDOM(h, step) {
  switch (step.kind) {
    case 'token': assert.equal(h.get(`[data-token="${step.answer.tokenId}"]`).getAttribute('aria-pressed'), 'true'); break;
    case 'text': assert.equal(h.get('#answer-text').value, step.answer.values[0]); break;
    case 'filter': assert.equal(h.get('#log-query').value, step.answer.query); // Continue with selected rows.
    case 'rows': case 'evidence':
      for (const id of step.answer.rowIds) assert.equal(h.get(`[data-select="${id}"]`).getAttribute('aria-pressed'), 'true');
      break;
    case 'order': assert.deepEqual(orderIds(h), step.answer.rowIds); break;
    case 'choice': assert.equal(h.get(`input[name="answer-choice"][value="${step.answer.choiceId}"]`).checked, true); break;
    case 'report':
      for (const [group, id] of Object.entries(step.answer.parts)) assert.equal(h.get(`input[data-part="${group}"][value="${id}"]`).checked, true);
      break;
  }
}

test('switching levels preserves separate unsent drafts and selected level across reloads', t => {
  const h = harness(t);
  for (const level of D.levels) {
    h.click(`.level-card[data-level="${level.id}"]`);
    h.click('.hero-start');
    const first = D.missions.find(mission => mission.level === level.id);
    fillAnswerThroughDOM(h, first);
    h.click('[data-action="map"]');
  }
  const saved = h.snapshot();
  assert.equal(saved.progress.currentLevel, 'advanced');
  assert.equal(E.stats(E.hydrate(saved)).completed, 0, 'draft answers do not award flags');
  const restored = harness(t, saved);
  assert.equal(restored.get('.level-card.active').dataset.level, 'advanced');
  for (const level of [...D.levels].reverse()) {
    restored.click(`.level-card[data-level="${level.id}"]`);
    restored.click('.hero-start');
    const first = D.missions.find(mission => mission.level === level.id);
    assertDraftThroughDOM(restored, first);
    assert.deepEqual(restored.snapshot().progress.records[first.id].input, answerInput(first));
    restored.click('[data-action="map"]');
  }
});

test('map scores, flags and collections are scoped to a level while header counts all levels', t => {
  const h = harness(t, saveBefore('m-r3'));
  assert.equal(h.get('.level-card.active').dataset.level, 'intermediate');
  assert.equal(h.get('.flag-score strong').textContent, '2');
  assert.equal(h.get('.top-flags b').textContent, '2');
  assert.match(h.get('.points').textContent, /200/);
  assert.equal(h.get('.hero-start').dataset.open, 'm-r3');
  assert.equal(h.get('.mission-row[data-open="m-r3"]').disabled, false);
  assert.equal(h.get('.mission-row[data-open="m-r4"]').getAttribute('aria-disabled'), 'true');
  h.click('[data-action="collection"]');
  assert.equal(h.get('#dialog-title').textContent, '中級で集めたフラグ');
  assert.deepEqual([...h.document.querySelectorAll('.flag-collection code')].map(node => node.textContent), ['m-r1', 'm-r2'].map(id => E.getMission(id).flag));
  h.click('[data-action="close"]');
  h.click('.level-card[data-level="beginner"]');
  assert.equal(h.get('.flag-score strong').textContent, '0');
  assert.equal(h.get('.top-flags b').textContent, '2');
  assert.equal(h.get('.hero-start').dataset.open, 'r1');
  h.click('[data-action="collection"]');
  assert.equal(h.document.querySelector('.flag-collection'), null);
  assert.match(h.get('.dialog-body').textContent, /まだフラグはありません/);
  h.click('[data-action="close"]');
  h.click('.hero-start');
  fillAnswerThroughDOM(h, E.getMission('r1')); h.submit();
  h.click('[data-action="map"]');
  assert.equal(h.get('.flag-score strong').textContent, '1');
  assert.equal(h.get('.top-flags b').textContent, '3');
  h.click('.level-card[data-level="advanced"]');
  assert.equal(h.get('.flag-score strong').textContent, '0');
  assert.equal(h.get('.top-flags b').textContent, '3');
  assert.equal(h.get('.hero-start').dataset.open, 'a-r1');
});

test('first launch migrates genuine v0.1 graduation progress and removes the old key after saving', t => {
  const h = harness(t, null, { otherStorage: { [LEGACY_STORE]: legacyText } });
  assert.equal(h.storage.has(LEGACY_STORE), false);
  assert.ok(h.storage.has(STORE));
  assert.match(h.get('#toast').textContent, /初版の進捗を初級へ引き継ぎ/);
  assert.equal(h.get('.hero-start').dataset.open, 'g1');
  assert.equal(h.get('.flag-score strong').textContent, '20');
  const migrated = h.snapshot();
  assert.equal(migrated.version, 2);
  assert.equal(migrated.progress.currentLevel, 'beginner');
  assert.equal(migrated.progress.records.g1.stage, 2);
  for (const id of ['g1','f1']) {
    const previous = legacyFixture.progress.records[id];
    for (const key of Object.keys(previous)) {
      const expected = key === 'stageResults' ? previous[key].map((proof,index)=>({...proof,message:(E.getMission(id).steps||[E.getMission(id)])[index].answerExplanation})) : previous[key];
      assert.deepEqual(migrated.progress.records[id][key], expected, 'legacy field retained: '+id+'.'+key);
    }
  }
  assert.equal(migrated.progress.records.g1.attemptAssisted, true);
  assert.equal(migrated.progress.records.g1.independent, false);
  assert.equal(migrated.progress.records['m-r1'].completed, false);
  assert.equal(migrated.progress.records['a-r1'].completed, false);
  h.click('.hero-start');
  assert.equal(h.get('#task-heading').textContent, E.getMission('g1').steps[2].task);
  assertDraftThroughDOM(h, E.getMission('g1').steps[2]);
  assert.equal(h.get('#submit-answer').disabled, false);
  assert.equal(h.document.querySelector('.earned-flag'), null);
  h.submit();
  h.click('[data-action="advance"]');
  fillAnswerThroughDOM(h, E.getMission('g1').steps[3]); h.submit();
  assert.equal(h.snapshot().progress.records.g1.completed, true);
  assert.equal(h.storage.has(LEGACY_STORE), false, 'successful migration removed the old storage key');
});

test('v1 import explains new-level replacement and changes progress only after confirmation', async t => {
  const progress = E.hydrate(saveBefore('m-r3'));
  E.openMission(progress, 'a-r1');
  E.setInput(progress, 'a-r1', answerInput(E.currentStep(progress))); E.submit(progress);
  const h = harness(t, E.exportProgress(progress), { otherStorage: { [LEGACY_STORE]: legacyText } });
  const before = h.snapshot();
  await h.importFile(legacyText);
  assert.equal(h.get('#dialog').open, true);
  assert.match(h.get('.dialog-body').textContent, /全3級の学習記録/);
  assert.match(h.get('.import-legacy-note').textContent, /中級・上級.*未着手/);
  assert.deepEqual(h.snapshot(), before);
  h.click('[data-action="close"]');
  assert.deepEqual(h.snapshot(), before);
  await h.importFile(legacyText);
  h.click('[data-action="import-confirmed"]');
  const imported = E.hydrate(h.snapshot());
  assert.equal(h.get('.level-card.active').dataset.level, 'beginner');
  assert.equal(h.get('.hero-start').dataset.open, 'g1');
  assert.equal(E.stats(imported, 'beginner').completed, 20);
  assert.equal(E.stats(imported, 'intermediate').completed, 0);
  assert.equal(E.stats(imported, 'advanced').completed, 0);
  assert.equal(imported.records.g1.stage, 2);
  assert.equal(h.storage.get(LEGACY_STORE), legacyText);
});

test('current v2 storage takes priority over an older valid v1 save', t => {
  const h = harness(t, saveBefore('m-r2'), { otherStorage: { [LEGACY_STORE]: legacyText } });
  assert.equal(h.get('.level-card.active').dataset.level, 'intermediate');
  assert.equal(h.get('.hero-start').dataset.open, 'm-r2');
  assert.equal(h.get('.top-flags b').textContent, '1');
  const saved = h.snapshot();
  assert.equal(saved.progress.records['m-r1'].completed, true);
  assert.equal(saved.progress.records.r1.completed, false);
  assert.equal(h.storage.get(LEGACY_STORE), legacyText);
  assert.doesNotMatch(h.get('#toast').textContent, /引き継ぎ/);
});

test('partial legacy imports require confirmation and preserve the original for recovery', async t => {
  const broken = JSON.parse(legacyText);
  delete broken.progress.records.r4;
  const brokenText = JSON.stringify(broken);
  const h = harness(t, saveBefore('m-r2'));
  const before = h.snapshot();
  await h.importFile(brokenText);
  assert.equal(h.get('#dialog').open, true);
  assert.match(h.get('.dialog-body').textContent, /読み取れる進捗を復元/);
  assert.deepEqual(h.snapshot(), before);
  h.click('[data-action="import-confirmed"]');
  assert.equal(h.snapshot().progress.records.r1.completed, true);
  assert.equal(h.snapshot().progress.records.r4.completed, false);
  h.click('[data-action="export-recovery"]');
  assert.equal(h.downloads[0].content, brokenText);
  const oldOnly = harness(t, null, { otherStorage: { [LEGACY_STORE]: brokenText } });
  assert.match(oldOnly.get('#toast').textContent, /読み取れる進捗を復元/);
  assert.equal(oldOnly.storage.get(STORE + '.recovery'), brokenText);
  assert.equal(oldOnly.storage.has(LEGACY_STORE), false);
});

test('unreadable v2 saves are backed up without falling back to or modifying v1 progress', t => {
  const corrupt = '{"format":"socroom-easy-save",broken';
  const h = harness(t, corrupt, { otherStorage: { [LEGACY_STORE]: legacyText } });
  assert.equal(h.storage.get(STORE + '.recovery'), corrupt);
  assert.equal(h.storage.get(LEGACY_STORE), legacyText);
  assert.equal(h.get('.top-flags b').textContent, '0', 'do not silently roll back to the older twenty-flag save');
  assert.equal(h.get('.hero-start').dataset.open, 'r1');
  assert.match(h.get('#toast').textContent, /読み込めませんでした/);
  assert.equal(h.snapshot().version, 2);
  const cannotBackup = harness(t, corrupt, { failWriteKeys: [STORE + '.recovery'], otherStorage: { [LEGACY_STORE]: legacyText } });
  assert.equal(cannotBackup.storage.get(STORE), corrupt, 'failed recovery copy must never erase unreadable source');
  assert.equal(cannotBackup.storage.has(STORE + '.recovery'), false);
  assert.equal(cannotBackup.storage.get(LEGACY_STORE), legacyText);
  assert.match(cannotBackup.get('#save-status').textContent, /自動保存できません/);
  cannotBackup.click('.hero-start');
  fillAnswerThroughDOM(cannotBackup, E.getMission('r1')); cannotBackup.submit();
  cannotBackup.click('[data-action="export"]');
  assert.equal(JSON.parse(cannotBackup.downloads[0].content).progress.records.r1.completed, true, 'manual export still preserves new work');
  assert.equal(cannotBackup.storage.get(STORE), corrupt);
});


test('opening an old hint after retry marks this attempt assisted again', t => {
  const h = harness(t), mission = E.getMission('r1');
  h.click('.hero-start'); h.click('[data-action="hint"]');
  fillAnswerThroughDOM(h, mission); h.submit(); h.click('[data-action="retry"]');
  assert.equal(h.document.querySelector('.hint'), null);
  h.click('[data-action="hint"]');
  assert.equal(h.document.querySelectorAll('.hint').length, 1);
  assert.equal(h.get('.hint p').textContent, mission.hints[0]);
  assert.equal(h.snapshot().progress.records.r1.attemptAssisted, true);
  fillAnswerThroughDOM(h, mission); h.submit(); h.click('[data-action="map"]');
  assert.match(h.get('.mission-row[data-open="r1"]').textContent, /ヒントを使ってクリア/);
});

test('filter ignores internal IDs and highlights normalized matches without changing source characters', t => {
  const mission = E.getMission('f1'), target = mission.rows.find(row=>row.id===mission.answer.rowIds[0]);
  const fullwidth = 'ＨＯＳＴ＝ＰＣ－ＫＡＩ';
  const replacement = target.raw.replace('host=pc-kai', fullwidth)+' tag=㍻　　ｶﾞ';
  const h = harness(t, saveBefore('f1'), {transformHTML: html=>html.replace(JSON.stringify(target.raw), JSON.stringify(replacement))});
  h.click('.hero-start');
  h.input('#log-query', target.id);
  assert.equal(h.document.querySelectorAll('[data-row]').length, 0);
  h.input('#log-query', 'host=pc-kai');
  assert.equal(h.get('mark').textContent, fullwidth);
  assert.equal(h.get('.source-card .raw-log').textContent, replacement);
  h.input('#log-query', '平成 ガ');
  assert.equal(h.get('mark').textContent, '㍻　　ｶﾞ');
  assert.equal(h.get('.source-card .raw-log').textContent, replacement);
});

test('advanced and intermediate search accept an alternative narrowing query through DOM', t => {
  for (const [id,query] of [['m-f1','REQ-731'],['m-f4','mina'],['a-f1','TR-602']]) {
    const mission = E.getMission(id), h = harness(t, saveBefore(id));
    h.click('.hero-start'); h.input('#log-query', query);
    const visible = [...h.document.querySelectorAll('[data-row]')].map(row=>row.dataset.row);
    assert.ok(visible.length < mission.rows.length);
    for (const rowId of mission.answer.rowIds) h.click(`[data-select="${rowId}"]`);
    h.submit();
    assert.ok(h.document.querySelector('.feedback.success'), id+' accepts a learner-selected narrowing search');
  }
});

test('graduation preview joins selected sentences and only exports the checked final report', t => {
  for (const id of ['g1','m-g1','a-g1']) {
    const mission = E.getMission(id), h = harness(t, saveBefore(id));
    h.click('.hero-start');
    for (const stage of mission.steps.slice(0,-1)) {
      assert.equal(h.document.querySelector('#report-preview'), null);
      fillAnswerThroughDOM(h, stage); h.submit(); h.click('[data-action="advance"]');
    }
    const report = mission.steps.at(-1);
    assert.equal(h.get('[data-action="export-report"]').disabled, true);
    fillAnswerThroughDOM(h, report);
    const expected = ['fact','limit','next'].map(group=>report.choices.find(c=>c.id===report.answer.parts[group]).label).join('');
    assert.equal(h.get('.report-preview-text').textContent, expected);
    assert.equal(h.get('[data-action="export-report"]').disabled, true);
    const wrong = report.choices.find(c=>c.group==='fact'&&c.id!==report.answer.parts.fact);
    h.radio(`input[data-part="fact"][value="${wrong.id}"]`); h.submit();
    assert.ok(h.get('.report-preview-text').textContent.startsWith(wrong.label));
    assert.equal(h.get('[data-action="export-report"]').disabled, true);
    h.radio(`input[data-part="fact"][value="${report.answer.parts.fact}"]`); h.submit();
    h.click('[data-action="export-report"]');
    assert.deepEqual(h.downloads[0], {name:'socroom-easy-'+id+'-report.txt',content:mission.title+'\n\n'+expected+'\n',type:'text/plain;charset=utf-8'});
    h.click('[data-action="retry"]');
    assert.equal(h.document.querySelector('#report-preview'), null);
  }
});


test('older browsers keep normalized search correct without misaligned highlighting', t => {
  const mission = E.getMission('f1'), target = mission.rows.find(row=>row.id===mission.answer.rowIds[0]);
  const replacement = target.raw+' note=ｶﾞX';
  const h = harness(t, saveBefore('f1'), {noSegmenter:true,transformHTML:html=>html.replace(JSON.stringify(target.raw),JSON.stringify(replacement))});
  h.click('.hero-start');h.input('#log-query','ガx');
  assert.equal(h.document.querySelectorAll('[data-row]').length,1);
  assert.equal(h.get('.source-card .raw-log').textContent,replacement);
  assert.equal(h.document.querySelector('mark'),null);
});


test('real-format token lessons show the complete original log before answering', t => {
  for(const id of ['m-r1','a-r2']){
    const h=harness(t,saveBefore(id));h.click('.hero-start');
    assert.equal(h.get('.raw-reference').open,true);
    assert.equal(h.get('.raw-reference .raw-log').textContent,E.getMission(id).rows[0].raw);
  }
});

const LANGUAGE_STORE = 'socroom-easy.language.v1';
const EN = require('../src/translations.js');
function setLanguage(h, value) { h.input('#language-select', value, 'change'); }
function assertEnglish(h, context) {
  const walker=h.document.createTreeWalker(h.document.body,h.window.NodeFilter.SHOW_TEXT);
  const leftovers=[];let node;
  while((node=walker.nextNode()))if(!node.parentElement?.closest('script,style,[data-language-name]')&&/[\u3040-\u30ff\u3400-\u9fff]/u.test(node.nodeValue))leftovers.push(node.nodeValue);
  for(const el of h.document.querySelectorAll('[aria-label],[title],[placeholder]'))for(const attr of ['aria-label','title','placeholder'])if(/[\u3040-\u30ff\u3400-\u9fff]/u.test(el.getAttribute(attr)||''))leftovers.push(el.getAttribute(attr));
  assert.deepEqual(leftovers,[],context+' has complete English display coverage');
}

test('English menu switches safely, restores static text, persists separately, and works without storage', t => {
  const h=harness(t),canonical=JSON.stringify(h.window.EASY_DATA),before=h.snapshot();
  setLanguage(h,'en');
  assert.equal(h.document.documentElement.lang,'en');assert.equal(h.get('#language-select').value,'en');
  assert.equal(h.get('.skip').textContent,'Skip to content');assert.match(h.document.title,/Small discoveries/);assertEnglish(h,'map');
  assert.deepEqual(h.snapshot(),before,'locale does not change progress schema or records');
  assert.equal(h.storage.get(LANGUAGE_STORE),'en');
  h.click('.hero-start');h.click('[data-token="'+D.missions[0].answer.tokenId+'"]');h.click('[data-action="hint"]');
  const draft=h.snapshot();
  setLanguage(h,'ja');
  assert.equal(h.document.documentElement.lang,'ja');assert.equal(h.get('.skip').textContent,'本文へ進む');assert.match(h.document.title,/小さな発見/);
  assert.equal(h.get('.hint p').textContent,D.missions[0].hints[0]);assert.deepEqual(h.snapshot(),draft);
  setLanguage(h,'en');assertEnglish(h,'restored lesson');assert.deepEqual(h.snapshot(),draft);
  assert.equal(JSON.stringify(h.window.EASY_DATA),canonical,'canonical curriculum and log data are untouched');
  h.click('[data-action="glossary"]');assertEnglish(h,'glossary');h.click('[data-action="close"]');
  const reloaded=harness(t,h.snapshot(),{otherStorage:{[LANGUAGE_STORE]:h.storage.get(LANGUAGE_STORE)}});
  assert.equal(reloaded.document.documentElement.lang,'en');assertEnglish(reloaded,'reload');
  const blocked=harness(t,null,{failStorage:true});setLanguage(blocked,'en');assertEnglish(blocked,'storage unavailable');blocked.click('[data-action="export"]');assert.equal(blocked.downloads.length,1);
});

test('all 63 English missions, all hints and solutions, feedback, and graduation report exports work offline', t => {
  const h=harness(t,null,{otherStorage:{[LANGUAGE_STORE]:'en'}});
  for(const level of D.levels){
    h.click('[data-level="'+level.id+'"]');assertEnglish(h,level.id+' map');h.click('.hero-start');
    for(const mission of D.missions.filter(m=>m.level===level.id)){
      assert.equal(h.get('.lesson-title h1').textContent,EN[mission.title]);
      for(const [index,step] of (mission.steps||[mission]).entries()){
        assert.equal(h.get('#task-heading').textContent,EN[step.task]);assertEnglish(h,mission.id+' initial');
        for(const hint of step.hints){h.click('[data-action="hint"]');assert.equal([...h.document.querySelectorAll('.hint p')].at(-1).textContent,EN[hint]);}
        h.click('[data-action="solution"]');assert.equal(h.get('.solution p').textContent,EN[step.solution]);assertEnglish(h,mission.id+' help');
        fillAnswerThroughDOM(h,step);assertEnglish(h,mission.id+' draft');
        if(step.kind==='report'&&mission.kind==='investigation')assert.equal(h.get('[data-action="export-report"]').disabled,true);
        h.submit();assert.ok(h.document.querySelector('.feedback.success'),mission.id+' passes in English');assertEnglish(h,mission.id+' feedback');
        if(step.kind==='report'&&mission.kind==='investigation'){
          const preview=h.get('.report-preview-text').textContent;
          const expected=['fact','limit','next'].map(group=>EN[step.choices.find(c=>c.id===step.answer.parts[group]).label]).join(' ');
          assert.equal(preview,expected);h.click('[data-action="export-report"]');
          assert.equal(h.downloads.at(-1).content,EN[mission.title]+'\n\n'+expected+'\n');
          const snapshot=h.snapshot();setLanguage(h,'ja');setLanguage(h,'en');assert.deepEqual(h.snapshot(),snapshot,'completed report remains valid across locale switches');
        }
        if(index<(mission.steps?.length||1)-1)h.click('[data-action="advance"]');
      }
      h.click('[data-action="'+(mission.chapter==='graduate'?'finish':'next')+'"]');
    }
  }
  assert.equal(E.stats(E.hydrate(h.snapshot())).completed,63);assertEnglish(h,'completed map');
  assert.equal(h.downloads.length,3,'each graduation exports its English report');
});

test('English wrong answers, imports and bilingual search remain localized and preserve proofs', async t => {
  const h=harness(t,null,{otherStorage:{[LANGUAGE_STORE]:'en'}});h.click('.hero-start');
  h.click('[data-token="'+D.missions[0].tokens.find(x=>x.id!==D.missions[0].answer.tokenId).id+'"]');h.submit();assertEnglish(h,'incorrect token');
  await h.importFile('{"format":"invalid"}');assertEnglish(h,'invalid import');
  await h.importFile(legacyText);assertEnglish(h,'legacy import confirmation');h.click('[data-action="close"]');
  const m=E.getMission('m-f4'),search=harness(t,saveBefore('m-f4'),{otherStorage:{[LANGUAGE_STORE]:'en'}});search.click('.hero-start');
  search.input('#log-query','Read the');
  for(const id of m.answer.rowIds)search.click('[data-select="'+id+'"]');
  const before=search.snapshot();setLanguage(search,'ja');assert.deepEqual(search.snapshot(),before);setLanguage(search,'en');search.submit();
  assert.ok(search.document.querySelector('.feedback.success'));assertEnglish(search,'English evidence search');
  assert.equal(E.hydrate(search.snapshot()).records['m-f4'].completed,true,'English query proof validates in Node and after reload');
});


test('locked missions remain keyboard-reachable and explain prerequisites without navigation', t => {
  const h = harness(t);
  const locked = h.get('.mission-row[data-open="r2"]');
  assert.equal(locked.disabled, false);
  assert.equal(locked.getAttribute('aria-disabled'), 'true');
  locked.focus();
  assert.equal(h.document.activeElement, locked);
  h.click('.mission-row[data-open="r2"]');
  assert.ok(h.document.querySelector('.map-page'));
  assert.match(h.get('#toast').textContent, /先にひとつ前/);
  assert.equal(h.snapshot().progress.currentId, 'r1');
  assert.equal(h.get('.hero-art').getAttribute('role'), 'img');
  assert.equal(h.get('.top-flags').getAttribute('role'), 'img');
});

test('unfinished practice can hide hints and restart without losing help history', t => {
  const h = harness(t);
  h.click('.hero-start');
  h.click('[data-action="hint"]');
  h.click('[data-action="solution"]');
  h.click('[data-action="retry"]');
  assert.equal(h.document.querySelector('.hint'), null);
  assert.equal(h.document.querySelector('.solution'), null);
  const record = h.snapshot().progress.records.r1;
  assert.equal(record.completed, false);
  assert.equal(record.assisted, true);
  assert.equal(record.attemptAssisted, false);
  fillAnswerThroughDOM(h, E.getMission('r1')); h.submit();
  assert.equal(h.snapshot().progress.records.r1.independent, true);
});

test('graduation progress is an ordered list and the mission task has one copy', t => {
  const h = harness(t, saveBefore('g1'));
  h.click('.hero-start');
  assert.equal(h.get('.investigation-steps').tagName, 'OL');
  assert.equal(h.document.querySelectorAll('.investigation-steps > li').length, E.getMission('g1').steps.length);
  assert.equal(h.document.querySelectorAll('[aria-current="step"]').length, 1);
  assert.equal(h.document.querySelector('.mobile-task'), null);
  assert.equal(h.get('#main').textContent.split(E.getMission('g1').steps[0].task).length-1, 1);
});

test('IME composition preserves selected rows and saved query until committed', t => {
  const h = harness(t, saveBefore('f2'));
  h.click('.hero-start');
  h.input('#log-query', E.getMission('f2').answer.query);
  const id = E.getMission('f2').answer.rowIds[0];
  h.click(`[data-select="${id}"]`);
  const field = h.get('#log-query');
  field.dispatchEvent(new h.window.CompositionEvent('compositionstart', { bubbles: true }));
  h.input('#log-query', '途中');
  assert.deepEqual(h.snapshot().progress.records.f2.input, {query:E.getMission('f2').answer.query,rowIds:[id]});
  assert.equal(h.get(`[data-select="${id}"]`).getAttribute('aria-pressed'), 'true');
  field.value = '別の検索';
  field.dispatchEvent(new h.window.CompositionEvent('compositionend', { bubbles: true }));
  assert.deepEqual(h.snapshot().progress.records.f2.input, {query:'別の検索',rowIds:[]});
});

test('incremental input localizes changed subtrees without walking the document', t => {
  const h = harness(t, saveBefore('f2'));
  h.click('.hero-start');
  const visited = [], original = h.document.createTreeWalker.bind(h.document);
  h.document.createTreeWalker = (...args) => { visited.push(args[0]); return original(...args); };
  h.input('#log-query', 'host');
  assert.ok(visited.length);
  assert.equal(visited.includes(h.document), false);
  assert.ok(visited.every(node => ['answer-summary','selected-count','source-items','filter-count'].includes(node.id)));
});

test('recovery downloads survive reload and remain available if browser backup writes fail', t => {
  const original = '{broken save';
  const existing = harness(t, null, {otherStorage:{[STORE+'.recovery']:original}});
  existing.click('[data-action="export-recovery"]');
  assert.equal(existing.downloads[0].name, 'socroom-easy-recovery.json');
  assert.equal(existing.downloads[0].content, original);
  const blocked = harness(t, original, {failWriteKeys:[STORE+'.recovery']});
  blocked.click('[data-action="export-recovery"]');
  assert.equal(blocked.downloads[0].content, original);
  assert.equal(blocked.storage.get(STORE), original);
});

test('legacy key is retained until the migrated current save is written successfully', t => {
  const h = harness(t, null, {otherStorage:{[LEGACY_STORE]:legacyText},failWriteKeys:[STORE]});
  assert.equal(h.storage.get(LEGACY_STORE), legacyText);
  assert.equal(h.storage.has(STORE), false);
  assert.match(h.get('#save-status').textContent, /自動保存できません/);
});

test('English title punctuation and live announcements use English separators', t => {
  const h = harness(t);
  h.input('#language-select','en','change');
  assert.match(h.get('.section-heading h2').textContent, /: /);
  assert.doesNotMatch(h.get('.section-heading h2').textContent, /：/);
  h.click('.hero-start');
  assert.doesNotMatch(h.get('#announcement').textContent, /[。：]/);
  assert.match(h.get('#announcement').textContent, /\. /);
});


test('question titles retain their punctuation in Japanese and English announcements', t => {
  const h = harness(t, saveBefore('m-r1'));
  const mission = E.getMission('m-r1');
  h.click('.hero-start');
  assert.equal(h.get('#announcement').textContent, mission.title + mission.task);
  h.click('[data-action="map"]');
  h.input('#language-select', 'en', 'change');
  h.click('.hero-start');
  const title = h.window.EasyI18n.t(mission.title);
  const task = h.window.EasyI18n.t(mission.task);
  assert.match(title, /\?$/);
  assert.equal(h.get('#announcement').textContent, title + ' ' + task);
  assert.doesNotMatch(h.get('#announcement').textContent, /[?!]\./);
});

test('optional graduation guidance preserves assisted completion and same-room continuation offline', t => {
  const fresh = harness(t);
  assert.equal(fresh.document.querySelector('.optional-recommendation'), null);
  assert.equal(fresh.get('.topbar .brand-version').textContent, 'v' + require('../package.json').version);
  for (const [levelId, target, nextLevel] of [['beginner','linuxroom.html','intermediate'], ['advanced','logroom.html',null]]) {
    const mission = D.missions.filter(m => m.level === levelId).at(-1);
    const progress = E.hydrate(saveBefore(mission.id));
    E.revealHint(progress, mission.id);
    for (let index = 0; index < mission.steps.length; index++) {
      E.setInput(progress, mission.id, answerInput(E.currentStep(progress, mission.id)));
      assert.equal(E.submit(progress, mission.id).passed, true);
      if (index < mission.steps.length - 1) E.advanceStep(progress, mission.id);
    }
    const h = harness(t, E.exportProgress(progress), {url:'file:///training/socroom-easy.html'});
    const link = h.get('.optional-recommendation a');
    assert.equal(link.getAttribute('href'), target);
    assert.equal(link.getAttribute('target'), '_blank');
    assert.match(h.get('.optional-recommendation small').textContent, /同じフォルダ/);
    const before = h.snapshot().progress.records;
    h.input('#language-select', 'en', 'change');
    assert.equal(h.get('.topbar .brand-version').textContent, 'v' + require('../package.json').version);
    assert.doesNotMatch(h.get('.bridge-card').textContent, /[\u3040-\u30ff\u3400-\u9fff]/u);
    h.get('.graduation-reflection').open = true;
    assert.deepEqual(h.snapshot().progress.records, before);
    assert.equal(E.stats(E.hydrate(h.snapshot()), levelId).points, 2100);
    assert.equal(E.stats(E.hydrate(h.snapshot()), levelId).assisted, 1);
    h.click('.graduation-reflection [data-open]');
    assert.equal(h.document.querySelector('.lesson-title') !== null, true);
    assert.equal(E.stats(E.hydrate(h.snapshot()), levelId).completed, 21);
    h.click('[data-action="map"]');
    if (nextLevel) {
      h.click(`.bridge-card [data-level="${nextLevel}"]`);
      assert.equal(h.get('.level-card.active').dataset.level, nextLevel);
      assert.equal(E.stats(E.hydrate(h.snapshot()), nextLevel).completed, 0);
    } else assert.equal(h.document.querySelector('.bridge-card [data-level]'), null);
  }
});
