# SOCroom-easy data and state contract

Single offline HTML; no runtime server, package download, CDN or network. Japanese and English learning interfaces. Globals `EASY_DATA` and `EasyEngine`; the data and engine also export CommonJS for local tests.

## Curriculum

Three independently selectable levels: `beginner`, `intermediate`, `advanced`. Each has 5 chapters × 4 short missions plus one graduation investigation with 4 stages. Each level unlocks sequentially within itself. Total: 63 missions, 63 flags, 6300 points. One completion awards 100 points once. Hints, solutions and mistakes do not subtract points. Retrying does not remove flags or erase assistance history.

Chapter IDs: `read`, `find`, `connect`, `evidence`, `respond`, `graduate`.
Beginner mission IDs: `r1`–`r4`, `f1`–`f4`, `c1`–`c4`, `e1`–`e4`, `d1`–`d4`, `g1`. Intermediate prefixes `m-`, advanced prefixes `a-`. Mission and answer IDs are persistent save identifiers. Keep choiceId, rowIds, tokenId and report parts stable, even when old names such as c3-attack, e3-accuse, d3-wipe or m-r1-request no longer describe their labels. Renaming requires an explicit migration. Wording and distractors may be improved without changing answer identifiers.

## Data

`EASY_DATA = {version:'socroom-easy-2', releaseVersion, levels, glossary, missions}`. `releaseVersion` is generated from package.json; it is separate from the stable progress schema version.

Level: `{id,title,tagline,description,prerequisite,chapters:[{id,title,subtitle}]}`. Chapter and investigation-stage titles contain no ordinal prefix; the UI supplies numbering. Glossary: `[{term,meaning,example}]`.

Mission: `{id,level,chapter,title,skill,minutes,brief,learn:[strings],example:{title,text},task,kind,sourceLabel,rows:[ROW],tokens?,showRaw?,choices?,answer,answerExplanation,hints:[3strings],solution,bridge:{tool,how},flag,steps?}`.

ROW is either a log `{id,raw,event?,note?}` or a card `{id,sourceType:'log'|'document'|'reply',title?,body}`. Token lessons with `showRaw:true` expand their complete raw log initially so realistic formats are visible before answering. All content renders as inert escaped text. Logs and documents are synthetic. Use documentation/private IPs and `.example` domains. Worked examples use different values from task answers. Every new term needed for a task is explained before it.

Interactions:

| Kind | Input | Answer |
| --- | --- | --- |
| token | `{tokenId}` | `{tokenId}`; tokens are literal fields with `{id,label,meaning}` |
| text | `{text}` | `{values:[acceptedStrings],caseSensitive?:false,numericCount?:false}` |
| rows | `{rowIds:[]}` | `{rowIds:[]}` exact set |
| filter | `{query,rowIds:[]}` | `{query,rowIds:[]}`; exact normalized query by default, or evidence-preserving narrowing with `searchMode:'evidence'`; exact selected set |
| order | `{orderIds:[]}` | `{rowIds:[]}` in order; initial rows must be shuffled |
| choice | `{choiceId}` | `{choiceId}`; choices have `{id,label,feedback}` |
| evidence | `{rowIds:[]}` | `{rowIds:[]}` exact set of source cards |
| report | `{parts:{fact,limit,next}}` | same parts; each choice declares its group |
| investigation | input for current stage | 4 stages: rows → evidence → choice → report |

Investigation STEP: `{id,title,task,kind,rows,choices?,answer,answerExplanation,hints,solution}`. The stage interaction uses the mission's learning explanation and an optional stage sourceLabel. The flag is earned only after all four stages have been submitted correctly.

Filter is a literal substring search, not a query language. Search uses only displayed source content (raw/body, title, event and note); internal row IDs are excluded. A default filter task specifies its required query. A `searchMode:'evidence'` task accepts any nonempty normalized query that leaves every answer row visible and hides at least one source row. The answer query remains a valid example, and exact row selection is still required. Engine `filterRows` and `searchableRow` are shared with the UI. Correct rows must be visible under the query; unrelated visible rows may intentionally require further reading. Query changes clear selections so hidden selected rows cannot cause an unexplained failure. Input normalization uses NFKC, trimmed/collapsed whitespace and case folding where appropriate. All current filter lessons use evidence-preserving search, including beginner f1/f2. Only text answers marked numericCount allow optional 件/回 suffixes; technical identifiers and other text answers are not loosened.

## Optional graduation guidance

Graduation cards retain same-room continuation and review. Three reflection prompts link to completed skills; they do not record scores or change unlock conditions. Separate optional recommendations lead beginner graduates to Linuxroom and advanced graduates to Logroom. Online links open another tab; file URLs use sibling HTML with a download/placement note. No cross-room progress is read or shared.

## State

`createProgress()` returns `{version:'socroom-easy-2',currentLevel,currentId,currentByLevel,records,history}`. `currentByLevel` remembers the last opened mission in each level. `records` contains all 63 missions:

