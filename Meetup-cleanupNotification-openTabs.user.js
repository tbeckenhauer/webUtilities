// ==UserScript==
// @name Meetup - Account Communications - Open Tabs Loop
// @namespace Violentmonkey Scripts
// @match https://www.meetup.com/account/comm/
// @grant none
// ==/UserScript==

$('.list-item a').forEach((i) => {window.open(i.href, "_blank")})

