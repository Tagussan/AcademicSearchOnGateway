# AcademicSearchOnGateway

## TL;DR
This is a browser plugin that rewrites URL links in the result of academic search engines such as Google Scholar and Microsoft Academic. The new URL redirects the page so that its access is through UTokyo SSL-VPN Gateway. You can easily search for papers from other locations, such as your home, just as if you were accessing them from your university network. The rewrite rule is based on [the procedure published by the Information Technology Center The University of Tokyo](https://www.sodan.ecc.u-tokyo.ac.jp/hack/search-engine-via-ssl-vpn/). This plugin uses 'Tampermonkey', a software that applies user-defined javascript on web pages.

### Other universities
Some volunteers customize this script for other universities. If you wish to use this plugin in your university, please make a contact to @tagsanov on Twitter. I may help you.
- Osaka University by obameyan https://github.com/obameyan/GoogleScholarOnOsakaUnivLibrary

## How to use
1. Install [Tampermonkey](https://www.tampermonkey.net/) in your browser. Chrome, Microsoft Edge, Safari, Opera, and Firefox are available.
2. Click the following links. Follow the instructions on the page of Tampermonkey to install this plugin. The installation itself finishes instantly. You can install as many scripts at once.
If you see just a text when you click these links, it means that Tampermonkey is not installed or not enabled.
- [For Google Scholar](https://raw.githubusercontent.com/Tagussan/GoogleScholarOnUTokyoGateway/master/google_scholar_auto_gateway.user.js)
- [For Microsoft Academic](https://raw.githubusercontent.com/Tagussan/GoogleScholarOnUTokyoGateway/master/microsoft_academic_auto_gateway.user.js)
3. If the plugin is installed successfully, the links that appear in the search result of Google Scholar or Microsoft Academic are automatically modified. Log in to the Gateway as necessary.

## Notice
- Please use this at your own risk.
- Sometimes this plugin fails to rewrite. In this case, please disable the script from Tampermonkey and access the link manually.
- To update the plugin, just click the links again in the "How to use 2.".

## License
Released under the MIT License


## Update history
- First published on 2020/04/12
- [New VPN Gateway service](https://twitter.com/gacos_utokyo/status/1250342624734507010) was published and now available in this plugin(2020/4/15)
- Added the section Other universities. Added the links to the Osaka University (2020/4/16)
- Added English README (2021/05/24)
