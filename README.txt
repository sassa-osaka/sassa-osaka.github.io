刷々 sassa — website（灯あり・最終版）
======================================
index / stay / books / access / info ＋ style.css / script.js
sitemap.xml / robots.txt / images（軽量化・厳選済み）

■ 灯のON/OFFの切り替え方（自分でできます）
1. GitHubで script.js を開く
2. 鉛筆アイコン（Edit）を押す
3. 下の方にあるこの行を探す：
     var LAMP_ENABLED = true;
4. true を false に書き換えて Commit changes
   → 灯・漂い・ザラつき・写真の暗さがすべてOFFになり、
     「静かな夜だけ」のデザインに切り替わります
   （元に戻す時は false を true に）

■ 灯ONのときの挙動
・カーソル／指先が灯りになり、近づいた写真が明るくなる
・触れない間は灯りがゆっくり漂う
・Access / Info は演出控えめ
・「視差効果を減らす」端末では自動OFF
