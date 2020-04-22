// ==UserScript==
// @name     Microsoft_Academic_on_UTokyo_gateway
// @version  1
// @include  https://academic.microsoft*
// @grant    none
// This software is released under the MIT License, see LICENSE.
// ==/UserScript==

function get_gateway_url(url){
  const url_obj = new URL(url);
  if(url.match('arxiv')){
    return url; //don't use gateway for arxiv
  } else {
    return 'https://gateway2.itc.u-tokyo.ac.jp' + url_obj.pathname + url_obj.search + ',DanaInfo=' + url_obj.hostname;
  }
}

const wait = (ms, callback) => {
  setTimeout(() => {
    callback();
  }, ms);
}

function rewrite() {
  console.log("rewriting");
  const links = Array.from(document.getElementsByTagName('a'));
  const re_url = new RegExp('^(https?|ftp):\/\/');
  const journal_links = links.filter(link => {
    const href = link.href
    return href.match(re_url) && (!href.match('microsoft'));
  });
  journal_links.forEach(link => {
    link.href = get_gateway_url(link.href);
  });
}

wait(1500, rewrite);
