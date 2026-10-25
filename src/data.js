/* Fictional teaching data, bundled for offline use. */
globalThis.EASY_DATA = {
  "version": "socroom-easy-2",
  "levels": [
    {
      "id": "beginner",
      "title": "初級",
      "tagline": "ログを読むところから",
      "description": "時刻・アカウント・結果の読み取りから、検索、証拠選び、短い報告まで。",
      "prerequisite": "ログを初めて読む人に",
      "chapters": [
        {
          "id": "read",
          "title": "ログを 1 行読む",
          "subtitle": "時刻・アカウント・結果・通信元を、ひとつずつ読む。"
        },
        {
          "id": "find",
          "title": "必要なログを見つける",
          "subtitle": "検索し、選び、数える。調べる範囲を小さくする。"
        },
        {
          "id": "connect",
          "title": "記録をつなげて考える",
          "subtitle": "順番と共通点を見つけ、分からないことも残す。"
        },
        {
          "id": "evidence",
          "title": "根拠を集めて確かめる",
          "subtitle": "端末の役割、作業の予定、担当者の回答を照合する。"
        },
        {
          "id": "respond",
          "title": "判断して、短く伝える",
          "subtitle": "事実と推測を分け、次の対応と報告を考える。"
        },
        {
          "id": "graduate",
          "title": "小さな調査をやり遂げる",
          "subtitle": "これまでの操作をつないで、1件の調査に挑戦。"
        }
      ]
    },
    {
      "id": "intermediate",
      "title": "中級",
      "tagline": "複数の記録を照合する",
      "description": "HTTP・DNS・MFAなどを読み、共通のIDや条件で情報をつなぎ、判断の根拠を確かめます。",
      "prerequisite": "初級の操作に慣れた人に",
      "chapters": [
        {
          "id": "read",
          "title": "01 通信と処理の欄を読む",
          "subtitle": "HTTP・DNS・プロセス・追加認証を、短い記録で理解する。"
        },
        {
          "id": "find",
          "title": "02 条件を重ねて探す",
          "subtitle": "要求番号・端末・結果を照合し、必要な行と件数を取り出す。"
        },
        {
          "id": "connect",
          "title": "03 複数の記録をつなぐ",
          "subtitle": "要求から処理へ。同じ出来事を別の記録から確かめる。"
        },
        {
          "id": "evidence",
          "title": "04 資料で判断を支える",
          "subtitle": "業務用途・承認の範囲・本人の回答・資料の日付を照合する。"
        },
        {
          "id": "respond",
          "title": "05 次の確認を伝える",
          "subtitle": "事実と未確認事項を分け、担当者が動ける報告にする。"
        },
        {
          "id": "graduate",
          "title": "06 卒業調査：書き出しの範囲",
          "subtitle": "関係するログを集め、承認と比較し、確認の限界まで報告する。"
        }
      ]
    },
    {
      "id": "advanced",
      "title": "上級",
      "tagline": "証拠の限界まで考える",
      "description": "時差や記録の欠落・食い違いを扱い、どこまで分かったか、どこへ対応するかを判断します。",
      "prerequisite": "中級の照合を練習した人に",
      "chapters": [
        {
          "id": "read",
          "title": "条件をそろえて読む",
          "subtitle": "時差・取込時刻・識別子を区別する"
        },
        {
          "id": "find",
          "title": "範囲を決めて探す",
          "subtitle": "複数の条件と件数の単位をそろえる"
        },
        {
          "id": "connect",
          "title": "別の記録をつなぐ",
          "subtitle": "親子関係・プロキシ・時計誤差を確かめる"
        },
        {
          "id": "evidence",
          "title": "根拠の限界を知る",
          "subtitle": "記録範囲と承認範囲を照合する"
        },
        {
          "id": "respond",
          "title": "対応の範囲を決める",
          "subtitle": "優先度・限定した対処・引き継ぎを練習する"
        },
        {
          "id": "graduate",
          "title": "上級の卒業調査",
          "subtitle": "承認外のクラウド共有を調べて報告する"
        }
      ]
    }
  ],
  "chapters": [
    {
      "id": "read",
      "title": "ログを 1 行読む",
      "subtitle": "時刻・アカウント・結果・通信元を、ひとつずつ読む。"
    },
    {
      "id": "find",
      "title": "必要なログを見つける",
      "subtitle": "検索し、選び、数える。調べる範囲を小さくする。"
    },
    {
      "id": "connect",
      "title": "記録をつなげて考える",
      "subtitle": "順番と共通点を見つけ、分からないことも残す。"
    },
    {
      "id": "evidence",
      "title": "根拠を集めて確かめる",
      "subtitle": "端末の役割、作業の予定、担当者の回答を照合する。"
    },
    {
      "id": "respond",
      "title": "判断して、短く伝える",
      "subtitle": "事実と推測を分け、次の対応と報告を考える。"
    },
    {
      "id": "graduate",
      "title": "小さな調査をやり遂げる",
      "subtitle": "これまでの操作をつないで、1件の調査に挑戦。"
    }
  ],
  "glossary": [
    {
      "term": "ログ",
      "meaning": "コンピューターの操作や状態を記録したもの。1 行ごとに時刻や操作の内容などが書かれます。記録されていない情報までは分かりません。",
      "example": "2026-10-20T08:00:00Z user=demo event=login result=success"
    },
    {
      "term": "時刻",
      "meaning": "その記録が示す出来事の時間。資料の時刻の基準と、調べたい時間帯を確認して読みます。",
      "example": "2026-10-20T08:00:00Z は 2026 年 10 月 20 日 08:00:00 UTC。"
    },
    {
      "term": "UTC",
      "meaning": "世界で共通に使う時刻の基準。日本標準時より 9 時間遅い基準です。この教材ではすべて UTC で扱い、変換は不要です。",
      "example": "日時の末尾の Z は UTC を表します。09:00 UTC は同じ日の 18:00 日本標準時です。"
    },
    {
      "term": "host",
      "meaning": "この教材のログでは、記録に関係する端末やサーバーの名前を表す欄。アカウント名とは別です。",
      "example": "host=pc-demo → 端末名は pc-demo。"
    },
    {
      "term": "user",
      "meaning": "その操作に記録されたアカウント名の欄。この名前があるだけでは、本人が操作した証明にはなりません。",
      "example": "user=haru → haru というアカウントの記録。"
    },
    {
      "term": "src",
      "meaning": "source の略。この教材の通信ログでは送信元、つまり通信の出発点を示します。",
      "example": "src=192.0.2.10 → 送信元 IP アドレスは 192.0.2.10。"
    },
    {
      "term": "dst",
      "meaning": "destination の略。この教材の通信ログでは送信先、つまり通信の行き先を示します。",
      "example": "dst=203.0.113.70 → 送信先 IP アドレスは 203.0.113.70。"
    },
    {
      "term": "result",
      "meaning": "操作の結果を示す欄。この教材では success が成功、failed が失敗です。成功だから安全とは限りません。",
      "example": "event=login result=failed → ログインが失敗した。"
    },
    {
      "term": "session",
      "meaning": "一続きの接続や操作を区別する目印の ID。どの範囲をひと続きとするかは製品で異なるため、実務では記録元の仕様も確認します。",
      "example": "session=D10 の行どうしを同じセッションの記録として照合する。"
    },
    {
      "term": "IPアドレス",
      "meaning": "通信する機器や接続先を区別するためのアドレス。アドレスだけで操作者の身元や悪意は判断できません。教材の値は説明用です。",
      "example": "192.0.2.10。IP アドレスの各数字を暗記する必要はありません。"
    },
    {
      "term": "認証",
      "meaning": "アカウントなどを使って、利用者や機器を確かめる仕組み。ログイン時のパスワード確認などが含まれます。",
      "example": "正しいパスワードを使ったログインが成功しても、本人が入力したかは別の確認事項です。"
    },
    {
      "term": "アラート",
      "meaning": "確認が必要な条件に当てはまったことを知らせる通知。攻撃の確定通知ではなく、調査の入り口です。",
      "example": "「短時間に認証失敗が増えた」というアラートを受け、関連ログと業務の予定を確認する。"
    },
    {
      "term": "証拠",
      "meaning": "判断の根拠として示せる記録。ログ、承認された作業予定、担当者の回答などを組み合わせます。",
      "example": "端末の再起動ログと、その時間の再起動を認めた作業票を照合する。"
    },
    {
      "term": "資産台帳",
      "meaning": "組織の端末や機器の名前、用途、管理担当者をまとめた一覧。",
      "example": "meeting-gw-01 は会議室の映像接続に使う機器、と台帳で確認する。"
    },
    {
      "term": "承認",
      "meaning": "担当者や責任者が、その作業を行ってよいと認めたこと。実際の作業が承認された範囲内かは別に確かめます。",
      "example": "22:00〜22:10 の printer-07 再起動は許可されている。"
    },
    {
      "term": "影響範囲",
      "meaning": "その出来事がどの端末・利用者・業務まで及んでいるか。確認できた範囲と未確認の範囲を分けます。",
      "example": "受付の3台が使えないが、会議室の端末は利用できている。"
    },
    {
      "term": "エスカレーション",
      "meaning": "自分だけで判断や対応ができないとき、確認した事実を添えて担当者や責任者に引き継ぐこと。",
      "example": "業務が停止しているため、発生時刻と対象端末を当番責任者に伝える。"
    },
    {
      "term": "ジョブ",
      "meaning": "機械にまとめて実行させる1回分の仕事。同じ仕事の記録には共通の番号が付くことがあります。",
      "example": "job=R-204 は、案内図をPDFにする1回分の処理の番号。"
    },
    {
      "term": "HTTP",
      "meaning": "ブラウザとWebサービスなどが、要求と応答をやり取りするための取り決め。ログの status は応答の状態を表します。",
      "example": "status=403 は要求が拒否された応答。ログイン成功とは別に、操作できる権限が必要な場合がある。"
    },
    {
      "term": "HTTPメソッド",
      "meaning": "Webサービスへ何を求めるかを示す欄。GET や POST などがあります。具体的な処理内容は、そのサービスの設計も確認します。",
      "example": "この教材の POST /api/export は、データ書き出しの要求。"
    },
    {
      "term": "DNS",
      "meaning": "名前に対応する情報を問い合わせる仕組み。問い合わせた名前と、問い合わせの結果は別の欄です。",
      "example": "query=portal.office.example rcode=NXDOMAIN は、その問い合わせで名前が存在しないと応答された記録。"
    },
    {
      "term": "プロセス",
      "meaning": "端末で実行されているプログラムの単位。PID はプロセス番号、image は今回の教材では実行ファイルの名前です。",
      "example": "pid=420 image=viewer.exe は、番号420で viewer.exe が実行された記録。"
    },
    {
      "term": "MFA",
      "meaning": "多要素認証。パスワードだけでなく、確認通知など別の要素も使って認証します。各要素の結果と、最終的なログイン結果を分けて読みます。",
      "example": "password=accepted でも mfa=denied なら、パスワード通過だけでログイン完了とは言えない。"
    },
    {
      "term": "要求ID",
      "meaning": "1回の要求を区別する番号。この教材の同じサービス内では request_id を使ってWeb側とアプリ側の記録を照合できます。",
      "example": "request_id=REQ-731 の要求と処理結果を集める。"
    },
    {
      "term": "認証と認可",
      "meaning": "認証は「どのアカウントとして扱うか」の確認、認可は「その操作を許すか」の判断です。認証できても操作が許可されるとは限りません。",
      "example": "ログインできたアカウントでも、管理画面へのアクセスは拒否されることがある。"
    },
    {
      "term": "プロキシ",
      "meaning": "端末とサービスの間で通信を中継する機器や仕組み。中継機器のアドレスと、利用したサービスの名前は別の場合があります。",
      "example": "proxy=10.40.0.5 target_host=archive.vendor.example なら、中継機器は10.40.0.5、要求先の名前は archive.vendor.example。"
    },
    {
      "term": "重複記録",
      "meaning": "同じ出来事が複数行記録されること。同じ試行番号を再記録した行を、別の試行として数えないようにします。",
      "example": "attempt=A-12 の拒否ログが2行あっても、同じ試行を再記録したものなら1回。"
    },
    {
      "term": "成果物",
      "meaning": "処理によって作られたファイルなどの結果。作られたことと、利用者が受け取ったことは別の確認です。",
      "example": "artifact=report.csv は生成されたファイルの名前。これだけではダウンロード完了を示さない。"
    },
    {
      "term": "データセット",
      "meaning": "用途に合わせてひとまとめにされたデータの集まり。どのデータを対象にした処理かを区別します。",
      "example": "dataset=staff_directory は職員連絡先の一覧。"
    },
    {
      "term": "エラー率",
      "meaning": "対象となる要求のうち、エラーになった要求の割合。ここでは割合の計算はせず、複数の利用者にエラーがあることを確認します。",
      "example": "3人の要求に status=500 がある場合、サービスの動作確認を担当者へ依頼する材料になる。"
    },
    {
      "term": "UTC / 時差",
      "meaning": "UTC は時刻の基準。+09:00 は UTC より 9 時間進んだ表記です。比較前に同じ基準へ直します。",
      "example": "2026-10-22T01:00:00+09:00 = 2026-10-21T16:00:00Z"
    },
    {
      "term": "event_time / ingest_time",
      "meaning": "出来事の発生時刻と、収集側が記録を受け取った時刻。通信の遅れなどで一致しない場合があります。",
      "example": "event_time=10:00Z、ingest_time=10:03Z は発生から 3 分後に収集。"
    },
    {
      "term": "process_guid / parent_process_guid",
      "meaning": "この教材では起動を区別する追跡用 ID と、その親の ID。端末名と起動区間も合わせて照合します。",
      "example": "P-2 の parent_process_guid=P-1 なら同じ端末の P-1 が親。"
    },
    {
      "term": "リバースプロキシ",
      "meaning": "要求を受けてアプリへ中継するサーバー。アプリの接続元と利用者側の接続の IP が異なることがあります。",
      "example": "アプリの src=10.30.0.8 が中継サーバーを指す場合がある。"
    },
    {
      "term": "時計誤差",
      "meaning": "機器の時刻と実際の時刻のずれ。誤差範囲が重なると時刻だけで前後を断定できません。",
      "example": "10:00:20±30 秒なら 09:59:50〜10:00:50 の可能性。"
    },
    {
      "term": "記録の取得範囲",
      "meaning": "どの対象・種類・時刻の記録を取得できているか。未収集から未発生とは言えません。",
      "example": "設定変更は収集済みでもダウンロード記録は無効の場合がある。"
    },
    {
      "term": "封じ込め",
      "meaning": "影響の広がりを抑える対処。権限・承認と業務影響を確かめ、対象と効果を記録します。",
      "example": "問題の共有リンクだけを無効にして状態を再確認する。"
    },
    {
      "term": "鍵とセッション",
      "meaning": "鍵は認証に使う情報、セッションは認証後の利用単位。この教材のサービスでは鍵と既存セッションの停止は別です。",
      "example": "K-42 の新規認証を止めても S-440 は別途無効化する。"
    },
    {
      "term": "マスク",
      "meaning": "秘密の値を通常報告で見えなくすること。原本の保管や参照は組織の手順に従います。",
      "example": "credential_value=[REDACTED] とし credential_id で追跡する。"
    },
    {
      "term": "匿名共有",
      "meaning": "この教材では、リンクを知る人がログインなしで対象を閲覧できる共有設定。資料の内容を匿名化したという意味ではありません。",
      "example": "access=anonymous のリンクには、誰が閲覧できるかの確認が必要。"
    }
  ],
  "missions": [
    {
      "id": "r1",
      "chapter": "read",
      "title": "時刻を見つける",
      "skill": "1 行のログから時刻の欄を選ぶ",
      "minutes": 2,
      "brief": "ログは、コンピューターが「いつ、何をしたか」を残した記録です。まずは 1 行だけ、時刻を見つけてみましょう。",
      "learn": [
        "ログには複数の欄があります。今回は「時刻」「host」「event」の 3 つだけを見ます。",
        "2026-10-20T08:30:00Z は、2026 年 10 月 20 日の 08:30:00 を表します。T は日付と時刻の区切りです。",
        "末尾の Z は UTC という基準の時刻を使っている印です。この教材ではすべて UTC で読み、時差の計算はしません。",
        "host は記録に登場する端末名、event は起きた操作の種類です。event=screen_lock は画面をロックした記録です。"
      ],
      "example": {
        "title": "別のログで練習",
        "text": "2026-10-19T07:15:10Z host=pc-demo event=screen_lock\nこのログの時刻の欄は「2026-10-19T07:15:10Z」です。端末名 pc-demo と取り違えないようにしましょう。"
      },
      "task": "表示されたログで、時刻を表す欄を 1 つクリックしてください。",
      "kind": "token",
      "sourceLabel": "端末操作ログ・1 行",
      "rows": [
        {
          "id": "r1-log",
          "time": "09:12:04",
          "host": "pc-aki",
          "event": "screen_lock",
          "raw": "2026-10-20T09:12:04Z host=pc-aki event=screen_lock"
        }
      ],
      "tokens": [
        {
          "id": "r1-time",
          "label": "2026-10-20T09:12:04Z",
          "meaning": "記録された時刻。末尾の Z は UTC。"
        },
        {
          "id": "r1-host",
          "label": "host=pc-aki",
          "meaning": "端末名。"
        },
        {
          "id": "r1-event",
          "label": "event=screen_lock",
          "meaning": "操作の種類。画面のロック。"
        }
      ],
      "answer": {
        "tokenId": "r1-time"
      },
      "answerExplanation": "2026-10-20T09:12:04Z が時刻の欄です。2026 年 10 月 20 日の 09:12:04 UTC に画面がロックされました。",
      "hints": [
        "まず、年・月・日が書かれている欄を探しましょう。",
        "時刻の欄には 09:12:04 のように、コロンで区切った数字が入っています。",
        "先頭が 2026-10-20 で、末尾が Z の欄をクリックします。"
      ],
      "solution": "「2026-10-20T09:12:04Z」をクリックして答え合わせします。",
      "bridge": {
        "tool": "ログ検索",
        "how": "SOCroom の「ログ検索」で、出来事が起きた時刻を読む最初の一歩です。"
      },
      "flag": "EASY{READ_TIME}",
      "level": "beginner"
    },
    {
      "id": "r2",
      "chapter": "read",
      "title": "アカウント名を読む",
      "skill": "user の値を抜き出す",
      "minutes": 2,
      "brief": "同じ端末を複数人が使うこともあります。「端末の名前」と「使われたアカウントの名前」を分けて読みましょう。",
      "learn": [
        "host は端末名です。user は、その操作に記録されたアカウント名です。",
        "キー=値 という書き方では、= の左が欄の名前、右が内容です。user=demo なら、アカウント名は demo です。",
        "event=login はログインの操作を表します。この行には結果の欄がないため、成功したかどうかはこの行だけでは判断できません。",
        "先頭の日時は UTC です。user に名前があっても、実際に操作した人が本人だと分かったわけではありません。"
      ],
      "example": {
        "title": "別のアカウントの例",
        "text": "2026-10-19T08:05:00Z host=pc-demo user=haru event=login\nこの場合、端末は pc-demo、アカウントは haru です。アカウント名を聞かれたら haru と入力します。"
      },
      "task": "表示されたログで使われたアカウント名を入力してください。user= は付けず、値だけを入力します。",
      "kind": "text",
      "sourceLabel": "認証操作ログ・1 行",
      "rows": [
        {
          "id": "r2-log",
          "time": "09:14:10",
          "host": "pc-rin",
          "user": "rin",
          "event": "login",
          "raw": "2026-10-20T09:14:10Z host=pc-rin user=rin event=login"
        }
      ],
      "answer": {
        "values": [
          "rin"
        ],
        "caseSensitive": true
      },
      "answerExplanation": "user=rin なのでアカウント名は rin です。pc-rin は host に書かれた端末名です。",
      "hints": [
        "アカウントの欄は user です。",
        "user= の右側を見てください。host= の右側ではありません。",
        "user=rin の値だけを入力します。"
      ],
      "solution": "入力欄に「rin」と入力して答え合わせします。",
      "bridge": {
        "tool": "ログ検索",
        "how": "SOCroom の「ログ検索」で、どのアカウントを調べるか決めるときに使います。"
      },
      "flag": "EASY{READ_USER}",
      "level": "beginner"
    },
    {
      "id": "r3",
      "chapter": "read",
      "title": "成功と失敗を見分ける",
      "skill": "result の値を読む",
      "minutes": 2,
      "brief": "ログインした記録があっても、その試行が成功したとは限りません。結果の欄を確認しましょう。",
      "learn": [
        "event=login はログインの試行です。result はその操作の結果を表します。",
        "この教材では result=success は成功、result=failed は失敗です。失敗した理由は、この短い行には書かれていません。",
        "user は使われたアカウント、先頭の日時は UTC の時刻です。",
        "失敗はパスワードの打ち間違いでも攻撃でも起こり得ます。「失敗した」という事実と「攻撃だった」という判断は分けます。"
      ],
      "example": {
        "title": "成功したログの例",
        "text": "2026-10-19T08:10:00Z user=haru event=login result=success\nresult=success なので、ログインは成功です。今回は成功か失敗かだけを読みます。"
      },
      "task": "表示されたログで、「ログインが失敗した」と分かる欄を 1 つクリックしてください。",
      "kind": "token",
      "sourceLabel": "認証結果ログ・1 行",
      "rows": [
        {
          "id": "r3-log",
          "time": "09:15:20",
          "user": "rin",
          "event": "login",
          "result": "failed",
          "raw": "2026-10-20T09:15:20Z user=rin event=login result=failed"
        }
      ],
      "tokens": [
        {
          "id": "r3-time",
          "label": "2026-10-20T09:15:20Z",
          "meaning": "UTC の時刻。"
        },
        {
          "id": "r3-user",
          "label": "user=rin",
          "meaning": "使われたアカウント。"
        },
        {
          "id": "r3-event",
          "label": "event=login",
          "meaning": "ログインの試行。"
        },
        {
          "id": "r3-result",
          "label": "result=failed",
          "meaning": "操作の結果。失敗。"
        }
      ],
      "answer": {
        "tokenId": "r3-result"
      },
      "answerExplanation": "result=failed が失敗を示します。この行で確かめられるのはログインが失敗したことまでで、理由や攻撃者の存在はまだ分かりません。",
      "hints": [
        "操作の名前ではなく、結果の欄を探しましょう。",
        "結果の欄の名前は result です。",
        "failed は「失敗」を意味します。result=failed を選びます。"
      ],
      "solution": "「result=failed」をクリックして答え合わせします。",
      "bridge": {
        "tool": "ログ検索",
        "how": "SOCroom の「ログ検索」で、認証失敗と認証成功を分けて調べるときに使います。"
      },
      "flag": "EASY{READ_RESULT}",
      "level": "beginner"
    },
    {
      "id": "r4",
      "chapter": "read",
      "title": "通信の出発点を読む",
      "skill": "src と dst を区別する",
      "minutes": 3,
      "brief": "通信には出発点と行き先があります。知らない IP アドレスが出ても、まずはどちら側のアドレスなのかを読みます。",
      "learn": [
        "IP アドレスは、通信する機器や接続先を区別するためのアドレスです。ここでは 198.51.100.24 のような数字をそのまま読みます。",
        "src は送信元、つまりこの記録での通信の出発点です。dst は送信先、つまり行き先です。",
        "event=connection は通信接続の記録です。先頭の日時は UTC です。",
        "IP アドレスだけでは、操作した人や攻撃かどうかは決まりません。この教材の IP アドレスは説明用の架空の値です。"
      ],
      "example": {
        "title": "出発点と行き先の例",
        "text": "2026-10-19T08:20:00Z src=192.0.2.10 dst=203.0.113.70 event=connection\n送信元は 192.0.2.10、送信先は 203.0.113.70 です。src と dst の順番が変わってもキーを見て読みます。"
      },
      "task": "表示されたログの送信元 IP アドレスを入力してください。src= は付けず、数字とドットだけを入力します。",
      "kind": "text",
      "sourceLabel": "通信ログ・1 行",
      "rows": [
        {
          "id": "r4-log",
          "time": "09:18:00",
          "src": "198.51.100.24",
          "dst": "192.0.2.80",
          "event": "connection",
          "raw": "2026-10-20T09:18:00Z src=198.51.100.24 dst=192.0.2.80 event=connection"
        }
      ],
      "answer": {
        "values": [
          "198.51.100.24"
        ]
      },
      "answerExplanation": "src=198.51.100.24 なので、送信元は 198.51.100.24 です。192.0.2.80 は dst に書かれた送信先です。",
      "hints": [
        "送信元は src、送信先は dst です。",
        "src= の直後に書かれた数字を、ドットも含めて読みます。",
        "src=198.51.100.24 の値だけを入力します。"
      ],
      "solution": "「198.51.100.24」と入力して答え合わせします。",
      "bridge": {
        "tool": "ログ検索",
        "how": "SOCroom の「ログ検索」で、通信元と通信先を取り違えずに調査するための読み方です。"
      },
      "flag": "EASY{READ_SOURCE}",
      "level": "beginner"
    },
    {
      "id": "f1",
      "chapter": "find",
      "title": "1 台の端末を探す",
      "skill": "端末名で検索して対象の行を選ぶ",
      "minutes": 3,
      "brief": "ログが増えたら、全部を一度に読もうとせず、調べたい端末の記録だけを探します。",
      "learn": [
        "host は端末名です。host=pc-kai は pc-kai という端末の記録を意味します。",
        "検索欄に文字を入れると、その文字を含む行に絞り込めます。この教材は生ログに書かれた文字をそのまま検索します。",
        "今回は host=pc-kai と入力します。検索できたら、残った行をクリックして回答に選びます。",
        "user はアカウント、event=login はログインの試行、result=success は成功、result=failed は失敗です。時刻はすべて同じ日の UTC です。"
      ],
      "example": {
        "title": "別の端末を検索する例",
        "text": "端末 pc-demo を探す場合は「host=pc-demo」と検索します。\n2026-10-19T09:00:00Z host=pc-demo user=demo event=login result=success\nこの行が残ったら、行を選択します。検索と選択の両方で回答します。"
      },
      "task": "検索欄に「host=pc-kai」と入力し、pc-kai のログを選択してください。",
      "kind": "filter",
      "sourceLabel": "認証ログ・4 行",
      "rows": [
        {
          "id": "f1-a",
          "time": "09:20:00",
          "host": "pc-emi",
          "user": "emi",
          "event": "login",
          "result": "success",
          "raw": "2026-10-20T09:20:00Z host=pc-emi user=emi event=login result=success"
        },
        {
          "id": "f1-b",
          "time": "09:20:12",
          "host": "pc-kai",
          "user": "kai",
          "event": "login",
          "result": "failed",
          "raw": "2026-10-20T09:20:12Z host=pc-kai user=kai event=login result=failed"
        },
        {
          "id": "f1-c",
          "time": "09:20:18",
          "host": "pc-nao",
          "user": "nao",
          "event": "login",
          "result": "success",
          "raw": "2026-10-20T09:20:18Z host=pc-nao user=nao event=login result=success"
        },
        {
          "id": "f1-d",
          "time": "09:20:30",
          "host": "pc-ren",
          "user": "ren",
          "event": "login",
          "result": "success",
          "raw": "2026-10-20T09:20:30Z host=pc-ren user=ren event=login result=success"
        }
      ],
      "answer": {
        "query": "host=pc-kai",
        "rowIds": [
          "f1-b"
        ]
      },
      "answerExplanation": "host=pc-kai に一致するのは 09:20:12 の 1 行です。検索だけで終わらず、調べる対象の行を選べました。",
      "hints": [
        "検索欄に端末を表すキー host と端末名を入れましょう。",
        "入力する文字列は host=pc-kai です。前後の引用符は不要です。",
        "検索後に残る、09:20:12 の行を選択します。"
      ],
      "solution": "検索欄に「host=pc-kai」と入力し、09:20:12 の行を選んで答え合わせします。",
      "bridge": {
        "tool": "ログ検索",
        "how": "SOCroom で対象端末のログを絞り、関係のない端末の記録をいったん外す操作につながります。"
      },
      "flag": "EASY{FIND_HOST}",
      "level": "beginner"
    },
    {
      "id": "f2",
      "chapter": "find",
      "title": "同じアカウントを追う",
      "skill": "user で検索して複数行を選ぶ",
      "minutes": 3,
      "brief": "同じアカウントの記録が、離れた位置や別の端末に現れることがあります。端末名ではなくアカウント名を軸に探してみましょう。",
      "learn": [
        "user はアカウント名、host は端末名です。同じ user が別々の host に登場する場合もあります。",
        "検索欄に user=nao と入力すると、今回の資料でその文字を含むログが残ります。",
        "今回は 1 行だけでなく、一致する行をすべて選びます。複数の行をクリックすると、まとめて選択できます。",
        "event=login はログインの試行、result=success は成功、result=failed は失敗です。時刻は UTC です。"
      ],
      "example": {
        "title": "別のアカウントを追う例",
        "text": "user=haru で探すと、host=pc-demo user=haru と host=pc-sub user=haru の両方が対象です。host が違っても user が一致するため、両方の行を選びます。"
      },
      "task": "「user=nao」と検索し、nao のログをすべて選択してください。成功・失敗の両方を対象にします。",
      "kind": "filter",
      "sourceLabel": "認証ログ・5 行",
      "rows": [
        {
          "id": "f2-a",
          "time": "09:23:00",
          "host": "pc-nao",
          "user": "nao",
          "event": "login",
          "result": "failed",
          "raw": "2026-10-20T09:23:00Z host=pc-nao user=nao event=login result=failed"
        },
        {
          "id": "f2-b",
          "time": "09:23:05",
          "host": "pc-emi",
          "user": "emi",
          "event": "login",
          "result": "success",
          "raw": "2026-10-20T09:23:05Z host=pc-emi user=emi event=login result=success"
        },
        {
          "id": "f2-c",
          "time": "09:23:10",
          "host": "pc-kai",
          "user": "kai",
          "event": "login",
          "result": "failed",
          "raw": "2026-10-20T09:23:10Z host=pc-kai user=kai event=login result=failed"
        },
        {
          "id": "f2-d",
          "time": "09:23:20",
          "host": "pc-shared",
          "user": "nao",
          "event": "login",
          "result": "success",
          "raw": "2026-10-20T09:23:20Z host=pc-shared user=nao event=login result=success"
        },
        {
          "id": "f2-e",
          "time": "09:23:25",
          "host": "pc-ren",
          "user": "ren",
          "event": "login",
          "result": "success",
          "raw": "2026-10-20T09:23:25Z host=pc-ren user=ren event=login result=success"
        }
      ],
      "answer": {
        "query": "user=nao",
        "rowIds": [
          "f2-a",
          "f2-d"
        ]
      },
      "answerExplanation": "09:23:00 と 09:23:20 の user が nao です。端末と結果が違っていても、今回は同じアカウントの記録なので両方を選びます。",
      "hints": [
        "今回は端末ではなくアカウントの名前で探します。キーは user です。",
        "検索欄には user=nao と入力します。一致する行は 2 行です。",
        "09:23:00 と 09:23:20 の行を選択します。"
      ],
      "solution": "「user=nao」と検索して、09:23:00 と 09:23:20 の 2 行を選び、答え合わせします。",
      "bridge": {
        "tool": "ログ検索",
        "how": "SOCroom で同じアカウントの前後の操作を調べるとき、端末が違う記録も見つけられるようになります。"
      },
      "flag": "EASY{FIND_USER}",
      "level": "beginner"
    },
    {
      "id": "f3",
      "chapter": "find",
      "title": "失敗した行を拾う",
      "skill": "条件に合うログだけを選ぶ",
      "minutes": 3,
      "brief": "色や順番に頼らず、結果の文字を読み比べてみます。選ぶ条件を先に決めると、ログを整理しやすくなります。",
      "learn": [
        "result=failed は失敗、result=success は成功です。この問いでは failed の行だけが対象です。",
        "event=login はログインの試行、user はアカウント、host は端末名です。時刻は UTC です。",
        "条件に合う行をすべて選びます。選びすぎたときは、同じ行をもう一度クリックして選択を外せます。",
        "失敗があっても攻撃と決めつけません。ここでは「失敗した記録を集める」という作業だけを練習します。"
      ],
      "example": {
        "title": "2 行を読み分ける例",
        "text": "user=demo event=login result=success → 今回の条件では選びません。\nuser=sample event=login result=failed → 失敗した行なので選びます。\nuser の名前ではなく result の値で決めます。"
      },
      "task": "ログインに失敗した行だけを、すべて選択してください。",
      "kind": "rows",
      "sourceLabel": "認証ログ・4 行",
      "rows": [
        {
          "id": "f3-a",
          "time": "09:25:00",
          "host": "pc-yui",
          "user": "yui",
          "event": "login",
          "result": "success",
          "raw": "2026-10-20T09:25:00Z host=pc-yui user=yui event=login result=success"
        },
        {
          "id": "f3-b",
          "time": "09:25:07",
          "host": "pc-ren",
          "user": "ren",
          "event": "login",
          "result": "failed",
          "raw": "2026-10-20T09:25:07Z host=pc-ren user=ren event=login result=failed"
        },
        {
          "id": "f3-c",
          "time": "09:25:12",
          "host": "pc-yui",
          "user": "yui",
          "event": "login",
          "result": "failed",
          "raw": "2026-10-20T09:25:12Z host=pc-yui user=yui event=login result=failed"
        },
        {
          "id": "f3-d",
          "time": "09:25:22",
          "host": "pc-ren",
          "user": "ren",
          "event": "login",
          "result": "success",
          "raw": "2026-10-20T09:25:22Z host=pc-ren user=ren event=login result=success"
        }
      ],
      "answer": {
        "rowIds": [
          "f3-b",
          "f3-c"
        ]
      },
      "answerExplanation": "09:25:07 と 09:25:12 は result=failed です。残りの 2 行は success なので、今回は選びません。",
      "hints": [
        "各行の result= の右側を見比べましょう。",
        "failed と書かれた行は 2 行あります。",
        "09:25:07 と 09:25:12 の行を選び、success の 2 行は外します。"
      ],
      "solution": "09:25:07 と 09:25:12 の 2 行を選択して答え合わせします。",
      "bridge": {
        "tool": "ログ検索",
        "how": "SOCroom で、調査したい条件に一致する記録を拾い、証拠候補を選ぶ作業につながります。"
      },
      "flag": "EASY{SELECT_FAILURES}",
      "level": "beginner"
    },
    {
      "id": "f4",
      "chapter": "find",
      "title": "失敗の回数を数える",
      "skill": "指定された範囲の件数を報告する",
      "minutes": 3,
      "brief": "「たくさん失敗した」だけでなく、どの範囲を見て何件あったかを伝えると正確です。表示された記録を実際に数えてみましょう。",
      "learn": [
        "1 行を 1 件のログとして数えます。この設問は、表示された 5 行だけを対象にします。",
        "event=login はログインの試行です。result=failed の行だけを数え、success の行は数えません。",
        "host は端末名、user はアカウントです。ここではすべて pc-aki 上の aki の記録です。時刻は UTC です。",
        "見えている範囲の件数と、1 日全体の件数は別です。今回の資料から 1 日全体の失敗回数は分かりません。"
      ],
      "example": {
        "title": "別の件数の例",
        "text": "result=failed / result=success / result=failed の 3 行なら、失敗は 2 件です。「3 行ある」ことと「失敗が 2 件ある」ことを区別します。"
      },
      "task": "表示された 5 行の中で、ログインに失敗した記録は何件ありますか。件数を数字で入力してください。",
      "kind": "text",
      "sourceLabel": "認証ログ・表示範囲の 5 行",
      "rows": [
        {
          "id": "f4-a",
          "time": "09:28:00",
          "host": "pc-aki",
          "user": "aki",
          "event": "login",
          "result": "failed",
          "raw": "2026-10-20T09:28:00Z host=pc-aki user=aki event=login result=failed"
        },
        {
          "id": "f4-b",
          "time": "09:28:08",
          "host": "pc-aki",
          "user": "aki",
          "event": "login",
          "result": "failed",
          "raw": "2026-10-20T09:28:08Z host=pc-aki user=aki event=login result=failed"
        },
        {
          "id": "f4-c",
          "time": "09:28:20",
          "host": "pc-aki",
          "user": "aki",
          "event": "login",
          "result": "success",
          "raw": "2026-10-20T09:28:20Z host=pc-aki user=aki event=login result=success"
        },
        {
          "id": "f4-d",
          "time": "09:29:00",
          "host": "pc-aki",
          "user": "aki",
          "event": "login",
          "result": "failed",
          "raw": "2026-10-20T09:29:00Z host=pc-aki user=aki event=login result=failed"
        },
        {
          "id": "f4-e",
          "time": "09:29:15",
          "host": "pc-aki",
          "user": "aki",
          "event": "login",
          "result": "success",
          "raw": "2026-10-20T09:29:15Z host=pc-aki user=aki event=login result=success"
        }
      ],
      "answer": {
        "values": [
          "3",
          "３",
          "3件",
          "３件"
        ]
      },
      "answerExplanation": "failed は 09:28:00、09:28:08、09:29:00 の 3 件です。この 5 行の中での件数であり、表示されていない時間帯まで含む数ではありません。",
      "hints": [
        "5 行すべてではなく、result=failed の行だけ数えます。",
        "最初の 2 行は failed、3 行目は success です。残りの 2 行も確認しましょう。",
        "失敗は 09:28:00、09:28:08、09:29:00 の行です。この行数を入力します。"
      ],
      "solution": "「3」と入力して答え合わせします。",
      "bridge": {
        "tool": "対応記録",
        "how": "SOCroom の「対応記録」で、確認した時間帯と件数を具体的に伝える基礎になります。"
      },
      "flag": "EASY{COUNT_EVENTS}",
      "level": "beginner"
    },
    {
      "id": "c1",
      "chapter": "connect",
      "title": "出来事を時間順に並べる",
      "skill": "ログを発生順に並べ直す",
      "minutes": 4,
      "brief": "記録が画面に届いた順番と、出来事が起きた順番は同じとは限りません。時刻を使って、操作の流れを作りましょう。",
      "learn": [
        "この 4 行は同じ日の UTC 時刻で記録されており、並び順だけが混ざっています。",
        "host は端末、user はアカウント、event は操作の種類です。",
        "event=login はログイン、file_open はファイルを開く、file_close はファイルを閉じる、logout はログアウトです。",
        "上下のボタンで行を動かします。操作名から推測せず、時刻が早いものから並べてください。"
      ],
      "example": {
        "title": "別の時刻を並べる例",
        "text": "08:40:20、08:40:05、08:40:10 の順で表示されていても、時間順は 08:40:05 → 08:40:10 → 08:40:20 です。同じ分の中では秒の数字を比べます。"
      },
      "task": "4 行を、時刻が早いものから遅いものへ並べ替えてください。上下のボタンを使います。",
      "kind": "order",
      "sourceLabel": "操作ログ・順番が混ざった 4 行",
      "rows": [
        {
          "id": "c1-close",
          "time": "09:30:30",
          "host": "pc-mei",
          "user": "mei",
          "event": "file_close",
          "raw": "2026-10-20T09:30:30Z host=pc-mei user=mei event=file_close"
        },
        {
          "id": "c1-login",
          "time": "09:30:10",
          "host": "pc-mei",
          "user": "mei",
          "event": "login",
          "raw": "2026-10-20T09:30:10Z host=pc-mei user=mei event=login"
        },
        {
          "id": "c1-logout",
          "time": "09:30:40",
          "host": "pc-mei",
          "user": "mei",
          "event": "logout",
          "raw": "2026-10-20T09:30:40Z host=pc-mei user=mei event=logout"
        },
        {
          "id": "c1-open",
          "time": "09:30:20",
          "host": "pc-mei",
          "user": "mei",
          "event": "file_open",
          "raw": "2026-10-20T09:30:20Z host=pc-mei user=mei event=file_open"
        }
      ],
      "answer": {
        "rowIds": [
          "c1-login",
          "c1-open",
          "c1-close",
          "c1-logout"
        ]
      },
      "answerExplanation": "09:30:10 → 09:30:20 → 09:30:30 → 09:30:40 の順です。時刻を読むことで、ログイン、ファイルを開く、閉じる、ログアウトという流れを整理できました。",
      "hints": [
        "全行とも 09:30 なので、最後の秒の数字を比べましょう。",
        "最初は 09:30:10、最後は 09:30:40 です。",
        "上から 09:30:10、09:30:20、09:30:30、09:30:40 に並べます。"
      ],
      "solution": "login → file_open → file_close → logout の順になるよう、時刻 09:30:10、20、30、40 の順に並べて答え合わせします。",
      "bridge": {
        "tool": "時系列",
        "how": "SOCroom の「時系列」で、怪しい操作の前に何があり、その後に何が起きたかを整理する練習です。"
      },
      "flag": "EASY{ORDER_EVENTS}",
      "level": "beginner"
    },
    {
      "id": "c2",
      "chapter": "connect",
      "title": "同じセッションをつなぐ",
      "skill": "共通の ID を使って関連する行を選ぶ",
      "minutes": 4,
      "brief": "時刻が近いだけでは、同じ操作の続きとは限りません。記録に共通の目印があれば、それを使って関連を調べます。",
      "learn": [
        "session は、ひと続きの接続や操作を区別するための ID です。この教材では同じ session の行を同じセッションの記録として扱います。",
        "同じ user でも、session が違えば別セッションの記録です。今回は session=S72 が選ぶ条件です。",
        "user はアカウント、event は操作の種類です。login はログイン、file_open はファイルを開く、logout はログアウトです。時刻は UTC です。",
        "共通の session があっても、実際に操作した人が本人であるとは限りません。ここでは記録どうしのつながりだけを確かめます。"
      ],
      "example": {
        "title": "別のセッションの例",
        "text": "user=demo session=D10 event=login と user=demo session=D10 event=logout は、同じ session=D10 でつながります。user=demo でも session=D11 の行は別に扱います。"
      },
      "task": "session=S72 の行をすべて選択してください。同じ user でも、別の session の行は選びません。",
      "kind": "rows",
      "sourceLabel": "セッション付き操作ログ・5 行",
      "rows": [
        {
          "id": "c2-a",
          "time": "09:35:00",
          "user": "sora",
          "session": "S72",
          "event": "login",
          "raw": "2026-10-20T09:35:00Z user=sora session=S72 event=login"
        },
        {
          "id": "c2-b",
          "time": "09:35:03",
          "user": "sora",
          "session": "S73",
          "event": "login",
          "raw": "2026-10-20T09:35:03Z user=sora session=S73 event=login"
        },
        {
          "id": "c2-c",
          "time": "09:35:10",
          "user": "sora",
          "session": "S72",
          "event": "file_open",
          "raw": "2026-10-20T09:35:10Z user=sora session=S72 event=file_open"
        },
        {
          "id": "c2-d",
          "time": "09:35:15",
          "user": "emi",
          "session": "S74",
          "event": "login",
          "raw": "2026-10-20T09:35:15Z user=emi session=S74 event=login"
        },
        {
          "id": "c2-e",
          "time": "09:35:30",
          "user": "sora",
          "session": "S72",
          "event": "logout",
          "raw": "2026-10-20T09:35:30Z user=sora session=S72 event=logout"
        }
      ],
      "answer": {
        "rowIds": [
          "c2-a",
          "c2-c",
          "c2-e"
        ]
      },
      "answerExplanation": "09:35:00、09:35:10、09:35:30 の 3 行が session=S72 です。09:35:03 は同じ sora ですが S73 のため、今回の対象には含めません。",
      "hints": [
        "user だけでなく、各行の session= の値を確認しましょう。",
        "選ぶ ID は S72 です。S73 と S74 は外します。",
        "09:35:00、09:35:10、09:35:30 の 3 行を選びます。"
      ],
      "solution": "session=S72 と書かれた 09:35:00、09:35:10、09:35:30 の 3 行を選んで答え合わせします。",
      "bridge": {
        "tool": "ログ検索",
        "how": "SOCroom で共通のアカウントや接続の目印を使い、複数のログを照合する考え方につながります。"
      },
      "flag": "EASY{CONNECT_SESSION}",
      "level": "beginner"
    },
    {
      "id": "c3",
      "chapter": "connect",
      "title": "成功していても、まだ分からない",
      "skill": "記録された結果と安全性の判断を分ける",
      "minutes": 4,
      "brief": "ログから分かることを、分かる範囲で言葉にします。「成功」と「本人の正しい操作」は、同じ意味ではありません。",
      "learn": [
        "event=login はログインの試行、result=failed は失敗、result=success は成功を表します。",
        "user は使われたアカウント名です。user に名前があるだけでは、その人が操作したと確認できたわけではありません。",
        "src は通信の送信元 IP アドレスです。同じ src であっても、本人の操作かどうかをこの値だけで決めることはできません。時刻は UTC です。",
        "資料にないことは「不明」と残します。本人や担当者への確認など、別の証拠が必要な場面です。"
      ],
      "example": {
        "title": "記録と判断を分ける例",
        "text": "user=demo event=login result=failed の 1 行から言えるのは「demo のログインが失敗した」です。「demo が打ち間違えた」か「誰かが侵入を試みた」かは、その行だけでは分かりません。"
      },
      "task": "表示された 2 行だけを見て、確実に言えることはどれですか。",
      "kind": "choice",
      "sourceLabel": "認証ログ・2 行。本人確認の資料はなし",
      "rows": [
        {
          "id": "c3-a",
          "time": "09:40:00",
          "user": "mio",
          "src": "192.0.2.44",
          "event": "login",
          "result": "failed",
          "raw": "2026-10-20T09:40:00Z user=mio src=192.0.2.44 event=login result=failed"
        },
        {
          "id": "c3-b",
          "time": "09:40:15",
          "user": "mio",
          "src": "192.0.2.44",
          "event": "login",
          "result": "success",
          "raw": "2026-10-20T09:40:15Z user=mio src=192.0.2.44 event=login result=success"
        }
      ],
      "choices": [
        {
          "id": "c3-normal",
          "label": "最後は成功しているので、mio 本人の正常な操作だった。",
          "feedback": "success はログインが成功したことを表すだけです。本人の操作だったことを示す確認資料はありません。"
        },
        {
          "id": "c3-unknown",
          "label": "失敗の後にログインは成功した。本人の操作かは、この資料だけでは不明。",
          "feedback": "2 行の時刻と result から、失敗の後に成功したと読めます。本人かどうかは別の確認が必要です。"
        },
        {
          "id": "c3-attack",
          "label": "失敗の後に成功しているので、攻撃者の侵入が確定した。",
          "feedback": "失敗の後に成功する流れは、打ち間違いの後の再入力でも起こります。攻撃と断定できる追加証拠はありません。"
        }
      ],
      "answer": {
        "choiceId": "c3-unknown"
      },
      "answerExplanation": "09:40:00 に失敗し、09:40:15 に成功したことは確認できます。どちらも mio というアカウントと同じ送信元の記録ですが、本人の操作かどうかは確認できていません。",
      "hints": [
        "result は操作の結果です。操作した人の身元を保証する欄ではありません。",
        "本人への確認や、操作が予定されていたことを示す資料はあるでしょうか。今回はありません。",
        "「失敗の後に成功した」という事実と、「本人かは不明」という限界を両方含む答えを選びます。"
      ],
      "solution": "「失敗の後にログインは成功した。本人の操作かは、この資料だけでは不明。」を選んで答え合わせします。",
      "bridge": {
        "tool": "照会",
        "how": "SOCroom の「照会」で関係者に確認し、ログだけでは不足している事実を集める理由が分かります。"
      },
      "flag": "EASY{SEPARATE_FACTS}",
      "level": "beginner"
    },
    {
      "id": "c4",
      "chapter": "connect",
      "title": "記録がない理由を考える",
      "skill": "証拠の欠落を判断に含める",
      "minutes": 4,
      "brief": "「ログに見つからない」と「起きていない」は同じではありません。そもそも必要な時間帯のログが集まっているかを確かめます。",
      "learn": [
        "ログ収集とは、各機器の記録を調査用の場所に集めることです。今回はその集約先にある資料だけを見ています。",
        "host=collector-01 は収集装置の名前です。event=collection_stopped は収集が止まったこと、collection_started は収集が再開したことを表します。",
        "この設問では、収集停止中の認証ログは集約先へ届いておらず、後から回収できたかも未確認です。時刻は UTC です。",
        "欠けた時間帯の出来事を、記録がないことだけで否定できません。元の機器に残るログや別の記録で確かめる必要があります。"
      ],
      "example": {
        "title": "資料の範囲が足りない例",
        "text": "手元の資料が 08:00 から 08:30 までしかないとき、09:00 の操作が起きたかは、その資料だけでは判断できません。「見つからなかった」の前に、調べた範囲を確かめます。"
      },
      "task": "集約先では 10:05 から 10:15 のログイン記録が見つかりませんでした。収集装置の記録を踏まえると、どの説明が適切ですか。",
      "kind": "choice",
      "sourceLabel": "収集装置の状態ログ・2 行。停止中の認証ログは未回収",
      "rows": [
        {
          "id": "c4-stop",
          "time": "10:05:00",
          "host": "collector-01",
          "event": "collection_stopped",
          "raw": "2026-10-20T10:05:00Z host=collector-01 event=collection_stopped"
        },
        {
          "id": "c4-start",
          "time": "10:15:00",
          "host": "collector-01",
          "event": "collection_started",
          "raw": "2026-10-20T10:15:00Z host=collector-01 event=collection_started"
        }
      ],
      "choices": [
        {
          "id": "c4-none",
          "label": "ログイン記録がないので、その間にログインは一度もなかった。",
          "feedback": "この時間帯はログ収集が止まっています。記録が届かなかった可能性があるため、ログインがなかったとは言い切れません。"
        },
        {
          "id": "c4-deleted",
          "label": "ログがないのは、攻撃者が証拠を削除したからだ。",
          "feedback": "収集停止の記録はありますが、攻撃者による削除を示す資料はありません。原因を作り足さないようにします。"
        },
        {
          "id": "c4-gap",
          "label": "収集が止まっていたため、この資料だけではログインの有無は不明。元の機器の記録などを確認する。",
          "feedback": "10:05 の収集停止から 10:15 の再開まで資料が欠けています。不明点を残し、別の記録を確認するのが適切です。"
        }
      ],
      "answer": {
        "choiceId": "c4-gap"
      },
      "answerExplanation": "10:05 から 10:15 は収集が停止していました。集約先のログがないことは確認できても、実際にログインがなかったとは判断できません。元の認証機器のログや収集状況を確認します。",
      "hints": [
        "ログインの記録だけでなく、収集装置の停止と再開の時刻を読みましょう。",
        "探していた 10:05 から 10:15 は、ちょうど収集が止まっていた時間帯です。",
        "「有無は不明」とし、別の記録を確認する選択肢を選びます。"
      ],
      "solution": "「収集が止まっていたため、この資料だけではログインの有無は不明。元の機器の記録などを確認する。」を選んで答え合わせします。",
      "bridge": {
        "tool": "対応記録",
        "how": "SOCroom の「対応記録」で、調査できた範囲・分からない点・次に確認することを分けて書く練習です。"
      },
      "flag": "EASY{CHECK_COVERAGE}",
      "level": "beginner"
    },
    {
      "id": "e1",
      "chapter": "evidence",
      "title": "端末の役割を調べる",
      "skill": "資産台帳から、調べる端末の用途を確認する",
      "minutes": 3,
      "brief": "同じ名前の端末が何をする機器なのか、ログだけでは分かりません。まず機器の説明書にあたる「資産台帳」を見てみましょう。",
      "learn": [
        "資産台帳は、端末の名前・用途・担当者をまとめた一覧です。",
        "host は記録が発生した機器の名前です。今回の host は meeting-gw-01 です。",
        "機器の用途を知ると、その動きが仕事に必要そうかを考える手がかりになります。用途だけで安全とは決まりません。"
      ],
      "example": {
        "title": "別の端末で練習",
        "text": "ログに host=label-print-03 とあり、台帳に「label-print-03：配送ラベルの印刷」とあれば、その機器の役割は配送ラベルの印刷です。名前が似ている別の機器の説明は使いません。"
      },
      "task": "ログにある meeting-gw-01 は、どの仕事に使う機器ですか。台帳の名前を照合して選んでください。",
      "kind": "choice",
      "sourceLabel": "確認するログと資産台帳",
      "rows": [
        {
          "id": "e1-log",
          "sourceType": "log",
          "title": "今回のログ",
          "body": "host=meeting-gw-01 event=connection_started\nhost は機器名、event は起きた出来事です。meeting-gw-01 が接続を開始した記録です。"
        },
        {
          "id": "e1-asset",
          "sourceType": "document",
          "title": "資産台帳の抜粋",
          "body": "meeting-gw-01：会議室の映像・音声を社内会議システムにつなぐ機器。担当：総務設備係。\nlabel-print-03：配送ラベルを印刷する機器。担当：発送係。"
        }
      ],
      "choices": [
        {
          "id": "e1-video",
          "label": "会議室の映像・音声の接続",
          "feedback": "台帳の meeting-gw-01 と一致します。"
        },
        {
          "id": "e1-label",
          "label": "配送ラベルの印刷",
          "feedback": "その用途は label-print-03 です。ログにある機器名と台帳の名前を1文字ずつ照合しましょう。"
        },
        {
          "id": "e1-unknown",
          "label": "台帳からは分からない",
          "feedback": "今回の台帳には meeting-gw-01 の用途が書かれています。該当する名前の行を探しましょう。"
        }
      ],
      "answer": {
        "choiceId": "e1-video"
      },
      "answerExplanation": "ログの host=meeting-gw-01 と、台帳の meeting-gw-01 が一致します。用途は会議室の映像・音声の接続です。これは機器の役割が分かった段階で、接続が安全かどうかはまだ判定していません。",
      "hints": [
        "ログに書かれた機器名を見つけてください。",
        "host の値は meeting-gw-01 です。同じ名前を台帳で探します。",
        "meeting-gw-01 の説明にある、会議室の映像・音声に対応する選択肢を選びます。"
      ],
      "solution": "「会議室の映像・音声の接続」を選びます。ログと台帳の機器名を照合する問題です。",
      "bridge": {
        "tool": "SOCroom の「資産・資料」",
        "how": "機器の台帳を見て、調査対象の用途と担当者を把握するときに使います。"
      },
      "flag": "EASY{ASSET_ROLE}",
      "level": "beginner"
    },
    {
      "id": "e2",
      "chapter": "evidence",
      "title": "予定と実際を2枚で照合する",
      "skill": "ログと承認票を組み合わせて判断の根拠にする",
      "minutes": 4,
      "brief": "機器が再起動しました。予定された作業かを確かめるには、実際の記録と許可された予定の両方が必要です。",
      "learn": [
        "ログは「実際に何が記録されたか」を示します。承認票は「どの作業を行ってよいか」を示します。",
        "承認票があるだけでは、そのとおりに実施されたとは限りません。機器名・時刻・作業内容を照合します。",
        "以下の時刻はすべて UTC です。同じ基準なので、そのまま比較できます。"
      ],
      "example": {
        "title": "別の再起動を照合",
        "text": "ログ「router-lab-02、10:05、再起動」と承認票「router-lab-02、10:00〜10:10、再起動を許可」を組み合わせれば、記録された再起動が許可範囲に入ると説明できます。別の機器の承認票では説明できません。"
      },
      "task": "「printer-07 の22:04の再起動は、承認された機器・時間・作業内容に一致する」と説明する根拠を2枚選んでください。",
      "kind": "evidence",
      "sourceLabel": "今回集まった3枚の資料",
      "rows": [
        {
          "id": "e2-log",
          "sourceType": "log",
          "title": "printer-07 の実行ログ",
          "body": "2026-10-21T22:04:00Z host=printer-07 event=restart result=completed\nUTC 22:04、printer-07 の再起動が完了した記録です。"
        },
        {
          "id": "e2-approved",
          "sourceType": "document",
          "title": "承認済み作業票 CHG-72",
          "body": "対象：printer-07。作業：印刷機器の再起動。実施可能時間：2026-10-21 UTC 22:00〜22:10。状態：設備責任者による承認済み。"
        },
        {
          "id": "e2-other",
          "sourceType": "document",
          "title": "承認済み作業票 CHG-73",
          "body": "対象：meeting-gw-01。作業：映像設定の変更。実施可能時間：2026-10-21 UTC 22:00〜22:30。状態：設備責任者による承認済み。"
        }
      ],
      "answer": {
        "rowIds": [
          "e2-log",
          "e2-approved"
        ]
      },
      "answerExplanation": "実行ログが実際の機器・時刻・再起動を示し、CHG-72 が同じ機器で22:00〜22:10に再起動してよいと示します。22:04はその範囲内です。CHG-73 は別の機器・別の作業なので今回の根拠にはなりません。",
      "hints": [
        "「実際に起きたこと」と「許可されたこと」を1枚ずつ選びます。",
        "承認票は、printer-07 と再起動の両方が一致するものを探しましょう。",
        "printer-07 の実行ログと CHG-72 を選びます。22:04 が22:00〜22:10に入ることも確かめます。"
      ],
      "solution": "「printer-07 の実行ログ」と「承認済み作業票 CHG-72」の2枚を選びます。",
      "bridge": {
        "tool": "SOCroom の証拠登録",
        "how": "ログと業務資料を組み合わせ、予定作業と実際の動きが一致することを根拠付きで説明するときに使います。"
      },
      "flag": "EASY{TWO_SOURCES}",
      "level": "beginner"
    },
    {
      "id": "e3",
      "chapter": "evidence",
      "title": "担当者に何を聞く？",
      "skill": "記録だけでは分からない事実を具体的に問い合わせる",
      "minutes": 3,
      "brief": "共有フォルダーに新しい利用者が追加されました。記録には誰が何をしたかがありますが、その理由は書かれていません。",
      "learn": [
        "問い合わせでは、対象・時刻・操作を伝えると、担当者が該当する作業を特定しやすくなります。",
        "聞きたいのは、業務上の依頼や承認があったかという、まだ分からない事実です。",
        "ログにないことを先に決めつけず、確認できる質問にします。以下の時刻は UTC です。"
      ],
      "example": {
        "title": "別の操作への質問例",
        "text": "「UTC 14:20 に display-04 の設定を変更した記録があります。予定された設定変更ですか。依頼番号を教えてください」と尋ねると、担当者は該当する作業を確認できます。"
      },
      "task": "新しい利用者の追加が業務上の作業だったか確認したいとき、最も役立つ問い合わせを1つ選んでください。",
      "kind": "choice",
      "sourceLabel": "操作ログと担当者の情報",
      "rows": [
        {
          "id": "e3-log",
          "sourceType": "log",
          "title": "共有フォルダーの操作ログ",
          "body": "2026-10-21T09:12:00Z folder=design-notes actor=mori event=member_added member=ueda\nUTC 09:12、mori が design-notes フォルダーに ueda を追加しました。actor は操作した利用者、member は追加された利用者です。"
        },
        {
          "id": "e3-owner",
          "sourceType": "document",
          "title": "フォルダーの管理情報",
          "body": "design-notes の管理担当：設計チームの mori。利用者の追加には、設計チーム責任者による事前承認が必要です。今回の承認の有無は、まだ確認できていません。"
        }
      ],
      "choices": [
        {
          "id": "e3-specific",
          "label": "UTC 09:12 の design-notes への ueda 追加は、承認された作業ですか。依頼・承認の記録を教えてください。",
          "feedback": "時刻・対象・操作と、確認したい承認の有無が具体的です。"
        },
        {
          "id": "e3-vague",
          "label": "今日は何か変なことはありませんでしたか。",
          "feedback": "対象や時刻がないので、担当者がどの操作を調べればよいか分かりにくい質問です。"
        },
        {
          "id": "e3-accuse",
          "label": "不正に利用者を追加しましたね。なぜ攻撃したのですか。",
          "feedback": "このログだけでは不正や攻撃とは決まりません。まず承認された作業かを確かめましょう。"
        }
      ],
      "answer": {
        "choiceId": "e3-specific"
      },
      "answerExplanation": "ログには時刻・フォルダー・追加された利用者があり、資料からは事前承認が必要と分かります。その具体的な操作について、承認の記録を尋ねると不足する事実を補えます。",
      "hints": [
        "担当者が、どの作業を調べるのか分かる質問を探します。",
        "時刻、フォルダー名、追加された利用者が入っていると特定しやすくなります。",
        "UTC 09:12、design-notes、ueda の追加を示し、承認の記録を尋ねる質問を選びます。"
      ],
      "solution": "「UTC 09:12 の design-notes への ueda 追加は、承認された作業ですか。依頼・承認の記録を教えてください。」を選びます。",
      "bridge": {
        "tool": "SOCroom の「照会」",
        "how": "ログからは分からない作業理由や承認を、担当者に確認するときの考え方です。"
      },
      "flag": "EASY{ASK_PRECISELY}",
      "level": "beginner"
    },
    {
      "id": "e4",
      "chapter": "evidence",
      "title": "回答を記録と照らし合わせる",
      "skill": "担当者の回答を、ログ・作業票と突き合わせる",
      "minutes": 4,
      "brief": "研修用アカウントが無効になりました。担当者から「予定どおり」と回答が届いています。回答だけで終わらず、記録の一致を確かめましょう。",
      "learn": [
        "アカウントの無効化は、その利用者がログインできない状態にする操作です。",
        "担当者の回答は有用ですが、別の作業を取り違えている可能性もあるため、対象と作業内容を照合します。",
        "ログ・承認票・回答の3つが同じ対象を指しているかを確かめます。以下の時刻は UTC です。"
      ],
      "example": {
        "title": "別の作業を3つで確認",
        "text": "回答「研修用PCの予定再起動です」、承認票「train-pc-05 の16:00〜16:10の再起動」、ログ「train-pc-05 が16:03に再起動」がそろえば、同じ作業の記録として説明できます。"
      },
      "task": "「class-guest-8 は、担当者が承認票に従って終了処理した研修用アカウント」と説明するため、直接関係する資料を3枚選んでください。",
      "kind": "evidence",
      "sourceLabel": "受け取った4枚の記録",
      "rows": [
        {
          "id": "e4-log",
          "sourceType": "log",
          "title": "class-guest-8 の操作ログ",
          "body": "2026-10-21T16:05:00Z actor=training-admin user=class-guest-8 event=account_disabled\nUTC 16:05、training-admin が class-guest-8 を無効化しました。"
        },
        {
          "id": "e4-doc",
          "sourceType": "document",
          "title": "承認済み終了作業 TR-88",
          "body": "研修用アカウント class-guest-8 は研修終了後、2026-10-21 UTC 16:00〜16:15 に無効化する。担当：研修係。状態：研修責任者が承認済み。"
        },
        {
          "id": "e4-reply",
          "sourceType": "reply",
          "title": "研修係からの回答",
          "body": "TR-88 に従い、training-admin を使って class-guest-8 を UTC 16:05 に無効化しました。研修終了に伴う作業です。"
        },
        {
          "id": "e4-other",
          "sourceType": "reply",
          "title": "別の設備担当者からの回答",
          "body": "本日、meeting-gw-01 の映像設定を変更しました。研修用アカウントの処理は担当していません。"
        }
      ],
      "answer": {
        "rowIds": [
          "e4-log",
          "e4-doc",
          "e4-reply"
        ]
      },
      "answerExplanation": "操作ログが class-guest-8 の無効化と16:05を示し、TR-88 が対象と16:00〜16:15の予定を示し、研修係の回答が同じ承認票・対象・時刻での実施を確認しています。別の設備担当者の回答は今回の根拠になりません。",
      "hints": [
        "class-guest-8 を直接説明する記録を集めます。",
        "実際の記録、許可された予定、実施した担当者の説明を1枚ずつ選びます。",
        "「class-guest-8 の操作ログ」「承認済み終了作業 TR-88」「研修係からの回答」の3枚です。"
      ],
      "solution": "操作ログ、TR-88、研修係の回答の3枚を選びます。対象・時刻・作業内容が一致しています。",
      "bridge": {
        "tool": "SOCroom の「ログ検索」「資産・資料」「照会」",
        "how": "別々のタブで得た情報を組み合わせ、担当者の説明と実際の記録が一致するか確認するときに使います。"
      },
      "flag": "EASY{VERIFY_REPLY}",
      "level": "beginner"
    },
    {
      "id": "d1",
      "chapter": "respond",
      "title": "事実と推測を分ける",
      "skill": "記録が直接示すことだけを事実として述べる",
      "minutes": 3,
      "brief": "ログに「成功」とあります。何が成功したのかは分かりますが、それだけで操作した人の意図までは分かりません。",
      "learn": [
        "事実は、手元の記録から直接確認できることです。推測は、その理由や意味について考えたことです。",
        "result=success は、その操作がシステムに受け入れられたという記録です。本人による操作か、安全な操作かまで証明しません。",
        "「分からないこと」を残してよいので、まず確かめられる事実を1つ言葉にします。以下の時刻は UTC です。"
      ],
      "example": {
        "title": "別の成功ログの読み方",
        "text": "「10:20、端末 lab-06、ファイルを開く操作が成功」とあれば、「lab-06 で10:20にファイルを開く操作が成功した」は事実です。「利用者が安全に作業した」は、この1行だけでは分かりません。"
      },
      "task": "表示された2つの記録から、そのまま事実として報告できる文を1つ選んでください。",
      "kind": "choice",
      "sourceLabel": "認証ログと確認状況",
      "rows": [
        {
          "id": "d1-log",
          "sourceType": "log",
          "title": "認証ログ",
          "body": "2026-10-21T08:18:00Z host=desk-east-04 user=yano event=login result=success\nUTC 08:18、desk-east-04 で yano アカウントのログインが成功した記録です。"
        },
        {
          "id": "d1-status",
          "sourceType": "document",
          "title": "現在の確認状況",
          "body": "yano 本人が操作したかは、まだ確認していません。手元には、前後の操作内容の記録もありません。"
        }
      ],
      "choices": [
        {
          "id": "d1-fact",
          "label": "UTC 08:18 に desk-east-04 で yano アカウントのログインが成功した記録がある。",
          "feedback": "時刻・端末・アカウント・結果を、そのままログから確かめられます。"
        },
        {
          "id": "d1-safe",
          "label": "yano 本人が操作したので、安全なログインだった。",
          "feedback": "本人確認はまだ済んでいません。ログイン成功だけで本人の操作や安全性までは分かりません。"
        },
        {
          "id": "d1-attack",
          "label": "yano のアカウントは盗まれている。",
          "feedback": "この記録には、アカウントが盗まれたと示す情報はありません。確認前の断定を避けます。"
        }
      ],
      "answer": {
        "choiceId": "d1-fact"
      },
      "answerExplanation": "ログで確認できるのは、UTC 08:18 に desk-east-04 で yano アカウントのログインが成功したことです。本人の操作か、アカウントが盗まれたかは、この資料だけでは分かりません。",
      "hints": [
        "文の内容を、ログのどの項目から確かめられるか考えます。",
        "本人の操作かどうかは未確認です。「安全」「盗まれた」は、この記録だけでは断定できません。",
        "時刻・端末・アカウント・成功という、ログにある内容だけを述べた文を選びます。"
      ],
      "solution": "「UTC 08:18 に desk-east-04 で yano アカウントのログインが成功した記録がある。」を選びます。",
      "bridge": {
        "tool": "SOCroom の「確認した事実・判断の理由」",
        "how": "分かった事実と未確認の推測を分け、証拠を超えた断定をせずに報告するときに使います。"
      },
      "flag": "EASY{FACT_NOT_GUESS}",
      "level": "beginner"
    },
    {
      "id": "d2",
      "chapter": "respond",
      "title": "先に対応するのはどちら？",
      "skill": "確認済みの業務影響とルールから優先順位を選ぶ",
      "minutes": 3,
      "brief": "確認待ちの通知が2件あります。怖そうな名前で決めるのではなく、実際にどの仕事が止まっているかを見てみましょう。",
      "learn": [
        "優先順位は、どの案件から対応するかを決める順番です。",
        "影響範囲とは、どの端末・利用者・業務まで問題が及んでいるかです。端末の台数だけでなく、業務が続けられるかも見ます。",
        "今回は資料の当番ルールに従って決めます。現実の優先順位は組織の基準によって異なります。"
      ],
      "example": {
        "title": "別の2件で考える",
        "text": "「受付の全端末が停止し代替がない」と「検証用PC1台の表示警告で作業継続中」があれば、業務停止を優先するルールでは受付を先に扱います。検証用PCの確認も、後で行います。"
      },
      "task": "資料の当番ルールに従うと、最初に対応すべきなのはどの案件ですか。",
      "kind": "choice",
      "sourceLabel": "当番ルールと2件の状況",
      "rows": [
        {
          "id": "d2-rule",
          "sourceType": "document",
          "title": "今回の当番ルール",
          "body": "利用中の業務が停止し、代替手段も使えない案件を先に扱う。業務が継続できる検証環境の警告は、その後に確認する。"
        },
        {
          "id": "d2-production",
          "sourceType": "reply",
          "title": "案件A：貸出窓口からの連絡",
          "body": "貸出窓口の端末3台すべてで貸出処理ができません。開館中で利用者が待っています。代替の受付手段も使えません。"
        },
        {
          "id": "d2-lab",
          "sourceType": "reply",
          "title": "案件B：検証担当者からの連絡",
          "body": "検証用PC1台に「処理失敗」の警告が出ました。対象は検証データのみで、作業は別の検証PCで続けられています。業務用端末への影響は確認されていません。"
        }
      ],
      "choices": [
        {
          "id": "d2-a",
          "label": "案件A：業務が止まり、代替手段もない貸出窓口",
          "feedback": "当番ルールの「業務停止・代替なし」に一致します。"
        },
        {
          "id": "d2-b",
          "label": "案件B：「処理失敗」という警告が出た検証用PC",
          "feedback": "警告の言葉だけで決めません。案件Bは作業を続けられており、今回の当番ルールでは案件Aを先に扱います。"
        },
        {
          "id": "d2-none",
          "label": "どちらも攻撃と確定していないので、対応しない",
          "feedback": "攻撃と確定していなくても、業務への影響を確認して対応順を決められます。案件Aは業務停止が確認されています。"
        }
      ],
      "answer": {
        "choiceId": "d2-a"
      },
      "answerExplanation": "案件Aは、利用中の業務が停止し、代替手段も使えないと確認できています。今回の当番ルールでは案件Aを先に扱います。案件Bを無視してよいという意味ではなく、その後に確認します。",
      "hints": [
        "まず当番ルールで、何を優先することになっているか確認します。",
        "「業務が停止」「代替手段もない」の両方に当てはまる案件を探します。",
        "貸出窓口の案件Aが、ルールの2条件に一致します。"
      ],
      "solution": "「案件A：業務が止まり、代替手段もない貸出窓口」を選びます。",
      "bridge": {
        "tool": "SOCroom の案件一覧・優先度",
        "how": "複数の通知が並んだとき、業務への影響と組織の基準から先に調べる案件を決める土台になります。"
      },
      "flag": "EASY{PRIORITIZE_IMPACT}",
      "level": "beginner"
    },
    {
      "id": "d3",
      "chapter": "respond",
      "title": "根拠に合う次の一手",
      "skill": "未確認の状況で、情報を残し担当者へ引き継ぐ",
      "minutes": 3,
      "brief": "会議室の表示端末から記録が届かなくなりました。原因は不明です。今分かっていることに合った、最初の対応を選びましょう。",
      "learn": [
        "記録が途絶えた原因は、電源・通信・記録機能など複数考えられます。記録がないだけでは攻撃と決まりません。",
        "エスカレーションは、確認した事実を添えて担当者や責任者に引き継ぐことです。",
        "記録を残して確認する対応なら、その後の調査に使えます。初期化や全体停止には大きな影響があるため、根拠や手順が必要です。"
      ],
      "example": {
        "title": "別の機器での最初の対応",
        "text": "温度センサーから記録が届かなくなったら、最後に届いた時刻を残し、設備担当者に電源と通信状態を確認してもらいます。原因が分からない段階で、全センサーを初期化する必要はありません。"
      },
      "task": "資料の初動手順に沿った、最初の対応を1つ選んでください。ここでの操作は学習上の選択で、実際の端末は操作しません。",
      "kind": "choice",
      "sourceLabel": "通知と初動手順",
      "rows": [
        {
          "id": "d3-alert",
          "sourceType": "log",
          "title": "記録の受信状況",
          "body": "2026-10-21T12:35:00Z host=room-display-06 event=telemetry_missing last_received=12:30:00Z\nUTC 12:30 を最後に、room-display-06 の記録が5分間届いていません。原因と利用への影響は、まだ確認していません。"
        },
        {
          "id": "d3-runbook",
          "sourceType": "document",
          "title": "表示端末の初動手順",
          "body": "記録が5分以上届かない場合：端末名と最後の受信時刻を調査メモに残す。設備担当者へ、電源・通信状態と利用への影響を確認する。初期化や停止は、原因確認後に責任者の判断で実施する。"
        }
      ],
      "choices": [
        {
          "id": "d3-check",
          "label": "端末名と最後の受信時刻を記録し、設備担当者に電源・通信状態と利用への影響を確認する。",
          "feedback": "初動手順に沿って事実を残し、足りない情報を確認する対応です。"
        },
        {
          "id": "d3-wipe",
          "label": "攻撃だと考えて room-display-06 をすぐ初期化する。",
          "feedback": "原因は未確認です。初期化すると設定や記録が失われる可能性があり、今回の初動手順にも沿いません。"
        },
        {
          "id": "d3-close",
          "label": "表示端末なので、確認せず通知を閉じる。",
          "feedback": "利用への影響も未確認です。今回の手順では5分以上届かない場合に担当者へ確認することになっています。"
        }
      ],
      "answer": {
        "choiceId": "d3-check"
      },
      "answerExplanation": "確認できているのは、room-display-06 の記録が UTC 12:30 を最後に届かないことです。手順どおりこの事実を残し、設備担当者に電源・通信・利用への影響を確認します。原因を断定せず、次の判断に必要な情報を集める対応です。",
      "hints": [
        "初動手順の、最初の2つの作業を読みましょう。",
        "端末名と最後の受信時刻を残し、原因と影響について担当者へ確認します。",
        "記録して設備担当者に電源・通信状態と利用への影響を尋ねる選択肢です。"
      ],
      "solution": "端末名と最後の受信時刻を記録し、設備担当者へ確認する選択肢を選びます。",
      "bridge": {
        "tool": "SOCroom の対応方針・次のアクション",
        "how": "証拠が不足しているとき、根拠を残して担当者へ確認や引き継ぎを行う判断につながります。"
      },
      "flag": "EASY{NEXT_SAFE_STEP}",
      "level": "beginner"
    },
    {
      "id": "d4",
      "chapter": "respond",
      "title": "短い報告を組み立てる",
      "skill": "確認した事実・確認できない範囲・次の行動を分けて伝える",
      "minutes": 4,
      "brief": "調査結果を長く書く必要はありません。「分かったこと」「まだ分からないこと」「次にすること」の3つで、相手に状況を伝えましょう。",
      "learn": [
        "報告の事実には、対象・時刻・出来事を入れます。",
        "確認の限界には、手元の資料だけでは分からない範囲を書きます。これは調査不足を隠さず、次の人が判断するための情報です。",
        "次の行動には、不明点を確認する具体的な作業を書きます。以下の時刻は UTC です。"
      ],
      "example": {
        "title": "別の事象の3行報告",
        "text": "事実：UTC 11:00 に入口端末 door-02 の接続が切れた。限界：現地の電源状態は未確認。次の行動：設備担当者に電源と通信状態を確認する。この3つがあれば、次の担当者が続きを進められます。"
      },
      "task": "資料に合う短い報告を作ります。「確認した事実」「確認の限界」「次の行動」から、それぞれ1文ずつ選んでください。",
      "kind": "report",
      "sourceLabel": "アクセス記録と現在の確認状況",
      "rows": [
        {
          "id": "d4-log",
          "sourceType": "log",
          "title": "ファイルへのアクセス記録",
          "body": "2026-10-21T10:42:00Z user=noda file=staff-guide.pdf event=read result=denied\nUTC 10:42、noda による staff-guide.pdf の読み取り要求は拒否されました。denied は、要求が許可されなかったという意味です。"
        },
        {
          "id": "d4-status",
          "sourceType": "document",
          "title": "現在の確認状況",
          "body": "今回の読み取り要求1件だけを確認済みです。noda の業務上の利用理由と、必要なアクセス権は未確認です。資料管理担当者が、利用申請とアクセス権を確認できます。"
        }
      ],
      "choices": [
        {
          "id": "d4-fact-ok",
          "group": "fact",
          "label": "UTC 10:42、noda の staff-guide.pdf への読み取り要求が拒否された。",
          "feedback": "対象・時刻・結果がアクセス記録と一致します。"
        },
        {
          "id": "d4-fact-no",
          "group": "fact",
          "label": "noda が staff-guide.pdf を持ち出した。",
          "feedback": "記録は読み取りの拒否です。この記録から持ち出しとは言えません。"
        },
        {
          "id": "d4-limit-ok",
          "group": "limit",
          "label": "この1件以外の操作と、業務上の利用理由・必要なアクセス権は未確認。",
          "feedback": "確認済みの範囲と、不明な点を正確に分けています。"
        },
        {
          "id": "d4-limit-no",
          "group": "limit",
          "label": "この1件が拒否されたので、ほかの操作もすべて安全だと確認できた。",
          "feedback": "1件の拒否から、ほかの操作の安全性までは分かりません。"
        },
        {
          "id": "d4-next-ok",
          "group": "next",
          "label": "資料管理担当者に、noda の利用申請と必要なアクセス権を確認する。",
          "feedback": "資料にある担当者に、未確認の理由と権限を確かめる行動です。"
        },
        {
          "id": "d4-next-no",
          "group": "next",
          "label": "確認せずに、全利用者へ staff-guide.pdf の読み取り権限を付ける。",
          "feedback": "必要な利用者も理由も未確認です。全員に権限を付ける根拠はありません。"
        }
      ],
      "answer": {
        "parts": {
          "fact": "d4-fact-ok",
          "limit": "d4-limit-ok",
          "next": "d4-next-ok"
        }
      },
      "answerExplanation": "事実は「読み取り要求が拒否された」です。その1件以外や利用理由・必要な権限は分かっていないため、資料管理担当者に確認する、とつなげます。短くても、根拠と不明点と次の行動が伝わる報告です。",
      "hints": [
        "まず、ログの result=denied に合う事実の文を選びます。",
        "確認状況には「今回の1件だけ」「利用理由と必要なアクセス権は未確認」とあります。",
        "事実は読み取り拒否、限界は他の操作と理由・権限が未確認、次の行動は資料管理担当者への確認です。"
      ],
      "solution": "事実：読み取り要求が拒否された。限界：この1件以外と利用理由・必要なアクセス権は未確認。次の行動：資料管理担当者に利用申請と権限を確認する。の3文を選びます。",
      "bridge": {
        "tool": "SOCroom の「確認した事実・判断の理由」「未確認事項・引き継ぎ」",
        "how": "SOCroom の自由記述欄でも、事実・未確認の範囲・次の行動を組み合わせると、引き継げる報告になります。"
      },
      "flag": "EASY{CLEAR_REPORT}",
      "level": "beginner"
    },
    {
      "id": "g1",
      "chapter": "graduate",
      "title": "卒業演習：夜の案内図づくり",
      "skill": "ログを探す・証拠を照合する・判断する・報告するをつなぐ",
      "minutes": 8,
      "brief": "案内図をPDFにする端末が、夜に動いたという通知です。ここまで練習した作業を、1つの小さな調査につなげます。4段階を順番に進めれば完了です。",
      "learn": [
        "今回調べるのは render-kiosk-02 のジョブ R-204 です。ジョブは、機械にまとめて実行させる1回分の仕事です。",
        "同じジョブ番号のログを集め、承認された作業の対象・時間・内容と照合します。以下の時刻はすべて UTC です。",
        "判定は確認した範囲に限ります。最後に、分かったこと・確認できない範囲・次の行動を短く報告します。",
        "全4段階です。間違えても、ヒントを使っても大丈夫です。最終段階まで正しく選ぶと卒業フラグを獲得できます。"
      ],
      "example": {
        "title": "別の小さな調査の流れ",
        "text": "予約表を生成する job=B-19 のログを集める → その端末・時間の生成作業を認めた承認票と照合する → 確認範囲では承認作業と判断する → 一致した事実と未確認の範囲を残す。この流れを、別の案内図生成の記録で実践します。"
      },
      "task": "4段階の調査を進めてください。まず、対象ジョブに関係するログを集めます。",
      "kind": "investigation",
      "sourceLabel": "卒業演習の資料",
      "rows": [],
      "answer": {},
      "answerExplanation": "同じ端末・ジョブ番号のログを集めて、承認票と照合すると、今回の案内図生成が承認範囲に一致すると判断できます。その範囲と、他の操作は未調査であることを報告します。",
      "hints": [
        "1段階目は同じ端末名とジョブ番号、2段階目は実際のログと承認票を見ます。",
        "3段階目では、夜というだけで攻撃と決めず、確認した作業が承認範囲に入るかを考えます。",
        "4段階目では、承認票との一致、他の操作は未調査、照合した証拠を記録して今回の通知を閉じる、の3つをつなぎます。"
      ],
      "solution": "各段階の解説に従い、R-204 の3ログ、実行ログと承認票の2枚、承認作業との一致を示す判定、事実・限界・次の行動の3文を選びます。",
      "bridge": {
        "tool": "SOCroom の一連の調査",
        "how": "ログを絞る→資料と照合する→判断する→根拠と次の行動を残す、というSOCroomの流れに進むための練習です。"
      },
      "flag": "EASY{READY_FOR_SOCROOM}",
      "steps": [
        {
          "id": "g1-find",
          "title": "1 / 4 関係するログを集める",
          "task": "render-kiosk-02 の job=R-204 に関するログを、3行すべて選んでください。host は端末名、job は1回分の仕事の番号です。",
          "kind": "rows",
          "rows": [
            {
              "id": "g1-log-a",
              "time": "21:00:00",
              "host": "render-kiosk-02",
              "user": "svc-render",
              "event": "render_started",
              "result": "started",
              "session": "R-204",
              "raw": "2026-10-21T21:00:00Z host=render-kiosk-02 user=svc-render job=R-204 event=render_started input=lobby-map.svg",
              "note": "UTC 21:00、案内図 lobby-map.svg をPDFにする処理を開始。svc-render は自動処理用アカウント。"
            },
            {
              "id": "g1-noise-a",
              "time": "21:00:01",
              "host": "render-kiosk-03",
              "user": "svc-render",
              "event": "render_started",
              "result": "started",
              "session": "R-205",
              "raw": "2026-10-21T21:00:01Z host=render-kiosk-03 user=svc-render job=R-205 event=render_started input=cafe-menu.svg",
              "note": "別の端末・別のジョブで、メニューのPDF生成を開始。"
            },
            {
              "id": "g1-log-b",
              "time": "21:00:04",
              "host": "render-kiosk-02",
              "user": "svc-render",
              "event": "pdf_created",
              "result": "success",
              "session": "R-204",
              "raw": "2026-10-21T21:00:04Z host=render-kiosk-02 user=svc-render job=R-204 event=pdf_created output=/srv/maps/lobby-map.pdf",
              "note": "案内図のPDFを端末内の /srv/maps/ に作成。このパスは保存先の場所。"
            },
            {
              "id": "g1-noise-b",
              "time": "21:00:05",
              "host": "render-kiosk-02",
              "user": "svc-render",
              "event": "cleanup_completed",
              "result": "success",
              "session": "R-203",
              "raw": "2026-10-21T21:00:05Z host=render-kiosk-02 user=svc-render job=R-203 event=cleanup_completed",
              "note": "同じ端末だが、別のジョブ R-203 の片付け処理。"
            },
            {
              "id": "g1-log-c",
              "time": "21:00:06",
              "host": "render-kiosk-02",
              "user": "svc-render",
              "event": "render_completed",
              "result": "success",
              "session": "R-204",
              "raw": "2026-10-21T21:00:06Z host=render-kiosk-02 user=svc-render job=R-204 event=render_completed result=success",
              "note": "ジョブ R-204 のPDF生成処理が完了。"
            },
            {
              "id": "g1-noise-c",
              "time": "21:00:07",
              "host": "lobby-screen-01",
              "user": "svc-display",
              "event": "display_refreshed",
              "result": "success",
              "session": "D-81",
              "raw": "2026-10-21T21:00:07Z host=lobby-screen-01 user=svc-display job=D-81 event=display_refreshed",
              "note": "別の端末で画面表示を更新。"
            }
          ],
          "answer": {
            "rowIds": [
              "g1-log-a",
              "g1-log-b",
              "g1-log-c"
            ]
          },
          "answerExplanation": "host=render-kiosk-02 と job=R-204 の両方が一致するのは、21:00:00の開始、21:00:04のPDF作成、21:00:06の完了の3行です。同じ端末でも job=R-203 の行は別の仕事です。",
          "hints": [
            "端末名とジョブ番号の、2つの条件を使います。",
            "host=render-kiosk-02 でも job=R-203 は別の仕事です。R-204 の行だけを選びます。",
            "21:00:00、21:00:04、21:00:06 の3行が、同じ端末の R-204 です。"
          ],
          "solution": "21:00:00の開始、21:00:04のPDF作成、21:00:06の完了の3行を選びます。"
        },
        {
          "id": "g1-evidence",
          "title": "2 / 4 実際の動きと承認を照合する",
          "task": "「R-204 の端末・アカウント・実施時間・作成内容は、承認された作業に一致する」を裏付ける資料を2枚選んでください。",
          "kind": "evidence",
          "rows": [
            {
              "id": "g1-evidence-log",
              "sourceType": "log",
              "title": "R-204 の3行の実行記録",
              "body": "2026-10-21 UTC 21:00:00〜21:00:06。端末 render-kiosk-02、アカウント svc-render、ジョブ R-204。lobby-map.svg から /srv/maps/lobby-map.pdf を作成し、処理が完了。前の段階で集めた3行の要約です。"
            },
            {
              "id": "g1-evidence-doc",
              "sourceType": "document",
              "title": "承認済み作業票 RQ-204",
              "body": "対象：render-kiosk-02。実行アカウント：svc-render。ジョブ：R-204。時間：2026-10-21 UTC 21:00〜21:10。作業：lobby-map.svg から案内図 /srv/maps/lobby-map.pdf を作成。施設担当責任者による承認済み。"
            },
            {
              "id": "g1-evidence-other",
              "sourceType": "document",
              "title": "翌日の予定 RQ-205",
              "body": "2026-10-22 UTC 18:00〜18:10 に、render-kiosk-03 でメニュー cafe-menu.pdf を作成する予定。今回とは対象も日付も異なる。"
            },
            {
              "id": "g1-evidence-guess",
              "sourceType": "reply",
              "title": "別の担当者の未確認コメント",
              "body": "夜の作業なので、たぶんいつもの処理だと思います。ただし、今回の R-204 や承認票の内容は確認していません。"
            }
          ],
          "answer": {
            "rowIds": [
              "g1-evidence-log",
              "g1-evidence-doc"
            ]
          },
          "answerExplanation": "R-204 の実行記録が実際の動きを、RQ-204 が許可された範囲を示しています。端末・アカウント・ジョブ・時間・作成内容が一致します。別の日の予定や未確認の感想は、今回の一致を裏付けません。",
          "hints": [
            "実際の記録と、承認された予定を1枚ずつ選びます。",
            "資料の端末名・日付・時間・作成ファイルが、R-204 と一致するか見ます。",
            "「R-204 の3行の実行記録」と「承認済み作業票 RQ-204」の2枚です。"
          ],
          "solution": "「R-204 の3行の実行記録」と「承認済み作業票 RQ-204」を選びます。"
        },
        {
          "id": "g1-judge",
          "title": "3 / 4 確認した範囲で判断する",
          "task": "これまでの証拠から、今回の通知に対する最も適切な判断を選んでください。",
          "kind": "choice",
          "rows": [
            {
              "id": "g1-judge-facts",
              "sourceType": "document",
              "title": "確認できた一致",
              "body": "R-204 の実行記録と承認票 RQ-204 は、端末 render-kiosk-02、アカウント svc-render、時間、案内図のPDF作成で一致しました。"
            },
            {
              "id": "g1-judge-scope",
              "sourceType": "document",
              "title": "今回の調査範囲",
              "body": "確認したのは R-204 の3行と、その作業の承認票です。端末の他の操作や、組織全体の安全性は調べていません。"
            }
          ],
          "choices": [
            {
              "id": "g1-judge-approved",
              "label": "確認した R-204 のPDF生成は承認された作業に一致し、この通知では不正を示す根拠は見つからない。",
              "feedback": "調べた作業と、確認した証拠の範囲に限定した判断です。"
            },
            {
              "id": "g1-judge-night",
              "label": "夜に動いているので、攻撃と判断する。",
              "feedback": "夜という理由だけでは攻撃と決まりません。今回は同じ時間帯の作業が承認されています。"
            },
            {
              "id": "g1-judge-all",
              "label": "この端末を含む組織全体が、完全に安全だと判断する。",
              "feedback": "調べたのは R-204 の3行と承認票です。他の操作や組織全体については判断できません。"
            }
          ],
          "answer": {
            "choiceId": "g1-judge-approved"
          },
          "answerExplanation": "今回確認した R-204 の動きは、承認された対象・時間・内容に一致します。そのため、この通知について不正を示す根拠は見つからないと判断できます。端末全体や組織全体の安全性を証明したわけではありません。",
          "hints": [
            "承認票と一致した事実を使います。夜という印象だけで決めません。",
            "調べた範囲は R-204 です。組織全体について言い切る選択肢は広すぎます。",
            "R-204 は承認された作業に一致し、この通知では不正の根拠が見つからない、という選択肢です。"
          ],
          "solution": "「確認した R-204 のPDF生成は承認された作業に一致し、この通知では不正を示す根拠は見つからない。」を選びます。"
        },
        {
          "id": "g1-report",
          "title": "4 / 4 調査を短く報告する",
          "task": "今回の調査を終える報告として、「確認した事実」「確認の限界」「次の行動」を1つずつ選んでください。",
          "kind": "report",
          "rows": [
            {
              "id": "g1-report-facts",
              "sourceType": "document",
              "title": "調査結果のまとめ",
              "body": "R-204 は UTC 21:00:00〜21:00:06 に render-kiosk-02 で svc-render が実行した案内図PDF生成。作業票 RQ-204 の対象・時間・内容に一致。確認したのは、この3行と承認票。"
            },
            {
              "id": "g1-report-rule",
              "sourceType": "document",
              "title": "今回の通知を閉じる手順",
              "body": "対象・時間・内容が承認作業に一致し、この通知で不正の根拠が見つからない場合は、照合した記録と承認票を残して、今回の通知を対応済みにする。範囲外の操作まで安全と断定しない。"
            }
          ],
          "choices": [
            {
              "id": "g1-report-fact-ok",
              "group": "fact",
              "label": "render-kiosk-02 の R-204 による案内図PDF生成は、RQ-204 の対象・時間・内容に一致した。",
              "feedback": "ログと承認票を照合して確認した事実です。"
            },
            {
              "id": "g1-report-fact-no",
              "group": "fact",
              "label": "夜間に重要データが外へ持ち出された。",
              "feedback": "今回の記録は端末内への案内図PDF作成で、外部への持ち出しは示していません。"
            },
            {
              "id": "g1-report-limit-ok",
              "group": "limit",
              "label": "確認したのは R-204 の3行と承認票であり、他の操作は未調査。",
              "feedback": "判断の範囲を、実際に調べた資料に限定しています。"
            },
            {
              "id": "g1-report-limit-no",
              "group": "limit",
              "label": "この組織に攻撃がないことまで確認できた。",
              "feedback": "1件の調査では、組織全体に攻撃がないとは確認できません。"
            },
            {
              "id": "g1-report-next-ok",
              "group": "next",
              "label": "照合した3行と RQ-204 を記録し、手順に従って今回の通知を対応済みにする。",
              "feedback": "確認結果を残し、今回の通知を閉じる手順に沿っています。"
            },
            {
              "id": "g1-report-next-no",
              "group": "next",
              "label": "根拠を残さず、今後この端末の通知をすべて無視する。",
              "feedback": "根拠を残す必要があります。今回の判定で、将来の別の通知まで無視してよいとは言えません。"
            }
          ],
          "answer": {
            "parts": {
              "fact": "g1-report-fact-ok",
              "limit": "g1-report-limit-ok",
              "next": "g1-report-next-ok"
            }
          },
          "answerExplanation": "報告は、RQ-204 との一致という事実、他の操作は未調査という限界、照合資料を残して今回の通知を対応済みにするという次の行動でまとまります。これで、ログ探しから根拠付きの報告まで、1つの調査をつなげられました。",
          "hints": [
            "事実の文は、前の段階で確かめた承認票との一致を選びます。",
            "限界は「他の操作は未調査」です。今回の確認だけで組織全体を判断できません。",
            "次の行動は、記録と承認票を残して、手順に従って今回の通知を対応済みにすることです。"
          ],
          "solution": "事実：R-204 は RQ-204 に一致。限界：他の操作は未調査。次の行動：3行と承認票を記録して今回の通知を対応済みにする。の3文を選びます。"
        }
      ],
      "level": "beginner"
    },
    {
      "id": "m-r1",
      "level": "intermediate",
      "chapter": "read",
      "title": "応答の数字は何を表す？",
      "skill": "HTTP の要求と応答結果を区別する",
      "minutes": 4,
      "brief": "Web の記録には、頼んだ操作と返ってきた結果が並びます。ログインの結果と混同せず、今回の応答を読みましょう。",
      "learn": [
        "HTTP はブラウザとWebサービスなどの間で要求と応答をやり取りする取り決めです。method は要求の種類、path はサービス内の宛先です。",
        "このサービスの GET /admin/users は、管理画面の利用者一覧を求める操作です。request_id は1回の要求の番号です。",
        "status は HTTP 応答の状態です。403 はその要求を拒否した応答、200 は成功を示す応答、500 はサーバー側のエラーを示す応答です。",
        "403 だけでは拒否の具体的な理由や、操作した人の意図までは分かりません。user は記録されたアカウント名です。"
      ],
      "example": {
        "title": "別の記録で練習",
        "text": "method=GET path=/help status=200 request_id=DEMO-12\nこの要求には status=200 という応答が返っています。path=/help は要求した宛先であり、結果ではありません。"
      },
      "task": "今回の要求が拒否されたと分かる欄を、1つ選んでください。",
      "kind": "token",
      "sourceLabel": "学習用の架空ログ・時刻は UTC",
      "rows": [
        {
          "id": "m-r1-log",
          "time": "10:02:11",
          "raw": "2026-10-23T10:02:11Z user=mina method=GET path=/admin/users status=403 request_id=REQ-410",
          "note": "管理画面の利用者一覧を求めた要求の応答記録。"
        }
      ],
      "answer": {
        "tokenId": "m-r1-status"
      },
      "answerExplanation": "status=403 が今回の要求を拒否した応答を表します。GET は要求の種類、/admin/users は要求先、REQ-410 は照合用の番号です。拒否された理由や悪意の有無は、この行だけでは分かりません。",
      "hints": [
        "頼んだ操作ではなく、返ってきた応答の欄を探します。",
        "応答の状態は status に書かれています。",
        "status=403 を選びます。403 は要求を拒否した応答です。"
      ],
      "solution": "「status=403」を選んで答え合わせします。拒否の理由までは、この行に書かれていません。",
      "bridge": {
        "tool": "ログ検索",
        "how": "SOCroom の「ログ検索」で、欄の意味を確かめてから必要な記録を選ぶときに使います。"
      },
      "flag": "EASY{MID_HTTP_RESPONSE}",
      "tokens": [
        {
          "id": "m-r1-user",
          "label": "user=mina",
          "meaning": "記録されたアカウント名。"
        },
        {
          "id": "m-r1-method",
          "label": "method=GET",
          "meaning": "HTTP の要求の種類。"
        },
        {
          "id": "m-r1-path",
          "label": "path=/admin/users",
          "meaning": "サービス内で要求した宛先。"
        },
        {
          "id": "m-r1-status",
          "label": "status=403",
          "meaning": "HTTP 応答の状態。403 は要求を拒否した応答。"
        },
        {
          "id": "m-r1-request",
          "label": "request_id=REQ-410",
          "meaning": "1回の要求を識別する番号。"
        }
      ]
    },
    {
      "id": "m-r2",
      "level": "intermediate",
      "chapter": "read",
      "title": "DNS が調べた名前を読む",
      "skill": "問い合わせ先の名前とDNS応答を分ける",
      "minutes": 4,
      "brief": "端末が名前を調べた記録です。IPアドレスや結果の数字に目を奪われず、何という名前を調べたのか取り出します。",
      "learn": [
        "DNS は、名前に対応する情報を問い合わせる仕組みです。query は問い合わせた名前、type は求めた情報の種類です。",
        "type=A は IPv4 アドレスを求める問い合わせです。resolver は問い合わせを受けた DNS サーバーで、問い合わせた名前とは別です。",
        "rcode は応答の種類です。NXDOMAIN は、その問い合わせに対して名前が存在しないという応答です。この記録だけで感染や攻撃とは決まりません。",
        "host は端末名、src はこの記録での通信元IPアドレスです。ここでは query の値だけを取り出します。"
      ],
      "example": {
        "title": "別の記録で練習",
        "text": "host=ws-demo resolver=10.40.0.53 query=calendar.office.example type=A rcode=NOERROR\n問い合わせた名前は calendar.office.example です。10.40.0.53 は応答を依頼した DNS サーバーです。"
      },
      "task": "端末が問い合わせた名前を入力してください。query= は付けず、名前だけを入力します。",
      "kind": "text",
      "sourceLabel": "学習用の架空ログ・時刻は UTC",
      "rows": [
        {
          "id": "m-r2-log",
          "time": "10:05:20",
          "raw": "2026-10-23T10:05:20Z host=ws-18 src=10.40.1.18 resolver=10.40.0.53 query=reports-old.office.example type=A rcode=NXDOMAIN",
          "note": "type=A は IPv4 アドレスの問い合わせ。"
        }
      ],
      "answer": {
        "values": [
          "reports-old.office.example"
        ],
        "caseSensitive": false
      },
      "answerExplanation": "query=reports-old.office.example なので、問い合わせた名前は reports-old.office.example です。resolver の 10.40.0.53 は DNS サーバー、NXDOMAIN は応答の種類です。",
      "hints": [
        "名前が入っている query の欄を探しましょう。",
        "resolver は問い合わせを受けたサーバーです。query= の右側を読みます。",
        "reports-old.office.example を入力します。"
      ],
      "solution": "「reports-old.office.example」と入力します。存在しないという応答と、問い合わせた名前を別々に読めました。",
      "bridge": {
        "tool": "ログ検索",
        "how": "SOCroom の「ログ検索」で、欄の意味を確かめてから必要な記録を選ぶときに使います。"
      },
      "flag": "EASY{MID_DNS_NAME}"
    },
    {
      "id": "m-r3",
      "level": "intermediate",
      "chapter": "read",
      "title": "起動したプログラムを特定する",
      "skill": "プロセス番号と実行ファイル名を区別する",
      "minutes": 4,
      "brief": "同じログに2つのプログラム名があっても、どちらも今起動したとは限りません。欄の役割を確認しましょう。",
      "learn": [
        "プロセスは端末で実行されるプログラムの単位です。この教材の event=process_started は新しいプロセスの起動記録です。",
        "pid は新しく起動したプロセスの番号、image はその実行ファイル名です。数字の pid とファイル名の image を区別します。",
        "ppid は起動元のプロセス番号、parent_image は起動元の実行ファイル名です。この行では起動元はすでに存在しています。",
        "ファイル名だけでは安全性は判定できません。今回は何が起動したと記録されたかだけを読みます。"
      ],
      "example": {
        "title": "別の記録で練習",
        "text": "event=process_started pid=214 image=notes.exe ppid=108 parent_image=desktop.exe\nこの行で新しく起動した実行ファイルは notes.exe です。desktop.exe は起動元です。"
      },
      "task": "今回、新しく起動したプログラムの実行ファイル名を示す欄を選んでください。",
      "kind": "token",
      "sourceLabel": "学習用の架空ログ・時刻は UTC",
      "rows": [
        {
          "id": "m-r3-log",
          "time": "10:08:01",
          "raw": "2026-10-23T10:08:01Z host=ws-22 user=mina event=process_started pid=582 image=sheet-viewer.exe ppid=310 parent_image=browser.exe",
          "note": "pid と ppid はこの端末でのプロセス番号。"
        }
      ],
      "answer": {
        "tokenId": "m-r3-image"
      },
      "answerExplanation": "image=sheet-viewer.exe が新しく起動した実行ファイルです。parent_image=browser.exe は起動元、pid=582 は新しく起動したプロセスの番号です。この記録だけで悪意の有無は判断していません。",
      "hints": [
        "新しいプロセスのファイル名は image の欄です。",
        "parent_image は起動元の名前なので、今回の答えではありません。",
        "image=sheet-viewer.exe を選びます。"
      ],
      "solution": "「image=sheet-viewer.exe」を選びます。起動元と新しく起動したプログラムを分けて読みます。",
      "bridge": {
        "tool": "ログ検索",
        "how": "SOCroom の「ログ検索」で、欄の意味を確かめてから必要な記録を選ぶときに使います。"
      },
      "flag": "EASY{MID_PROCESS_IMAGE}",
      "tokens": [
        {
          "id": "m-r3-event",
          "label": "event=process_started",
          "meaning": "新しいプロセスが起動した記録。"
        },
        {
          "id": "m-r3-pid",
          "label": "pid=582",
          "meaning": "新しく起動したプロセスの番号。"
        },
        {
          "id": "m-r3-image",
          "label": "image=sheet-viewer.exe",
          "meaning": "新しく起動したプロセスの実行ファイル名。"
        },
        {
          "id": "m-r3-ppid",
          "label": "ppid=310",
          "meaning": "起動元のプロセス番号。"
        },
        {
          "id": "m-r3-parent",
          "label": "parent_image=browser.exe",
          "meaning": "起動元の実行ファイル名。"
        }
      ]
    },
    {
      "id": "m-r4",
      "level": "intermediate",
      "chapter": "read",
      "title": "追加認証まで通った？",
      "skill": "認証の途中と最終結果を分ける",
      "minutes": 4,
      "brief": "パスワード確認の成功だけを見て「ログイン成功」と決めていませんか。追加の確認と最終結果まで追います。",
      "learn": [
        "MFA は多要素認証です。このサービスではパスワード確認に加えて、登録済み端末に届く確認通知への応答が必要です。",
        "auth_id は1回の認証をまとめる番号。factor=password はパスワード確認、factor=push は確認通知への応答です。",
        "accepted は要素の確認を通過、denied は拒否を表します。event=auth_finished が最終結果で、result=blocked はログイン完了を認めなかった記録です。",
        "パスワードを通過した理由や誰が操作したかは別の調査です。今回の認証結果に限って答えます。"
      ],
      "example": {
        "title": "別の記録で練習",
        "text": "auth_id=AUTH-DEMO factor=password result=accepted\nauth_id=AUTH-DEMO factor=push result=accepted\nauth_id=AUTH-DEMO event=auth_finished result=success\nこの別例では、2要素と最終結果を見て認証成功を確認できます。"
      },
      "task": "AUTH-62 の認証について、記録で確認できる結果を選んでください。",
      "kind": "choice",
      "sourceLabel": "学習用の架空ログ・時刻は UTC",
      "rows": [
        {
          "id": "m-r4-pass",
          "time": "10:12:00",
          "raw": "2026-10-23T10:12:00Z user=keito auth_id=AUTH-62 factor=password result=accepted",
          "note": "パスワード要素の確認を通過。"
        },
        {
          "id": "m-r4-push",
          "time": "10:12:05",
          "raw": "2026-10-23T10:12:05Z user=keito auth_id=AUTH-62 factor=push result=denied",
          "note": "追加の確認通知は拒否。"
        },
        {
          "id": "m-r4-final",
          "time": "10:12:06",
          "raw": "2026-10-23T10:12:06Z user=keito auth_id=AUTH-62 event=auth_finished result=blocked",
          "note": "この認証ではログイン完了を認めなかった。"
        }
      ],
      "answer": {
        "choiceId": "m-r4-blocked"
      },
      "answerExplanation": "パスワード確認は accepted ですが、追加確認は denied、最終結果は blocked です。AUTH-62 ではログイン完了が認められていません。誰がパスワードを入力したかは、この記録だけでは決まりません。",
      "hints": [
        "最初の accepted だけで止まらず、同じ auth_id の最後の行まで読みます。",
        "event=auth_finished が最終結果です。その result を確認します。",
        "追加確認が拒否され、最終結果も blocked になっている選択肢です。"
      ],
      "solution": "「パスワード確認は通過したが、追加確認が拒否され、この認証はログイン完了を認められなかった。」を選びます。",
      "bridge": {
        "tool": "ログ検索",
        "how": "SOCroom の「ログ検索」で、欄の意味を確かめてから必要な記録を選ぶときに使います。"
      },
      "flag": "EASY{MID_MFA_FINAL}",
      "choices": [
        {
          "id": "m-r4-success",
          "label": "パスワード確認が成功したので、ログインは完了した。",
          "feedback": "accepted は1要素の結果です。追加確認と auth_finished の最終結果まで読みましょう。"
        },
        {
          "id": "m-r4-blocked",
          "label": "パスワード確認は通過したが、追加確認が拒否され、この認証はログイン完了を認められなかった。",
          "feedback": "各要素と最終結果を区別して読めています。"
        },
        {
          "id": "m-r4-owner",
          "label": "本人が間違えて操作しただけだと確認できた。",
          "feedback": "操作した人や拒否した理由は、この記録にありません。認証結果と操作の意図は分けます。"
        }
      ]
    },
    {
      "id": "m-f1",
      "level": "intermediate",
      "chapter": "find",
      "title": "1回の要求を検索する",
      "skill": "要求IDで Web とアプリの記録を集める",
      "minutes": 4,
      "brief": "利用者が「予定表が開かなかった」と伝えてきました。似た時刻の別の要求を混ぜず、指定された要求を探します。",
      "learn": [
        "request_id は1回の要求の番号です。今回の予定表サービスは、Web側とアプリ側で同じ番号を記録します。",
        "component=web は要求を受ける側、component=app は処理する側。event は出来事で、request_received は受付、permission_checked は権限確認、response_sent は応答です。",
        "この検索欄は文字をそのまま探します。指定の文字列で絞った後、行の request_id が対象と一致するか確認します。",
        "result=denied は権限確認の拒否です。この課題は拒否の原因調査ではなく、同じ要求の記録を揃える練習です。"
      ],
      "example": {
        "title": "別の記録で練習",
        "text": "Web とアプリの双方に request_id=REQ-DEMO とあれば、同じサービスの同じ要求を調べる手がかりになります。user が同じだけでは、別の要求を混ぜる可能性があります。"
      },
      "task": "検索欄に request_id=REQ-731 と入力し、REQ-731 の記録を3行すべて選んでください。",
      "kind": "filter",
      "sourceLabel": "学習用の架空ログ・時刻は UTC",
      "rows": [
        {
          "id": "m-f1-web",
          "time": "10:20:00",
          "raw": "2026-10-23T10:20:00Z component=web user=rio request_id=REQ-731 event=request_received path=/calendar",
          "note": "予定表への要求を受付。"
        },
        {
          "id": "m-f1-other",
          "time": "10:20:01",
          "raw": "2026-10-23T10:20:01Z component=web user=rio request_id=REQ-732 event=request_received path=/help",
          "note": "同じ利用者からの別の要求。"
        },
        {
          "id": "m-f1-app",
          "time": "10:20:02",
          "raw": "2026-10-23T10:20:02Z component=app user=rio request_id=REQ-731 event=permission_checked result=denied",
          "note": "要求に対する権限確認。"
        },
        {
          "id": "m-f1-old",
          "time": "10:20:03",
          "raw": "2026-10-23T10:20:03Z component=app user=aya request_id=REQ-729 event=permission_checked result=allowed",
          "note": "別の利用者・別の要求。"
        },
        {
          "id": "m-f1-response",
          "time": "10:20:04",
          "raw": "2026-10-23T10:20:04Z component=web user=rio request_id=REQ-731 event=response_sent status=403",
          "note": "拒否の応答。"
        },
        {
          "id": "m-f1-other-response",
          "time": "10:20:05",
          "raw": "2026-10-23T10:20:05Z component=web user=rio request_id=REQ-732 event=response_sent status=200",
          "note": "ヘルプへの別の要求の応答。"
        }
      ],
      "answer": {
        "query": "request_id=REQ-731",
        "rowIds": [
          "m-f1-web",
          "m-f1-app",
          "m-f1-response"
        ]
      },
      "answerExplanation": "REQ-731 は10:20:00の受付、10:20:02の権限確認、10:20:04の応答の3行です。user=rio でも REQ-732 は別の要求です。検索で狭めた後、番号を確かめて記録を揃えられました。",
      "hints": [
        "検索欄に、指定の request_id=REQ-731 を入力します。",
        "user=rio だけで集めると REQ-732 も含まれます。要求番号を照合しましょう。",
        "10:20:00、10:20:02、10:20:04 の3行を選びます。"
      ],
      "solution": "検索欄に「request_id=REQ-731」と入力し、受付・権限確認・応答の3行を選びます。",
      "bridge": {
        "tool": "ログ検索",
        "how": "SOCroom の「ログ検索」で、条件を絞り、選んだ記録が本当に対象かを照合するときに使います。"
      },
      "flag": "EASY{MID_REQUEST_SEARCH}"
    },
    {
      "id": "m-f2",
      "level": "intermediate",
      "chapter": "find",
      "title": "端末と応答を両方合わせる",
      "skill": "DNS ログを2条件で選ぶ",
      "minutes": 4,
      "brief": "問い合わせ失敗の件数を調べる前に、どの端末のどの応答かを決めます。片方の条件だけでは別の記録が混ざります。",
      "learn": [
        "host は問い合わせ元の端末、query は問い合わせた名前、rcode は DNS の応答の種類です。",
        "NXDOMAIN は名前が存在しないという応答です。NOERROR は応答コードとしてエラーがないことを表し、この教材の該当行にはアドレス回答もあります。",
        "SERVFAIL は問い合わせを処理できなかった応答です。NXDOMAIN と同じ理由の失敗ではありません。",
        "今回は host=ws-18 かつ rcode=NXDOMAIN の両方を満たす行だけを集めます。名前が怪しく見えるかどうかは条件にしません。"
      ],
      "example": {
        "title": "別の記録で練習",
        "text": "host=ws-demo rcode=NXDOMAIN と host=ws-other rcode=NXDOMAIN があっても、ws-demo を調べるなら前者だけです。端末と結果の両方を読みます。"
      },
      "task": "host=ws-18 で、かつ rcode=NXDOMAIN の行をすべて選んでください。",
      "kind": "rows",
      "sourceLabel": "学習用の架空ログ・時刻は UTC",
      "rows": [
        {
          "id": "m-f2-a",
          "time": "10:25:00",
          "raw": "2026-10-23T10:25:00Z host=ws-18 query=reports-old.office.example type=A rcode=NXDOMAIN",
          "note": "名前が存在しないという応答。"
        },
        {
          "id": "m-f2-b",
          "time": "10:25:01",
          "raw": "2026-10-23T10:25:01Z host=ws-19 query=reports-old.office.example type=A rcode=NXDOMAIN",
          "note": "別の端末からの問い合わせ。"
        },
        {
          "id": "m-f2-c",
          "time": "10:25:02",
          "raw": "2026-10-23T10:25:02Z host=ws-18 query=reports.office.example type=A rcode=NOERROR answer=192.0.2.80",
          "note": "アドレス回答のある問い合わせ。"
        },
        {
          "id": "m-f2-d",
          "time": "10:25:03",
          "raw": "2026-10-23T10:25:03Z host=ws-18 query=calendar-old.office.example type=A rcode=NXDOMAIN",
          "note": "名前が存在しないという応答。"
        },
        {
          "id": "m-f2-e",
          "time": "10:25:04",
          "raw": "2026-10-23T10:25:04Z host=ws-18 query=calendar.office.example type=A rcode=SERVFAIL",
          "note": "処理できなかった応答。名前不存在とは別。"
        },
        {
          "id": "m-f2-f",
          "time": "10:25:05",
          "raw": "2026-10-23T10:25:05Z host=ws-19 query=calendar.office.example type=A rcode=NOERROR answer=192.0.2.81",
          "note": "別の端末へのアドレス回答。"
        }
      ],
      "answer": {
        "rowIds": [
          "m-f2-a",
          "m-f2-d"
        ]
      },
      "answerExplanation": "10:25:00 と10:25:03 の2行だけが ws-18 と NXDOMAIN の両方に一致します。10:25:01 は別端末、10:25:04 は SERVFAIL です。問い合わせ先や失敗の見た目だけで選びません。",
      "hints": [
        "まず host=ws-18 の行を探し、その中から応答を確認します。",
        "SERVFAIL は NXDOMAIN ではありません。同じ「うまくいかない」でも区別します。",
        "10:25:00 と10:25:03 の2行を選びます。"
      ],
      "solution": "10:25:00 と10:25:03 の2行を選びます。端末と応答コードの2条件を満たしています。",
      "bridge": {
        "tool": "ログ検索",
        "how": "SOCroom の「ログ検索」で、条件を絞り、選んだ記録が本当に対象かを照合するときに使います。"
      },
      "flag": "EASY{MID_DNS_TWO_CONDITIONS}"
    },
    {
      "id": "m-f3",
      "level": "intermediate",
      "chapter": "find",
      "title": "行数と試行回数は同じ？",
      "skill": "同じ試行番号の重複を除いて数える",
      "minutes": 4,
      "brief": "拒否ログが何行もあります。ただし、集約側が同じ記録を再送した行が含まれています。試行回数を数え直しましょう。",
      "learn": [
        "このログの attempt は確認通知1回分の試行番号です。同じ attempt の再送は同じ試行で、別の試行として数えません。",
        "result=denied は拒否、approved は承認、timeout は時間内に応答がなかった結果です。今回は denied だけを数えます。",
        "copy=original は元の記録、copy=replayed は集約時に再送された記録です。この教材では同じ attempt の結果を再記録しています。",
        "対象は表示された6行だけです。この時間帯の全試行や、その後のログイン成否まで分かったわけではありません。"
      ],
      "example": {
        "title": "別の記録で練習",
        "text": "attempt=P-1 result=denied が元の記録と再送で2行、attempt=P-2 result=denied が1行なら、拒否された試行は2回です。ログの3行をそのまま3回とは数えません。"
      },
      "task": "表示された6行で result=denied になった試行は何回ですか。同じ attempt を1回として数え、数字だけで入力してください。",
      "kind": "text",
      "sourceLabel": "学習用の架空ログ・時刻は UTC",
      "rows": [
        {
          "id": "m-f3-a",
          "time": "10:30:00",
          "raw": "2026-10-23T10:30:00Z user=mei attempt=M-11 event=mfa_result result=denied copy=original",
          "note": "確認通知を拒否。"
        },
        {
          "id": "m-f3-b",
          "time": "10:30:01",
          "raw": "2026-10-23T10:30:01Z user=mei attempt=M-11 event=mfa_result result=denied copy=replayed",
          "note": "M-11 の結果を再送した同じ記録。"
        },
        {
          "id": "m-f3-c",
          "time": "10:30:10",
          "raw": "2026-10-23T10:30:10Z user=mei attempt=M-12 event=mfa_result result=denied copy=original",
          "note": "別の試行の拒否。"
        },
        {
          "id": "m-f3-d",
          "time": "10:30:20",
          "raw": "2026-10-23T10:30:20Z user=mei attempt=M-13 event=mfa_result result=approved copy=original",
          "note": "この試行の確認通知は承認。"
        },
        {
          "id": "m-f3-e",
          "time": "10:30:30",
          "raw": "2026-10-23T10:30:30Z user=mei attempt=M-14 event=mfa_result result=timeout copy=original",
          "note": "時間内の応答なし。"
        },
        {
          "id": "m-f3-f",
          "time": "10:30:40",
          "raw": "2026-10-23T10:30:40Z user=mei attempt=M-15 event=mfa_result result=denied copy=original",
          "note": "別の試行の拒否。"
        }
      ],
      "answer": {
        "values": [
          "3",
          "３",
          "3回",
          "３回"
        ],
        "caseSensitive": false
      },
      "answerExplanation": "拒否された試行番号は M-11・M-12・M-15 の3種類です。M-11 の2行は同じ試行です。M-13 の承認と M-14 の時間切れは、指定された denied の件数に含めません。",
      "hints": [
        "denied の行を見つけ、その attempt を書き出すつもりで読みます。",
        "M-11 は2行ありますが、同じ試行です。approved と timeout は除きます。",
        "残る試行番号は M-11・M-12・M-15 の3つです。"
      ],
      "solution": "「3」と入力します。拒否ログは4行ですが、拒否された試行番号は3種類です。",
      "bridge": {
        "tool": "ログ検索",
        "how": "SOCroom の「ログ検索」で、条件を絞り、選んだ記録が本当に対象かを照合するときに使います。"
      },
      "flag": "EASY{MID_DEDUP_COUNT}"
    },
    {
      "id": "m-f4",
      "level": "intermediate",
      "chapter": "find",
      "title": "検索で出た行をもう一度読む",
      "skill": "部分一致の検索結果から対象操作を選ぶ",
      "minutes": 4,
      "brief": "検索に出てきた行が、全部ほしい証拠とは限りません。文字の一致と、条件の一致を分けて選びます。",
      "learn": [
        "この検索は文字列の部分一致です。user=mina で探すと user=mina2 の行も表示されます。= の右の値全体を確かめてください。",
        "host は端末、user は記録されたアカウント、event は操作です。file_read はファイルを読む操作、file_created は作成です。",
        "path はファイルの場所です。今回は ws-22 上のアカウント mina による file_read の記録が対象です。",
        "読んだ記録は、外部への送信記録ではありません。今は対象の読み取り操作を集めることに集中します。"
      ],
      "example": {
        "title": "別の記録で練習",
        "text": "user=demo という検索は user=demo-old にも文字として一致します。アカウント demo だけを調べるなら、値全体が demo の行を選びます。"
      },
      "task": "検索欄に user=mina と入力し、host=ws-22・user=mina・event=file_read の3条件に一致する2行を選んでください。",
      "kind": "filter",
      "sourceLabel": "学習用の架空ログ・時刻は UTC",
      "rows": [
        {
          "id": "m-f4-a",
          "time": "10:35:00",
          "raw": "2026-10-23T10:35:00Z host=ws-22 user=mina event=file_read path=/team/plan.csv",
          "note": "対象端末で計画表を読み取り。"
        },
        {
          "id": "m-f4-b",
          "time": "10:35:01",
          "raw": "2026-10-23T10:35:01Z host=ws-22 user=mina2 event=file_read path=/team/plan.csv",
          "note": "名前が似た別アカウント。"
        },
        {
          "id": "m-f4-c",
          "time": "10:35:02",
          "raw": "2026-10-23T10:35:02Z host=ws-23 user=mina event=file_read path=/team/plan.csv",
          "note": "同じアカウントだが別端末。"
        },
        {
          "id": "m-f4-d",
          "time": "10:35:03",
          "raw": "2026-10-23T10:35:03Z host=ws-22 user=mina event=file_created path=/temp/notes.txt",
          "note": "同じ端末・アカウントの作成操作。"
        },
        {
          "id": "m-f4-e",
          "time": "10:35:04",
          "raw": "2026-10-23T10:35:04Z host=ws-22 user=mina event=file_read path=/team/budget.csv",
          "note": "対象端末で予算表を読み取り。"
        },
        {
          "id": "m-f4-f",
          "time": "10:35:05",
          "raw": "2026-10-23T10:35:05Z host=ws-22 user=hana event=file_read path=/team/plan.csv",
          "note": "別のアカウント。"
        }
      ],
      "answer": {
        "query": "user=mina",
        "rowIds": [
          "m-f4-a",
          "m-f4-e"
        ]
      },
      "answerExplanation": "10:35:00 と10:35:04 の2行が、端末 ws-22・アカウント mina・読み取り操作 file_read の全条件に一致します。検索では mina2 や別端末、作成操作も表示されるため、表示されたという理由だけでは選べません。",
      "hints": [
        "指定の user=mina で検索してから、各行の3つの欄を照合します。",
        "mina2、ws-23、file_created のいずれかに当たる行は今回の対象外です。",
        "10:35:00 と10:35:04 の読み取り操作を選びます。"
      ],
      "solution": "「user=mina」で検索し、10:35:00 と10:35:04 の2行を選びます。",
      "bridge": {
        "tool": "ログ検索",
        "how": "SOCroom の「ログ検索」で、条件を絞り、選んだ記録が本当に対象かを照合するときに使います。"
      },
      "flag": "EASY{MID_SEARCH_RECHECK}"
    },
    {
      "id": "m-c1",
      "level": "intermediate",
      "chapter": "connect",
      "title": "要求から応答までを並べる",
      "skill": "異なる記録元の出来事を時系列にする",
      "minutes": 4,
      "brief": "Web側とアプリ側の記録が混ざっています。同じ要求の中で何が先だったか、時刻で整理しましょう。",
      "learn": [
        "4行とも、同じ予定表サービスの request_id=REQ-842 です。component=web は Web 側、component=app はアプリ側です。",
        "job_queued は処理の受付、file_created は成果物の作成、response_sent は応答です。artifact は作られたファイル名です。",
        "この4行は同じ基準の UTC 時刻で、時刻ずれはないという条件です。画面の上下ではなく、記録された時刻で並べます。",
        "順番が分かっても、ブラウザがファイルを保存したことまでは分かりません。応答後の操作は別の記録が必要です。"
      ],
      "example": {
        "title": "別の記録で練習",
        "text": "同じ基準の時計で 11:00:01 の要求受付、11:00:03 の処理、11:00:05 の応答なら、その順に並べます。記録元が違うだけで、順番を変える必要はありません。"
      },
      "task": "4枚を、記録された時刻が早い順に並べてください。",
      "kind": "order",
      "sourceLabel": "学習用の架空ログ・時刻は UTC",
      "rows": [
        {
          "id": "m-c1-file",
          "time": "11:02:04",
          "raw": "2026-10-23T11:02:04Z component=app request_id=REQ-842 event=file_created artifact=calendar-842.csv",
          "note": "予定表ファイルを作成。"
        },
        {
          "id": "m-c1-response",
          "time": "11:02:05",
          "raw": "2026-10-23T11:02:05Z component=web request_id=REQ-842 event=response_sent status=200 response_kind=job_metadata",
          "note": "処理情報を返した応答。ファイル本体ではない。"
        },
        {
          "id": "m-c1-request",
          "time": "11:02:00",
          "raw": "2026-10-23T11:02:00Z component=web request_id=REQ-842 event=request_received method=POST path=/api/calendar-export",
          "note": "書き出し要求の受付。"
        },
        {
          "id": "m-c1-queue",
          "time": "11:02:01",
          "raw": "2026-10-23T11:02:01Z component=app request_id=REQ-842 event=job_queued job=CAL-842",
          "note": "書き出し処理を受け付け。"
        }
      ],
      "answer": {
        "rowIds": [
          "m-c1-request",
          "m-c1-queue",
          "m-c1-file",
          "m-c1-response"
        ]
      },
      "answerExplanation": "11:02:00 の要求受付→11:02:01 の処理受付→11:02:04 のファイル作成→11:02:05 の応答です。応答は処理情報であり、利用者のファイル受取完了までは示していません。",
      "hints": [
        "時刻の秒まで比べます。この課題では時計の補正は不要です。",
        "00秒の要求受付が最初、05秒の応答が最後です。",
        "00秒→01秒→04秒→05秒の順にします。"
      ],
      "solution": "要求受付、処理受付、ファイル作成、応答の順に並べます。",
      "bridge": {
        "tool": "時系列",
        "how": "SOCroom の「時系列」で、複数の記録元から集めた出来事を順に整理するときに使います。"
      },
      "flag": "EASY{MID_REQUEST_TIMELINE}"
    },
    {
      "id": "m-c2",
      "level": "intermediate",
      "chapter": "connect",
      "title": "要求番号から処理番号へつなぐ",
      "skill": "2種類の番号を照合して成果物を追う",
      "minutes": 4,
      "brief": "Webの要求番号と、処理担当の番号が違います。両方の番号が書かれた橋渡しの記録を使いましょう。",
      "learn": [
        "request_id は利用者の要求、job はアプリが実行する仕事の番号です。番号の名前が違っても、対応を記録した行からたどれます。",
        "このサービスでは event=job_assigned の行に、要求とジョブの対応が書かれています。job_started は開始、artifact_created は成果物作成です。",
        "今回は要求 REQ-712 から割り当てられたジョブの3行を選びます。同じ user の別要求は含めません。",
        "artifact は作られたファイル名です。この照合は「どの要求の処理で作ったか」を確かめるもので、ファイルを受け取った人の特定ではありません。"
      ],
      "example": {
        "title": "別の記録で練習",
        "text": "request_id=DEMO-1 job=J-9 event=job_assigned があれば、次に job=J-9 の開始や作成記録をたどれます。要求IDが後の行に省略されていても、対応記録が手がかりです。"
      },
      "task": "REQ-712 に対応するジョブの「割当・開始・成果物作成」を、3行選んでください。まず要求と job の対応を確認します。",
      "kind": "rows",
      "sourceLabel": "学習用の架空ログ・時刻は UTC",
      "rows": [
        {
          "id": "m-c2-map",
          "time": "11:10:00",
          "raw": "2026-10-23T11:10:00Z user=mia request_id=REQ-712 job=JOB-38 event=job_assigned",
          "note": "要求と処理番号の対応。"
        },
        {
          "id": "m-c2-other-map",
          "time": "11:10:01",
          "raw": "2026-10-23T11:10:01Z user=mia request_id=REQ-713 job=JOB-39 event=job_assigned",
          "note": "同じアカウントの別要求。"
        },
        {
          "id": "m-c2-start",
          "time": "11:10:02",
          "raw": "2026-10-23T11:10:02Z job=JOB-38 event=job_started dataset=room_list",
          "note": "JOB-38 の処理開始。room_list は会議室一覧。"
        },
        {
          "id": "m-c2-other-start",
          "time": "11:10:03",
          "raw": "2026-10-23T11:10:03Z job=JOB-39 event=job_started dataset=room_list",
          "note": "JOB-39 の処理開始。"
        },
        {
          "id": "m-c2-output",
          "time": "11:10:05",
          "raw": "2026-10-23T11:10:05Z job=JOB-38 event=artifact_created artifact=rooms-38.csv",
          "note": "JOB-38 の成果物作成。"
        },
        {
          "id": "m-c2-other-output",
          "time": "11:10:06",
          "raw": "2026-10-23T11:10:06Z job=JOB-39 event=artifact_created artifact=rooms-39.csv",
          "note": "別のジョブの成果物。"
        }
      ],
      "answer": {
        "rowIds": [
          "m-c2-map",
          "m-c2-start",
          "m-c2-output"
        ]
      },
      "answerExplanation": "REQ-712 に割り当てられたのは JOB-38 です。その割当、11:10:02 の開始、11:10:05 の成果物作成をつなぎます。JOB-39 は同じアカウントの要求でも REQ-713 の処理です。",
      "hints": [
        "最初に request_id=REQ-712 がある行の job を読みます。",
        "対応する番号は JOB-38 です。その番号の開始と成果物作成を探します。",
        "11:10:00、11:10:02、11:10:05 の3行を選びます。"
      ],
      "solution": "REQ-712 / JOB-38 の割当、JOB-38 の開始、rooms-38.csv の作成を選びます。",
      "bridge": {
        "tool": "ログ検索",
        "how": "SOCroom の「ログ検索」で、条件を絞り、選んだ記録が本当に対象かを照合するときに使います。"
      },
      "flag": "EASY{MID_JOIN_JOB}"
    },
    {
      "id": "m-c3",
      "level": "intermediate",
      "chapter": "connect",
      "title": "ログインできても操作できない",
      "skill": "認証と操作権限の結果を照合する",
      "minutes": 4,
      "brief": "ログイン成功の直後に拒否が出ています。矛盾しているのか、それとも別の確認なのか、記録を分けて考えます。",
      "learn": [
        "認証は、どのアカウントとして扱うかを確認することです。認可は、そのアカウントに特定の操作を許すかの判断です。",
        "session はログイン後の操作をまとめる番号です。このサービスの同じ session を使って、認証結果と後の要求を照合できます。",
        "event=login_finished result=success は認証成功。event=permission_checked result=denied は操作権限の確認で拒否した記録です。",
        "今回は権限不足の理由が reason=missing_role と記録されています。role は操作できる範囲をまとめた役割で、admin が必要だったと明記されています。"
      ],
      "example": {
        "title": "別の記録で練習",
        "text": "入館証の確認を通っても、すべての部屋に入れるとは限りません。同じように、ログインできても管理者用操作の権限があるとは限りません。"
      },
      "task": "session=S-225 の記録から確認できることを選んでください。",
      "kind": "choice",
      "sourceLabel": "学習用の架空ログ・時刻は UTC",
      "rows": [
        {
          "id": "m-c3-auth",
          "time": "11:20:00",
          "raw": "2026-10-23T11:20:00Z user=ren session=S-225 event=login_finished result=success",
          "note": "このセッションの認証に成功。"
        },
        {
          "id": "m-c3-check",
          "time": "11:20:10",
          "raw": "2026-10-23T11:20:10Z user=ren session=S-225 request_id=REQ-225 event=permission_checked result=denied reason=missing_role required_role=admin",
          "note": "管理者の役割がないため操作を拒否。"
        },
        {
          "id": "m-c3-web",
          "time": "11:20:11",
          "raw": "2026-10-23T11:20:11Z user=ren session=S-225 request_id=REQ-225 method=GET path=/admin/settings status=403",
          "note": "管理設定ページの要求に拒否の応答。"
        }
      ],
      "answer": {
        "choiceId": "m-c3-split"
      },
      "answerExplanation": "S-225 の認証は成功していますが、管理設定への操作は必要な admin の役割がなく拒否されました。認証と認可は別なので、両方の結果は矛盾しません。この操作が拒否されたことと、他の操作まで拒否されたことも別です。",
      "hints": [
        "login_finished と permission_checked は違う確認です。",
        "最初の成功は認証。後の拒否は管理設定への操作権限です。",
        "認証は成功し、管理設定への操作は権限不足で拒否された、という選択肢です。"
      ],
      "solution": "「認証は成功したが、管理設定への操作は必要な権限がなく拒否された。」を選びます。",
      "bridge": {
        "tool": "ログ検索",
        "how": "SOCroom の「ログ検索」で、条件を絞り、選んだ記録が本当に対象かを照合するときに使います。"
      },
      "flag": "EASY{MID_AUTH_VS_PERMISSION}",
      "choices": [
        {
          "id": "m-c3-contradiction",
          "label": "成功と拒否があるので、どちらかのログは必ず誤りだ。",
          "feedback": "認証と操作権限は別の確認です。同じセッションでも両方の結果は成立します。"
        },
        {
          "id": "m-c3-split",
          "label": "認証は成功したが、管理設定への操作は必要な権限がなく拒否された。",
          "feedback": "認証成功と、その後の操作権限の拒否を分けて読めています。"
        },
        {
          "id": "m-c3-all",
          "label": "管理設定が拒否されたので、すべての操作が不可能だった。",
          "feedback": "ここで拒否を確認したのは REQ-225 の管理設定要求です。他の操作までは確認していません。"
        }
      ]
    },
    {
      "id": "m-c4",
      "level": "intermediate",
      "chapter": "connect",
      "title": "存在しない名前は攻撃の証拠？",
      "skill": "DNS の応答と原因の推測を分ける",
      "minutes": 4,
      "brief": "同じ端末から、古そうな名前への問い合わせが繰り返されています。見た目の印象だけで結論を広げない練習です。",
      "learn": [
        "query は問い合わせた名前、rcode=NXDOMAIN は名前が存在しないという DNS の応答です。この課題ではその応答が3回記録されています。",
        "入力間違い、古い設定、望ましくないプログラムなど、似た記録を生む原因は複数考えられます。どれかはログと追加資料で確かめます。",
        "この資料には、問い合わせたプログラムや設定変更の記録はありません。名前の印象や繰り返し回数だけで原因を決めません。"
      ],
      "example": {
        "title": "別の記録で練習",
        "text": "古い社内ブックマークへの問い合わせでも、名前が廃止されていれば存在しないという応答になり得ます。ただし、似た名前なら必ず古いブックマークが原因、という意味ではありません。"
      },
      "task": "この3行だけから言える、最も適切な判断を選んでください。",
      "kind": "choice",
      "sourceLabel": "学習用の架空ログ・時刻は UTC",
      "rows": [
        {
          "id": "m-c4-a",
          "time": "11:30:00",
          "raw": "2026-10-23T11:30:00Z host=ws-27 query=portal-legacy.office.example type=A rcode=NXDOMAIN",
          "note": "問い合わせの記録1。"
        },
        {
          "id": "m-c4-b",
          "time": "11:30:30",
          "raw": "2026-10-23T11:30:30Z host=ws-27 query=portal-legacy.office.example type=A rcode=NXDOMAIN",
          "note": "問い合わせの記録2。"
        },
        {
          "id": "m-c4-c",
          "time": "11:31:00",
          "raw": "2026-10-23T11:31:00Z host=ws-27 query=portal-legacy.office.example type=A rcode=NXDOMAIN",
          "note": "問い合わせの記録3。"
        }
      ],
      "answer": {
        "choiceId": "m-c4-limited"
      },
      "answerExplanation": "同じ端末から同じ名前への問い合わせが3回あり、いずれも NXDOMAIN でした。問い合わせ元のプログラムや設定は未確認なので、感染とも単なる古い設定とも断定できません。次に確認する材料を残す判断です。",
      "hints": [
        "応答から直接分かることと、原因の推測を分けます。",
        "プログラムや設定の記録がないので、感染や古い設定の断定はできません。",
        "3回の NXDOMAIN は確認できるが、原因は未確認、とする選択肢です。"
      ],
      "solution": "「3回とも名前が存在しないという応答だった。原因の確認には、問い合わせたプログラムや設定の調査が必要。」を選びます。",
      "bridge": {
        "tool": "ログ検索",
        "how": "SOCroom の「ログ検索」で、条件を絞り、選んだ記録が本当に対象かを照合するときに使います。"
      },
      "flag": "EASY{MID_DNS_LIMIT}",
      "choices": [
        {
          "id": "m-c4-malware",
          "label": "NXDOMAIN が繰り返されているので、端末の感染が確定した。",
          "feedback": "NXDOMAIN は DNS 応答の種類です。感染を示すプログラムなどの証拠はまだありません。"
        },
        {
          "id": "m-c4-old",
          "label": "名前に legacy とあるので、必ず古い設定の問題だ。",
          "feedback": "名前は手がかりですが、設定を確認していないため原因とは断定できません。"
        },
        {
          "id": "m-c4-limited",
          "label": "3回とも名前が存在しないという応答だった。原因の確認には、問い合わせたプログラムや設定の調査が必要。",
          "feedback": "記録から分かる結果と、未確認の原因を分けられています。"
        }
      ]
    },
    {
      "id": "m-e1",
      "level": "intermediate",
      "chapter": "evidence",
      "title": "中継先と利用サービスを区別する",
      "skill": "プロキシの記録をサービス台帳と照合する",
      "minutes": 5,
      "brief": "通信先に社内の機器のIPが出ています。それは最終的に利用したサービスでしょうか。中継の役割を調べます。",
      "learn": [
        "プロキシは、端末とサービスの間で通信を中継する仕組みです。この教材の proxy は中継機器、target_host は要求したサービスの名前です。",
        "src は端末側のIPアドレス、method と path は要求の種類とサービス内の宛先です。アカウントや操作した人は、この行には記録されていません。",
        "サービス台帳は、組織が利用するサービス名と業務用途をまとめた資料です。target_host と台帳の名前を照合します。",
        "業務用途を確認できても、今回の要求すべてが承認されたとは限りません。ここでは要求先の用途だけを確かめます。"
      ],
      "example": {
        "title": "別の資料で練習",
        "text": "proxy=10.40.0.7 target_host=booking.vendor.example とあり、台帳で booking.vendor.example が会議予約なら、要求先の用途は会議予約です。10.40.0.7 の中継機能と取り違えません。"
      },
      "task": "「記録された要求先は、契約書類を保管する業務サービスである」と説明する根拠を2枚選んでください。",
      "kind": "evidence",
      "sourceLabel": "今回の調査で提供された架空の記録・資料",
      "rows": [
        {
          "id": "m-e1-log",
          "sourceType": "log",
          "title": "今回の通信記録",
          "body": "2026-10-23T12:00:00Z src=10.40.1.22 proxy=10.40.0.5 target_host=archive.vendor.example method=GET path=/documents\nproxy は中継機器、target_host は要求先の名前。"
        },
        {
          "id": "m-e1-service",
          "sourceType": "document",
          "title": "業務サービス台帳",
          "body": "archive.vendor.example：契約書類の保管・閲覧。管理担当：法務システム係。\nbooking.vendor.example：会議室の予約。管理担当：総務設備係。"
        },
        {
          "id": "m-e1-proxy",
          "sourceType": "document",
          "title": "中継機器の台帳",
          "body": "10.40.0.5：社内のWeb通信を中継するプロキシ。端末の要求を受け、指定されたサービスへ中継する。契約書類の保管サービスそのものではない。"
        },
        {
          "id": "m-e1-guess",
          "sourceType": "reply",
          "title": "未確認のコメント",
          "body": "社内IPへの通信なので、社内の機器だけで完結していると思います。target_host の意味と今回の宛先は確認していません。"
        }
      ],
      "answer": {
        "rowIds": [
          "m-e1-log",
          "m-e1-service"
        ]
      },
      "answerExplanation": "通信記録の target_host=archive.vendor.example と、同じ名前の業務サービス台帳を組み合わせると、要求先の用途が契約書類の保管・閲覧だと分かります。中継機器の台帳は役割の補足ですが、それだけでは今回要求したサービスの用途を確定できません。",
      "hints": [
        "今回の要求先を示す資料と、その名前の業務用途を示す資料が必要です。",
        "中継機器の proxy ではなく、target_host と台帳の名前を照合します。",
        "「今回の通信記録」と「業務サービス台帳」の2枚を選びます。"
      ],
      "solution": "「今回の通信記録」と「業務サービス台帳」を選びます。中継機器と要求先のサービスを区別した証拠です。",
      "bridge": {
        "tool": "資産・資料",
        "how": "SOCroom の「資産・資料」で、ログの対象や業務上の根拠を照合するときに使います。"
      },
      "flag": "EASY{MID_PROXY_SERVICE}"
    },
    {
      "id": "m-e2",
      "level": "intermediate",
      "chapter": "evidence",
      "title": "時間が一致すれば承認済み？",
      "skill": "承認された対象データまで比較する",
      "minutes": 5,
      "brief": "作業の時間とアカウントは予定どおりでした。しかし、それだけで作業全体を承認範囲内と判断してよいでしょうか。",
      "learn": [
        "dataset は処理対象のデータの集まりです。attendance_summary は勤怠の集計、salary_summary は給与の集計を表します。",
        "承認票は、誰が・いつ・何をしてよいかを定めた資料です。時間やアカウントの一致だけでなく、対象データも照合します。",
        "event=export_completed は、このアプリで書き出しファイルの生成が完了した記録です。利用者による受け取りまでは示しません。",
        "以下の時刻はすべて2026-10-23の UTC です。承認と異なる点を、資料に基づいて示します。"
      ],
      "example": {
        "title": "別の資料で練習",
        "text": "承認票が「在庫一覧の書き出し」で、実行記録が「商品説明一覧の書き出し」なら、時間と担当者が同じでも対象の違いを報告します。名前の似ているデータも同一とは限りません。"
      },
      "task": "「作業時刻とアカウントは承認内だが、実際の対象データは承認票と異なる」を裏付ける2枚を選んでください。",
      "kind": "evidence",
      "sourceLabel": "今回の調査で提供された架空の記録・資料",
      "rows": [
        {
          "id": "m-e2-log",
          "sourceType": "log",
          "title": "実際の書き出し記録",
          "body": "2026-10-23T12:10:03Z user=svc-report request_id=REQ-550 event=export_completed dataset=salary_summary artifact=salary-550.csv\n給与集計のファイルを生成。"
        },
        {
          "id": "m-e2-approval",
          "sourceType": "document",
          "title": "承認済み作業票 AP-550",
          "body": "実施日：2026-10-23 UTC 12:10〜12:20。アカウント：svc-report。許可する作業：attendance_summary（勤怠集計）の書き出し。salary_summary（給与集計）はこの承認の対象外。"
        },
        {
          "id": "m-e2-asset",
          "sourceType": "document",
          "title": "サービスの説明",
          "body": "勤怠・給与サービスは勤怠集計と給与集計の両方を処理できる。処理できる機能があることと、個別作業の承認は別。"
        },
        {
          "id": "m-e2-comment",
          "sourceType": "reply",
          "title": "担当者の一次コメント",
          "body": "いつもの時間に処理が動いたのは確認しました。今回の dataset はまだ見ていません。"
        }
      ],
      "answer": {
        "rowIds": [
          "m-e2-log",
          "m-e2-approval"
        ]
      },
      "answerExplanation": "実行ログは user=svc-report、12:10:03、dataset=salary_summary。承認票は同じアカウントと時間帯ですが、対象は attendance_summary です。機能が存在することや時刻だけの確認では、この対象の違いを解消できません。",
      "hints": [
        "予定と実際の2枚をそろえ、アカウント・時刻・対象データを比べます。",
        "実行ログの salary_summary と、承認された attendance_summary は別のデータです。",
        "「実際の書き出し記録」と「承認済み作業票 AP-550」を選びます。"
      ],
      "solution": "実行記録と AP-550 の2枚を選びます。時間の一致だけで、対象データの不一致を見落とさない練習です。",
      "bridge": {
        "tool": "資産・資料",
        "how": "SOCroom の「資産・資料」で、ログの対象や業務上の根拠を照合するときに使います。"
      },
      "flag": "EASY{MID_APPROVAL_SCOPE}"
    },
    {
      "id": "m-e3",
      "level": "intermediate",
      "chapter": "evidence",
      "title": "本人の回答とログを合わせる",
      "skill": "回答で分かったことと認証結果を区別する",
      "minutes": 5,
      "brief": "確認通知に心当たりがないという回答が届きました。回答を尊重しつつ、ログから言える範囲と分けて記録します。",
      "learn": [
        "照会は、利用者や担当者に状況を問い合わせることです。回答は「本人がどう説明したか」の証拠になり、操作の全容を自動的に証明するものではありません。",
        "auth_id は1回の認証番号、factor=push は追加の確認通知、result=denied はその通知の拒否を表します。",
        "今回の資料には最終的な認証結果や、その後のセッションの記録はありません。拒否の1行と回答から、全ログインの成否までは広げません。"
      ],
      "example": {
        "title": "別の資料で練習",
        "text": "利用者が「端末を再起動していない」と回答した場合、回答内容はそのまま残します。実際に誰が再起動したかや原因を決めるには、操作ログなど別の証拠も確認します。"
      },
      "task": "「AUTH-78 の追加確認は拒否され、利用者はその認証要求に心当たりがないと回答した」を直接支える2枚を選んでください。",
      "kind": "evidence",
      "sourceLabel": "今回の調査で提供された架空の記録・資料",
      "rows": [
        {
          "id": "m-e3-log",
          "sourceType": "log",
          "title": "AUTH-78 の追加確認ログ",
          "body": "2026-10-23T12:20:08Z user=tomoe auth_id=AUTH-78 factor=push result=denied\nこの資料に含まれるのは追加確認の結果だけ。"
        },
        {
          "id": "m-e3-reply",
          "sourceType": "reply",
          "title": "tomoe への確認結果",
          "body": "2026-10-23 UTC 12:25、登録済みの社内連絡先で確認。「12:20の AUTH-78 に該当するログインは試していません。届いた確認通知は拒否しました」と回答。"
        },
        {
          "id": "m-e3-guide",
          "sourceType": "document",
          "title": "認証サービスの利用案内",
          "body": "このサービスはパスワードと確認通知を使う。確認通知の結果と、認証全体の最終結果は別々に記録する。"
        },
        {
          "id": "m-e3-other",
          "sourceType": "log",
          "title": "前日の別の認証",
          "body": "2026-10-22T08:00:00Z user=tomoe auth_id=AUTH-10 event=auth_finished result=success\n前日の別の認証で成功した記録。"
        }
      ],
      "answer": {
        "rowIds": [
          "m-e3-log",
          "m-e3-reply"
        ]
      },
      "answerExplanation": "AUTH-78 の追加確認ログは拒否を、tomoe の回答はその認証要求に心当たりがないという説明を支えます。前日の成功は別の認証です。AUTH-78 の最終結果はこの資料では未確認として残します。",
      "hints": [
        "ログの結果と、本人が述べたことを1枚ずつ選びます。",
        "前日の AUTH-10 の成功は、今回の AUTH-78 の最終結果ではありません。",
        "「AUTH-78 の追加確認ログ」と「tomoe への確認結果」の2枚です。"
      ],
      "solution": "「AUTH-78 の追加確認ログ」と「tomoe への確認結果」を選びます。今回の最終認証結果は別途確認が必要です。",
      "bridge": {
        "tool": "照会",
        "how": "SOCroom の「照会」で得た回答を、ログの対象番号・時刻と合わせて記録するときに使います。"
      },
      "flag": "EASY{MID_REPLY_AND_LOG}"
    },
    {
      "id": "m-e4",
      "level": "intermediate",
      "chapter": "evidence",
      "title": "その資料はいつ有効？",
      "skill": "台帳の適用日から当時の担当者を選ぶ",
      "minutes": 5,
      "brief": "機器の担当者が変わっています。現在手元にある資料をすべて同じ扱いにせず、調べる日の担当を確認します。",
      "learn": [
        "資産台帳は機器の用途や管理担当をまとめた資料です。改訂で担当者が変わることがあるため、適用開始日と終了日を確認します。",
        "今回は2026-10-23 UTC 12:40の出来事を、その時点の担当に照会します。資料の「適用開始〜終了」にその日が含まれるかを見ます。",
        "未来の担当者や過去の担当者の記載が正しくても、対象時点にそのまま当てはめることはできません。"
      ],
      "example": {
        "title": "別の資料で練習",
        "text": "10月1日〜15日の担当がA係、10月16日以降がB係なら、10月20日の出来事はB係へ照会します。資料を作った日ではなく、担当の適用期間で決めます。"
      },
      "task": "2026-10-23 の files-gw-02 の出来事は、台帳上どの担当へ照会しますか。適用期間で選んでください。",
      "kind": "choice",
      "sourceLabel": "今回の調査で提供された架空の記録・資料",
      "rows": [
        {
          "id": "m-e4-log",
          "sourceType": "log",
          "title": "照会したい出来事",
          "body": "2026-10-23T12:40:00Z host=files-gw-02 event=service_error\nfiles-gw-02 でサービスエラーが記録された。原因は未確認。"
        },
        {
          "id": "m-e4-old",
          "sourceType": "document",
          "title": "台帳 第1版",
          "body": "機器：files-gw-02。用途：社内ファイル中継。担当：総務設備係。適用：2026-10-01〜2026-10-20。"
        },
        {
          "id": "m-e4-current",
          "sourceType": "document",
          "title": "台帳 第2版",
          "body": "機器：files-gw-02。用途：社内ファイル中継。担当：業務基盤係。適用：2026-10-21〜2026-10-31。"
        },
        {
          "id": "m-e4-future",
          "sourceType": "document",
          "title": "移管予定・第3版",
          "body": "機器：files-gw-02。用途：社内ファイル中継。担当：情報運用係。適用開始：2026-11-01。10月中はまだ移管しない。"
        }
      ],
      "answer": {
        "choiceId": "m-e4-current-owner"
      },
      "answerExplanation": "2026-10-23 は第2版の適用期間である10月21日〜31日に含まれるため、担当は業務基盤係です。総務設備係は前の担当、情報運用係は11月からの担当です。",
      "hints": [
        "調べる日付は10月23日です。機器名に加えて適用期間を見ます。",
        "第3版は11月1日からで、10月23日にはまだ適用されません。",
        "10月21日〜31日の第2版にある業務基盤係を選びます。"
      ],
      "solution": "「業務基盤係」を選びます。対象の日時に有効な台帳を使います。",
      "bridge": {
        "tool": "資産・資料",
        "how": "SOCroom の「資産・資料」で、ログの対象や業務上の根拠を照合するときに使います。"
      },
      "flag": "EASY{MID_DOCUMENT_DATE}",
      "choices": [
        {
          "id": "m-e4-old-owner",
          "label": "総務設備係",
          "feedback": "第1版の担当ですが、適用は10月20日までです。10月23日は第2版を使います。"
        },
        {
          "id": "m-e4-current-owner",
          "label": "業務基盤係",
          "feedback": "10月23日を含む第2版の担当です。"
        },
        {
          "id": "m-e4-future-owner",
          "label": "情報運用係",
          "feedback": "移管は11月1日からです。最も新しい予定が対象時点に適用されるとは限りません。"
        }
      ]
    },
    {
      "id": "m-d1",
      "level": "intermediate",
      "chapter": "respond",
      "title": "障害の可能性を先に共有する",
      "skill": "Web エラーを業務影響と手順に照らす",
      "minutes": 5,
      "brief": "複数の利用者からエラーの連絡が来ました。攻撃と断定せず、担当者がまず確認できる情報を伝えます。",
      "learn": [
        "HTTP の status=500 はサーバー側のエラーを示す応答です。原因が攻撃、設定、プログラム不具合のどれかは、数字だけでは分かりません。",
        "この演習の手順は、複数の利用者が使えない場合、サービス担当へ時刻・要求番号・利用者からの影響を伝える、というものです。",
        "変更作業は動作が変わる手がかりですが、同じ時間にあっただけで原因確定ではありません。原因調査に役立つ資料として添えます。"
      ],
      "example": {
        "title": "別の資料で練習",
        "text": "画面を開けないという連絡と同時刻のエラーがあれば、対象画面・時刻・要求番号をサービス担当へ共有します。「必ず攻撃」とするには別の根拠が必要です。"
      },
      "task": "提示された対応手順に沿って、最初に行うことを選んでください。",
      "kind": "choice",
      "sourceLabel": "今回の調査で提供された架空の記録・資料",
      "rows": [
        {
          "id": "m-d1-logs",
          "sourceType": "log",
          "title": "画面表示の応答記録",
          "body": "2026-10-23 UTC 13:00:01 user=ami request_id=WEB-301 path=/schedule status=500\n13:00:04 user=ko request_id=WEB-302 path=/schedule status=500\n13:00:09 user=sei request_id=WEB-303 path=/schedule status=500"
        },
        {
          "id": "m-d1-impact",
          "sourceType": "reply",
          "title": "利用者の連絡",
          "body": "ami・ko・sei の3人から「予定表が開かず、会議の確認ができない」と連絡。ほかの機能の影響は未確認。"
        },
        {
          "id": "m-d1-change",
          "sourceType": "document",
          "title": "変更作業票 CH-18",
          "body": "2026-10-23 UTC 12:50〜13:10、予定表サービスの表示部品を更新。承認済み。今回のエラーとの因果関係は未確認。"
        },
        {
          "id": "m-d1-rule",
          "sourceType": "document",
          "title": "この演習の初動手順",
          "body": "複数利用者の業務停止が確認されたら、サービス担当へ時刻・対象画面・要求番号・影響を共有する。関連する変更情報も添える。エラーコードだけで攻撃と断定しない。"
        }
      ],
      "answer": {
        "choiceId": "m-d1-contact"
      },
      "answerExplanation": "3人の業務影響と /schedule の500応答があるため、手順に従って時刻・WEB-301〜303・影響・CH-18 を担当へ共有します。変更との関係は確認依頼とし、攻撃とも変更ミスとも断定しません。",
      "hints": [
        "エラーの原因と、利用者が使えないという影響は分けます。",
        "この演習の初動手順には、複数利用者の業務停止時に共有する情報が書かれています。",
        "サービス担当へ時刻・要求番号・影響・変更情報を共有する選択肢です。"
      ],
      "solution": "「サービス担当へ時刻・要求番号・3人の業務影響・変更作業票を共有し、原因の確認を依頼する。」を選びます。",
      "bridge": {
        "tool": "対応記録",
        "how": "SOCroom の「対応記録」で、業務影響と調査の引き継ぎ先を具体的に残すときに使います。"
      },
      "flag": "EASY{MID_ERROR_TRIAGE}",
      "choices": [
        {
          "id": "m-d1-attack",
          "label": "500が3回あるので、攻撃が確定したと全社へ報告する。",
          "feedback": "500だけでは原因は分かりません。提示された手順で、確認した影響と記録を担当へ共有します。"
        },
        {
          "id": "m-d1-contact",
          "label": "サービス担当へ時刻・要求番号・3人の業務影響・変更作業票を共有し、原因の確認を依頼する。",
          "feedback": "影響を伝えつつ、変更との関係は未確認として適切に引き継げています。"
        },
        {
          "id": "m-d1-ignore",
          "label": "変更が承認済みなので、エラーは調べずに終了する。",
          "feedback": "変更の承認は、サービスが正常に動いている証明ではありません。3人の業務影響が報告されています。"
        }
      ]
    },
    {
      "id": "m-d2",
      "level": "intermediate",
      "chapter": "respond",
      "title": "次に欲しいログを具体的に頼む",
      "skill": "未確認の件数を確かめる照会を組み立てる",
      "minutes": 5,
      "brief": "書き出し要求に200応答が返りました。しかし、実際に何件処理されたかは書かれていません。必要な追加資料を絞って依頼します。",
      "learn": [
        "HTTP の200応答は、対応する要求への成功を示す応答です。このサービスの response_kind=job_metadata は、仕事の番号などの情報を返したことを表します。",
        "データを何件書き出したかは、このサービスのアプリ監査ログに記録されます。監査ログは、調査できるように処理内容を残した記録です。",
        "request_id で Web の要求とアプリの記録を照合できます。問いと番号を具体的にすると、担当者が必要な範囲を調べやすくなります。"
      ],
      "example": {
        "title": "別の資料で練習",
        "text": "「何かログをください」より「REQ-DEMO のアプリ監査ログで、対象データと処理件数を確認したい」と依頼すると、必要な資料と目的が伝わります。"
      },
      "task": "REQ-902 が実際に何件のデータを生成したか確認するため、最も直接的な追加依頼を選んでください。",
      "kind": "choice",
      "sourceLabel": "今回の調査で提供された架空の記録・資料",
      "rows": [
        {
          "id": "m-d2-web",
          "sourceType": "log",
          "title": "現在ある Web 応答ログ",
          "body": "2026-10-23T13:15:00Z user=ao request_id=REQ-902 method=POST path=/api/export status=200 response_kind=job_metadata\nこの応答には処理番号などが含まれ、ファイル本体や生成件数の記録ではない。"
        },
        {
          "id": "m-d2-format",
          "sourceType": "document",
          "title": "このサービスのログ仕様",
          "body": "Webログ：要求番号と応答状態を記録。アプリ監査ログ：同じ request_id と、dataset・生成した records 件数・artifact を記録。ブラウザの保存完了は別の確認が必要。"
        }
      ],
      "answer": {
        "choiceId": "m-d2-audit"
      },
      "answerExplanation": "実際の生成件数を知るには、同じ REQ-902 のアプリ監査ログを依頼します。Webの200応答だけでは件数は分かりません。会社全体の全ログを集めるより、対象番号と確認したい欄を指定した方が、この問いに直接答えられます。",
      "hints": [
        "知りたいことは「生成した件数」です。どのログにその欄があるか仕様を確認します。",
        "アプリ監査ログの records が件数です。同じ request_id で照合できます。",
        "REQ-902 のアプリ監査ログを、dataset・records・artifact が分かる形で依頼します。"
      ],
      "solution": "「REQ-902 のアプリ監査ログを依頼し、dataset・records・artifact を確認する。」を選びます。",
      "bridge": {
        "tool": "照会",
        "how": "SOCroom の「照会」で、対象の番号と確認目的を添えて追加資料を依頼するときに使います。"
      },
      "flag": "EASY{MID_TARGETED_QUERY}",
      "choices": [
        {
          "id": "m-d2-status",
          "label": "200応答があるので、件数の確認は不要とする。",
          "feedback": "成功応答の有無と、生成した件数は別の問いです。このWebログには件数がありません。"
        },
        {
          "id": "m-d2-audit",
          "label": "REQ-902 のアプリ監査ログを依頼し、dataset・records・artifact を確認する。",
          "feedback": "知りたい件数が記録される資料を、照合できる要求番号付きで指定しています。"
        },
        {
          "id": "m-d2-dns",
          "label": "全端末のDNSログを集め、問い合わせた名前の数を数える。",
          "feedback": "DNSの問い合わせ数では、REQ-902 でアプリが生成したデータ件数は分かりません。"
        }
      ]
    },
    {
      "id": "m-d3",
      "level": "intermediate",
      "chapter": "respond",
      "title": "拒否された要求を報告する",
      "skill": "確認した拒否と未確認の別操作を分ける",
      "minutes": 5,
      "brief": "管理画面への要求を3件調べました。「今回拒否された」と「過去も含めて何も起きていない」は同じではありません。短い報告にまとめます。",
      "learn": [
        "今回の対象は user=hina が行った3つの要求だけです。permission=denied と status=403 により、この3要求が拒否されたことを確認しました。",
        "報告の事実には対象のアカウント・要求番号・結果を含めます。未確認事項には、今回調べていない時間や操作を残します。",
        "この演習の手順では、操作の意図が不明なため、拒否ログを保存したうえでアカウント管理担当へ心当たりの確認を依頼します。"
      ],
      "example": {
        "title": "別の資料で練習",
        "text": "「印刷要求 P-1 は拒否された。別の要求は未調査。対象ログを保存し担当者に操作の意図を確認する」のように、事実・限界・次の行動を分けて書けます。"
      },
      "task": "今回の3要求について、「確認した事実」「確認の限界」「次の行動」を1つずつ選んでください。",
      "kind": "report",
      "sourceLabel": "今回の調査で提供された架空の記録・資料",
      "rows": [
        {
          "id": "m-d3-logs",
          "sourceType": "log",
          "title": "調べた3要求",
          "body": "2026-10-23 UTC 13:30:00 user=hina request_id=ADM-51 path=/admin/users permission=denied status=403\n13:30:05 user=hina request_id=ADM-52 path=/admin/settings permission=denied status=403\n13:30:10 user=hina request_id=ADM-53 path=/admin/export permission=denied status=403"
        },
        {
          "id": "m-d3-scope",
          "sourceType": "document",
          "title": "今回の確認範囲と手順",
          "body": "確認対象は上記3要求。ほかの時間・要求・アカウントは未調査。操作の意図は未確認なので、拒否ログを保存し、アカウント管理担当へ今回の操作の心当たりを確認する。"
        }
      ],
      "answer": {
        "parts": {
          "fact": "m-d3-fact-ok",
          "limit": "m-d3-limit-ok",
          "next": "m-d3-next-ok"
        }
      },
      "answerExplanation": "事実は hina の ADM-51〜53 が拒否されたこと、限界は他の要求や時間が未調査であること、次の行動は対象ログを保存し操作の心当たりを確認することです。今回の拒否から、過去を含む安全や本人の意図まで言い切りません。",
      "hints": [
        "「今回の3要求」と明記された事実を選びます。",
        "調べていない操作や時間を「未確認」と残す文を選びます。",
        "3要求の拒否、他の要求は未調査、保存して担当者へ心当たりを確認、の3文です。"
      ],
      "solution": "事実は「hina の ADM-51〜53 は拒否」、限界は「他の要求・時間は未調査」、次の行動は「ログ保存と心当たりの確認」を選びます。",
      "bridge": {
        "tool": "対応記録",
        "how": "SOCroom の「対応記録」で、確認した事実・判断の理由と、未確認事項・引き継ぎを分ける練習です。"
      },
      "flag": "EASY{MID_DENIAL_REPORT}",
      "choices": [
        {
          "id": "m-d3-fact-ok",
          "group": "fact",
          "label": "hina の ADM-51〜53 は、権限確認で拒否され403応答だった。",
          "feedback": "対象番号と、ログで確認した結果を示しています。"
        },
        {
          "id": "m-d3-fact-no",
          "group": "fact",
          "label": "hina は管理者情報の持ち出しに成功した。",
          "feedback": "提示された3要求は拒否です。持ち出し成功の証拠はありません。"
        },
        {
          "id": "m-d3-limit-ok",
          "group": "limit",
          "label": "ほかの要求・時間・アカウントは調べておらず、その結果は未確認。",
          "feedback": "調査した範囲の外を、未確認として残しています。"
        },
        {
          "id": "m-d3-limit-no",
          "group": "limit",
          "label": "3要求が拒否されたため、過去も含めて不正なアクセスは一度もない。",
          "feedback": "今回の3要求から、未調査の時間や要求の結果までは分かりません。"
        },
        {
          "id": "m-d3-next-ok",
          "group": "next",
          "label": "ADM-51〜53 のログを保存し、アカウント管理担当へ今回の操作の心当たりを確認する。",
          "feedback": "示された手順に沿って、証拠と確認対象を指定しています。"
        },
        {
          "id": "m-d3-next-no",
          "group": "next",
          "label": "拒否できたので記録を消し、未確認事項は残さず終了する。",
          "feedback": "手順ではログ保存と心当たりの確認が必要です。拒否できたことだけで意図は分かりません。"
        }
      ]
    },
    {
      "id": "m-d4",
      "level": "intermediate",
      "chapter": "respond",
      "title": "心当たりのない成功を引き継ぐ",
      "skill": "成功ログと本人の否認を過不足なく報告する",
      "minutes": 5,
      "brief": "今度は認証完了の記録があり、本人は心当たりがないと答えています。確定していない犯人像を加えず、確認が必要な状態として引き継ぎます。",
      "learn": [
        "auth_id は認証の番号、session は認証後の操作をまとめる番号です。session_created は、このサービスがセッションを作成した記録です。",
        "確認通知の承認は factor=push result=approved に記録されています。誰がどのような事情で承認したかまでは、このログだけでは決まりません。",
        "本人の回答がログの見た目と合わない場合、どちらかを勝手に捨てません。「成功の記録がある」「本人は心当たりなしと回答」を並べます。",
        "この演習の手順では、不正利用の疑いとして認証管理担当に引き継ぎ、該当セッションの操作と認証の経緯の確認を依頼します。"
      ],
      "example": {
        "title": "別の資料で練習",
        "text": "ファイル変更ログがあり、担当者が「変更していない」と答えたときは、記録と回答を併記して調査します。それだけで特定の人物の不正と断定しません。"
      },
      "task": "提示された証拠と手順に基づき、事実・限界・次の行動を1つずつ選んでください。",
      "kind": "report",
      "sourceLabel": "今回の調査で提供された架空の記録・資料",
      "rows": [
        {
          "id": "m-d4-logs",
          "sourceType": "log",
          "title": "認証とセッションの記録",
          "body": "2026-10-23 UTC 13:40:00 user=yui auth_id=AUTH-95 factor=push result=approved\n13:40:01 user=yui auth_id=AUTH-95 event=auth_finished result=success\n13:40:02 user=yui auth_id=AUTH-95 session=S-995 event=session_created"
        },
        {
          "id": "m-d4-reply",
          "sourceType": "reply",
          "title": "yui への確認結果",
          "body": "登録済みの社内連絡先で13:45に確認。「13:40のログインにも、確認通知の承認にも心当たりがありません」と回答。"
        },
        {
          "id": "m-d4-rule",
          "sourceType": "document",
          "title": "今回の調査範囲と対応手順",
          "body": "S-995 の操作内容は未調査。認証成功と本人の心当たりなしが揃った場合は、不正利用の疑いとして記録と回答を保存し、認証管理担当へ認証経緯と該当セッションの操作確認を依頼する。"
        }
      ],
      "answer": {
        "parts": {
          "fact": "m-d4-fact-ok",
          "limit": "m-d4-limit-ok",
          "next": "m-d4-next-ok"
        }
      },
      "answerExplanation": "AUTH-95 は成功し S-995 が作成された記録があります。一方、yui は認証と承認に心当たりがないと回答しています。操作した人とセッション内の行動は未確認なので、不正利用の疑いとして証拠を添えて担当へ引き継ぎます。",
      "hints": [
        "成功記録と本人の回答の両方を含む事実の文を選びます。",
        "誰が操作したかや、S-995 で何をしたかはまだ分かっていません。",
        "両方の証拠を保存し、不正利用の疑いとして認証管理担当に確認を依頼します。"
      ],
      "solution": "成功と本人の心当たりなしを併記し、操作した人・内容は未確認とし、証拠を添えて認証管理担当に引き継ぐ3文を選びます。",
      "bridge": {
        "tool": "対応記録",
        "how": "SOCroom の「対応記録」で、ログと照会結果を合わせ、不正利用の疑いと次に確かめる対象を伝える練習です。"
      },
      "flag": "EASY{MID_UNRECOGNIZED_SUCCESS}",
      "choices": [
        {
          "id": "m-d4-fact-ok",
          "group": "fact",
          "label": "AUTH-95 の認証成功と S-995 作成が記録され、yui は心当たりがないと回答した。",
          "feedback": "ログと本人の回答を、どちらも事実として残しています。"
        },
        {
          "id": "m-d4-fact-no",
          "group": "fact",
          "label": "確認通知が承認されているので、yui 本人の正規操作だと確定した。",
          "feedback": "承認の記録はありますが、操作した人や事情は未確認です。本人の回答も無視できません。"
        },
        {
          "id": "m-d4-limit-ok",
          "group": "limit",
          "label": "実際に認証を操作した人と、S-995 で行われた操作は未確認。",
          "feedback": "この資料だけで分からない範囲を具体的に残しています。"
        },
        {
          "id": "m-d4-limit-no",
          "group": "limit",
          "label": "外部の攻撃者がデータを盗んだことまで証明された。",
          "feedback": "操作した人も、S-995 の操作内容もまだ確認していません。"
        },
        {
          "id": "m-d4-next-ok",
          "group": "next",
          "label": "記録と回答を保存し、不正利用の疑いとして認証管理担当へ認証経緯と S-995 の操作確認を依頼する。",
          "feedback": "提示された手順に沿い、疑いと確認対象を具体的に伝えています。"
        },
        {
          "id": "m-d4-next-no",
          "group": "next",
          "label": "本人が忘れているだけと決め、成功ログも回答も残さず終了する。",
          "feedback": "忘れているという証拠はなく、今回の手順でも調査が必要な組み合わせです。"
        }
      ]
    },
    {
      "id": "m-g1",
      "level": "intermediate",
      "chapter": "graduate",
      "title": "卒業調査：書き出されたのは何件？",
      "skill": "要求の照合から、承認範囲との比較と引き継ぎまでをつなぐ",
      "minutes": 10,
      "brief": "職員連絡先の書き出しが検知されました。担当者は「少量の確認作業の予定だった」と話しています。Webの応答だけで判断せず、実際の生成件数と承認された上限を確かめます。",
      "learn": [
        "対象は user=kei の request_id=REQ-880 です。このサービスでは、同じ要求番号をWebログとアプリ監査ログの両方に記録します。時刻はすべて UTC です。",
        "dataset=staff_directory は職員連絡先の一覧。records は生成したデータの件数、artifact は生成されたファイル名です。すべて架空の教材データです。",
        "このサービスの response_kind=job_metadata は、生成したファイルの名前などの処理情報を返す応答で、ファイル本体の受取完了を示しません。",
        "調査は4段階です。関係するログを集める→実際と承認を照合する→分かる範囲で判断する→次の確認を引き継ぐ、の順に進めます。"
      ],
      "example": {
        "title": "別の書き出しを調べる例",
        "text": "REQ-DEMO のWeb要求とアプリ監査ログをつなぐと、会議室一覧20件の生成が分かった。承認票の上限30件以内なので、確認した生成件数は承認範囲に入る。ただし、その後の受け取りは別の確認。このように、処理内容・承認・確認できない範囲を分けます。"
      },
      "task": "4段階を進めて、REQ-880 の書き出しを調べてください。",
      "kind": "investigation",
      "sourceLabel": "卒業調査のログと資料",
      "rows": [],
      "answer": {},
      "answerExplanation": "REQ-880 では staff_directory の400件を生成し、処理情報の200応答を返した記録があります。提示された承認票 AP-880 は同じデータの50件以内なので、生成件数はその範囲を超えています。ブラウザでの受取や外部送信、ほかの承認の有無は未確認として担当へ引き継ぎます。",
      "hints": [
        "まず同じ request_id のログを3行集め、アプリが記録した records を読みます。",
        "実行の400件と、AP-880 の上限50件を比べます。HTTPの200応答はこのサービスでは処理情報の応答です。",
        "確認した承認上限を超える生成が記録されたことと、受取や外部送信などの未確認事項を分けて報告します。"
      ],
      "solution": "REQ-880 の要求・アプリ生成・Web応答の3行を集め、生成記録と AP-880 を照合します。400件は承認上限50件を超えると判断し、受取と外部送信などは未確認として証拠とともに担当へ引き継ぎます。",
      "bridge": {
        "tool": "ログ検索・資産・資料・照会・対応記録",
        "how": "SOCroom で行う、関係する要求の検索、承認範囲の照合、追加照会、根拠と未確認事項の報告を、ひと続きに練習しています。"
      },
      "flag": "EASY{MID_READY_FOR_SOCROOM}",
      "steps": [
        {
          "id": "m-g1-find",
          "title": "1 / 4 同じ要求の記録を集める",
          "task": "対象の request_id=REQ-880 に関係する「Web要求・アプリ生成・Web応答」を3行選んでください。同じ user だけでまとめないようにします。",
          "kind": "rows",
          "rows": [
            {
              "id": "m-g1-request",
              "time": "14:10:00",
              "raw": "2026-10-23T14:10:00Z component=web user=kei session=S-880 request_id=REQ-880 event=request_received method=POST path=/api/export",
              "note": "書き出し要求を受付。"
            },
            {
              "id": "m-g1-other-request",
              "time": "14:10:00",
              "raw": "2026-10-23T14:10:00Z component=web user=kei session=S-880 request_id=REQ-881 event=request_received method=GET path=/health",
              "note": "同じ利用者とセッションからの状態確認要求。"
            },
            {
              "id": "m-g1-generated",
              "time": "14:10:01",
              "raw": "2026-10-23T14:10:01Z component=app user=kei request_id=REQ-880 job=EX-90 event=export_completed dataset=staff_directory records=400 artifact=directory-90.csv",
              "note": "職員連絡先400件のファイル生成が完了。"
            },
            {
              "id": "m-g1-other-generated",
              "time": "14:10:01",
              "raw": "2026-10-23T14:10:01Z component=app user=kei request_id=REQ-879 job=EX-89 event=export_completed dataset=public_agenda records=50 artifact=agenda-89.csv",
              "note": "別要求で公開行事予定を50件生成。"
            },
            {
              "id": "m-g1-response",
              "time": "14:10:02",
              "raw": "2026-10-23T14:10:02Z component=web user=kei session=S-880 request_id=REQ-880 event=response_sent status=200 response_kind=job_metadata bytes=128",
              "note": "128バイトの処理情報を応答。ファイル本体の受取完了ではない。"
            },
            {
              "id": "m-g1-other-response",
              "time": "14:10:02",
              "raw": "2026-10-23T14:10:02Z component=web user=kei session=S-880 request_id=REQ-881 event=response_sent status=200 response_kind=health_status bytes=16",
              "note": "別要求のサービス状態確認への応答。"
            }
          ],
          "answer": {
            "rowIds": [
              "m-g1-request",
              "m-g1-generated",
              "m-g1-response"
            ]
          },
          "answerExplanation": "REQ-880 は14:10:00の書き出し要求、14:10:01の400件生成、14:10:02の処理情報の応答です。同じ kei・S-880 でも REQ-881 は別要求であり、50件を生成した REQ-879 も対象外です。",
          "hints": [
            "request_id の値全体を照合します。同じアカウントやセッションでも複数の要求があります。",
            "REQ-880 の3行には、要求、records=400 の生成、response_kind=job_metadata の応答があります。",
            "REQ-880 の14:10:00、14:10:01、14:10:02 の3行を選びます。"
          ],
          "solution": "REQ-880 のWeb要求、staff_directory 400件を生成したアプリ記録、処理情報を返したWeb応答を選びます。"
        },
        {
          "id": "m-g1-evidence",
          "title": "2 / 4 生成した件数と承認上限を比べる",
          "task": "「REQ-880 で生成されたデータの件数は、今回提示された承認票の上限を超える」を裏付ける2枚を選んでください。",
          "kind": "evidence",
          "rows": [
            {
              "id": "m-g1-evidence-actual",
              "sourceType": "log",
              "title": "REQ-880 のアプリ生成記録",
              "body": "2026-10-23T14:10:01Z user=kei request_id=REQ-880 job=EX-90 event=export_completed dataset=staff_directory records=400 artifact=directory-90.csv\n職員連絡先400件のファイルを生成。前の段階で選んだ実際の記録。"
            },
            {
              "id": "m-g1-evidence-approval",
              "sourceType": "document",
              "title": "今回の承認票 AP-880",
              "body": "承認済み。実施日：2026-10-23 UTC 14:00〜14:30。対象アカウント：kei。対象：staff_directory。目的：項目表示の確認。許可する書き出しは1回あたり50件以内。現時点で提示されている今回の承認票はこの1枚。"
            },
            {
              "id": "m-g1-evidence-old",
              "sourceType": "document",
              "title": "前月の承認票 AP-810",
              "body": "実施日：2026-09-20 UTC 09:00〜10:00。対象アカウント：kei。staff_directory の400件を移行確認のため書き出すことを許可。この承認は当日のみ有効。"
            },
            {
              "id": "m-g1-evidence-web",
              "sourceType": "log",
              "title": "REQ-880 の Web 応答",
              "body": "2026-10-23T14:10:02Z request_id=REQ-880 status=200 response_kind=job_metadata bytes=128\n処理情報に対する成功応答。生成したデータ件数や業務上の承認を表す欄ではない。"
            }
          ],
          "answer": {
            "rowIds": [
              "m-g1-evidence-actual",
              "m-g1-evidence-approval"
            ]
          },
          "answerExplanation": "実際のアプリ記録では400件、今回の AP-880 の上限は50件です。対象・日付・アカウントを合わせたうえで件数が上限を超えていると説明できます。前月のみ有効な400件の承認を今回へ流用しません。",
          "hints": [
            "実際の生成件数を示すものと、今回有効な許可範囲を示すものが必要です。",
            "records=400 のアプリ記録と、2026-10-23 の50件以内の承認票を比べます。",
            "「REQ-880 のアプリ生成記録」と「今回の承認票 AP-880」を選びます。"
          ],
          "solution": "「REQ-880 のアプリ生成記録」と「今回の承認票 AP-880」の2枚を選びます。前月の承認は今回の作業には適用できません。"
        },
        {
          "id": "m-g1-judge",
          "title": "3 / 4 分かったことだけで判断する",
          "task": "これまでの記録で支えられる判断を選んでください。生成・HTTP応答・受け取り・外部送信を混同しないようにします。",
          "kind": "choice",
          "rows": [
            {
              "id": "m-g1-judge-facts",
              "sourceType": "document",
              "title": "照合して分かったこと",
              "body": "REQ-880 は2026-10-23 UTC 14:10に、kei で staff_directory 400件を生成した記録。AP-880 は同日の同じ対象・アカウントについて50件以内を許可している。"
            },
            {
              "id": "m-g1-judge-response",
              "sourceType": "document",
              "title": "このサービスの応答仕様",
              "body": "response_kind=job_metadata の200応答は、生成ファイル名などの処理情報を返すもの。今回のWebログには、ファイル本体をダウンロードした記録は含まれない。"
            },
            {
              "id": "m-g1-judge-limits",
              "sourceType": "document",
              "title": "まだ確認していないこと",
              "body": "ブラウザがファイルを受け取ったか、外部へ送信したか、AP-880 以外に今回有効な承認があるか、実際の操作の経緯は未確認。"
            }
          ],
          "choices": [
            {
              "id": "m-g1-judge-outside",
              "label": "提示された承認上限50件を超える400件の生成が記録されている。受取・外部送信・追加承認などは未確認。",
              "feedback": "生成件数と今回の承認を比較し、未確認の範囲も残しています。"
            },
            {
              "id": "m-g1-judge-leak",
              "label": "200応答があるので、職員連絡先400件が外部へ流出したと確定する。",
              "feedback": "今回の200は処理情報の応答です。ファイル本体の受取や外部送信の記録は提供されていません。"
            },
            {
              "id": "m-g1-judge-safe",
              "label": "前月に400件の承認があるので、今回の400件も承認済みと判断する。",
              "feedback": "前月の承認は当日のみ有効です。今回有効な AP-880 は50件以内であり、別の承認の有無は未確認です。"
            }
          ],
          "answer": {
            "choiceId": "m-g1-judge-outside"
          },
          "answerExplanation": "確認できた問題は、今回提示された承認上限50件に対して、400件生成されたと記録されている点です。追加承認の有無や実際の経緯は調査が必要です。処理情報の200応答だけで、ファイル受取や外部流出とは断定しません。",
          "hints": [
            "400件の生成という事実と、50件以内という承認範囲を使います。",
            "200応答の中身は処理情報です。外部送信や追加承認はまだ確認されていません。",
            "承認上限を超える生成が記録され、受取・外部送信・追加承認は未確認、とする選択肢です。"
          ],
          "solution": "「提示された承認上限50件を超える400件の生成が記録されている。受取・外部送信・追加承認などは未確認。」を選びます。"
        },
        {
          "id": "m-g1-report",
          "title": "4 / 4 証拠と未確認事項を引き継ぐ",
          "task": "今回の調査報告として、「確認した事実」「確認の限界」「次の行動」を1つずつ選んでください。",
          "kind": "report",
          "rows": [
            {
              "id": "m-g1-report-summary",
              "sourceType": "document",
              "title": "引き継ぐ調査結果",
              "body": "対象：2026-10-23 UTC 14:10、kei の REQ-880、生成ジョブ EX-90。staff_directory 400件を directory-90.csv として生成した記録。今回提示された承認票 AP-880 の上限は50件。Web応答は処理情報。"
            },
            {
              "id": "m-g1-report-rule",
              "sourceType": "document",
              "title": "この演習の対応手順",
              "body": "提示された承認範囲と実行記録が異なる場合、関連ログと承認票を保存し、業務責任者とサービス担当へ対象番号・差異を共有する。追加承認と作業の経緯、および対象成果物のダウンロード・送信記録を確認する。未確認の流出を断定しない。"
            }
          ],
          "choices": [
            {
              "id": "m-g1-report-fact-ok",
              "group": "fact",
              "label": "REQ-880 は職員連絡先400件を生成した記録があり、提示された AP-880 の上限50件を超える。",
              "feedback": "要求番号・実行内容・照合した承認の差異を具体的に示しています。"
            },
            {
              "id": "m-g1-report-fact-no",
              "group": "fact",
              "label": "kei が職員連絡先400件を外部へ不正送信したことが確定した。",
              "feedback": "外部送信の記録や、実際に操作した人の確認はまだありません。生成の事実から広げすぎています。"
            },
            {
              "id": "m-g1-report-limit-ok",
              "group": "limit",
              "label": "ファイルの受取・外部送信・追加承認の有無と、実際の操作の経緯は未確認。",
              "feedback": "次の担当者が調べるべき範囲を、確認済みの生成と分けています。"
            },
            {
              "id": "m-g1-report-limit-no",
              "group": "limit",
              "label": "200応答があるので、未確認事項は残っていない。",
              "feedback": "今回の200は処理情報の応答です。受取や送信、業務上の承認は別の確認です。"
            },
            {
              "id": "m-g1-report-next-ok",
              "group": "next",
              "label": "REQ-880 のログと AP-880 を保存して担当へ差異を共有し、追加承認・経緯・directory-90.csv の受取と送信記録を確認する。",
              "feedback": "手順に沿い、証拠・照会先・確認対象を具体的にしています。"
            },
            {
              "id": "m-g1-report-next-no",
              "group": "next",
              "label": "前月の承認票を今回にも使い、REQ-880 の記録を消して終了する。",
              "feedback": "前月の承認は今回に適用できません。今回の差異と未確認事項は、証拠を残して引き継ぐ必要があります。"
            }
          ],
          "answer": {
            "parts": {
              "fact": "m-g1-report-fact-ok",
              "limit": "m-g1-report-limit-ok",
              "next": "m-g1-report-next-ok"
            }
          },
          "answerExplanation": "事実は400件の生成と50件上限の差異、限界は受取・送信・追加承認・経緯が未確認であることです。証拠を保存し、対象の REQ-880 と directory-90.csv を指定して担当へ引き継ぎます。部分的なログを集める練習から、根拠のある調査報告までつなげられました。",
          "hints": [
            "事実の文には、REQ-880 の400件と AP-880 の上限50件を含めます。",
            "限界には、受取・外部送信・追加承認・経緯がまだ分からないと残します。",
            "証拠を保存し、差異を担当に共有して、対象成果物について追加確認する行動を選びます。"
          ],
          "solution": "400件と50件上限の差異を事実として選び、受取・送信などは未確認とし、REQ-880 と AP-880 を保存して担当へ具体的な追加確認を依頼する3文を選びます。"
        }
      ]
    },
    {
      "id": "a-r1",
      "level": "advanced",
      "chapter": "read",
      "title": "日付をまたぐ時差を直す",
      "skill": "UTC と日本時間を同じ基準にそろえる",
      "minutes": 6,
      "brief": "時刻の書き方が違うと、同じ出来事が別の日に見えることがあります。まず 1 行だけ UTC に直します。",
      "learn": [
        "Z は UTC、+09:00 は UTC より 9 時間進んだ時刻です。日本時間も +09:00 です。",
        "+09:00 の日時から 9 時間引くと UTC になります。午前 9 時より前なら、日付も前日になります。",
        "時差を直すことと機器の時計のずれを補正することは別です。この問題の時計にはずれがないものとします。"
      ],
      "example": {
        "title": "別の値で考えてみる",
        "text": "2026-10-18T02:40:00+09:00 は、9 時間引くと 2026-10-17T17:40:00Z です。日付も 1 日戻ります。"
      },
      "task": "この記録の時刻を UTC に直し、日付も含めて入力してください。形式は YYYY-MM-DDTHH:MM:SSZ、または YYYY-MM-DD HH:MM:SS UTC です。",
      "kind": "text",
      "sourceLabel": "調べる記録と資料",
      "rows": [
        {
          "id": "a-r1-log",
          "sourceType": "log",
          "raw": "2026-10-22T00:08:30+09:00 host=archive-api-02 event=key_created key_id=K-81"
        }
      ],
      "answer": {
        "values": [
          "2026-10-21T15:08:30Z",
          "2026-10-21 15:08:30 UTC",
          "2026-10-21 15:08:30Z",
          "2026-10-21T15:08:30+00:00"
        ]
      },
      "answerExplanation": "00:08:30 から 9 時間引くと、前日の 15:08:30 UTC です。正しい日時は 2026-10-21T15:08:30Z になります。",
      "hints": [
        "末尾の +09:00 を確認します。UTC に直すときは 9 時間引きます。",
        "00:08:30 は午前 9 時より前なので、日付も 10 月 21 日に戻ります。",
        "10 月 21 日の 15:08:30 UTC を、日付つきで入力します。"
      ],
      "solution": "2026-10-21T15:08:30Z と入力します。時刻だけでなく前日になった日付もそろえます。",
      "bridge": {
        "tool": "時系列",
        "how": "別のログを並べる前に、時刻の基準をそろえて記録します。"
      },
      "flag": "EASY{ADVANCED_R1}"
    },
    {
      "id": "a-r2",
      "level": "advanced",
      "chapter": "read",
      "title": "発生時刻と到着時刻を分ける",
      "skill": "出来事の順序に使う時刻の欄を選ぶ",
      "minutes": 6,
      "brief": "ログが集まるまでに数分かかることがあります。画面にある二つの時刻を同じ意味で読まない練習です。",
      "learn": [
        "event_time は出来事の発生時刻、ingest_time は収集システムがその記録を受け取った時刻です。",
        "転送待ちがあると到着は遅くなります。到着の順序だけでは出来事の順序を決められません。",
        "この課題の時計は同期済みです。出来事の発生順を調べるための欄を選びます。"
      ],
      "example": {
        "title": "別の値で考えてみる",
        "text": "event_time=07:02:00Z、ingest_time=07:06:00Z なら、07:02 に起きた出来事が 4 分後に収集されました。"
      },
      "task": "出来事が起きた時刻を時系列に記載します。使う欄を 1 つ選んでください。",
      "kind": "token",
      "sourceLabel": "調べる記録と資料",
      "rows": [
        {
          "id": "a-r2-log",
          "sourceType": "log",
          "raw": "event_time=2026-10-22T11:14:20Z ingest_time=2026-10-22T11:19:05Z event=group_member_added actor_id=acct-307"
        }
      ],
      "answer": {
        "tokenId": "a-r2-event-time"
      },
      "answerExplanation": "発生時刻は event_time の 11:14:20 UTC です。ingest_time の 11:19:05 は収集側に届いた時刻で、操作が起きた時刻ではありません。",
      "hints": [
        "出来事そのものと、記録が収集側に届くことを分けます。",
        "発生時刻を表すキーは event_time です。",
        "event_time=2026-10-22T11:14:20Z を選びます。"
      ],
      "solution": "event_time の欄を選びます。時系列には発生時刻を使い、収集遅延は補足情報として扱います。",
      "bridge": {
        "tool": "時系列",
        "how": "発生と収集の時刻を混同せず、記録を並べます。"
      },
      "flag": "EASY{ADVANCED_R2}",
      "tokens": [
        {
          "id": "a-r2-event-time",
          "label": "event_time=2026-10-22T11:14:20Z",
          "meaning": "記録元で出来事が発生した時刻。"
        },
        {
          "id": "a-r2-ingest-time",
          "label": "ingest_time=2026-10-22T11:19:05Z",
          "meaning": "収集システムに到着した時刻。"
        },
        {
          "id": "a-r2-event",
          "label": "event=group_member_added",
          "meaning": "グループへのメンバー追加。"
        },
        {
          "id": "a-r2-actor",
          "label": "actor_id=acct-307",
          "meaning": "操作で使われたアカウントの識別子。"
        }
      ]
    },
    {
      "id": "a-r3",
      "level": "advanced",
      "chapter": "read",
      "title": "親プロセスの識別子を読む",
      "skill": "一時的な番号と追跡用 ID を区別する",
      "minutes": 6,
      "brief": "同じ名前のプログラムも何度も起動します。「どの起動から生まれたか」を読む練習です。",
      "learn": [
        "プロセスは実行中のプログラム一つひとつです。parent は、そのプロセスを起動した親を指します。",
        "pid は短い番号で、終了後に再利用されることがあります。この教材の process_guid は、同じ端末内の起動を区別する追跡用 ID です。",
        "parent_process_guid は親の process_guid を示します。照合するときは host と起動区間も確認します。"
      ],
      "example": {
        "title": "別の値で考えてみる",
        "text": "host=pc-demo process_guid=P-9 parent_process_guid=P-4 なら、P-9 の親は同じ端末の P-4 です。pid=80 といった短い番号だけで過去の記録につなぎません。"
      },
      "task": "この子プロセスを起動した「親の追跡用 ID」が入っている欄を選んでください。",
      "kind": "token",
      "sourceLabel": "調べる記録と資料",
      "rows": [
        {
          "id": "a-r3-log",
          "sourceType": "log",
          "raw": "2026-10-22T12:03:10Z host=design-pc-04 process_guid=P-820 parent_process_guid=P-819 pid=388 parent_pid=260 image=report-viewer"
        }
      ],
      "answer": {
        "tokenId": "a-r3-parent-guid"
      },
      "answerExplanation": "parent_process_guid=P-819 が親の追跡用 ID です。P-820 は子自身、parent_pid=260 は再利用される可能性のある短い番号です。",
      "hints": [
        "parent が付いている欄は、子ではなく親を表します。",
        "parent_pid と parent_process_guid のうち、追跡用 ID は guid の付く方です。",
        "parent_process_guid=P-819 を選びます。"
      ],
      "solution": "parent_process_guid=P-819 を選びます。次の調査では同じ host の process_guid=P-819 を探します。",
      "bridge": {
        "tool": "ログ検索",
        "how": "親と子の ID を読み分け、プログラムのつながりを調べます。"
      },
      "flag": "EASY{ADVANCED_R3}",
      "tokens": [
        {
          "id": "a-r3-child-guid",
          "label": "process_guid=P-820",
          "meaning": "子プロセス自身の追跡用 ID。"
        },
        {
          "id": "a-r3-parent-guid",
          "label": "parent_process_guid=P-819",
          "meaning": "親プロセスの追跡用 ID。"
        },
        {
          "id": "a-r3-pid",
          "label": "pid=388",
          "meaning": "子プロセスの短い番号。"
        },
        {
          "id": "a-r3-parent-pid",
          "label": "parent_pid=260",
          "meaning": "親プロセスの短い番号。"
        }
      ]
    },
    {
      "id": "a-r4",
      "level": "advanced",
      "chapter": "read",
      "title": "表示名より ID を照合する",
      "skill": "同名アカウントを識別子で分ける",
      "minutes": 6,
      "brief": "表示名が同じでも、別のアカウントのことがあります。名前だけで操作した対象を決めない練習です。",
      "learn": [
        "display_name は画面上の名前で、重複や変更があり得ます。actor_id は操作に使われたアカウントの識別子です。",
        "この教材では台帳とログの actor_id が一致すれば同じアカウントを指します。ただし、実際に使った人までは ID だけでは断定できません。"
      ],
      "example": {
        "title": "別の値で考えてみる",
        "text": "表示名「連携処理」が同じでも、svc-150 と svc-151 は別のアカウントです。ログが svc-151 なら svc-151 の台帳を参照します。"
      },
      "task": "今回の操作で使われたアカウントとして、台帳と照合して確実に言える説明を選んでください。",
      "kind": "choice",
      "sourceLabel": "調べる記録と資料",
      "rows": [
        {
          "id": "a-r4-log",
          "sourceType": "log",
          "raw": "2026-10-22T12:40:00Z actor_id=svc-622 display_name=定期連携 event=permission_changed result=success"
        },
        {
          "id": "a-r4-register",
          "sourceType": "document",
          "title": "アカウント台帳",
          "body": "svc-621：表示名「定期連携」。勤怠システム連携用。\nsvc-622：表示名「定期連携」。研究データ集計用。\nいずれも自動処理用で、人の名前ではありません。"
        }
      ],
      "answer": {
        "choiceId": "a-r4-match"
      },
      "answerExplanation": "svc-622 は研究データ集計用アカウントです。表示名だけでは勤怠連携と区別できません。操作した人や正当性は別途確認が必要です。",
      "hints": [
        "二つの表示名は同じです。",
        "ログの actor_id=svc-622 と同じ ID を台帳で探します。",
        "研究データ集計用アカウントの利用までは分かりますが、人までは分かりません。"
      ],
      "solution": "「研究データ集計用の svc-622 が使われた。実行した人や正当性は未確認」を選びます。",
      "bridge": {
        "tool": "資産・資料",
        "how": "表示名だけに頼らず、台帳の ID と突き合わせて対象を絞ります。"
      },
      "flag": "EASY{ADVANCED_R4}",
      "choices": [
        {
          "id": "a-r4-payroll",
          "label": "勤怠連携の担当者本人が操作した",
          "feedback": "勤怠用の ID は svc-621 です。さらに、アカウントから人を断定することはできません。"
        },
        {
          "id": "a-r4-match",
          "label": "研究データ集計用の svc-622 が使われた。実行した人や正当性は未確認",
          "feedback": "ID が一致します。アカウントの識別と、誰が使ったかの確認を分けています。"
        },
        {
          "id": "a-r4-legitimate",
          "label": "自動処理の名前なので、承認済み操作と確定する",
          "feedback": "自動処理用アカウントでも、今回の操作が承認されたことは名前から分かりません。"
        }
      ]
    },
    {
      "id": "a-f1",
      "level": "advanced",
      "chapter": "find",
      "title": "同じ追跡 ID の再試行を分ける",
      "skill": "要求 ID と試行番号を合わせて最後の経路を集める",
      "minutes": 6,
      "brief": "同じ要求が自動でやり直されると、追跡 ID が同じ記録も増えます。検索で集めたあと、試行番号で必要な経路を選びます。",
      "learn": [
        "trace_id は要求を追う ID、attempt は何回目の試行かを表す番号です。この教材では再試行しても trace_id は同じで、attempt が増えます。",
        "1 回目のアプリ応答が一時的なエラーだったため、同じ要求がもう一度実行されました。今回の最後の試行は attempt=2 です。",
        "まず trace_id=TR-602 を検索し、その中から attempt=2 の proxy・identity・app の経路だけを選びます。同じ trace_id だけでは試行を区別できません。",
        "status=503 はサービスが処理を受け付けられなかった応答、200 は成功応答です。これだけで侵害の有無や操作の正当性は決めません。"
      ],
      "example": {
        "title": "別の値で考えてみる",
        "text": "TR-100 の attempt=1 が 503、attempt=2 が 200 なら、最後の試行を追うときは TR-100 かつ attempt=2 の各システムの記録を集めます。別の TR-101 の attempt=2 は混ぜません。"
      },
      "task": "検索欄に trace_id=TR-602 と入力してください。その要求の最後の試行 attempt=2 に属する proxy・identity・app の 3 行だけを選んでください。",
      "kind": "filter",
      "sourceLabel": "調べる記録と資料",
      "rows": [
        {
          "id": "a-f1-first-proxy",
          "sourceType": "log",
          "raw": "2026-10-22T13:02:00Z system=proxy trace_id=TR-602 attempt=1 client_ip=192.0.2.62 event=request_received"
        },
        {
          "id": "a-f1-first-auth",
          "sourceType": "log",
          "raw": "2026-10-22T13:02:01Z system=identity trace_id=TR-602 attempt=1 actor_id=acct-820 result=success"
        },
        {
          "id": "a-f1-first-app",
          "sourceType": "log",
          "raw": "2026-10-22T13:02:02Z system=app trace_id=TR-602 attempt=1 event=report_open object_id=R-62 status=503"
        },
        {
          "id": "a-f1-other-auth",
          "sourceType": "log",
          "raw": "2026-10-22T13:02:10Z system=identity trace_id=TR-603 attempt=2 actor_id=acct-820 result=success"
        },
        {
          "id": "a-f1-proxy",
          "sourceType": "log",
          "raw": "2026-10-22T13:02:10Z system=proxy trace_id=TR-602 attempt=2 client_ip=192.0.2.62 event=request_received"
        },
        {
          "id": "a-f1-auth",
          "sourceType": "log",
          "raw": "2026-10-22T13:02:11Z system=identity trace_id=TR-602 attempt=2 actor_id=acct-820 result=success"
        },
        {
          "id": "a-f1-app",
          "sourceType": "log",
          "raw": "2026-10-22T13:02:12Z system=app trace_id=TR-602 attempt=2 event=report_open object_id=R-62 status=200"
        },
        {
          "id": "a-f1-other-app",
          "sourceType": "log",
          "raw": "2026-10-22T13:02:13Z system=app trace_id=TR-603 attempt=2 event=report_open object_id=R-62 status=200"
        }
      ],
      "answer": {
        "query": "trace_id=TR-602",
        "rowIds": [
          "a-f1-proxy",
          "a-f1-auth",
          "a-f1-app"
        ]
      },
      "answerExplanation": "検索結果には TR-602 の 1 回目と 2 回目の計 6 行が含まれます。今回選ぶのは attempt=2 の proxy・identity・app の 3 行です。TR-602 の attempt=1 と、別要求 TR-603 の attempt=2 は対象外です。",
      "hints": [
        "trace_id=TR-602 で検索しても 6 行残ります。まだ試行の区別が必要です。",
        "残った行の attempt を見て、1 回目の行を外します。",
        "TR-602 かつ attempt=2 の proxy、identity、app の 3 行を選びます。"
      ],
      "solution": "trace_id=TR-602 で検索し、attempt=2 の付いた proxy・identity・app の 3 行を選びます。同じ要求の再試行も区別して経路を集めます。",
      "bridge": {
        "tool": "ログ検索",
        "how": "ID で絞った検索結果に対し、試行番号や処理区間を追加で照合し、別の試行を混ぜず根拠を集めます。"
      },
      "flag": "EASY{ADVANCED_F1}"
    },
    {
      "id": "a-f2",
      "level": "advanced",
      "chapter": "find",
      "title": "親 ID と端末名を両方合わせる",
      "skill": "複数条件で直接の子プロセスを選ぶ",
      "minutes": 6,
      "brief": "ID が似ていても、別の端末の記録かもしれません。端末と親の ID を両方確認します。",
      "learn": [
        "条件は host=lab-pc-07 と parent_process_guid=P-701 の二つです。両方一致する行だけを選びます。",
        "直接の子は parent_process_guid が調べる親の ID に一致します。子のさらに子は含めません。",
        "表示された記録は同じ起動区間です。名前から善悪を判定する課題ではありません。"
      ],
      "example": {
        "title": "別の値で考えてみる",
        "text": "pc-demo の親 P-10 の直接の子なら、別の端末の P-10 や、親が P-11 の記録は含めません。"
      },
      "task": "host が lab-pc-07 で、parent_process_guid が P-701 の記録をすべて選んでください。直接の子だけが対象です。",
      "kind": "rows",
      "sourceLabel": "調べる記録と資料",
      "rows": [
        {
          "id": "a-f2-child-a",
          "sourceType": "log",
          "raw": "2026-10-22T13:10:01Z host=lab-pc-07 process_guid=P-702 parent_process_guid=P-701 image=export-helper"
        },
        {
          "id": "a-f2-other-host",
          "sourceType": "log",
          "raw": "2026-10-22T13:10:02Z host=lab-pc-08 process_guid=P-802 parent_process_guid=P-701 image=export-helper"
        },
        {
          "id": "a-f2-grandchild",
          "sourceType": "log",
          "raw": "2026-10-22T13:10:03Z host=lab-pc-07 process_guid=P-703 parent_process_guid=P-702 image=archive-helper"
        },
        {
          "id": "a-f2-child-b",
          "sourceType": "log",
          "raw": "2026-10-22T13:10:04Z host=lab-pc-07 process_guid=P-704 parent_process_guid=P-701 image=preview-helper"
        },
        {
          "id": "a-f2-unrelated",
          "sourceType": "log",
          "raw": "2026-10-22T13:10:05Z host=lab-pc-07 process_guid=P-705 parent_process_guid=P-699 image=sync-helper"
        }
      ],
      "answer": {
        "rowIds": [
          "a-f2-child-a",
          "a-f2-child-b"
        ]
      },
      "answerExplanation": "lab-pc-07 の P-702 と P-704 が P-701 の直接の子です。P-703 は P-702 の子なので含めません。lab-pc-08 も別の端末です。",
      "hints": [
        "まず host が lab-pc-07 ではない行を外します。",
        "残った行の parent_process_guid を確認します。",
        "P-702 と P-704 の 2 行だけが二つの条件を両方満たします。"
      ],
      "solution": "P-702 と P-704 の行を選びます。host と親 ID の両方を照合します。",
      "bridge": {
        "tool": "ログ検索",
        "how": "端末と ID を組み合わせ、別の出来事を混ぜないようにします。"
      },
      "flag": "EASY{ADVANCED_F2}"
    },
    {
      "id": "a-f3",
      "level": "advanced",
      "chapter": "find",
      "title": "件数の単位を決める",
      "skill": "操作数と対象数を分けて数える",
      "minutes": 6,
      "brief": "同じ資料への操作が繰り返されると、ログの行数は資料数より多くなります。対象の広がりを数えましょう。",
      "learn": [
        "object_id は資料を区別する ID です。同じ object_id が繰り返されても対象資料としては一つです。",
        "今回は share_created かつ result=success になった異なる object_id の数を数えます。失敗や閲覧操作は含めません。"
      ],
      "example": {
        "title": "別の値で考えてみる",
        "text": "F-10 の成功が 2 行、F-11 の成功が 1 行なら、成功ログは 3 行ですが対象資料は 2 件です。"
      },
      "task": "共有作成（share_created）が成功した「異なる object_id」は何件ですか。数字だけで入力してください。",
      "kind": "text",
      "sourceLabel": "調べる記録と資料",
      "rows": [
        {
          "id": "a-f3-a",
          "sourceType": "log",
          "raw": "2026-10-22T13:20:01Z event=share_created object_id=DOC-201 result=success"
        },
        {
          "id": "a-f3-b",
          "sourceType": "log",
          "raw": "2026-10-22T13:20:02Z event=share_created object_id=DOC-202 result=success"
        },
        {
          "id": "a-f3-a-repeat",
          "sourceType": "log",
          "raw": "2026-10-22T13:20:03Z event=share_created object_id=DOC-201 result=success"
        },
        {
          "id": "a-f3-fail",
          "sourceType": "log",
          "raw": "2026-10-22T13:20:04Z event=share_created object_id=DOC-203 result=failed"
        },
        {
          "id": "a-f3-c",
          "sourceType": "log",
          "raw": "2026-10-22T13:20:05Z event=share_created object_id=DOC-204 result=success"
        },
        {
          "id": "a-f3-read",
          "sourceType": "log",
          "raw": "2026-10-22T13:20:06Z event=object_read object_id=DOC-205 result=success"
        }
      ],
      "answer": {
        "values": [
          "3"
        ]
      },
      "answerExplanation": "条件に合う対象は DOC-201・DOC-202・DOC-204 の 3 件です。共有作成成功は 4 行ありますが、DOC-201 の重複を一つにまとめます。",
      "hints": [
        "share_created かつ success の行だけに絞ります。",
        "DOC-201 は 2 行あっても対象としては 1 件です。",
        "DOC-201、DOC-202、DOC-204 の三つを数えます。"
      ],
      "solution": "3 と入力します。操作ログの行数と対象の種類数を分けて報告します。",
      "bridge": {
        "tool": "対応記録",
        "how": "影響範囲を書くときに、何を数えた件数なのかを明確にします。"
      },
      "flag": "EASY{ADVANCED_F3}"
    },
    {
      "id": "a-f4",
      "level": "advanced",
      "chapter": "find",
      "title": "時間範囲の端を確かめる",
      "skill": "時差をそろえ、開始以上・終了未満で選ぶ",
      "minutes": 6,
      "brief": "調査区間の端は読み違いが起こりやすい部分です。時差と範囲の二つを確認します。",
      "learn": [
        "対象は 2026-10-22 の 10:00:00 UTC 以上、10:10:00 UTC 未満です。開始は含み、終了ちょうどは含みません。",
        "+09:00 は 9 時間引いて UTC に直します。操作は share_created だけが対象です。",
        "範囲を明記すると、担当交代時に同じ条件で再確認できます。"
      ],
      "example": {
        "title": "別の値で考えてみる",
        "text": "09:00 以上・09:05 未満なら、09:00:00 は対象、09:05:00 は対象外です。18:03+09:00 は 09:03Z なので対象です。"
      },
      "task": "2026-10-22 の 10:00:00 UTC 以上、10:10:00 UTC 未満に発生した share_created の行をすべて選んでください。",
      "kind": "rows",
      "sourceLabel": "調べる記録と資料",
      "rows": [
        {
          "id": "a-f4-before",
          "sourceType": "log",
          "raw": "2026-10-22T09:59:59Z event=share_created object_id=F-401"
        },
        {
          "id": "a-f4-start",
          "sourceType": "log",
          "raw": "2026-10-22T10:00:00Z event=share_created object_id=F-402"
        },
        {
          "id": "a-f4-jst",
          "sourceType": "log",
          "raw": "2026-10-22T19:04:00+09:00 event=share_created object_id=F-403"
        },
        {
          "id": "a-f4-last",
          "sourceType": "log",
          "raw": "2026-10-22T10:09:59Z event=share_created object_id=F-404"
        },
        {
          "id": "a-f4-end",
          "sourceType": "log",
          "raw": "2026-10-22T19:10:00+09:00 event=share_created object_id=F-405"
        },
        {
          "id": "a-f4-other",
          "sourceType": "log",
          "raw": "2026-10-22T10:05:00Z event=share_deleted object_id=F-406"
        }
      ],
      "answer": {
        "rowIds": [
          "a-f4-start",
          "a-f4-jst",
          "a-f4-last"
        ]
      },
      "answerExplanation": "10:00:00Z、19:04:00+09:00（10:04:00Z）、10:09:59Z が対象です。19:10:00+09:00 は終了ちょうどで含めず、share_deleted は操作が違います。",
      "hints": [
        "+09:00 の行は 9 時間引いて考えます。",
        "10:00:00 は含め、10:10:00 は含めません。",
        "F-402、F-403、F-404 の共有作成が対象です。"
      ],
      "solution": "F-402、F-403、F-404 の 3 行を選びます。時差を直し、操作の種類と区間を確認します。",
      "bridge": {
        "tool": "ログ検索",
        "how": "検索対象の範囲を明記し、対象漏れや重複を防ぎます。"
      },
      "flag": "EASY{ADVANCED_F4}"
    },
    {
      "id": "a-c1",
      "level": "advanced",
      "chapter": "connect",
      "title": "別の時差でも順序をそろえる",
      "skill": "複数システムの発生時刻を UTC で並べる",
      "minutes": 6,
      "brief": "並び順を決める前に、それぞれの時差を取り除いてみましょう。今回は時計はすべて同期済みです。",
      "learn": [
        "Z は UTC、+09:00 は 9 時間、+01:00 は 1 時間 UTC より進んでいます。",
        "どの行も発生時刻です。UTC に直した時刻を比べ、上から早い順に並べます。",
        "順序が正しいことと、前の出来事が後の出来事を引き起こしたことは別です。順序だけで原因までは断定しません。"
      ],
      "example": {
        "title": "別の値で考えてみる",
        "text": "12:00+09:00 は 03:00Z、04:01+01:00 は 03:01Z です。見た目の時刻は逆でも UTC では前者が先です。"
      },
      "task": "4 行を、発生時刻が早い順に上から並べてください。時差を UTC にそろえて比較します。",
      "kind": "order",
      "sourceLabel": "調べる記録と資料",
      "rows": [
        {
          "id": "a-c1-read",
          "sourceType": "log",
          "raw": "2026-10-22T05:00:05+01:00 system=storage event=object_read request_id=Q-701"
        },
        {
          "id": "a-c1-issue",
          "sourceType": "log",
          "raw": "2026-10-22T03:59:50Z system=identity event=token_issued session=S-701"
        },
        {
          "id": "a-c1-end",
          "sourceType": "log",
          "raw": "2026-10-22T04:00:12Z system=app event=job_finished job=J-701"
        },
        {
          "id": "a-c1-request",
          "sourceType": "log",
          "raw": "2026-10-22T13:00:02+09:00 system=app event=request_sent request_id=Q-701"
        }
      ],
      "answer": {
        "rowIds": [
          "a-c1-issue",
          "a-c1-request",
          "a-c1-read",
          "a-c1-end"
        ]
      },
      "answerExplanation": "UTC に直すと token_issued は 03:59:50、request_sent は 04:00:02、object_read は 04:00:05、job_finished は 04:00:12 の順です。",
      "hints": [
        "Z はそのまま、+09:00 は 9 時間、+01:00 は 1 時間引きます。",
        "13:00:02+09:00 は 04:00:02Z、05:00:05+01:00 は 04:00:05Z です。",
        "token_issued → request_sent → object_read → job_finished の順です。"
      ],
      "solution": "トークン発行、要求送信、資料の読取り、処理完了の順に並べます。UTC にそろえた発生時刻が根拠です。",
      "bridge": {
        "tool": "時系列",
        "how": "システムごとに違う時刻表記をそろえて並べます。"
      },
      "flag": "EASY{ADVANCED_C1}"
    },
    {
      "id": "a-c2",
      "level": "advanced",
      "chapter": "connect",
      "title": "二段先まで親子をたどる",
      "skill": "親の ID を受け渡しながらプロセスをつなぐ",
      "minutes": 6,
      "brief": "親から直接の子、その子の子へとつながる記録を集めます。名前が同じ別の起動は混ぜません。",
      "learn": [
        "起点は host=studio-pc-12、process_guid=P-910 です。全行が同じ起動区間の記録です。",
        "ある行の process_guid と次の行の parent_process_guid が一致すれば、同じ host の中で親子としてつながります。",
        "まず P-910 の子を探し、その子の ID を新しい手がかりにします。プログラムの名前だけで安全・危険を決める課題ではありません。"
      ],
      "example": {
        "title": "別の値で考えてみる",
        "text": "P-1 → P-2 → P-3 を探すなら、親 P-1 の子 P-2、親 P-2 の子 P-3 の順に ID を受け渡します。別の host の P-3 は含めません。"
      },
      "task": "studio-pc-12 の P-910 を起点とする連なりを、起点を含めてすべて選んでください。表示された範囲で、子とその子までたどります。",
      "kind": "rows",
      "sourceLabel": "調べる記録と資料",
      "rows": [
        {
          "id": "a-c2-root",
          "sourceType": "log",
          "raw": "2026-10-22T14:00:00Z host=studio-pc-12 process_guid=P-910 parent_process_guid=P-900 image=design-app"
        },
        {
          "id": "a-c2-other-root",
          "sourceType": "log",
          "raw": "2026-10-22T14:00:01Z host=studio-pc-12 process_guid=P-920 parent_process_guid=P-900 image=design-app"
        },
        {
          "id": "a-c2-child",
          "sourceType": "log",
          "raw": "2026-10-22T14:00:02Z host=studio-pc-12 process_guid=P-911 parent_process_guid=P-910 image=render-helper"
        },
        {
          "id": "a-c2-other-host",
          "sourceType": "log",
          "raw": "2026-10-22T14:00:03Z host=studio-pc-13 process_guid=P-912 parent_process_guid=P-911 image=archive-helper"
        },
        {
          "id": "a-c2-grandchild",
          "sourceType": "log",
          "raw": "2026-10-22T14:00:04Z host=studio-pc-12 process_guid=P-912 parent_process_guid=P-911 image=archive-helper"
        },
        {
          "id": "a-c2-sibling",
          "sourceType": "log",
          "raw": "2026-10-22T14:00:05Z host=studio-pc-12 process_guid=P-921 parent_process_guid=P-920 image=render-helper"
        }
      ],
      "answer": {
        "rowIds": [
          "a-c2-root",
          "a-c2-child",
          "a-c2-grandchild"
        ]
      },
      "answerExplanation": "同じ studio-pc-12 の P-910 → P-911 → P-912 がつながります。P-920 の連なりや studio-pc-13 の同名 ID は対象外です。",
      "hints": [
        "まず起点 P-910 自身の行を選びます。",
        "parent_process_guid=P-910 の子は P-911。その ID を親に持つ行を探します。",
        "studio-pc-12 の P-910、P-911、P-912 の 3 行です。"
      ],
      "solution": "studio-pc-12 の P-910、P-911、P-912 を選びます。端末名と親子の ID が連続して一致します。",
      "bridge": {
        "tool": "時系列",
        "how": "関連プロセスを集め、どこまでつながりを確認できたか整理します。"
      },
      "flag": "EASY{ADVANCED_C2}"
    },
    {
      "id": "a-c3",
      "level": "advanced",
      "chapter": "connect",
      "title": "接続元にプロキシがいる",
      "skill": "見えている IP の役割を資料で確かめる",
      "minutes": 6,
      "brief": "アプリの接続元が利用者の端末とは限りません。途中の中継サーバーを資料で確かめます。",
      "learn": [
        "リバースプロキシは、要求を受けてアプリへ中継するサーバーです。アプリには中継サーバーの IP が接続元として見えることがあります。",
        "この課題の client_ip は、信頼されたプロキシが接続を受けた相手の IP を記録する欄です。利用者が自由に設定する要求ヘッダーとは区別します。",
        "IP が分かっても、使った人の特定や、端末の侵害の証明にはなりません。"
      ],
      "example": {
        "title": "別の値で考えてみる",
        "text": "アプリで src=10.0.0.5、中継記録で client_ip=198.51.100.8 なら、10.0.0.5 は中継側の場合があります。同じ request_id と構成資料で照合します。"
      },
      "task": "この要求の接続元について、資料とログから言えることを選んでください。",
      "kind": "choice",
      "sourceLabel": "調べる記録と資料",
      "rows": [
        {
          "id": "a-c3-app",
          "sourceType": "log",
          "raw": "2026-10-22T14:20:00Z system=app request_id=Q-711 src=10.30.0.8 event=page_open status=200"
        },
        {
          "id": "a-c3-proxy",
          "sourceType": "log",
          "raw": "2026-10-22T14:20:00Z system=trusted-proxy request_id=Q-711 client_ip=203.0.113.71 upstream=10.30.1.4"
        },
        {
          "id": "a-c3-network",
          "sourceType": "document",
          "title": "構成と記録欄の説明",
          "body": "10.30.0.8 はリバースプロキシ。アプリはこのプロキシからのみ要求を受ける。\nclient_ip はプロキシが受けた接続の相手を記録する欄で、要求ヘッダーの値ではない。この課題では要求 ID の対応は確認済み。"
        }
      ],
      "answer": {
        "choiceId": "a-c3-bounded"
      },
      "answerExplanation": "Q-711 が一致し、10.30.0.8 はプロキシ、プロキシが接続を受けた相手は 203.0.113.71 と言えます。この IP から特定の人や侵害の有無は断定できません。",
      "hints": [
        "10.30.0.8 の役割を構成資料で確認します。",
        "二つの request_id はどちらも Q-711 です。",
        "中継と、その中継が接続を受けた相手を分けた説明を選びます。"
      ],
      "solution": "「10.30.0.8 は中継。中継が受けた相手は 203.0.113.71 だが、人は未特定」を選びます。",
      "bridge": {
        "tool": "資産・資料",
        "how": "通信経路の資料を見て、ログの IP が何を指すか確認します。"
      },
      "flag": "EASY{ADVANCED_C3}",
      "choices": [
        {
          "id": "a-c3-person",
          "label": "10.30.0.8 の管理者本人が操作した",
          "feedback": "アプリに見える IP は中継です。IP から管理者本人の操作とは決められません。"
        },
        {
          "id": "a-c3-bounded",
          "label": "10.30.0.8 は中継。中継が受けた相手は 203.0.113.71 だが、人は未特定",
          "feedback": "構成資料と同じ要求 ID の記録に合っています。"
        },
        {
          "id": "a-c3-compromise",
          "label": "203.0.113.71 の端末は侵害されていると確定する",
          "feedback": "接続の相手を示す証拠であって、侵害を確定する証拠ではありません。"
        }
      ]
    },
    {
      "id": "a-c4",
      "level": "advanced",
      "chapter": "connect",
      "title": "時計の誤差を残して判断する",
      "skill": "時刻だけでは前後を決められない場合を知る",
      "minutes": 6,
      "brief": "秒まで書かれていても時計が正確とは限りません。この二つの出来事は、どちらが先と言い切れるでしょうか。",
      "learn": [
        "誤差 ±30 秒とは、実際は記録時刻より最大 30 秒早い場合と、最大 30 秒遅い場合があることです。",
        "考えられる時刻の範囲が重なると、見た目だけで前後を断定できません。",
        "ここには共通の要求 ID や親子関係の記録もありません。「未確定」と残すことも正しい判断です。"
      ],
      "example": {
        "title": "別の値で考えてみる",
        "text": "A が 08:00:00±10 秒、B が 08:00:30±10 秒なら、A は遅くても 08:00:10、B は早くても 08:00:20 なので A が先です。範囲が重なる場合は別です。"
      },
      "task": "A と B の発生順について、この資料だけで言える判断を選んでください。",
      "kind": "choice",
      "sourceLabel": "調べる記録と資料",
      "rows": [
        {
          "id": "a-c4-a",
          "sourceType": "log",
          "raw": "event_time=2026-10-22T10:00:20Z system=A event=config_read clock_error=±30_seconds"
        },
        {
          "id": "a-c4-b",
          "sourceType": "log",
          "raw": "event_time=2026-10-22T10:00:40Z system=B event=session_started clock_error=±30_seconds"
        },
        {
          "id": "a-c4-clock",
          "sourceType": "document",
          "title": "時計と関連情報",
          "body": "A と B はどちらも UTC に対して最大 ±30 秒の誤差があり、ずれの向きは不明。共通の要求 ID、因果関係、送受信対応を示す記録はない。"
        }
      ],
      "answer": {
        "choiceId": "a-c4-unknown"
      },
      "answerExplanation": "A は 09:59:50〜10:00:50、B は 10:00:10〜10:01:10 の可能性があります。範囲が重なるため時刻だけで発生順を確定できません。",
      "hints": [
        "各時刻から 30 秒引いた時刻と 30 秒足した時刻を考えます。",
        "A が最も遅い 10:00:50 は、B が最も早い 10:00:10 より後です。",
        "前後どちらもあり得るため、発生順は未確定です。"
      ],
      "solution": "「この資料だけでは発生順は未確定」を選びます。時計の状態や対応関係を示す追加記録が必要です。",
      "bridge": {
        "tool": "時系列",
        "how": "時刻の不確かさを補足し、確定した順序と推測を区別します。"
      },
      "flag": "EASY{ADVANCED_C4}",
      "choices": [
        {
          "id": "a-c4-a-first",
          "label": "A が必ず先に起きた",
          "feedback": "表示時刻は A が先でも、時計誤差の範囲が重なっています。"
        },
        {
          "id": "a-c4-b-first",
          "label": "B が必ず先に起きた",
          "feedback": "B が先の可能性はありますが、必ず先とは言えません。"
        },
        {
          "id": "a-c4-unknown",
          "label": "この資料だけでは発生順は未確定",
          "feedback": "可能な時刻範囲が重なり、対応関係の証拠もありません。"
        }
      ]
    },
    {
      "id": "a-e1",
      "level": "advanced",
      "chapter": "evidence",
      "title": "記録のない範囲を明示する",
      "skill": "操作ログと収集設定を合わせて限界を説明する",
      "minutes": 6,
      "brief": "共有設定の変更と、誰かが読んだかは別の記録です。取得していないログから何も起きなかったとは言えません。",
      "learn": [
        "この教材の匿名共有は、リンクを知る人がログインなしで対象を閲覧できる共有設定です。資料に含まれる個人情報を匿名化した、という意味ではありません。",
        "共有設定を残す管理ログと、ファイル読取りを残すアクセスログは別です。",
        "取得範囲の資料は「何が分からないか」の根拠です。ログがない理由を説明するときに使います。"
      ],
      "example": {
        "title": "別の値で考えてみる",
        "text": "F-10 の共有作成があっても読取りログが無効なら、F-10 が読まれたかはその記録では判断できません。"
      },
      "task": "「F-501 の匿名共有は有効化されたが、この資料ではダウンロードの有無は分からない」を支えるカードを、必要なものだけすべて選んでください。",
      "kind": "evidence",
      "sourceLabel": "調べる記録と資料",
      "rows": [
        {
          "id": "a-e1-share",
          "sourceType": "log",
          "raw": "2026-10-22T15:00:00Z event=share_enabled object_id=F-501 access=anonymous result=success"
        },
        {
          "id": "a-e1-coverage",
          "sourceType": "document",
          "title": "F-501 の記録範囲",
          "body": "調査区間は 2026-10-22 14:50〜15:10 UTC。F-501 の共有設定変更ログは取得済み。読取り・ダウンロードのアクセスログは、この区間では収集が無効。ほかにアクセスの有無を示す資料はない。"
        },
        {
          "id": "a-e1-other",
          "sourceType": "document",
          "title": "別資料 F-502 のアクセス記録",
          "body": "F-502 には 15:02 UTC に社内利用者の読取り記録が 1 件ある。"
        },
        {
          "id": "a-e1-guess",
          "sourceType": "reply",
          "title": "担当者の予想",
          "body": "リンクを誰かに送った記憶はありません。たぶん誰も見ていないと思います。"
        }
      ],
      "answer": {
        "rowIds": [
          "a-e1-share",
          "a-e1-coverage"
        ]
      },
      "answerExplanation": "共有有効化のログと、アクセスログが未収集という資料が必要です。F-502 の記録や担当者の予想から F-501 のダウンロードの有無は決められません。",
      "hints": [
        "主張を「共有が有効」と「ダウンロードは不明」に分けます。",
        "前半は共有ログ、後半は F-501 の記録範囲で確認します。",
        "F-501 の share_enabled と「F-501 の記録範囲」を選びます。"
      ],
      "solution": "共有有効化ログと F-501 の記録範囲の 2 枚を選びます。未収集を「アクセスがなかった」と読み替えないことが大切です。",
      "bridge": {
        "tool": "対応記録",
        "how": "確認した事実と記録範囲の限界を並べて引き継ぎます。"
      },
      "flag": "EASY{ADVANCED_E1}"
    },
    {
      "id": "a-e2",
      "level": "advanced",
      "chapter": "evidence",
      "title": "操作時点で有効な承認を選ぶ",
      "skill": "時差・承認の有効期間・対象範囲を合わせる",
      "minutes": 6,
      "brief": "後から承認が更新されても、以前の操作まで自動で承認済みにはなりません。操作時点で有効だった版を確かめます。",
      "learn": [
        "承認には変更履歴があります。この演習では版ごとの有効期間が確定しており、その時点で有効な版の対象範囲を使います。",
        "操作は +09:00 表記、承認は UTC 表記です。操作時刻から 9 時間引いて同じ基準で比べます。",
        "有効期間は開始時刻以上・終了時刻未満です。新しい版はその開始時刻から適用され、過去の操作には適用しません。",
        "必要な根拠は、実際の操作、有効期間を示す履歴、その時点の版の対象範囲の三つです。対象外でも悪意の有無は別の確認です。"
      ],
      "example": {
        "title": "別の値で考えてみる",
        "text": "操作が 18:10+09:00（09:10 UTC）、版 2 の開始が 09:30 UTC なら、操作には前の版が適用されます。版 2 で対象が追加されても、09:10 の操作をその版で説明することはできません。"
      },
      "task": "「staff-roster の今回の共有は、操作時点で有効な CHG-820 の承認範囲外」を裏付ける、操作・版の有効期間・当時の対象範囲のカードを一つずつ選んでください。",
      "kind": "evidence",
      "sourceLabel": "調べる記録と資料",
      "rows": [
        {
          "id": "a-e2-operation",
          "sourceType": "log",
          "raw": "2026-10-22T19:20:00+09:00 actor_id=svc-publish folder=staff-roster event=share_created access=anonymous result=success"
        },
        {
          "id": "a-e2-revisions",
          "sourceType": "document",
          "title": "CHG-820 の確定した変更履歴",
          "body": "日時はすべて 2026-10-22 UTC。版 1 は 10:00:00 以上・10:30:00 未満に有効。版 2 は 10:30:00 以上・11:00:00 未満に有効。版 2 は過去の操作には適用されない。各版の対象範囲は別カードに記載。"
        },
        {
          "id": "a-e2-approval",
          "sourceType": "document",
          "title": "CHG-820：版 1 の対象範囲",
          "body": "actor_id=svc-publish による folder=public-catalog の匿名共有作成のみ承認。staff-roster など、ほかのフォルダーは対象外。"
        },
        {
          "id": "a-e2-future-scope",
          "sourceType": "document",
          "title": "CHG-820：版 2 の対象範囲",
          "body": "actor_id=svc-publish による public-catalog と staff-roster の匿名共有作成を承認。適用開始は変更履歴の版 2 の開始時刻に従う。"
        },
        {
          "id": "a-e2-comment",
          "sourceType": "reply",
          "title": "担当者の回答",
          "body": "新しい版には staff-roster が入っています。ただ、操作した時刻にどの版が有効だったかは、まだ確認していません。"
        }
      ],
      "answer": {
        "rowIds": [
          "a-e2-operation",
          "a-e2-revisions",
          "a-e2-approval"
        ]
      },
      "answerExplanation": "19:20:00+09:00 は 10:20:00 UTC です。この時点で有効なのは版 1 で、対象は public-catalog のみ。実際の staff-roster は範囲外です。staff-roster を含む版 2 は 10:30 からなので、この操作には適用できません。",
      "hints": [
        "操作の 19:20+09:00 を UTC に直します。9 時間引くと 10:20 です。",
        "10:20 に有効なのは版 1 です。版 2 は 10:30 から適用されます。",
        "操作ログ、確定した変更履歴、版 1 の対象範囲の 3 枚を選びます。"
      ],
      "solution": "操作ログ、CHG-820 の変更履歴、版 1 の対象範囲を選びます。UTC に直した操作時刻で版を決め、その版の public-catalog と実際の staff-roster を比べます。",
      "bridge": {
        "tool": "資産・資料",
        "how": "最新の承認だけで判断せず、操作時点で有効だった内容と対象を確認します。"
      },
      "flag": "EASY{ADVANCED_E2}"
    },
    {
      "id": "a-e3",
      "level": "advanced",
      "chapter": "evidence",
      "title": "担当者の回答を次の確認につなぐ",
      "skill": "人の記憶と自動処理の記録を混同しない",
      "minutes": 6,
      "brief": "「自分は操作していない」という回答と操作ログがあります。すぐに虚偽と決めずアカウントの使い方を確認します。",
      "learn": [
        "サービスアカウントは自動処理が使うアカウントです。担当者が画面を操作しなくても記録が発生する場合があります。",
        "回答とログが食い違って見えたら、時刻・ID・処理の種類を示して残る確認事項を聞きます。",
        "アカウントの利用は担当者本人の操作の証拠とは限りません。"
      ],
      "example": {
        "title": "別の値で考えてみる",
        "text": "夜間の svc-demo の操作に「退勤済み」と回答があっても、夜間ジョブなら両方成り立ちます。ジョブ ID と承認済み設定を確認します。"
      },
      "task": "次に担当者へ聞く内容として、記録を使って不明点を最も絞れるものを選んでください。",
      "kind": "choice",
      "sourceLabel": "調べる記録と資料",
      "rows": [
        {
          "id": "a-e3-job",
          "sourceType": "log",
          "raw": "2026-10-22T15:40:00Z actor_id=svc-index credential_id=K-73 job_id=JOB-73 event=folder_permission_changed folder=lab-notes result=success"
        },
        {
          "id": "a-e3-register",
          "sourceType": "document",
          "title": "アカウントの用途",
          "body": "svc-index は検索索引の自動更新用。個人アカウントではない。権限変更は通常処理には含まれない。"
        },
        {
          "id": "a-e3-reply",
          "sourceType": "reply",
          "title": "担当者の回答",
          "body": "私は 15:40 UTC に画面から権限を変更していません。自動処理の設定変更はまだ確認できていません。"
        }
      ],
      "answer": {
        "choiceId": "a-e3-ask-job"
      },
      "answerExplanation": "JOB-73 と K-73 が使われた記録を示して設定と承認を聞けば、不明点を絞れます。個人の画面操作を否定する回答だけでは自動処理や鍵の利用を説明できません。",
      "hints": [
        "svc-index は個人用ではなく自動処理用です。",
        "回答で未確認のままになっていることを探します。",
        "JOB-73、K-73、対象フォルダーを示し、設定変更と承認を尋ねます。"
      ],
      "solution": "JOB-73 と K-73 による lab-notes の権限変更が予定された処理か、設定変更履歴と承認を確認する質問を選びます。",
      "bridge": {
        "tool": "照会",
        "how": "回答をそのまま結論にせず、ログで具体化した追加質問をします。"
      },
      "flag": "EASY{ADVANCED_E3}",
      "choices": [
        {
          "id": "a-e3-blame",
          "label": "操作ログがあるので、担当者が事実と違う回答をしたと確定する",
          "feedback": "自動処理なら、担当者が画面を操作していない回答と両立します。"
        },
        {
          "id": "a-e3-close",
          "label": "担当者が否定したので権限変更は起きていないとして閉じる",
          "feedback": "権限変更の成功ログはあります。否定されたのは本人の画面操作です。"
        },
        {
          "id": "a-e3-ask-job",
          "label": "15:40 UTC の JOB-73・K-73 による lab-notes の権限変更は予定された処理か、設定変更履歴と承認を確認する",
          "feedback": "対象・時刻・ID を示し、自動処理と承認を具体的に確認できます。"
        }
      ]
    },
    {
      "id": "a-e4",
      "level": "advanced",
      "chapter": "evidence",
      "title": "対処が効いた範囲を確認する",
      "skill": "鍵の無効化と既存セッションを分ける",
      "minutes": 6,
      "brief": "鍵を無効にしたら何が止まったと言えるでしょうか。設定変更の成功と実際の拒否を確かめます。",
      "learn": [
        "credential_id は認証に使う鍵の識別子です。このサービスの鍵無効化は新規認証を止めますが、発行済みセッションは別管理です。",
        "対処結果は対象 ID と時刻をそろえて確認します。一つの拒否記録で全セッション停止とは言えません。"
      ],
      "example": {
        "title": "別の値で考えてみる",
        "text": "K-10 無効化成功と、その後の K-10 新規認証拒否があれば、その試行の拒否は確認できます。別鍵 K-11 や既存セッションは別の確認です。"
      },
      "task": "「K-17 の無効化設定は成功し、10:22 UTC の K-17 の新規認証は拒否された」を直接支える記録だけを選んでください。",
      "kind": "evidence",
      "sourceLabel": "調べる記録と資料",
      "rows": [
        {
          "id": "a-e4-disable",
          "sourceType": "log",
          "raw": "2026-10-22T10:20:00Z event=credential_disabled credential_id=K-17 result=success"
        },
        {
          "id": "a-e4-deny",
          "sourceType": "log",
          "raw": "2026-10-22T10:22:00Z event=new_authentication credential_id=K-17 result=denied reason=credential_disabled"
        },
        {
          "id": "a-e4-session",
          "sourceType": "log",
          "raw": "2026-10-22T10:23:00Z event=session_check session=S-17 issued_by=K-17 result=active"
        },
        {
          "id": "a-e4-other",
          "sourceType": "log",
          "raw": "2026-10-22T10:24:00Z event=new_authentication credential_id=K-18 result=success"
        },
        {
          "id": "a-e4-behavior",
          "sourceType": "document",
          "title": "このサービスの動作",
          "body": "鍵の無効化で新規認証を停止する。既存セッションは別途無効化が必要。"
        }
      ],
      "answer": {
        "rowIds": [
          "a-e4-disable",
          "a-e4-deny"
        ]
      },
      "answerExplanation": "K-17 無効化成功と 10:22 の K-17 新規認証拒否が直接の根拠です。既存セッション S-17 は active なので全ての利用が止まったとは言えません。",
      "hints": [
        "主張は「設定成功」と「特定の新規認証の拒否」の二つです。",
        "K-17 の 10:20 と 10:22 の記録を探します。",
        "credential_disabled の成功と new_authentication の拒否の 2 行です。"
      ],
      "solution": "10:20 の K-17 無効化成功と 10:22 の K-17 新規認証拒否を選びます。既存セッションは別途確認が必要です。",
      "bridge": {
        "tool": "対応記録",
        "how": "対応の実施と、効果を確認できた対象・範囲を分けて記録します。"
      },
      "flag": "EASY{ADVANCED_E4}"
    },
    {
      "id": "a-d1",
      "level": "advanced",
      "chapter": "respond",
      "title": "今も続く影響を優先する",
      "skill": "成立状況・対象の重要度・継続性で比べる",
      "minutes": 6,
      "brief": "件数だけでは優先度は決まりません。今も続く影響と、対象の重要度を比べます。",
      "learn": [
        "優先度を考えるときは、操作が成立したか、何が対象か、影響が続いているかを確認します。",
        "この演習の基準では、機密情報の匿名共有が現在有効な事案は即時エスカレーション対象です。未成立の試行も記録して後続調査に回します。"
      ],
      "example": {
        "title": "別の値で考えてみる",
        "text": "公開資料への拒否済み試行 20 件と、機密資料 1 件の匿名共有が継続している状況なら、件数の少ない後者でも先に対応します。"
      },
      "task": "提示された対応基準に沿って、先に担当者へエスカレーションする事案を選んでください。",
      "kind": "choice",
      "sourceLabel": "調べる記録と資料",
      "rows": [
        {
          "id": "a-d1-case-a",
          "sourceType": "document",
          "title": "事案 A：受付端末",
          "body": "公開用の館内案内ページへのログイン失敗が 80 件。すべて拒否。ログ取得は正常で、現時点で成功や設定変更は確認されていない。"
        },
        {
          "id": "a-d1-case-b",
          "sourceType": "document",
          "title": "事案 B：契約資料",
          "body": "機密区分の契約案が匿名リンクで共有された。共有作成の成功と現在有効な設定を確認済み。閲覧の有無は未確認。"
        },
        {
          "id": "a-d1-rule",
          "sourceType": "document",
          "title": "この演習の対応基準",
          "body": "機密区分の資料の匿名共有が現在有効なら、閲覧確認を待たず担当者に即時エスカレーションする。拒否済み試行は記録し、後続の調査対象として残す。"
        }
      ],
      "answer": {
        "choiceId": "a-d1-b"
      },
      "answerExplanation": "B は機密資料の匿名共有が現在有効で、即時エスカレーション条件に合います。閲覧は未確認として残します。A も破棄せず後続調査の対象にします。",
      "hints": [
        "件数ではなく、操作が成立して現在も影響するかを見ます。",
        "基準は「機密資料」「匿名共有」「現在有効」です。",
        "三つに一致する事案 B を優先します。"
      ],
      "solution": "事案 B を先にエスカレーションします。機密資料の共有が続いていることが根拠です。",
      "bridge": {
        "tool": "対応記録",
        "how": "優先度を成立状況・重要度・継続性の根拠とともに残します。"
      },
      "flag": "EASY{ADVANCED_D1}",
      "choices": [
        {
          "id": "a-d1-a",
          "label": "A を先に扱う。80 件で B より件数が多いから",
          "feedback": "件数だけでは影響を比べられません。B は即時対応基準に一致しています。"
        },
        {
          "id": "a-d1-b",
          "label": "B を先に扱う。機密資料の匿名共有が現在有効で、即時対応基準に合うから",
          "feedback": "重要度と継続中の共有が根拠です。A の記録も残します。"
        },
        {
          "id": "a-d1-wait",
          "label": "B の閲覧が確認されるまで、どちらも扱わない",
          "feedback": "基準では閲覧確認を待たず対応します。未知の点は未知として記録できます。"
        }
      ]
    },
    {
      "id": "a-d2",
      "level": "advanced",
      "chapter": "respond",
      "title": "対象を絞って共有を止める",
      "skill": "対処の権限と業務影響を確認する",
      "minutes": 6,
      "brief": "問題の共有を止めるために全組織を止める必要はあるでしょうか。許可された範囲で、対象に効く対処を選びます。",
      "learn": [
        "封じ込めは、影響や不正な利用の広がりを抑える対処です。ここでは共有リンクの無効化を扱います。",
        "提示された手順と権限に従い、対象と結果を記録します。業務への影響も考えます。",
        "これは方針を選ぶ練習です。実際のクラウド設定は変更しません。"
      ],
      "example": {
        "title": "別の値で考えてみる",
        "text": "問題リンク L-10 のみを無効化する権限があるなら、正常な共有も含む全社停止ではなく、承認された対象の対処を選びます。"
      },
      "task": "資料の権限と条件に沿う、直ちに行う対処を選んでください。",
      "kind": "choice",
      "sourceLabel": "調べる記録と資料",
      "rows": [
        {
          "id": "a-d2-share",
          "sourceType": "log",
          "raw": "2026-10-22T16:10:00Z share_id=L-204 folder=project-cost access=anonymous state=enabled"
        },
        {
          "id": "a-d2-rule",
          "sourceType": "document",
          "title": "今回の承認と対応手順",
          "body": "project-cost の匿名共有は禁止。責任者は L-204 の即時無効化を承認済み。SOC は当該リンクを無効化し、結果と時刻を記録して責任者へ報告できる。全社アカウント停止、全フォルダー削除の権限はない。"
        },
        {
          "id": "a-d2-business",
          "sourceType": "document",
          "title": "業務への影響",
          "body": "同じサービスの他の共有は、承認済みの顧客業務で利用中。"
        }
      ],
      "answer": {
        "choiceId": "a-d2-target"
      },
      "answerExplanation": "承認済みの L-204 を無効化し、設定と結果を確認して報告する対処が対象と権限に合います。ほかの共有や全アカウント停止は今回の権限外です。",
      "hints": [
        "責任者が承認した対象 ID を読みます。",
        "承認対象は L-204 の無効化だけです。",
        "対象リンクの無効化、結果確認、記録と報告がそろう選択肢です。"
      ],
      "solution": "L-204 のみ無効化し、結果と時刻を記録して報告します。残るアクセス確認などの調査は続けます。",
      "bridge": {
        "tool": "対応記録",
        "how": "対象と承認を示し、必要な範囲に絞った対処を記録します。"
      },
      "flag": "EASY{ADVANCED_D2}",
      "choices": [
        {
          "id": "a-d2-target",
          "label": "承認済みの L-204 のみ無効化し、設定と結果を確認して時刻・対象を記録し、責任者へ報告する",
          "feedback": "対象・権限・効果確認が資料に合っています。"
        },
        {
          "id": "a-d2-all",
          "label": "全社アカウントを停止し、正常な共有もすべて削除する",
          "feedback": "権限外で、正常業務への影響も大きすぎます。"
        },
        {
          "id": "a-d2-wait",
          "label": "誰かが閲覧したと証明できるまで、承認済みの対処も保留する",
          "feedback": "禁止された共有が有効で即時無効化は承認済みです。閲覧の確定を待つ条件はありません。"
        }
      ]
    },
    {
      "id": "a-d3",
      "level": "advanced",
      "chapter": "respond",
      "title": "秘密の値を報告に広げない",
      "skill": "調査用 ID と認証情報の本体を分ける",
      "minutes": 6,
      "brief": "ログに秘密の値が含まれることもあります。追跡に必要な情報を残しつつ、報告で広げない方法を選びます。",
      "learn": [
        "credential_id は鍵を識別する番号、credential_value は認証に使う秘密の値です。報告では識別子で追跡します。",
        "この演習では原本をアクセス制限された証拠保管先に保持し、通常報告では本体をマスクします。実際の扱いは組織の手順に従います。",
        "下の値は教材用の無効なダミーです。実在する鍵やサービスには接続しません。"
      ],
      "example": {
        "title": "別の値で考えてみる",
        "text": "credential_id=K-demo と値が並んでいたら、通常報告には K-demo と時刻を記載し、秘密の値は [REDACTED] に置き換えます。"
      },
      "task": "提示された取り扱い手順に沿った引き継ぎ方法を選んでください。",
      "kind": "choice",
      "sourceLabel": "調べる記録と資料",
      "rows": [
        {
          "id": "a-d3-sensitive",
          "sourceType": "log",
          "raw": "2026-10-22T16:30:00Z event=debug_output credential_id=K-908 credential_value=TRAINING_ONLY_NOT_A_VALID_SECRET",
          "note": "教材専用の無効な値です。"
        },
        {
          "id": "a-d3-handling",
          "sourceType": "document",
          "title": "この演習の取り扱い手順",
          "body": "原本をアクセス制限された証拠保管先に保持し、保管番号で参照する。通常報告では秘密の値をマスクし、credential_id・発生時刻・露出箇所を記録する。鍵の無効化・交換は担当者へ依頼し、完了を確認する。"
        }
      ],
      "answer": {
        "choiceId": "a-d3-mask"
      },
      "answerExplanation": "通常報告は K-908、時刻、露出箇所、保管番号で追跡し、秘密の値はマスクします。原本は制限保管し、担当者へ無効化・交換と完了確認を依頼します。",
      "hints": [
        "識別子 K-908 と秘密の値そのものを区別します。",
        "証拠をすべて消すのでも、全員に配るのでもなく、保管と通常報告を分けます。",
        "制限保管、マスク、ID での追跡、無効化・交換依頼を選びます。"
      ],
      "solution": "値をマスクし、原本の保管番号と K-908 で引き継ぎます。担当者に無効化・交換と結果確認を依頼します。",
      "bridge": {
        "tool": "対応記録",
        "how": "識別情報を残しながら、引き継ぎで秘密の値を拡散させません。"
      },
      "flag": "EASY{ADVANCED_D3}",
      "choices": [
        {
          "id": "a-d3-spread",
          "label": "値を全文コピーして、全員が見られる報告に貼る",
          "feedback": "露出範囲を広げてしまいます。追跡には ID と保管番号を使います。"
        },
        {
          "id": "a-d3-delete",
          "label": "証拠の原本も削除し、ID や時刻も残さない",
          "feedback": "調査と対処の追跡ができなくなります。手順では原本を制限保管します。"
        },
        {
          "id": "a-d3-mask",
          "label": "原本は制限保管し、通常報告は値をマスクして K-908・時刻・露出箇所・保管番号を記載する。担当者へ無効化・交換と完了確認を依頼する",
          "feedback": "証拠保全、露出の抑制、対処の追跡を手順に沿って行えます。"
        }
      ]
    },
    {
      "id": "a-d4",
      "level": "advanced",
      "chapter": "respond",
      "title": "対処後も続く利用を報告する",
      "skill": "鍵の停止とセッションの停止を分けて引き継ぐ",
      "minutes": 6,
      "brief": "鍵を無効にした後にも読取りの記録があります。対処が効いた範囲と、まだ止まっていない範囲を分けて報告します。",
      "learn": [
        "このサービスでは鍵の無効化は新規認証を止めますが、発行済みセッションは別途無効化が必要です。",
        "事実には成功・拒否の両方を、対象 ID と時刻付きで残します。「鍵を止めた」を「全利用が止まった」と言い換えてはいけません。",
        "読取り操作の成功はこのサービスがその操作を認めた記録です。ほかの対象への利用や、全データの受信完了まで示すものではありません。",
        "次の対応は提示された権限に従い、まだ有効な対象に絞って計画します。計画を選んだ段階では実行済みとは扱いません。"
      ],
      "example": {
        "title": "別の値で考えてみる",
        "text": "K-demo の新規認証が拒否されても、発行済みの S-demo が active なら別の対処が必要です。鍵への効果確認と、既存セッションへの対処・結果確認を分けて報告します。"
      },
      "task": "確認した効果と残る利用を区別し、「確認した事実」「未確認事項」「次の対応」を一つずつ選んでください。まだ次の対応は実行していません。",
      "kind": "report",
      "sourceLabel": "調べる記録と資料",
      "rows": [
        {
          "id": "a-d4-disabled",
          "sourceType": "log",
          "raw": "2026-10-22T10:20:00Z event=credential_disabled credential_id=K-650 result=success"
        },
        {
          "id": "a-d4-denied",
          "sourceType": "log",
          "raw": "2026-10-22T10:22:00Z event=new_authentication credential_id=K-650 result=denied reason=credential_disabled"
        },
        {
          "id": "a-d4-read",
          "sourceType": "log",
          "raw": "2026-10-22T10:23:00Z event=object_read session=S-650 issued_by=K-650 object_id=F-650 result=success"
        },
        {
          "id": "a-d4-behavior",
          "sourceType": "document",
          "title": "認証とセッションの関係",
          "body": "S-650 は K-650 によって 10:10 UTC に発行済み。鍵停止は新規認証に適用され、既存セッションは別途無効化が必要。"
        },
        {
          "id": "a-d4-coverage",
          "sourceType": "document",
          "title": "今回の調査範囲",
          "body": "上の記録は 2026-10-22 10:20〜10:24 UTC の K-650 と S-650 に関する抜粋。ほかのセッション・資料への利用はまだ調査していない。"
        },
        {
          "id": "a-d4-authority",
          "sourceType": "document",
          "title": "責任者が承認した次の対応",
          "body": "S-650 の即時無効化を承認済み。SOC は S-650 を無効化し、操作結果とセッション状態を確認する。その後、同セッションの利用試行があれば拒否されたかを確認し、確認できた範囲と時刻を記録する。記録を保持し、ほかのセッションや対象への利用調査を担当者へ引き継ぐ。一括した全アカウント停止は未承認。"
        }
      ],
      "answer": {
        "parts": {
          "fact": "a-d4-fact-ok",
          "limit": "a-d4-limit-ok",
          "next": "a-d4-next-ok"
        }
      },
      "answerExplanation": "K-650 の停止と新規認証の拒否は確認済みですが、既存 S-650 では読取り成功が続いています。ほかの利用は未調査と残し、承認済み S-650 の無効化と結果確認を計画します。全利用が停止したと断定したり、計画を実行済みと書いたりしません。",
      "hints": [
        "10:22 の新規認証拒否だけでなく、10:23 の既存セッションの結果も読みます。",
        "未調査のほかのセッションや資料には、この 3 行だけで結論を出しません。",
        "承認された S-650 の無効化、操作結果・状態の確認、後続試行の確認と引き継ぎを選びます。"
      ],
      "solution": "事実は鍵停止後も S-650 の読取りが成功、未確認はほかの対象の利用、次は承認済み S-650 の無効化と結果確認・調査引き継ぎを選びます。",
      "bridge": {
        "tool": "対応記録",
        "how": "対処が効いた対象と、残る利用や未確認事項を分け、追加の対応計画を具体的に引き継ぎます。"
      },
      "flag": "EASY{ADVANCED_D4}",
      "choices": [
        {
          "id": "a-d4-fact-ok",
          "label": "K-650 の無効化設定と 10:22 UTC の新規認証拒否を確認したが、既存 S-650 の 10:23 の F-650 読取り操作は成功している。",
          "feedback": "鍵の停止効果と、続いているセッション利用を分けて記載しています。",
          "group": "fact"
        },
        {
          "id": "a-d4-fact-bad",
          "label": "K-650 を止めたので、既存セッションを含めてすべての利用が止まった。",
          "feedback": "S-650 の読取り成功が残っています。鍵の停止だけでは全利用の停止になりません。",
          "group": "fact"
        },
        {
          "id": "a-d4-limit-ok",
          "label": "提示された対象と区間以外の、ほかのセッション・資料への利用は未調査。全体の停止や影響範囲はまだ確認できていない。",
          "feedback": "提供資料の範囲を超えた断定を避けています。",
          "group": "limit"
        },
        {
          "id": "a-d4-limit-bad",
          "label": "K-650 の新規認証が 1 件拒否されたので、別セッションや別資料への利用もないと確定。",
          "feedback": "特定の試行の拒否は、ほかの対象の利用がない証明にはなりません。",
          "group": "limit"
        },
        {
          "id": "a-d4-next-ok",
          "label": "承認済みの S-650 を無効化し、操作結果と状態を確認する。その後の同セッションの試行があれば拒否を確認し、時刻と範囲を記録する。証拠を保持して残る利用調査を引き継ぐ。",
          "feedback": "承認された対象の対処・効果確認・残る調査を具体的に計画しています。",
          "group": "next"
        },
        {
          "id": "a-d4-next-bad",
          "label": "鍵停止で対応済みとし、S-650 の状態や利用を確認せず調査記録を削除する。",
          "feedback": "継続利用への対処が不足し、調査の証拠も失われます。",
          "group": "next"
        }
      ]
    },
    {
      "id": "a-g1",
      "level": "advanced",
      "chapter": "graduate",
      "title": "卒業調査：公開先が違う共有",
      "skill": "ID 照合・承認確認・限定対応・報告をつなぐ",
      "minutes": 8,
      "brief": "朝の公開作業で、案内書とは別のフォルダーに匿名リンクが作られました。これまでの操作を 4 段階でつなぎ、分かったことと残る不明点を引き継ぎます。",
      "learn": [
        "架空のクラウド共有調査です。actor_id はアカウント、credential_id は認証用の鍵、session は認証後の利用単位、share_id は共有リンクの ID です。",
        "鍵から session、session から共有、共有 ID から現在の状態へと記録をつなぎます。",
        "承認・機密区分・収集範囲・対処権限は資料に含まれます。実際のサービス操作や認証情報の入力は不要です。",
        "このサービスでは鍵と既存セッションの停止は別です。最後は対応計画を選びます。実行済みの報告ではありません。"
      ],
      "example": {
        "title": "別の値で考えてみる",
        "text": "別の例で K-demo → S-demo → L-demo がつながり、承認が public-demo なのに実際は private-demo なら対象不一致です。閲覧の有無はアクセス記録で別途調べます。"
      },
      "task": "四つの段階を順番に進め、調査と対応計画を完成させてください。",
      "kind": "investigation",
      "sourceLabel": "調べる記録と資料",
      "rows": [
        {
          "id": "a-g1-auth",
          "sourceType": "log",
          "raw": "2026-10-23T08:00:00Z system=identity actor_id=svc-survey credential_id=K-42 session=S-440 event=new_authentication result=success"
        },
        {
          "id": "a-g1-other-auth",
          "sourceType": "log",
          "raw": "2026-10-23T08:00:03Z system=identity actor_id=svc-map credential_id=K-43 session=S-441 event=new_authentication result=success"
        },
        {
          "id": "a-g1-create",
          "sourceType": "log",
          "raw": "2026-10-23T08:01:00Z system=cloud actor_id=svc-survey session=S-440 event=share_created folder=poll-results share_id=L-440 access=anonymous result=success"
        },
        {
          "id": "a-g1-other-share",
          "sourceType": "log",
          "raw": "2026-10-23T08:01:05Z system=cloud actor_id=svc-map session=S-441 event=share_created folder=public-map share_id=L-441 access=anonymous result=success"
        },
        {
          "id": "a-g1-check",
          "sourceType": "log",
          "raw": "2026-10-23T08:04:00Z system=cloud event=share_state_checked share_id=L-440 folder=poll-results state=enabled"
        }
      ],
      "answer": {},
      "answerExplanation": "関連 ID で記録をつなぎ、承認・資料区分・記録範囲を確認し、対象を限定した対応計画と報告を完成させました。分かったことと分からないことを分ける姿勢が SOCroom の調査につながります。",
      "hints": [
        "鍵からセッション、共有へとログの ID をたどります。",
        "実際と承認の対象を照合し、機密区分と収集範囲を見ます。",
        "最後は対象を限定した対処と結果確認を計画し、未確認事項を明記します。"
      ],
      "solution": "各段階のヒントと解説を使い、ID 照合 → 承認と区分 → 限界を含む判断 → 対応計画と報告の順に進めます。",
      "bridge": {
        "tool": "ログ検索 → 資産・資料 → 対応記録",
        "how": "SOCroom では複数画面を行き来して根拠を集め、未確認事項を残して担当者へ引き継ぎます。"
      },
      "flag": "EASY{ADVANCED_G1}",
      "steps": [
        {
          "id": "a-g1-step1",
          "title": "1. 関連する記録を集める",
          "task": "K-42 による認証から、S-440 を使った L-440 の共有作成、L-440 の現在の状態まで、関連する記録をすべて選んでください。",
          "kind": "rows",
          "sourceLabel": "認証とクラウドの監査ログ",
          "rows": [
            {
              "id": "a-g1-auth",
              "sourceType": "log",
              "raw": "2026-10-23T08:00:00Z system=identity actor_id=svc-survey credential_id=K-42 session=S-440 event=new_authentication result=success"
            },
            {
              "id": "a-g1-other-auth",
              "sourceType": "log",
              "raw": "2026-10-23T08:00:03Z system=identity actor_id=svc-map credential_id=K-43 session=S-441 event=new_authentication result=success"
            },
            {
              "id": "a-g1-create",
              "sourceType": "log",
              "raw": "2026-10-23T08:01:00Z system=cloud actor_id=svc-survey session=S-440 event=share_created folder=poll-results share_id=L-440 access=anonymous result=success"
            },
            {
              "id": "a-g1-other-share",
              "sourceType": "log",
              "raw": "2026-10-23T08:01:05Z system=cloud actor_id=svc-map session=S-441 event=share_created folder=public-map share_id=L-441 access=anonymous result=success"
            },
            {
              "id": "a-g1-check",
              "sourceType": "log",
              "raw": "2026-10-23T08:04:00Z system=cloud event=share_state_checked share_id=L-440 folder=poll-results state=enabled"
            }
          ],
          "answer": {
            "rowIds": [
              "a-g1-auth",
              "a-g1-create",
              "a-g1-check"
            ]
          },
          "answerExplanation": "K-42 の認証で S-440 が使われ、その S-440 で L-440 が作成されました。08:04 の L-440 は enabled です。S-441 と L-441 は別の処理です。",
          "hints": [
            "credential_id=K-42 の行を探します。",
            "その行の session=S-440 で共有作成を探し、share_id=L-440 の状態を探します。",
            "K-42 の認証、L-440 の共有作成、L-440 の状態確認の 3 行です。"
          ],
          "solution": "K-42／S-440 の認証、S-440／L-440 の共有作成、L-440 の状態確認の 3 行を選びます。"
        },
        {
          "id": "a-g1-step2",
          "title": "2. 承認と対象の重要度を照合する",
          "task": "「L-440 は承認 CHG-440 の対象外で、匿名共有が禁止された機密資料への共有である」を支える必要なカードだけをすべて選んでください。",
          "kind": "evidence",
          "sourceLabel": "操作・承認・資料区分",
          "rows": [
            {
              "id": "a-g1-create",
              "sourceType": "log",
              "raw": "2026-10-23T08:01:00Z system=cloud actor_id=svc-survey session=S-440 event=share_created folder=poll-results share_id=L-440 access=anonymous result=success"
            },
            {
              "id": "a-g1-approval",
              "sourceType": "document",
              "title": "確定した承認 CHG-440",
              "body": "2026-10-23 08:00〜08:20 UTC。svc-survey が folder=public-guide に匿名共有を作成する作業のみ承認。poll-results はこの承認の対象外。"
            },
            {
              "id": "a-g1-asset",
              "sourceType": "document",
              "title": "資料の区分と共有ルール",
              "body": "public-guide：一般公開する案内書。\npoll-results：氏名入りアンケート回答。機密区分で、匿名共有は禁止。"
            },
            {
              "id": "a-g1-other-plan",
              "sourceType": "document",
              "title": "別の作業 CHG-441",
              "body": "svc-map が public-map を公開する作業は承認済み。"
            },
            {
              "id": "a-g1-owner-guess",
              "sourceType": "reply",
              "title": "担当者の最初の回答",
              "body": "朝に公開作業があったことは覚えていますが、対象はまだ確認していません。"
            }
          ],
          "answer": {
            "rowIds": [
              "a-g1-create",
              "a-g1-approval",
              "a-g1-asset"
            ]
          },
          "answerExplanation": "実際は poll-results、承認は public-guide で対象が一致しません。poll-results は氏名入りの機密資料で匿名共有は禁止です。三つの資料を合わせて判断します。",
          "hints": [
            "実際の対象、承認対象、資料区分の三つを確認します。",
            "ログは poll-results、承認は public-guide です。区分資料も必要です。",
            "L-440 の共有作成、CHG-440、資料区分と共有ルールの 3 枚です。"
          ],
          "solution": "共有作成ログ、CHG-440、資料区分と共有ルールを選びます。対象不一致と禁止された匿名共有を別々に裏付けます。"
        },
        {
          "id": "a-g1-step3",
          "title": "3. 分かったことの範囲を判断する",
          "task": "現在の証拠に合う判断を一つ選んでください。未収集のログから何を言えるかにも注意します。",
          "kind": "choice",
          "sourceLabel": "現在の状態と調査範囲",
          "rows": [
            {
              "id": "a-g1-create",
              "sourceType": "log",
              "raw": "2026-10-23T08:01:00Z system=cloud actor_id=svc-survey session=S-440 event=share_created folder=poll-results share_id=L-440 access=anonymous result=success"
            },
            {
              "id": "a-g1-check",
              "sourceType": "log",
              "raw": "2026-10-23T08:04:00Z system=cloud event=share_state_checked share_id=L-440 folder=poll-results state=enabled"
            },
            {
              "id": "a-g1-approval",
              "sourceType": "document",
              "title": "確定した承認 CHG-440",
              "body": "2026-10-23 08:00〜08:20 UTC。svc-survey が folder=public-guide に匿名共有を作成する作業のみ承認。poll-results はこの承認の対象外。"
            },
            {
              "id": "a-g1-asset",
              "sourceType": "document",
              "title": "資料の区分と共有ルール",
              "body": "public-guide：一般公開する案内書。\npoll-results：氏名入りアンケート回答。機密区分で、匿名共有は禁止。"
            },
            {
              "id": "a-g1-coverage",
              "sourceType": "document",
              "title": "アクセス記録の取得状況",
              "body": "08:00〜08:05 UTC の共有設定ログは取得済み。読取り・ダウンロードのログはこの区間で収集が無効。閲覧・取得の有無が分かるほかの資料はない。"
            }
          ],
          "choices": [
            {
              "id": "a-g1-verdict-ok",
              "label": "承認対象外の機密資料の匿名共有が有効。閲覧・ダウンロードは未確認で、共有への対処と追加調査が必要。",
              "feedback": "共有の問題と、アクセスの有無が不明な点を分けています。"
            },
            {
              "id": "a-g1-verdict-leak",
              "label": "閲覧者全員と流出件数が確定した。",
              "feedback": "アクセス記録は未収集です。閲覧者や流出件数は分かりません。"
            },
            {
              "id": "a-g1-verdict-clear",
              "label": "アクセスログがないので誰も読んでおらず、問題なしとして閉じる。",
              "feedback": "未収集を未発生とは扱えません。禁止された共有も有効です。"
            }
          ],
          "answer": {
            "choiceId": "a-g1-verdict-ok"
          },
          "answerExplanation": "承認範囲外で禁止された匿名共有が有効です。共有には対処が必要ですが、アクセスログが未収集なので閲覧やダウンロードは未確認です。",
          "hints": [
            "共有状態は確認済みですが、アクセス記録は未収集です。",
            "共有の問題と、実際の情報取得の有無を分けます。",
            "「匿名共有が有効」「閲覧・ダウンロードは未確認」の両方を残す判断です。"
          ],
          "solution": "承認対象外の共有への対処が必要とし、実際のアクセスは未確認とする判断を選びます。"
        },
        {
          "id": "a-g1-step4",
          "title": "4. 対象を絞った対応と引き継ぎ",
          "task": "まだ対処は実行していません。確認事実・未確認事項・承認に沿った次の対応を一つずつ選び、報告を完成させてください。",
          "kind": "report",
          "sourceLabel": "引き継ぐ記録と対応承認",
          "rows": [
            {
              "id": "a-g1-auth",
              "sourceType": "log",
              "raw": "2026-10-23T08:00:00Z system=identity actor_id=svc-survey credential_id=K-42 session=S-440 event=new_authentication result=success"
            },
            {
              "id": "a-g1-create",
              "sourceType": "log",
              "raw": "2026-10-23T08:01:00Z system=cloud actor_id=svc-survey session=S-440 event=share_created folder=poll-results share_id=L-440 access=anonymous result=success"
            },
            {
              "id": "a-g1-check",
              "sourceType": "log",
              "raw": "2026-10-23T08:04:00Z system=cloud event=share_state_checked share_id=L-440 folder=poll-results state=enabled"
            },
            {
              "id": "a-g1-approval",
              "sourceType": "document",
              "title": "確定した承認 CHG-440",
              "body": "2026-10-23 08:00〜08:20 UTC。svc-survey が folder=public-guide に匿名共有を作成する作業のみ承認。poll-results はこの承認の対象外。"
            },
            {
              "id": "a-g1-asset",
              "sourceType": "document",
              "title": "資料の区分と共有ルール",
              "body": "public-guide：一般公開する案内書。\npoll-results：氏名入りアンケート回答。機密区分で、匿名共有は禁止。"
            },
            {
              "id": "a-g1-coverage",
              "sourceType": "document",
              "title": "アクセス記録の取得状況",
              "body": "08:00〜08:05 UTC の共有設定ログは取得済み。読取り・ダウンロードのログはこの区間で収集が無効。閲覧・取得の有無が分かるほかの資料はない。"
            },
            {
              "id": "a-g1-response",
              "sourceType": "document",
              "title": "08:05 UTC に責任者が承認した対応",
              "body": "L-440 を即時無効化して設定を再確認する。K-42 の新規認証を停止し、K-42 で発行された S-440 も別途無効化し、それぞれ結果を確認する。対象 ID と時刻を記録する。\nこのサービスでは鍵停止だけでは既存セッションは止まらない。ほかのアカウント・共有は正常業務に利用中で、一括停止は未承認。調査資料は保持し、設定変更の経緯と影響範囲は継続確認する。"
            }
          ],
          "choices": [
            {
              "id": "a-g1-fact-ok",
              "label": "K-42／S-440 を使い svc-survey が 08:01 UTC に poll-results の匿名共有 L-440 を作成。08:04 に有効と確認した。承認対象は public-guide で、poll-results は匿名共有禁止の機密資料。",
              "feedback": "ID・時刻・実際の対象・承認との差を根拠にしています。",
              "group": "fact"
            },
            {
              "id": "a-g1-fact-bad",
              "label": "担当者本人が全フォルダーを公開し、全データが取得された。",
              "feedback": "実行者本人、全フォルダー、全データ取得はいずれも未確認です。",
              "group": "fact"
            },
            {
              "id": "a-g1-limit-ok",
              "label": "08:00〜08:05 UTC のアクセスログが未収集のため閲覧・ダウンロードは未確認。K-42 が使われた経緯と、ほかの対象への影響も引き続き調べる。",
              "feedback": "記録範囲と残る調査対象を明記しています。",
              "group": "limit"
            },
            {
              "id": "a-g1-limit-bad",
              "label": "監査ログがない閲覧は存在しないため、情報へのアクセスはなかったと確定。",
              "feedback": "未収集のログからアクセスがなかったとは言えません。",
              "group": "limit"
            },
            {
              "id": "a-g1-next-ok",
              "label": "承認に従い L-440 を無効化し、K-42 の新規認証と S-440 をそれぞれ停止して結果を確認・記録する。証拠を保持し、経緯と影響範囲の調査を引き継ぐ。",
              "feedback": "承認対象に限定し、既存セッションにも別途対処して効果を確認する計画です。",
              "group": "next"
            },
            {
              "id": "a-g1-next-key-only",
              "label": "K-42 の停止だけを行い、L-440 と既存セッションは自動で消えるので確認せず完了とする。",
              "feedback": "鍵停止だけでは既存セッションは止まりません。リンク無効化と各結果確認も必要です。",
              "group": "next"
            },
            {
              "id": "a-g1-next-all",
              "label": "全社の共有とアカウントを一括削除し、調査資料も消して完了とする。",
              "feedback": "承認外で、正常業務への影響と証拠の喪失を招きます。",
              "group": "next"
            }
          ],
          "answer": {
            "parts": {
              "fact": "a-g1-fact-ok",
              "limit": "a-g1-limit-ok",
              "next": "a-g1-next-ok"
            }
          },
          "answerExplanation": "共有状態と承認不一致を事実として報告し、アクセスは未確認と残します。承認された L-440・K-42・S-440 の限定対処と結果確認を計画します。この計画を実行済みとは扱いません。",
          "hints": [
            "事実は K-42／S-440／L-440 と時刻、承認との差を示します。",
            "未確認はアクセスの有無、鍵が使われた経緯、ほかの対象への影響です。",
            "L-440、K-42、S-440 をそれぞれ対処・確認する承認済みの計画を選びます。"
          ],
          "solution": "事実は共有作成と有効状態、未確認はアクセスと経緯・影響、次は L-440・K-42・S-440 の限定対処と結果確認を選びます。"
        }
      ]
    }
  ]
};
if (typeof module !== "undefined" && module.exports) module.exports = globalThis.EASY_DATA;
