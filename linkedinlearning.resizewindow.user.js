// ==UserScript==
// @name         LinkedIn Learning Large Screen
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  resize linkedin learning video to the size of the browser.
// @author       You
// @match        https://www.linkedin.com/learning/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    document.querySelector(".classroom-layout__stage").style.maxHeight = "100%"
    document.querySelector(".classroom-layout__stage").style.flex = "0 0 100%"
})();
