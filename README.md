# AcademicSearchOnGateway

## 概要
Google ScholarやMicrosoft Academicなどの論文検索ページのリンクを自動的に書き換え、UTokyo SSL-VPN Gateway経由でのアクセスにするためのウェブブラウザ用プラグインです。[東京大学情報基盤センターが公開している内容に基づいて](https://www.sodan.ecc.u-tokyo.ac.jp/hack/search-engine-via-ssl-vpn/)書き換えを行っています。Tampermonkeyと呼ばれる、ユーザーが定義したjavascriptをページに追加で適用するソフトウェアを使っています。

### 他の大学一覧
有志の方が他大学にも移植して下さっています。自大学でもご希望の方はTwitter @tagsanovまでご連絡いただければお手伝いできるかも知れません。
- 大阪大学 by obameyanさん https://github.com/obameyan/GoogleScholarOnOsakaUnivLibrary

## 使い方
1. お使いのブラウザに[Tampermonkey](https://www.tampermonkey.net/)を入れて有効化してください。Chrome, Microsoft Edge, Safari, Opera, Firefox等に対応しています。
2. 下記のリンクをクリックして下さい。表示されたTampermonkeyの画面に従い、スクリプトをインストールして下さい。インストール自体は一瞬で完了します。
もしリンクをクリックして単なるテキストが表示された場合は、Tampermonkeyが入っていないか、有効化されていません。
  - [Google Scholarはこちら](https://raw.githubusercontent.com/Tagussan/GoogleScholarOnUTokyoGateway/master/google_scholar_auto_gateway.user.js)
  - [Microsoft Academicはこちら](https://raw.githubusercontent.com/Tagussan/GoogleScholarOnUTokyoGateway/master/microsoft_academic_auto_gateway.user.js)
3. 正常にインストールされていれば、Google Scholarの検索結果に出てくるリンクやMicrosoft Academicの外部リンクが自動的に書き換わります。必要に応じてGatewayにログインして下さい。

## 注意事項
- 自己責任でお使い下さい。
- たまに失敗するリンクがあります。その場合はTampermonkeyから一旦スクリプトを無効にし、手動でアクセスして下さい。
- プラグインを更新する場合、使い方2. のリンクをクリックすると再インストールすることができます。

## ライセンス
Released under the MIT license

## 更新履歴
- First published on 2020/04/12
- [新しいVPN Gatewayサービス](https://twitter.com/gacos_utokyo/status/1250342624734507010)が公開されたので対応しました。(2020/4/15)
- 他大学一覧を加えました。大阪大学のリンクを追加 (2020/4/16)
