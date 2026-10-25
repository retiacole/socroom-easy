# SOCroom-easy v0.2 data and state contract

Single offline HTML; no runtime server, package download, CDN or network. Japanese learning interface. Globals `EASY_DATA` and `EasyEngine`; the data and engine also export CommonJS for local tests.

## Curriculum

Three independently selectable levels: `beginner`, `intermediate`, `advanced`. Each has 5 chapters × 4 short missions plus one graduation investigation with 4 stages. Each level unlocks sequentially within itself. Total: 63 missions, 63 flags, 6300 points. One completion awards 100 points once. Hints, solutions and mistakes do not subtract points. Retrying does not remove flags or erase assistance history.

Chapter IDs: `read`, `find`, `connect`, `evidence`, `respond`, `graduate`.
Beginner mission IDs: `r1`–`r4`, `f1`–`f4`, `c1`–`c4`, `e1`–`e4`, `d1`–`d4`, `g1`. Intermediate prefixes `m-`, advanced prefixes `a-`. Beginner content and answer IDs remain unchanged from v0.1 for migration.

## Data

`EASY_DATA = {version:'socroom-easy-2', levels, chapters, glossary, missions}`.

Level: `{id,title,tagline,description,prerequisite,chapters:[{id,title,subtitle}]}`. Top-level chapters provide the beginner default. Glossary: `[{term,meaning,example}]`.

Mission: `{id,level,chapter,title,skill,minutes,brief,learn:[strings],example:{title,text},task,kind,sourceLabel,rows:[ROW],tokens?,choices?,answer,answerExplanation,hints:[3strings],solution,bridge:{tool,how},flag,steps?}`.

ROW is either a log `{id,raw,time?,host?,user?,event?,note?,...}` or a card `{id,sourceType:'log'|'document'|'reply',title?,body}`. All content renders as inert escaped text. Logs and documents are synthetic. Use documentation/private IPs and `.example` domains. Worked examples use different values from task answers. Every new term needed for a task is explained before it.

Interactions:

| Kind | Input | Answer |
| --- | --- | --- |
| token | `{tokenId}` | `{tokenId}`; tokens are literal fields with `{id,label,meaning}` |
| text | `{text}` | `{values:[acceptedStrings],caseSensitive?:false}` |
| rows | `{rowIds:[]}` | `{rowIds:[]}` exact set |
| filter | `{query,rowIds:[]}` | `{query,rowIds:[]}`; exact normalized query plus exact selected set |
| order | `{orderIds:[]}` | `{rowIds:[]}` in order; initial rows must be shuffled |
| choice | `{choiceId}` | `{choiceId}`; choices have `{id,label,feedback}` |
| evidence | `{rowIds:[]}` | `{rowIds:[]}` exact set of source cards |
| report | `{parts:{fact,limit,next}}` | same parts; each choice declares its group |
| investigation | input for current stage | 4 stages: rows → evidence → choice → report |

Investigation STEP: `{id,title,task,kind,rows,choices?,answer,answerExplanation,hints,solution}`. The stage interaction uses the mission's learning explanation and an optional stage sourceLabel. The flag is earned only after all four stages have been submitted correctly.

Filter is a literal substring search, not a query language. Its required query must appear in the task. Correct rows must be visible under the query; unrelated visible rows may intentionally require further reading. Query changes clear selections so hidden selected rows cannot cause an unexplained failure. Input normalization uses NFKC, trimmed/collapsed whitespace and case folding where appropriate.

## State

`createProgress()` returns `{version:'socroom-easy-2',currentLevel,currentId,currentByLevel,records,history}`. `currentByLevel` remembers the last opened mission in each level. `records` contains all 63 missions:

`{input,stage,completed,attempts,hints,hintCounts,revealed,revealedStages,assisted,feedback,stageResults,solved}`.

`solved` retains successful submissions as `{input,assisted}`; completion is reconstructed from these proofs, never trusted from a bare boolean. `stageResults` holds current-attempt successful stages; changing a draft invalidates the current pass. `hintCounts` and `revealedStages` retain help per stage. `retry` resets draft and current stage to zero while keeping completed, solved and all help history. History is capped at 100 entries; the record fields preserve progress beyond that cap.

Engine API: `createProgress`, `getMission`, `currentStep`, `isUnlocked`, `setInput`, `submit`, `revealHint`, `revealSolution`, `advanceStep`, `openMission`, `selectLevel`, `retry`, `hydrate`, `stats`, `exportProgress`.

`stats(progress,levelId?)` returns completed, total, points, help totals, independent/assisted completion counts, ready and nextId. Omit levelId for overall counts; overall nextId follows the currently selected level. `openMission` and `selectLevel` synchronize cursors. Every level's first mission is initially unlocked.

## Persistence

Current wrapper: `{format:'socroom-easy-save',version:2,progress}`. Current storage key: `socroom-easy.progress.v2`. v0.1 wrapper/version1 and raw progress `socroom-easy-1` are validated against the exact 21 beginner IDs, then migrated with 42 fresh records. All verified beginner drafts, proofs, help history and graduation stage survive.

UI reads current storage first, falling back to `socroom-easy.progress.v1` only if the current key is absent. Legacy storage is never changed. An unreadable current save is backed up to `.recovery` before replacing it; if that backup write fails, the original stays untouched. JSON import requires explicit in-app confirmation after validation and replaces all levels. A legacy import explicitly warns that intermediate/advanced records in the current app will become unstarted.

SOCroom storage is never read or written. The optional handoff opens the relative `socroom.html` after any level's graduation.
