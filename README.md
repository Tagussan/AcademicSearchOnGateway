# AcademicSearchOnGateway

[English version is here](https://github.com/Tagussan/AcademicSearchOnGateway/blob/master/README_en.md)

## 概要
Google ScholarやMicrosoft Academicなどの論文検索ページのリンクを自動的に書き換え、UTokyo SSL-VPN Gateway経由でのアクセスにするためのウェブブラウザ用プラグインです。大学のネットワークからアクセスしているのと同様に、自宅など他の場所からでも簡単に論文を探すことが出来ます。Tampermonkeyと呼ばれる、ユーザーが定義したjavascriptをページに追加で適用するソフトウェアを使っています。

### 他の大学一覧
有志の方が他大学にも移植して下さっています。
- 大阪大学 by obameyanさん https://github.com/obameyan/GoogleScholarOnOsakaUnivLibrary

## 使い方
1. お使いのブラウザに[Tampermonkey](https://www.tampermonkey.net/)を入れて有効化してください。Chrome, Microsoft Edge, Safari, Opera, Firefox等に対応しています。
2. 下記のリンクをクリックして下さい。表示されたTampermonkeyの画面に従い、スクリプトをインストールして下さい。インストール自体は一瞬で完了します。いくつでも同時にインストールできます。
もしリンクをクリックして単なるテキストが表示された場合は、Tampermonkeyが入っていないか、有効化されていません。
  - [Google Scholarはこちら](https://raw.githubusercontent.com/Tagussan/GoogleScholarOnUTokyoGateway/master/google_scholar_auto_gateway.user.js)
  - [Microsoft Academicはこちら](https://raw.githubusercontent.com/Tagussan/GoogleScholarOnUTokyoGateway/master/microsoft_academic_auto_gateway.user.js)
3. 正常にインストールされていれば、Google Scholarの検索結果に出てくるリンクやMicrosoft Academicの外部リンクが自動的に書き換わります。必要に応じてGatewayにログインして下さい。

## アップデート方法
上記のリンクをクリックして出てくる画面で「更新」を押してください。アップデートは一瞬で完了します。

## 注意事項
- 自己責任でお使い下さい。
- たまに失敗するリンクがあります。その場合はTampermonkeyから一旦スクリプトを無効にし、手動でアクセスして下さい。

## ライセンス
Released under the MIT license

## 更新履歴
- First published on 2020/04/12
- [新しいVPN Gatewayサービス](https://twitter.com/gacos_utokyo/status/1250342624734507010)が公開されたので対応しました。(2020/4/15)
- 他大学一覧を加えました。大阪大学のリンクを追加 (2020/4/16)
- [Added English README](https://github.com/Tagussan/AcademicSearchOnGateway/blob/master/README_en.md) (2021/05/24)
- [EZproxy](https://www.lib.u-tokyo.ac.jp/ja/library/literacy/user-guide/campus/offcampus/ezproxy)に対応しました。現行のSSL-VPN Gatewayは年度末までの提供となり、古いバージョンのプラグインは利用できなくなります。プラグインをアップデートし、EZproxyへの移行をお願いします。(2021/09/29)
