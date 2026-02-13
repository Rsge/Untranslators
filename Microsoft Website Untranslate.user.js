// ==UserScript==
// @name           Microsoft Website Untranslate

// @description    Automatically loads the original language site of a Microsoft subdomain if a translated one is visited.
// @description:de Leitet automatisch zur originalen US-englischen Microsoft Subdomäne weiter, wenn eine übersetzte Version geöffnet wird.

// @version        1.0.2
// @author         Rsge
// @copyright      2026+, Jan G. (Rsge)
// @license        Mozilla Public License 2.0
// @icon           https://favicon.pub/microsoft.com

// @namespace      https://github.com/Rsge/Untranslators
// @homepageURL    https://github.com/Rsge/Untranslators
// @supportURL     https://github.com/Rsge/Untranslators/issues
// @downloadURL    https://update.greasyfork.org/scripts/566189/Microsoft%20Website%20Untranslate.user.js
// @updateURL      https://update.greasyfork.org/scripts/566189/Microsoft%20Website%20Untranslate.meta.js

// @match          https://*.microsoft.com/*

// @run-at         document-end
// @grant          none
// ==/UserScript==
(function() {
    'use strict';

  let origLang = "en-us";
  let href = window.location.href;
  let regex = /([^.]+\.[^.]+\.[^./]+\/)([^/]+)(\/.*)/;
  let replace = "$1" + origLang + "$3";
  if (href.match(regex)[2].toLowerCase() != origLang) {
    window.location.replace(href.replace(regex, replace));
  }
})();
