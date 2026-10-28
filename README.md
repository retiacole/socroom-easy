<p align="center">
  <img src="docs/images/socroom-easy-banner.png" width="960" alt="道場で稽古するSOCroom-easyのキャラクターを描いたピクセルアート">
</p>

# SOCroom-easy v0.4.1

[すぐにやってみる / Play Now](https://retiacole.github.io/socroom-easy/) · [オフライン用HTML / Offline HTML](https://github.com/retiacole/socroom-easy/blob/main/socroom-easy.html)

<img src="docs/images/socroom-easy-character.png" align="right" width="120" alt="オレンジ色の道着を着たSOCroom-easyのキャラクター">

**ログの読み方から、一歩ずつ。**<br>
*Learn to read logs, one step at a time.*

ログに初めて触れる人が、個別の調査操作を練習しながらSOCroomへ進むための学習アプリです。短い説明を読み、自分で操作して答えを見つけるとフラグ（旗）を獲得します。SOCroomとは別のアプリです。

<br clear="right">

## はじめ方

1. **オンライン**なら [Play Now](https://retiacole.github.io/socroom-easy/) を開くと、そのまま練習できます。**オフライン**で使う場合は [socroom-easy.html](https://github.com/retiacole/socroom-easy/blob/main/socroom-easy.html) を開き、右上の「Download raw file」で保存して、ブラウザで開きます。リポジトリ全体を「Code → Download ZIP」で保存し、展開してからHTMLを開く方法も使えます。
2. 初級・中級・上級から、取り組む級を選びます。初めてなら初級がおすすめです。
3. 「練習を始める」または学習マップの最初の課題を押します。
4. 説明と今回のミッションを読み、ログのクリック・検索・入力・並べ替えなどを試します。
5. 「答え合わせ」で理由を確認し、「次の課題へ」進みます。

インストール、ローカルサーバー、アカウントは不要です。オンライン版を開くときにはインターネット接続が必要ですが、ダウンロードしたHTMLはオフラインで使えます。教材・プログラム・見た目をHTML一つに含めています。JavaScriptを有効にした、更新済みのブラウザを使用してください。

Choose **Play Now** to start in your browser, or download the HTML file with **Download raw file** for offline use.

オンライン版と保存したHTMLでは、自動保存の領域が異なります。進捗を移すときは、元の画面で「保存」からJSONを書き出し、移動先の「読込」で読み込んでください。

Online and local files use separate browser saves. To transfer progress, export a JSON save in the original app and import it in the other one.

## 日本語・English

言語の保存がない場合、ブラウザの優先言語が日本語なら日本語、それ以外なら英語で開きます。手動で選んだ言語は次回も優先されます。

Without a saved language choice, the app opens in Japanese when the browser’s primary language is Japanese, and in English otherwise. A manually selected language takes priority on later visits.

画面上部の **Language** メニューから日本語と英語を切り替えられます。全63問の説明・ミッション・3段階のヒント・解説・選択肢・資料・用語帳・採点メッセージ・卒業報告を英語で利用できます。選択した言語は同じブラウザに保存されます。自動保存が使えない環境でも、言語の切り替えと進捗JSONの保存は利用できます。

言語を切り替えても、下書き・選択済みの回答・ヒントの利用履歴・卒業調査の段階・獲得済みフラグは変わりません。課題ID・回答ID・ログの元データ・採点条件と既存の進捗形式を維持しています。検索は日本語と英語の説明文の両方に対応し、言語切替後も検索語と保存済みの回答を復元できます。報告文のテキスト保存は表示中の言語で行います。

Open **Language → English** in the HTML menu. All 63 missions, hints, solutions, evidence narratives, glossary entries, feedback, and graduation reports are available in English. The choice persists in your browser. Switch languages at any time without losing drafts or progress. The app stays fully offline; no translation service or external assets are used.

## 初級・中級・上級

各級に「5章×4問の小課題＋卒業調査1問」を収録し、合計63問あります。卒業調査はそれぞれ4段階です。初級の21問は初版の学習項目と回答IDを引き継ぎ、中級・上級には別の42問を追加しました。選択肢は、文の長さや断定の強さだけで選びにくいよう、資料の順序・件数・対象・範囲を照合する内容に調整しています。

| 級 | 問題数 | 練習する内容 |
| --- | --- | --- |
| 初級 | 20＋卒業1 | 時刻・アカウント・結果・通信元の読み取り、検索と集計、単純な時系列、資料照合、短い報告 |
| 中級 | 20＋卒業1 | HTTP・DNS・プロセス・MFA、条件に合う記録の抽出、共通IDによる照合、承認範囲と実際の操作、根拠のある判断 |
| 上級 | 20＋卒業1 | 時差と時刻の種類、複数の識別子、親子プロセス、収集範囲と食い違い、対応範囲と優先順位、未確認事項を含む報告 |

どの級も最初から選択できます。各級の中では1問クリアすると次の課題が開きます。級を切り替えても、下書き・途中の卒業調査・獲得済みフラグは保持します。

1問で1フラグ・100ポイント、各級で21フラグ・2100ポイント、全級で63フラグ・6300ポイントです。時間制限や誤答による減点はなく、復習による重複加点もありません。

全級の各問に3段階のヒントと「答えと読み方」があります。解説を見ただけではクリアにならないので、自分で操作して確かめてください。ヒント・解説を使った履歴は復習後も保持します。完了前でも「ヒントを閉じて最初からやり直す」で再挑戦できます。「もう一度、自分で解く」では表示中のヒントと解説を閉じ、ヒントなしで全段階を解き直せたら「ヒントなしでクリア」に更新します。卒業調査は4段階を同じ再挑戦の中で完了する必要があります。一度得た独力クリアの記録は、その後ヒントを使って復習しても消えません。フラグ文字列の手入力は不要です。用語帳も画面から開けます。

検索はNFKC正規化・大文字小文字の区別なしの文字列の部分一致で、内部の行IDは検索しません。すべての級の検索課題では、必要な証拠をすべて表示し、少なくとも1行を非表示にできる検索語を自分で選べます。絞り込んだ後も、課題に合う行を選ぶ必要があります。SIEMのクエリ言語やフィールドの完全一致検索を再現するものではありません。

すべて架空の静的データです。実システムの監視・実際の問い合わせ・端末の操作は行いません。ログの成功や応答コードだけで正当性・侵害を断定せず、資料から分かる範囲を区別する練習を含みます。

卒業調査の最後では、選んだ3文をひとつの報告文としてプレビューできます。答え合わせで正解を確認したら「報告文を保存（.txt）」で書き出せます。画面上部の「保存」は引き続き進捗JSONの保存です。

## 保存と初版からの引き継ぎ

この版は `socroom-easy.progress.v2` に全級の進捗を保存します。新しい保存がなく、同じブラウザから初版の `socroom-easy.progress.v1` を読み取れる場合は、初版の21問の進捗を初級へ自動で引き継ぎます。フラグだけでなく、回答途中の下書き、卒業調査の途中段階、ヒントと解説の利用記録も保持します。

初版の保存キーは、移行した進捗を現在の保存キーに書き込めた後で削除します。保存に失敗した場合は残します。SOCroom本体の保存領域は読み書きしません。

教材更新でミッションが追加・削除された場合は、新規の記録を補い、未知のIDを無視します。回答の条件が変わった場合や一部の記録が壊れた場合も、問題ごとに検証して、使えない問題の記録だけを初期化します。ほかの問題の検証済みフラグと下書きは保持します。前の問題が未完了に戻った場合、その級の先の問題は、前の問題を解き直すと再び開きます。

自動復元で調整・読込失敗があった元データは退避し、画面下部の「退避データを保存」でダウンロードできます。退避の書込みに失敗した場合は元の保存を上書きしません。部分復元したJSONを手動で読み込む場合も、確認後に元ファイルを退避します。

「保存」でJSONを取り出し、「読込」で復元できます。初版のJSONも読み込めます。読込は確認後に全級の進捗を置き換えます。初版ファイルに中級・上級の進捗は含まれないため、その2級は未着手になることを確認画面にも表示します。必要なら先に現在の進捗を保存してください。

ローカルHTMLに対する自動保存の扱いはブラウザにより異なります。自動保存が使えない場合は画面に表示するので、「保存」でJSONを残してください。HTMLの移動やブラウザ変更で自動保存が見つからない場合も、JSONから再開できます。

## 卒業後のおすすめと振り返り

各級を卒業すると卒業調査の復習ボタンが使え、初級・中級ではそのまま次の級へ進むボタンも使えます。「できることを振り返る」には3つの自己チェックと対応する復習課題があります。ヒント・用語帳を使ってよく、点数や課題の解放には影響しません。

別の教材も試したい場合は、初級の後に [Linuxroom初級](https://retiacole.github.io/linuxroom/)、上級の後に [Logroom](https://retiacole.github.io/logroom/) を任意のおすすめとして表示します。このroomの中級・上級を続けたり、同じ問題を復習したりする操作も保っています。自動移動、他教材の完了チェック、進捗の共有はありません。

オンラインではおすすめを別タブで開きます。オフラインでは、別途入手した `linuxroom.html` または `logroom.html` を同じフォルダへ置くと、対応するローカルHTMLを開けます。ほかの教材はこの配布物には含まれません。SOCroomへ進みたい方は [SOCroom](https://retiacole.github.io/socroom/) のチュートリアルから始められます。

After graduation, continue to the next level, review the investigation, or use the three optional reflection prompts and their review links. Hints are welcome; reflection does not affect points or unlocking. Optional suggestions link beginner graduates to Linuxroom and advanced graduates to Logroom. They never navigate automatically or share progress. For offline use, place the separately downloaded HTML beside this tool.

## ソースからの再ビルド

Node.js 22以上があれば、外部パッケージなしでビルドできます。

```sh
npm run build
```

通常のビルドはルートの配布HTMLと、GitHub Pages用の `docs/index.html`・`docs/socroom-easy.html` を同じ内容で生成します。公開元は `main` ブランチの `/docs` です。

`content/` のJSONを教材の原本として、`assemble-data.js` が `src/data.js` を生成します。`content/en-*.json` が英語の表示用辞書です。ビルド時に教材の翻訳漏れを検出します。`npm run check:i18n` は教材に加え、画面・アクセシビリティ属性・採点メッセージの文字列を構文解析し、辞書への完全一致登録を検査します。部分置換で翻訳できる文でも、未登録なら失敗します。`build.js` はCSS・教材・翻訳・エンジン・UIを単一HTMLにまとめます。

テスト用の依存パッケージを初回に導入すると、採点エンジンとDOM操作のテストを実行できます。依存パッケージはプレイには不要です。

```sh
npm ci
npm run check:i18n
npm test
SOCROOM_EASY_HTML=./socroom-easy.html npm test
```

採点、各級の解放順、復習、旧版からの移行、問題追加・削除・回答変更・一部破損を含む保存復元、IME変換中の検索、日本語・英語それぞれの全63問の画面操作、全ヒント・解説、言語切替と保存、英語での卒業報告保存を検証します。DOMテストはブラウザの見た目や実際のfile URLでの動作を検証するものではありません。修正版ではローカルHTTP経由の実ブラウザでも、1280px幅と390px幅の日英表示、章番号、課題操作と正解表示を確認しています。file URL、iOS実機、すべての画面サイズの検証は含みません。

全データを同梱する教材なので、ソースには正解も含まれます。サーバー認証付きCTFや資格試験の採点システムではありません。

## 対応ブラウザとバージョン

使用APIの最低要件は Chrome / Edge 93以上、Firefox 98以上、Safari / iOS Safari 15.4以上です。研修ではサポート中の最新安定版を使用してください。Internet Explorerには対応していません。最低要件は [`Object.hasOwn`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwn) と [`dialog`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/dialog) などの対応状況から定めたもので、すべての旧版実機で動作確認した値ではありません。`Intl.Segmenter` がない環境では検索ハイライトに代替処理を使います。

アプリのリリース番号は `package.json` を原本とし、ビルドで画面のフッターへ反映します。`socroom-easy-2` と保存ファイルの `version: 2` は進捗の形式番号です。表示や教材の修正だけでは保存形式を変えません。

件数を答える課題は数字だけでも「件」「回」付きでも正解になります。全角数字はNFKC正規化で受け付けます。アカウント名など、大文字小文字の区別が必要な課題では採点メッセージにその条件を表示します。

## ライセンス

MIT License。詳細は `LICENSE` を参照してください。

## ログ形式の読み替え

中級の m-r1 は [nginx combined 形式](https://nginx.org/en/docs/http/ngx_http_log_module.html)、m-r2 は教材用のJSON、上級の a-r2 は [ECS の @timestamp](https://www.elastic.co/docs/reference/ecs/ecs-base) と [event.ingested](https://www.elastic.co/docs/reference/ecs/ecs-event) を使った合成JSONです。製品の実ログを転載したものではありません。形式を読む課題では元のログを最初から表示します。

m-r3 は [Sysmon](https://learn.microsoft.com/en-us/sysinternals/downloads/sysmon) の Image / ProcessId / ParentProcessId / ParentImage との対応を説明します。m-f4 は [grep の文字列検索](https://www.gnu.org/software/grep/manual/grep.html) と、独立した列に対する [KQL の等価比較](https://learn.microsoft.com/en-us/kusto/query/equals-operator?view=microsoft-fabric) を区別します。

<p align="center">
  <img src="assets/campfire.png" width="960" alt="森の焚き火を囲んで休憩するroomシリーズの仲間たち">
</p>
