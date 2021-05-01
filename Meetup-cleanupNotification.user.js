// ==UserScript==
// @name Meetup - Account Communications - Clean Up
// @namespace Violentmonkey Scripts
// @match https://www.meetup.com/account/comm/*
// @grant none
// ==/UserScript==

const parent = "https://www.meetup.com/account/comm/"
if (parent === window.location.toString()) {
    drillDown();
} else {//if(isChildPage())
    cleanUpEmailMessages()
}

function drillDown () {
    $('.list-item a')[getUpdatedPage()].click()
}

function getUpdatedPage () {
    localStorage.setItem('currentPage', getCurrPage() + 1);
    return getCurrPage();
}

function getCurrPage () {
    return parseInt(localStorage.getItem('currentPage') || -1);
}

function cleanUpEmailMessages() {
    turnOffAllOnCheckboxes();
    toggle("my rsvp is confirmed");
    toggle("RSVPs to events you're hosting");
    toggle("Changes to event time or location");
    toggle("New comments & chat messages");
    toggle("Someone tags or comments on my photo");
    window.history.back();
}

function turnOffAllOnCheckboxes() {
    $("i[aria-checked=true]").toArray().forEach(a => a.click());
}

function toggle(title) {
    (($(`:contains(${title})`)||[])[11]||{click:()=>{}}).click()
}
