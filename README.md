# GoogleScholarOnUTokyoGateway

## 概要
Google Scholarのページのリンクを自動的に書き換え、UTokyo SSL-VPN Gateway経由でのアクセスにするためのウェブブラウザ用プラグインです。[東京大学情報基盤センターが公開している内容に基づいて](https://www.sodan.ecc.u-tokyo.ac.jp/hack/search-engine-via-ssl-vpn/)書き換えを行っています。Tampermonkeyと呼ばれる、ユーザーが定義したjavascriptをページに追加で適用するソフトウェアを使っています。

## 使い方
1. お使いのブラウザに[Tampermonkey](https://www.tampermonkey.net/)を入れて有効化してください。Chrome, Microsoft Edge, Safari, Opera, Firefox等に対応しています。
1. [こちらのリンク](https://raw.githubusercontent.com/Tagussan/GoogleScholarOnUTokyoGateway/master/auto_gateway.user.js)をクリックして下さい。表示されたTampermonkeyの画面に従い、スクリプトをインストールして下さい。インストール自体は一瞬で完了します。
もし上記リンクをクリックして単なるテキストが表示された場合は、Tampermonkeyが入っていないか、有効化されていません。
1. 正常にインストールされていれば、Google Scholarの検索結果に出てくるリンクが自動的に書き換わります。必要に応じてGatewayにログインして下さい。

## 注意事項
- 自己責任でお使い下さい。
- たまに失敗するリンクがあります。その場合はTampermonkeyから一旦スクリプトを無効にし、手動でアクセスして下さい。

## ライセンス
Released under the MIT license

## 更新履歴
First published on 2020/04/12
