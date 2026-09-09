// ==UserScript==
// @name         LMD Solve %
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Shows percentage of puzzles solved for a "overview" page
// @author       TVDK
// @match        https://logic-masters.de/Raetselportal/Statistik/uebersicht.php*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=logic-masters.de
// @grant        none
// ==/UserScript==



(function() {
    'use strict';

    let solved_elems = document.getElementsByClassName("rp_uebersicht_solved");
    let unsolved_elems = document.getElementsByClassName("rp_uebersicht_notsolved");
    let unrated_elems = document.getElementsByClassName("rp_uebersicht_bewmiss");
    let info_elem = document.getElementsByClassName("zusammenfassung")[0];

    // -1 to account for the legend/key
    let solved_count = solved_elems.length - 1;
    let unsolved_count = unsolved_elems.length - 1;
    let unrated_count = unrated_elems.length - 1;
    let total = solved_count + unsolved_count + unrated_count;
    let percent_solved = Math.round((solved_count + unrated_count) / total * 100);

    let replacement_elem = document.createElement("div");
    replacement_elem.innerHTML = `The following table lists all puzzles of the result of the search by author and difficulty.<br><br>Solved: ${solved_count + unrated_count}/${total} (${percent_solved}%)`;

    info_elem.replaceWith(replacement_elem);

})();