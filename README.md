<p align="center">
  <img src="docs/images/socroom-easy-banner.png" width="960" alt="道場で稽古するSOCroom-easyのキャラクターを描いたピクセルアート">
</p>

# SOCroom-easy v0.3

<img src="docs/images/socroom-easy-character.png" align="right" width="120" alt="オレンジ色の道着を着たSOCroom-easyのキャラクター">

**ログの読み方から、一歩ずつ。**<br>
*Learn to read logs, one step at a time.*

ログに初めて触れる人が、個別の調査操作を練習しながらSOCroomへ進むための学習アプリです。短い説明を読み、自分で操作して答えを見つけるとフラグ（旗）を獲得します。SOCroomとは別のアプリです。

<br clear="right">

## はじめ方

1. [socroom-easy.html](https://github.com/retiacole/socroom-easy/blob/main/socroom-easy.html) を開き、右上の「Download raw file」で保存して、ブラウザで開きます。リポジトリ全体を「Code → Download ZIP」で保存し、展開してからHTMLを開く方法も使えます。
2. 初級・中級・上級から、取り組む級を選びます。初めてなら初級がおすすめです。
3. 「練習を始める」または学習マップの最初の課題を押します。
4. 説明と今回のミッションを読み、ログのクリック・検索・入力・並べ替えなどを試します。
5. 「答え合わせ」で理由を確認し、「次の課題へ」進みます。

プレイ時のインストール、サーバー、アカウント、インターネット接続は不要です。教材・プログラム・見た目をHTML一つに含めています。JavaScriptとdialog要素に対応したブラウザを使用してください。

## 日本語・English

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

全級の各問に3段階のヒントと「答えと読み方」があります。解説を見ただけではクリアにならないので、自分で操作して確かめてください。ヒント・解説を使った履歴は復習後も保持します。「もう一度、自分で解く」では表示中のヒントと解説を閉じ、ヒントなしで全段階を解き直せたら「ヒントなしでクリア」に更新します。卒業調査は4段階を同じ再挑戦の中で完了する必要があります。一度得た独力クリアの記録は、その後ヒントを使って復習しても消えません。フラグ文字列の手入力は不要です。用語帳も画面から開けます。

検索はNFKC正規化・大文字小文字の区別なしの文字列の部分一致で、内部の行IDは検索しません。初級では指定された検索語を練習します。中上級の検索課題では、必要な証拠をすべて表示し、少なくとも1行を非表示にできる検索語を自分で選べます。絞り込んだ後も、課題に合う行を選ぶ必要があります。SIEMのクエリ言語やフィールドの完全一致検索を再現するものではありません。

すべて架空の静的データです。実システムの監視・実際の問い合わせ・端末の操作は行いません。ログの成功や応答コードだけで正当性・侵害を断定せず、資料から分かる範囲を区別する練習を含みます。

卒業調査の最後では、選んだ3文をひとつの報告文としてプレビューできます。答え合わせで正解を確認したら「報告文を保存（.txt）」で書き出せます。画面上部の「保存」は引き続き進捗JSONの保存です。

## 保存と初版からの引き継ぎ

この版は `socroom-easy.progress.v2` に全級の進捗を保存します。新しい保存がなく、同じブラウザから初版の `socroom-easy.progress.v1` を読み取れる場合は、初版の21問の進捗を初級へ自動で引き継ぎます。フラグだけでなく、回答途中の下書き、卒業調査の途中段階、ヒントと解説の利用記録も保持します。

初版の保存領域は変更しません。SOCroom本体の保存領域は読み書きしません。

「保存」でJSONを取り出し、「読込」で復元できます。初版のJSONも読み込めます。読込は確認後に全級の進捗を置き換えます。初版ファイルに中級・上級の進捗は含まれないため、その2級は未着手になることを確認画面にも表示します。必要なら先に現在の進捗を保存してください。

ローカルHTMLに対する自動保存の扱いはブラウザにより異なります。自動保存が使えない場合は画面に表示するので、「保存」でJSONを残してください。HTMLの移動やブラウザ変更で自動保存が見つからない場合も、JSONから再開できます。

## SOCroomへ進む

各級の卒業調査を終えると、次の級への案内と「SOCroomを開く」が表示されます。全63問を終える前でもSOCroomへ進めます。`socroom-easy.html` と既存の `socroom.html` を同じフォルダに置き、SOCroomのチュートリアルから一連の調査に挑戦してください。SOCroom本体はこのリポジトリには含まれていません。

## ソースからの再ビルド

Node.js 22以上があれば、外部パッケージなしでビルドできます。

```sh
npm run build
```

`content/` のJSONを教材の原本として、`assemble-data.js` が `src/data.js` を生成します。`content/en-*.json` が英語の表示用辞書です。ビルド時に教材の翻訳漏れを検出します。`build.js` はCSS・教材・翻訳・エンジン・UIを単一HTMLにまとめます。

テスト用の依存パッケージを初回に導入すると、採点エンジンとDOM操作のテストを実行できます。依存パッケージはプレイには不要です。

```sh
npm ci
npm test
SOCROOM_EASY_HTML=./socroom-easy.html npm test
```

採点、各級の解放順、復習、旧版からの移行、保存復元、日本語・英語それぞれの全63問の画面操作、全ヒント・解説、言語切替と保存、英語での卒業報告保存を検証します。DOMテストはブラウザの見た目や実際のfile URLでの動作を検証するものではありません。修正版ではローカルHTTP経由の実ブラウザでも、卒業調査の報告プレビューと正解後の保存ボタン表示を確認しています。file URLや全画面サイズの検証は含みません。

全データを同梱する教材なので、ソースには正解も含まれます。サーバー認証付きCTFや資格試験の採点システムではありません。

## ライセンス

MIT License。詳細は `LICENSE` を参照してください。

## ログ形式の読み替え

中級の m-r1 は [nginx combined 形式](https://nginx.org/en/docs/http/ngx_http_log_module.html)、m-r2 は教材用のJSON、上級の a-r2 は [ECS の @timestamp](https://www.elastic.co/docs/reference/ecs/ecs-base) と [event.ingested](https://www.elastic.co/docs/reference/ecs/ecs-event) を使った合成JSONです。製品の実ログを転載したものではありません。形式を読む課題では元のログを最初から表示します。

m-r3 は [Sysmon](https://learn.microsoft.com/en-us/sysinternals/downloads/sysmon) の Image / ProcessId / ParentProcessId / ParentImage との対応を説明します。m-f4 は [grep の文字列検索](https://www.gnu.org/software/grep/manual/grep.html) と、独立した列に対する [KQL の等価比較](https://learn.microsoft.com/en-us/kusto/query/equals-operator?view=microsoft-fabric) を区別します。
