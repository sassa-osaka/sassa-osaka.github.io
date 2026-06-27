========================================
  刷々 sassa — website files
========================================

【ファイル構成】
  index.html / stay.html / books.html / access.html / info.html
  style.css   共通スタイル（色・フォント）
  script.js   ナビ・フェードイン
  images/     写真（下記の固定ファイル名で差し替え可能）

────────────────────────────────────────
【写真の差し替え方法】★コード編集不要★
────────────────────────────────────────
images フォルダの中の写真を、
「同じファイル名」で上書きするだけで差し替わります。
HTMLは一切触る必要がありません。

  ファイル名            推奨サイズ        場所
  ─────────────────────────────────────────
  hero.jpg            1920×1280        TOP 最上部（主役）
  intro.jpg           1000×1333(3:4)   TOP 紹介の横
  stay-main.jpg       1600×700         Stay 上部の帯
  stay-room.jpg       1000×1333(3:4)   Stay 客室
  stay-01〜05.jpg     1200×900(4:3)    Stay ギャラリー
                      ※stay-03のみ 1600×700（ワイド）
  books-main.jpg      1600×700         Books 上部の帯
  books-interior.jpg  1000×1333(3:4)   Books 店内
  books-01〜05.jpg    1200×900(4:3)    Books ギャラリー
                      ※books-03のみ 1600×700（ワイド）
  access-area.jpg     1600×700         Access 街並み
  og.jpg              1200×630         SNSシェア用（必須）

【写真のコツ】
  ・多少サイズがズレてもOK（自動で枠に合わせて中央表示）
  ・比率（3:4 や 16:7）だけ意識すれば中央がきれいに収まる
  ・1枚300KB以下が理想。squoosh.app で横幅を上記に縮小推奨
  ・現在は仮写真が入っています。本番写真に上書きしてください

────────────────────────────────────────
【公開方法】GitHub Pages（無料）
────────────────────────────────────────
  1. github.com で無料アカウント作成
  2. 新規リポジトリ作成（Public）
     ※名前を「ユーザー名.github.io」にすると
       URLが https://ユーザー名.github.io/ になり一番きれい
  3. Add file → Upload files で
     index.html などの中身＋imagesフォルダを全部アップロード
     （sassaフォルダごとではなく、中身を直接）
  4. Settings → Pages → Branch: main / (root) → Save
  5. 数分後 https://ユーザー名.github.io/ で公開完了

【Googleマップ】
  access.html のコメント部分に、
  Googleマップ→共有→地図を埋め込む でコピーした
  <iframe>...</iframe> を貼り付け

【リンク設定状況】
  ・Airbnb       https://airbnb.jp/h/sassa-osaka  反映済
  ・オンラインショップ https://sassabooks.base.shop/    反映済（Booksページ）
  ・Instagram    https://www.instagram.com/book_sassa/  反映済
  ・メール        sassa.front@gmail.com            反映済
  ・住所         3-22-3 放出東 #F5 2F             反映済
  ・CHILLNN      将来導入時用にコメントで残置
                 （index/stayのコメントを外せば表示されます）

【公開前に差し替えると良い箇所】
  ・og:image（SNSシェア画像 1200×630px、現在は仮写真）
  ・各ページの仮写真 → 本番写真（imagesフォルダを同名で上書き）
