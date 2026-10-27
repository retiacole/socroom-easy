(function (root) {
  'use strict';

  let DATA = root.EASY_DATA;
  if (!DATA && typeof require === 'function') {
    const loaded = require('./data.js');
    DATA = loaded && Array.isArray(loaded.missions) ? loaded : root.EASY_DATA;
  }
  if (!DATA || !Array.isArray(DATA.missions) || !DATA.missions.length) throw new Error('学習データを読み込めませんでした。');
  const I18N = root.EasyI18n || (typeof require === 'function' ? require('./i18n.js') : null);
  const VERSION = 'socroom-easy-2';
  const LEGACY_VERSION = 'socroom-easy-1';
  const GROUPS = ['fact', 'limit', 'next'];
  const MAX_HISTORY = 100;
  const missions = new Map(DATA.missions.map(mission => [mission.id, mission]));
  const own = (object, key) => Object.prototype.hasOwnProperty.call(object, key);
  const plain = value => value !== null && typeof value === 'object' && !Array.isArray(value);
  const copy = value => JSON.parse(JSON.stringify(value));
  const fail = message => { throw new Error(message); };
  const missionLevel = mission => mission.level || 'beginner';
  const levelIds = Array.isArray(DATA.levels) && DATA.levels.length
    ? DATA.levels.map(level => level.id) : [...new Set(DATA.missions.map(missionLevel))];
  const levelMissions = new Map(levelIds.map(id => [id, DATA.missions.filter(mission => missionLevel(mission) === id)]));
  if (new Set(levelIds).size !== levelIds.length || levelIds.some(id => typeof id !== 'string' || !levelMissions.get(id).length)
    || DATA.missions.some(mission => !levelMissions.has(missionLevel(mission)))) fail('難易度の学習データが正しくありません。');
  function getLevelMissions(id) {
    if (typeof id !== 'string' || !levelMissions.has(id)) fail('存在しない難易度です。');
    return levelMissions.get(id);
  }

  function getMission(id) {
    if (typeof id !== 'string' || !missions.has(id)) fail('存在しないミッションです。');
    return missions.get(id);
  }
  function steps(mission) { return mission.kind === 'investigation' ? mission.steps : [mission]; }
  function record(progress, id) {
    getMission(id);
    if (!progress || !progress.records || !own(progress.records, id)) fail('進捗データがありません。');
    return progress.records[id];
  }
  function currentStep(progress, id = progress.currentId) {
    const mission = getMission(id);
    return steps(mission)[record(progress, id).stage];
  }
  function emptyInput(step) {
    switch (step.kind) {
      case 'token': return { tokenId: '' };
      case 'text': return { text: '' };
      case 'rows': case 'evidence': return { rowIds: [] };
      case 'filter': return { query: '', rowIds: [] };
      case 'order': return { orderIds: step.rows.map(row => row.id) };
      case 'choice': return { choiceId: '' };
      case 'report': return { parts: { fact: '', limit: '', next: '' } };
      default: return fail('対応していない課題形式です。');
    }
  }
  function createRecord(mission) {
    return {
      input: emptyInput(steps(mission)[0]), stage: 0, completed: false, attempts: 0,
      hints: 0, hintCounts: steps(mission).map(() => 0), revealed: false,
      revealedStages: [], assisted: false, feedback: null, stageResults: [], solved: [],
      attemptAssisted: false, attemptHintCounts: steps(mission).map(() => 0), attemptRevealedStages: [],
      independentSolved: [], independent: false
    };
  }
  function createProgress() {
    return {
      version: VERSION, currentLevel: levelIds[0], currentId: levelMissions.get(levelIds[0])[0].id,
      currentByLevel: Object.fromEntries(levelIds.map(id => [id, levelMissions.get(id)[0].id])),
      records: Object.fromEntries(DATA.missions.map(mission => [mission.id, createRecord(mission)])), history: []
    };
  }
  function isUnlocked(progress, id) {
    const group = getLevelMissions(missionLevel(getMission(id)));
    const index = group.findIndex(mission => mission.id === id);
    return group.slice(0, index).every(mission => record(progress, mission.id).completed);
  }
  function requireUnlocked(progress, id) {
    if (!isUnlocked(progress, id)) fail('先にひとつ前のミッションをクリアしてください。');
    return record(progress, id);
  }
  function addHistory(progress, event) {
    progress.history.push(event);
    if (progress.history.length > MAX_HISTORY) progress.history.splice(0, progress.history.length - MAX_HISTORY);
  }
  function limitedString(value, max, label) {
    if (typeof value !== 'string' || value.length > max) fail(`${label}が長すぎるか、形式が正しくありません。`);
    return value;
  }
  function ids(value, known, label) {
    if (!Array.isArray(value) || value.length > known.length || new Set(value).size !== value.length) fail(`${label}の形式が正しくありません。`);
    if (value.some(id => typeof id !== 'string' || !known.includes(id))) fail(`${label}に存在しない項目があります。`);
    return value.slice();
  }
  function selected(value, known, label) {
    if (typeof value !== 'string' || (value !== '' && !known.includes(value))) fail(`${label}に存在しない項目があります。`);
    return value;
  }
  // Choice, row, token and report-part IDs are persistence keys. Keep them stable
  // when editing lesson wording; renaming an ID requires an explicit migration.
  function cleanInput(step, raw) {
    if (!plain(raw) || Object.keys(raw).length > 7) fail('回答の形式が正しくありません。');
    const base = emptyInput(step);
    const allowed = Object.keys(base);
    if (Object.keys(raw).some(key => !allowed.includes(key))) fail('この課題では使わない回答項目があります。');
    const input = { ...base, ...raw };
    const rowIds = (step.rows || []).map(row => row.id);
    const choiceIds = (step.choices || []).map(choice => choice.id);
    if (own(input, 'tokenId')) input.tokenId = selected(input.tokenId, (step.tokens || []).map(token => token.id), 'ログの項目');
    if (own(input, 'text')) input.text = limitedString(input.text, 240, '回答');
    if (own(input, 'query')) input.query = limitedString(input.query, 160, '検索語');
    if (own(input, 'rowIds')) input.rowIds = ids(input.rowIds, rowIds, '選んだ行');
    if (own(input, 'orderIds')) {
      input.orderIds = ids(input.orderIds, rowIds, '並び順');
      if (input.orderIds.length !== rowIds.length) fail('並び順にはすべてのログ行が必要です。');
    }
    if (own(input, 'choiceId')) input.choiceId = selected(input.choiceId, choiceIds, '選択肢');
    if (own(input, 'parts')) {
      if (!plain(input.parts) || Object.keys(input.parts).some(key => !GROUPS.includes(key))) fail('報告の形式が正しくありません。');
      input.parts = Object.fromEntries(GROUPS.map(group => [group, selected(own(input.parts, group) ? input.parts[group] : '', (step.choices || []).filter(choice => choice.group === group).map(choice => choice.id), '報告の選択肢')]));
    }
    return input;
  }
  function normalizeText(value, sensitive = false) {
    const text = String(value ?? '').normalize('NFKC').trim().replace(/\s+/g, ' ');
    return sensitive ? text : text.toLocaleLowerCase('en-US');
  }
  function searchableRow(row) {
    const reference = row.sourceType && row.sourceType !== 'log';
    const source = reference ? [row.title, row.body].join(' ') : [row.raw || row.body, row.title, row.event, row.note].join(' ');
    // Search both display languages regardless of the selected locale, so saved
    // queries and their grading proofs remain valid after switching languages.
    const english = I18N?.english(source) || source;
    return normalizeText(english === source ? source : source + ' ' + english);
  }
  function filterRows(rows, query) {
    const normalized = normalizeText(query);
    return rows.filter(row => !normalized || searchableRow(row).includes(normalized));
  }
  function sameSet(left, right) { return left.length === right.length && left.every(id => right.includes(id)); }
  function sameOrder(left, right) { return left.length === right.length && left.every((id, index) => id === right[index]); }
  function selectionFeedback(input, answer) {
    const difference = input.length - answer.length;
    if (difference < 0) return `選んだ資料が ${-difference} 件足りません。条件に合う資料を見直しましょう。`;
    if (difference > 0) return `選んだ資料が ${difference} 件多いです。条件と関係のない資料を見直しましょう。`;
    return '選んだ資料の件数は合っています。対象・時刻・条件を比べ、資料の組み合わせを見直しましょう。';
  }
  function grade(step, input) {
    const answer = step.answer;
    let passed = false;
    let message = 'まだ条件がそろっていません。課題文と資料をもう一度見てみましょう。';
    switch (step.kind) {
      case 'token':
        passed = input.tokenId === answer.tokenId;
        message = '求められている情報に対応する項目を、ログの中から選びましょう。';
        break;
      case 'text': {
        const normalizeAnswer = value => {
          const normalized = normalizeText(value, answer.caseSensitive === true);
          return answer.numericCount === true && /^\d+\s*[件回]?$/.test(normalized)
            ? normalized.replace(/\s*[件回]$/, '').trim() : normalized;
        };
        passed = answer.values.some(value => normalizeAnswer(input.text) === normalizeAnswer(value));
        message = 'ログに書かれた値を確かめてください。前後の空白は採点に影響しません。';
        if (answer.caseSensitive === true) message = [message, '大文字と小文字もログに合わせてください。'].join(' ');
        break;
      }
      case 'rows': case 'evidence':
        passed = sameSet(input.rowIds, answer.rowIds);
        message = selectionFeedback(input.rowIds, answer.rowIds);
        break;
      case 'filter': {
        const query = normalizeText(input.query);
        const visible = filterRows(step.rows, query).map(row => row.id);
        const flexible = step.searchMode === 'evidence';
        const queryPassed = flexible
          ? !!query && visible.length < step.rows.length && answer.rowIds.every(id => visible.includes(id))
          : query === normalizeText(answer.query);
        passed = queryPassed && sameSet(input.rowIds, answer.rowIds);
        message = !queryPassed
          ? flexible
            ? '必要な証拠をすべて残し、少なくとも 1 行を除ける検索語で絞り込みましょう。'
            : '検索欄に、課題で指定された検索語を入力して絞り込みましょう。行を選ぶだけでは検索の練習は完了しません。'
          : `検索で必要な証拠を残せています。${selectionFeedback(input.rowIds, answer.rowIds)}`;
        break;
      }
      case 'order':
        passed = sameOrder(input.orderIds, answer.rowIds);
        message = `${input.orderIds.filter((id, index) => id !== answer.rowIds[index]).length} か所の位置が違います。各行の時刻を比較し、最も早い出来事から順番に並べましょう。`;
        break;
      case 'choice': {
        passed = input.choiceId === answer.choiceId;
        const choice = (step.choices || []).find(item => item.id === input.choiceId);
        message = choice && choice.feedback || '資料から言えることを選びましょう。';
        break;
      }
      case 'report': {
        passed = GROUPS.every(group => input.parts[group] === answer.parts[group]);
        const wrongGroup = GROUPS.find(group => input.parts[group] !== answer.parts[group]);
        const choice = wrongGroup && (step.choices || []).find(item => item.id === input.parts[wrongGroup]);
        message = choice && choice.feedback || '事実・まだ分からないこと・次の確認を、それぞれひとつずつ選びましょう。';
        break;
      }
      default: fail('対応していない課題形式です。');
    }
    if (passed) {
      const feedback = step.kind === 'choice'
        ? step.choices.find(choice => choice.id === input.choiceId)?.feedback
        : step.kind === 'report'
          ? GROUPS.map(group => step.choices.find(choice => choice.id === input.parts[group])?.feedback).filter(Boolean).join(' ')
          : '';
      message = feedback || step.answerExplanation || '正解です。資料を根拠に判断できました。';
    }
    return { passed, message };
  }
  function setInput(progress, id, patch) {
    const rec = requireUnlocked(progress, id);
    if (!plain(patch)) fail('回答の形式が正しくありません。');
    const combined = { ...rec.input, ...patch };
    if (own(patch, 'parts')) {
      if (!plain(patch.parts)) fail('報告の形式が正しくありません。');
      combined.parts = { ...rec.input.parts, ...patch.parts };
    }
    const next = cleanInput(currentStep(progress, id), combined);
    if (JSON.stringify(rec.input) !== JSON.stringify(next)) {
      rec.input = next;
      rec.feedback = null;
      rec.stageResults.splice(rec.stage);
    }
    return rec.input;
  }
  function submit(progress, id = progress.currentId) {
    const rec = requireUnlocked(progress, id);
    const step = currentStep(progress, id);
    rec.input = cleanInput(step, rec.input);
    const result = grade(step, rec.input);
    rec.attempts = Math.min(1000000, rec.attempts + 1);
    rec.feedback = result;
    if (result.passed) {
      const proof = { input: copy(rec.input), assisted: rec.attemptAssisted };
      rec.stageResults[rec.stage] = { passed: true, input: copy(rec.input), message: result.message, assisted: rec.attemptAssisted };
      rec.solved[rec.stage] = proof;
      rec.completed = steps(getMission(id)).every((_, index) => !!rec.solved[index]);
      if (!rec.attemptAssisted && steps(getMission(id)).every((_, index) => rec.stageResults[index] && !rec.stageResults[index].assisted)) {
        rec.independentSolved = rec.stageResults.map(result => ({ input: copy(result.input), assisted: false }));
        rec.independent = true;
      }
    } else rec.stageResults.splice(rec.stage);
    addHistory(progress, { type: 'submit', id, stage: rec.stage, passed: result.passed });
    return { ...result, completed: rec.completed };
  }
  function revealHint(progress, id = progress.currentId) {
    const rec = requireUnlocked(progress, id);
    const step = currentStep(progress, id);
    const count = rec.attemptHintCounts[rec.stage];
    if (count < Math.min(3, step.hints.length)) {
      rec.attemptHintCounts[rec.stage] += 1;
      rec.hintCounts[rec.stage] = Math.max(rec.hintCounts[rec.stage], rec.attemptHintCounts[rec.stage]);
      rec.hints = rec.hintCounts.reduce((sum, value) => sum + value, 0);
      rec.assisted = true;
      rec.attemptAssisted = true;
      addHistory(progress, { type: 'hint', id, stage: rec.stage });
    }
    return step.hints[Math.max(0, rec.attemptHintCounts[rec.stage] - 1)] || '';
  }
  function revealSolution(progress, id = progress.currentId) {
    const rec = requireUnlocked(progress, id);
    if (!rec.attemptRevealedStages.includes(rec.stage)) {
      rec.attemptRevealedStages.push(rec.stage);
      addHistory(progress, { type: 'solution', id, stage: rec.stage });
    }
    if (!rec.revealedStages.includes(rec.stage)) rec.revealedStages.push(rec.stage);
    rec.revealed = true;
    rec.assisted = true;
    rec.attemptAssisted = true;
    return currentStep(progress, id).solution;
  }
  function advanceStep(progress, id = progress.currentId) {
    const rec = requireUnlocked(progress, id);
    const missionSteps = steps(getMission(id));
    if (missionSteps.length === 1 || rec.stage >= missionSteps.length - 1) fail('このミッションに次のステップはありません。');
    if (!rec.feedback || !rec.feedback.passed || !rec.stageResults[rec.stage]) fail('今のステップをクリアしてから進んでください。');
    rec.stage += 1;
    rec.input = emptyInput(missionSteps[rec.stage]);
    rec.feedback = null;
    addHistory(progress, { type: 'advance', id, stage: rec.stage });
    return currentStep(progress, id);
  }
  function openMission(progress, id) {
    requireUnlocked(progress, id);
    const mission = getMission(id);
    progress.currentId = id;
    progress.currentLevel = missionLevel(mission);
    progress.currentByLevel[progress.currentLevel] = id;
    return mission;
  }
  function selectLevel(progress, levelId) {
    getLevelMissions(levelId);
    return openMission(progress, progress.currentByLevel[levelId]);
  }
  function retry(progress, id = progress.currentId) {
    const rec = requireUnlocked(progress, id);
    rec.stage = 0;
    rec.input = emptyInput(steps(getMission(id))[0]);
    rec.feedback = null;
    rec.stageResults = [];
    rec.attemptAssisted = false;
    rec.attemptHintCounts = steps(getMission(id)).map(() => 0);
    rec.attemptRevealedStages = [];
    addHistory(progress, { type: 'retry', id, stage: 0 });
    return rec;
  }
  function integer(value, min, max, label) {
    if (!Number.isInteger(value) || value < min || value > max) fail(`${label}の形式が正しくありません。`);
    return value;
  }
  function readProof(raw, step) {
    if (!plain(raw) || !plain(raw.input) || typeof raw.assisted !== 'boolean') fail('保存された回答の形式が正しくありません。');
    const input = cleanInput(step, raw.input);
    const result = grade(step, input);
    if (!result.passed) fail('保存された正解の回答が課題の条件と一致しません。');
    return { input, assisted: raw.assisted };
  }
  function hydrate(raw, { onRecovery } = {}) {
    if (!plain(raw)) fail('進捗ファイルの形式が正しくありません。');
    if (own(raw, 'format')) {
      if (raw.format !== 'socroom-easy-save' || ![1, 2].includes(raw.version) || !plain(raw.progress)
        || raw.progress.version !== (raw.version === 1 ? LEGACY_VERSION : VERSION)) fail('SOCroom-easy の保存ファイルではありません。');
      raw = raw.progress;
    }
    const legacy = raw.version === LEGACY_VERSION;
    if ((!legacy && raw.version !== VERSION) || !plain(raw.records) || !Array.isArray(raw.history) || raw.history.length > MAX_HISTORY) fail('進捗データの形式またはバージョンが正しくありません。');
    const savedMissions = legacy ? getLevelMissions('beginner') : DATA.missions;
    const savedIds = new Set(savedMissions.map(mission => mission.id));
    const recovery = {
      resetMissionIds: [], addedMissionIds: [], ignoredMissionIds: [], adjustedMissionIds: [],
      discardedHistory: 0, repairedCursors: false
    };
    recovery.ignoredMissionIds = Object.keys(raw.records).filter(id => !savedIds.has(id));
    const adjusted = new Set();
    const progress = createProgress();
    const oldRecords = new Set();
    for (const mission of savedMissions) {
      if (!own(raw.records, mission.id)) {
        recovery.addedMissionIds.push(mission.id);
        continue;
      }
      const saved = raw.records[mission.id];
      try {
        if (!plain(saved)) fail('ミッションの進捗がありません。');
        const rec = progress.records[mission.id];
        const missionSteps = steps(mission);
        const count = missionSteps.length;
        rec.stage = integer(saved.stage, 0, count - 1, 'ステップ');
        rec.attempts = integer(saved.attempts, 0, 1000000, '回答回数');
        if (!Array.isArray(saved.hintCounts) || saved.hintCounts.length !== count) fail('ヒントの記録が正しくありません。');
        // Lifetime help remains valid when an editor reduces the available hints.
        rec.hintCounts = saved.hintCounts.map(value => integer(value, 0, 3, 'ヒント数'));
        rec.hints = rec.hintCounts.reduce((sum, value) => sum + value, 0);
        if (!Array.isArray(saved.revealedStages) || saved.revealedStages.length > count || new Set(saved.revealedStages).size !== saved.revealedStages.length) fail('解答表示の記録が正しくありません。');
        rec.revealedStages = saved.revealedStages.map(value => integer(value, 0, count - 1, '解答表示のステップ'));
        rec.revealed = rec.revealedStages.length > 0;
        if (typeof saved.assisted !== 'boolean') fail('学習補助の記録が正しくありません。');
        rec.assisted = saved.assisted || rec.hints > 0 || rec.revealed;
        const attemptFields = ['attemptAssisted', 'attemptHintCounts', 'attemptRevealedStages', 'independentSolved'];
        if (attemptFields.some(key => own(saved, key))) {
          if (!attemptFields.every(key => own(saved, key)) || typeof saved.attemptAssisted !== 'boolean'
            || !Array.isArray(saved.attemptHintCounts) || saved.attemptHintCounts.length !== count
            || !Array.isArray(saved.attemptRevealedStages) || saved.attemptRevealedStages.length > count
            || new Set(saved.attemptRevealedStages).size !== saved.attemptRevealedStages.length
            || !Array.isArray(saved.independentSolved) || ![0, count].includes(saved.independentSolved.length)
            || Object.keys(saved.independentSolved).length !== saved.independentSolved.length) fail('再挑戦の記録が正しくありません。');
          rec.attemptHintCounts = saved.attemptHintCounts.map((value, index) => {
            const previous = integer(value, 0, 3, '今回のヒント数');
            const current = Math.min(previous, missionSteps[index].hints.length);
            if (current !== previous) adjusted.add(mission.id);
            return current;
          });
          rec.attemptRevealedStages = saved.attemptRevealedStages.map(value => integer(value, 0, count - 1, '今回の解答表示のステップ'));
          if (rec.attemptHintCounts.some((value, index) => value > 0 && index > rec.stage)
            || rec.attemptRevealedStages.some(index => index > rec.stage)) fail('未完了のステップに学習補助の記録があります。');
          rec.attemptAssisted = saved.attemptAssisted || saved.attemptHintCounts.some(Boolean) || rec.attemptRevealedStages.length > 0;
          rec.independentSolved = saved.independentSolved.map((proof, index) => {
            const verified = readProof(proof, missionSteps[index]);
            if (verified.assisted) fail('独力クリアの回答に学習補助の記録があります。');
            return verified;
          });
        } else {
          oldRecords.add(mission.id);
          // Older saves kept hints visible after retry. Their current attempt remains
          // assisted until a fresh retry explicitly hides that help.
          rec.attemptAssisted = rec.assisted;
          rec.attemptHintCounts = rec.hintCounts.map((value, index) => index <= rec.stage ? Math.min(value, missionSteps[index].hints.length) : 0);
          rec.attemptRevealedStages = rec.revealedStages.filter(index => index <= rec.stage);
        }
        if (!Array.isArray(saved.solved) || saved.solved.length > count || !Array.isArray(saved.stageResults) || saved.stageResults.length > rec.stage + 1) fail('保存された回答の数が正しくありません。');
        if (Object.keys(saved.solved).length !== saved.solved.length || Object.keys(saved.stageResults).length !== saved.stageResults.length) fail('保存された回答に抜けがあります。');
        rec.solved = saved.solved.map((proof, index) => readProof(proof, missionSteps[index]));
        rec.stageResults = saved.stageResults.map((proof, index) => {
          if (!plain(proof) || proof.passed !== true) fail('ステップの回答履歴が正しくありません。');
          const verified = readProof(proof, missionSteps[index]);
          if (!rec.solved[index]) rec.solved[index] = copy(verified);
          return { passed: true, ...verified, message: grade(missionSteps[index], verified.input).message };
        });
        if (rec.stage > rec.stageResults.length) fail('未完了のステップを飛ばした保存データです。');
        if (rec.solved.some(proof => proof.assisted) || rec.stageResults.some(proof => proof.assisted)) rec.assisted = true;
        if (rec.stageResults.some(proof => proof.assisted)) rec.attemptAssisted = true;
        rec.completed = missionSteps.every((_, index) => !!rec.solved[index]);
        if (rec.independentSolved.length && !rec.completed) fail('未完了のミッションに独力クリアの記録があります。');
        rec.input = cleanInput(missionSteps[rec.stage], saved.input);
        if (saved.feedback !== null && saved.feedback !== undefined) {
          if (!plain(saved.feedback) || typeof saved.feedback.passed !== 'boolean') fail('回答結果の形式が正しくありません。');
          rec.feedback = grade(missionSteps[rec.stage], rec.input);
          if (rec.feedback.passed && !rec.stageResults[rec.stage]) rec.feedback = null;
        }
        if (rec.stageResults[rec.stage] && JSON.stringify(rec.stageResults[rec.stage].input) !== JSON.stringify(rec.input)) fail('下書きとステップの回答履歴が一致しません。');
      } catch (error) {
        // Content edits or corrupt submissions invalidate only this mission. Valid
        // later completions remain earned, but prerequisites still gate access.
        progress.records[mission.id] = createRecord(mission);
        oldRecords.delete(mission.id);
        adjusted.delete(mission.id);
        recovery.resetMissionIds.push(mission.id);
      }
    }
    const resetIds = new Set(recovery.resetMissionIds);
    const attemptHistory = new Map();
    const lastRetry = new Map();
    raw.history.forEach((event, index) => {
      if (plain(event) && event.type === 'retry' && savedIds.has(event.id) && event.stage === 0) lastRetry.set(event.id, index);
    });
    progress.history = raw.history.flatMap((event, index) => {
      let mission, result;
      try {
        if (!plain(event) || !['submit', 'hint', 'solution', 'advance', 'retry'].includes(event.type)) fail('学習履歴の形式が正しくありません。');
        mission = getMission(event.id);
        if (!savedIds.has(event.id) || resetIds.has(event.id) || !own(raw.records, event.id)) throw new Error('obsolete history');
        result = { type: event.type, id: event.id, stage: integer(event.stage, 0, steps(mission).length - 1, '履歴のステップ') };
        // Older attempts may contain later-stage help, but the current attempt
        // cannot have events beyond its restored stage. Drop impossible events
        // before replay so a repaired save remains valid on the next hydration.
        if ((event.type === 'retry' && event.stage !== 0)
          || (index > (lastRetry.get(event.id) ?? -1) && event.stage > progress.records[event.id].stage)) throw new Error('obsolete history');
        if (event.type === 'submit') {
          if (typeof event.passed !== 'boolean') fail('回答履歴の形式が正しくありません。');
          result.passed = event.passed;
        }
      } catch (error) {
        recovery.discardedHistory += 1;
        return [];
      }
      const rec = progress.records[event.id];
      if (!attemptHistory.has(event.id) || event.type === 'retry') {
        attemptHistory.set(event.id, { hints: steps(mission).map(() => 0), revealed: [], assisted: false });
      }
      const attempt = attemptHistory.get(event.id);
      if (event.type === 'hint') {
        attempt.hints[event.stage] = Math.min(3, steps(mission)[event.stage].hints.length, attempt.hints[event.stage] + 1);
        attempt.assisted = true;
        rec.hintCounts[event.stage] = Math.max(rec.hintCounts[event.stage], attempt.hints[event.stage]);
        rec.hints = rec.hintCounts.reduce((sum, value) => sum + value, 0);
        rec.assisted = true;
      }
      if (event.type === 'solution') {
        if (!attempt.revealed.includes(event.stage)) attempt.revealed.push(event.stage);
        attempt.assisted = true;
        if (!rec.revealedStages.includes(event.stage)) rec.revealedStages.push(event.stage);
        rec.revealed = true;
        rec.assisted = true;
      }
      return [result];
    });
    for (const mission of savedMissions) {
      const rec = progress.records[mission.id];
      const observed = attemptHistory.get(mission.id);
      if (observed) {
        rec.attemptHintCounts = rec.attemptHintCounts.map((value, index) => Math.max(value, observed.hints[index]));
        rec.attemptRevealedStages = [...new Set([...rec.attemptRevealedStages, ...observed.revealed])];
        rec.attemptAssisted ||= observed.assisted;
      }
      rec.hintCounts = rec.hintCounts.map((value, index) => Math.max(value, rec.attemptHintCounts[index]));
      rec.revealedStages = [...new Set([...rec.revealedStages, ...rec.attemptRevealedStages])];
      rec.hints = rec.hintCounts.reduce((sum, value) => sum + value, 0);
      rec.revealed = rec.revealedStages.length > 0;
      rec.assisted ||= rec.attemptAssisted || rec.hints > 0 || rec.revealed;
      if (oldRecords.has(mission.id)) {
        rec.attemptAssisted ||= rec.assisted;
        rec.attemptHintCounts = rec.hintCounts.map((value, index) => {
          if (index > rec.stage) return 0;
          const current = Math.min(value, steps(mission)[index].hints.length);
          if (current !== value) adjusted.add(mission.id);
          return current;
        });
        rec.attemptRevealedStages = rec.revealedStages.filter(index => index <= rec.stage);
        if (rec.completed && !rec.assisted) rec.independentSolved = copy(rec.solved);
      }
      rec.independent = rec.independentSolved.length === steps(mission).length;
    }
    const savedLevel = legacy ? 'beginner' : raw.currentLevel;
    if (levelIds.includes(savedLevel)) progress.currentLevel = savedLevel;
    else recovery.repairedCursors = true;
    for (const levelId of levelIds) {
      const cursor = legacy
        ? (levelId === 'beginner' ? raw.currentId : progress.currentByLevel[levelId])
        : plain(raw.currentByLevel) && own(raw.currentByLevel, levelId) ? raw.currentByLevel[levelId] : undefined;
      const valid = typeof cursor === 'string' && missions.has(cursor)
        && missionLevel(missions.get(cursor)) === levelId && isUnlocked(progress, cursor);
      if (valid) progress.currentByLevel[levelId] = cursor;
      else {
        progress.currentByLevel[levelId] = stats(progress, levelId).nextId || getLevelMissions(levelId)[0].id;
        recovery.repairedCursors = true;
      }
    }
    progress.currentId = progress.currentByLevel[progress.currentLevel];
    if (raw.currentId !== progress.currentId) recovery.repairedCursors = true;
    recovery.adjustedMissionIds = [...adjusted];
    if (recovery.resetMissionIds.length || recovery.addedMissionIds.length || recovery.ignoredMissionIds.length
      || recovery.adjustedMissionIds.length || recovery.discardedHistory || recovery.repairedCursors) {
      if (typeof onRecovery === 'function') onRecovery(recovery);
    }
    return progress;
  }
  function stats(progress, levelId) {
    const group = levelId === undefined ? DATA.missions : getLevelMissions(levelId);
    const nextGroup = getLevelMissions(levelId === undefined ? progress.currentLevel : levelId);
    const records = group.map(mission => record(progress, mission.id));
    const completed = records.filter(rec => rec.completed).length;
    const assisted = records.filter(rec => rec.completed && !rec.independent).length;
    return {
      completed, total: records.length, points: completed * 100,
      hintsUsed: records.reduce((sum, rec) => sum + rec.hints, 0),
      revealed: records.filter(rec => rec.revealed).length,
      assisted, independent: completed - assisted,
      nextId: nextGroup.find(mission => !record(progress, mission.id).completed)?.id || null,
      ready: completed === records.length
    };
  }
  function exportProgress(progress) {
    return { format: 'socroom-easy-save', version: 2, progress: copy(progress) };
  }
  const api = Object.freeze({ createProgress, getMission, currentStep, isUnlocked, setInput, submit, revealHint, revealSolution, advanceStep, openMission, selectLevel, retry, hydrate, stats, exportProgress, normalizeText, searchableRow, filterRows });
  root.EasyEngine = api;
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
})(typeof globalThis !== 'undefined' ? globalThis : this);