`{input,stage,completed,attempts,hints,hintCounts,revealed,revealedStages,assisted,attemptAssisted,attemptHintCounts,attemptRevealedStages,independentSolved,independent,feedback,stageResults,solved}`.

`solved` retains successful submissions as `{input,assisted}`; completion is reconstructed from these proofs, never trusted from a bare boolean. `stageResults` holds current-attempt successful stages; changing a draft invalidates the current pass. `hintCounts` (maximum hint depth seen per stage), `revealedStages` and `assisted` retain lifetime help history. `attemptHintCounts`, `attemptRevealedStages` and `attemptAssisted` record help in the current attempt and control visible hints. `retry` resets draft, current stage and attempt help while keeping completed, solved and all historical help. Reopening previously seen help marks the new attempt assisted.

`independentSolved` stores a complete array of regraded no-help proofs, awarded only when all stages in the same attempt pass without help; successful stages from different retries cannot be combined for it. `independent` is derived from that complete proof array and takes precedence in status labels and stats. A later assisted review does not erase an existing independent pass. Old v1/v2 records without the new fields inherit their lifetime help into the current attempt; only verified old completions with no assistance are migrated as independent. History is capped at 100 entries; the record fields preserve progress beyond that cap.

Engine API: `createProgress`, `getMission`, `currentStep`, `isUnlocked`, `setInput`, `submit`, `revealHint`, `revealSolution`, `advanceStep`, `openMission`, `selectLevel`, `retry`, `hydrate`, `stats`, `exportProgress`, `normalizeText`, `searchableRow`, `filterRows`.

`stats(progress,levelId?)` returns completed, total, points, help totals, independent/assisted completion counts, ready and nextId. Omit levelId for overall counts; overall nextId follows the currently selected level. `openMission` and `selectLevel` synchronize cursors. Every level's first mission is initially unlocked.

## Persistence

Current wrapper: `{format:'socroom-easy-save',version:2,progress}`. Current storage key: `socroom-easy.progress.v2`. v0.1 wrapper/version1 and raw progress `socroom-easy-1` migrate their recognized beginner records and create fresh records for the other levels. All verified beginner drafts, proofs, help history and graduation stage survive.

UI reads current storage first, falling back to `socroom-easy.progress.v1` only if the current key is absent. Legacy storage is removed only after its migration is written successfully to current storage. An unreadable or partially recovered save is backed up to `.recovery` before replacing it; if that backup write fails, the original stays untouched. Existing recovery data is downloadable from the footer, including after reload. Import confirmation also reports adjustments and retains the original imported file as a downloadable backup. JSON import requires explicit in-app confirmation after validation and replaces all levels. A legacy import explicitly warns that intermediate/advanced records in the current app will become unstarted.

`hydrate(raw,{onRecovery})` validates supported wrappers and bounded containers, then validates each mission separately. Missing missions start empty; unknown IDs are ignored; invalid records reset only that mission. Valid later completions remain recorded but stay gated while prerequisites are incomplete. Hint visibility is clamped to the current hint list while lifetime assistance is retained. Cursors are repaired and malformed history entries are discarded. The optional recovery report contains resetMissionIds, addedMissionIds, ignoredMissionIds, adjustedMissionIds, discardedHistory and repairedCursors; it is not persisted as learning progress. Completion still requires regraded answer proofs, never a saved boolean.

SOCroom storage is never read or written. The optional handoff opens the relative `socroom.html` after any level's graduation.

## Graduation report

Only the final investigation report shows a live preview of the three selected sentences in fact/limit/next order. It is explicitly a draft before grading; text export is enabled only for the current correctly submitted report. The plain-text download is separate from progress JSON export and performs no network operation.

## Localization

The header Language menu selects Japanese (`ja`, default) or English (`en`). The separate `socroom-easy.language.v1` storage key holds only the language preference; progress remains version 2 and keeps existing IDs, answers, drafts, help history, and proofs. An unavailable localStorage does not prevent switching or manual progress export. Language changes re-render the current screen without changing its mission, stage, selection, or grading status.

`content/en-*.json` maps exact Japanese source strings to English display text. The build validates every Japanese curriculum string except canonical answer aliases, and emits `src/translations.js`. `EasyI18n` translates inert text and accessibility attributes, preserving canonical `EASY_DATA`. `npm run check:i18n` parses UI/engine source literals and templates, plus static HTML and accessible attributes, requiring exact catalog entries even where runtime substring translation would hide an omission. Dynamic count messages use `EasyI18n.format` with named placeholders. Dynamic DOM updates localize only the changed subtree (including root attributes), and static text can be restored to Japanese. Both languages ship in the single HTML without network requests. Report text exports use the selected language with spaces between English sentences.

Search indexes the canonical displayed source fields and their English translations in either locale, excluding internal IDs. This keeps English/Japanese text queries and saved grading proofs valid after language changes. Technical log values and answer IDs remain canonical.
