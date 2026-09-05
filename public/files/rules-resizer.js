// ==UserScript==
// @name         SudokuPad-ResizeRules
// @namespace    http://tampermonkey.net/
// @version      0.1.5
// @description  Adds controls to resize the puzzle rules in Sven's SudokuPad
// @author       Nell Gwyn
// @match        https://*sudokupad.app/*
// @match        https://sudokupad.app/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// @run-at       document-end
// ==/UserScript==

(function() {
    'use strict';

    var resiz0r = {
        // putting all my new vars in a single terribly-named object, to avoid polluting the global namespace too heavily.
        maxH: 14,
        maxW: 30,
        fontS: 1.1, // size of the rules font
        showresizers: true, // whether the resizer controls are visible
        curTop: 0,
        curLeft: 0,
        curX: 0,
        curY: 0,
        numSize: 100, // size of the numberpad buttons
        theNums: "nothing",
        dragging: "none",
        theRules: "nada",
        theControls: "nada",
    };

    function rs_dragStart(e) {
        resiz0r.dragging = e.target.id;
        if (e.type === "touchmove") {
            resiz0r.curX = e.touches[0].clientX;
            resiz0r.curY = e.touches[0].clientY;
        } else {
            resiz0r.curX = e.clientX;
            resiz0r.curY = e.clientY;
        }

        resiz0r.curTop = parseInt(resiz0r.theControls.style.top, 10);
        resiz0r.curLeft = parseInt(resiz0r.theControls.style.left, 10);
    }

    function rs_dragIng(e) {
        // First check to make sure something is being dragged...
        if (resiz0r.dragging !== "none") {

            e.preventDefault();

            let newX;
            let newY;
            if (e.type === "touchmove") {
                newX = e.touches[0].clientX - resiz0r.curX;
                newY = e.touches[0].clientY - resiz0r.curY;
            } else {
                newX = e.clientX - resiz0r.curX;
                newY = e.clientY - resiz0r.curY;
            }

            // Then check for which of the elements is being dragged
            if (resiz0r.dragging === "rs_UR") {
                if (newX > 0 || (newX < 0 && resiz0r.maxW > 15)) {
                    resiz0r.maxW += (newX * 0.0625);
                    resiz0r.theRules.style.maxWidth = resiz0r.maxW + "rem";
                }
                if (newY < 0 || (newY > 0 && resiz0r.maxH > 7)) {
                    resiz0r.maxH -= (newY * 0.0625);
                    resiz0r.curTop += newY;
                    resiz0r.theRules.style.maxHeight = resiz0r.maxH + "rem";
                    resiz0r.theControls.style.top = resiz0r.curTop + "px";
                }
            } else {
                if (newX < 0 || (newX > 0 && resiz0r.maxW > 15)) {
                    resiz0r.maxW -= (newX * 0.0625);
                    resiz0r.curLeft += newX;
                    resiz0r.theRules.style.maxWidth = resiz0r.maxW + "rem";
                    resiz0r.theControls.style.left = resiz0r.curLeft + "px";
                }
                if (newY > 0 || (newY < 0 && resiz0r.maxH > 7)) {
                    resiz0r.maxH += (newY * 0.0625);
                    resiz0r.theRules.style.maxHeight = resiz0r.maxH + "rem";
                }
            }

            resiz0r.curX += newX;
            resiz0r.curY += newY;
        }
    }

    function rs_resizeStuff(e) {
        // resize the fonts or the entire controls bar, to make more room
        if (e.target.id === "rs_FPP" && resiz0r.fontS < 10) {
            resiz0r.fontS += 0.1;
            resiz0r.theRules.style.fontSize = resiz0r.fontS + "rem";
        } else if (e.target.id === "rs_FMM" && resiz0r.fontS > 0.2) {
            resiz0r.fontS -= 0.1;
            resiz0r.theRules.style.fontSize = resiz0r.fontS + "rem";
        } else if (e.target.id === "rs_DGP" && resiz0r.numSize < 1000) {
            resiz0r.numSize += 5;
            resiz0r.theNums.style.scale = resiz0r.numSize + "%";
            resiz0r.theNums.style.marginTop = ((resiz0r.numSize * 2) - 200) + "px";
            resiz0r.theNums.style.marginLeft = ((resiz0r.numSize * 2) - 200) + "px";
            document.getElementById("rs_DL").style.bottom = 450 + ((resiz0r.numSize * 2) - 200) + "px";
        } else if (e.target.id === "rs_DGM" && resiz0r.numSize > 10) {
            resiz0r.numSize -= 5;
            resiz0r.theNums.style.scale = resiz0r.numSize + "%";
            resiz0r.theNums.style.marginTop = ((resiz0r.numSize * 2) - 200) + "px";
            resiz0r.theNums.style.marginLeft = ((resiz0r.numSize * 2) - 200) + "px";
            document.getElementById("rs_DL").style.bottom = 450 + ((resiz0r.numSize * 2) - 200) + "px";
        }
    }

    setTimeout(function() {
        ['<div id="rs_UR" style="position: absolute;top: 50px;right: -25px;width: 40px;height: 40px;border-radius:10px;background-color: rgba(85, 255, 255, 0.4);border-style: dotted;border-color: rgba(85, 170, 255, 0.4);cursor: ne-resize;"></div>',
         '<div id="rs_FPP" style="position: absolute;top: 95px;right: -40px;width: 40px;height: 40px;border-radius:10px;color: rgba(85, 85, 85, 0.4);font-size: 2rem;text-align: center;background-color: rgba(170, 170, 170, 0.4);border-style: dotted;border-color: rgba(85, 85, 85, 0.2);cursor: pointer;">+</div>',
         '<div id="rs_FMM" style="position: absolute;top: 140px;right: -40px;width: 40px;height: 40px;border-radius:10px;color: rgba(85, 85, 85, 0.4);font-size: 2rem;text-align: center;background-color: rgba(170, 170, 170, 0.4);border-style: dotted;border-color: rgba(85, 85, 85, 0.2);cursor: pointer;">-</div>',
         '<div id="rs_DL" style="position: absolute;bottom: 450px;left: -25px;width: 40px;height: 40px;border-radius:10px;background-color: rgba(255, 85, 255, 0.2);border-style: dotted;border-color: rgba(255, 0, 255, 0.3);cursor: sw-resize;"></div>',
         '<div id="rs_DGP" style="position: absolute;top: 210px;right: -40px;width: 40px;height: 40px;border-radius:10px;color: rgba(85, 85, 85, 0.4);font-size: 2rem;text-align: center;background-color: rgba(170, 170, 215, 0.4);border-style: dotted;border-color: rgba(85, 85, 85, 0.2);cursor: pointer;">+</div>',
         '<div id="rs_DGM" style="position: absolute;top: 255px;right: -40px;width: 40px;height: 40px;border-radius:10px;color: rgba(85, 85, 85, 0.4);font-size: 2rem;text-align: center;background-color: rgba(215, 170, 170, 0.4);border-style: dotted;border-color: rgba(85, 85, 85, 0.2);cursor: pointer;">-</div>'].forEach(function(h) {
            var el = document.createElement("div");
            document.getElementsByClassName("controls-info")[0].appendChild(el);
            el.outerHTML = h;
        });

        // Now that I'm done directly modifying HTML, I can set elements to variables.
        resiz0r.theRules = document.getElementsByClassName("puzzle-rules")[0];
        resiz0r.theControls = document.getElementById("controls");
        resiz0r.theNums = document.getElementsByClassName("controls-buttons")[0];

        // Apply the sizes to the element directly rather than via a CSS rule, for convenience
        resiz0r.theRules.style.maxHeight = "14rem";
        resiz0r.theRules.style.maxWidth = "30rem";
        resiz0r.theRules.style.fontSize = "1.1rem";
        resiz0r.theControls.style.scale = "100%";

        // Now to add the event listeners...
        document.getElementById("rs_FPP").addEventListener("click", rs_resizeStuff);
        document.getElementById("rs_FMM").addEventListener("click", rs_resizeStuff);
        document.getElementById("rs_DGP").addEventListener("click", rs_resizeStuff);
        document.getElementById("rs_DGM").addEventListener("click", rs_resizeStuff);

        let ur_el = document.getElementById("rs_UR");
        let dl_el = document.getElementById("rs_DL");

        ur_el.addEventListener("mousedown", rs_dragStart);
        ur_el.addEventListener("touchstart", rs_dragStart);
        ur_el.addEventListener("mousemove", rs_dragIng);
        ur_el.addEventListener("touchmove", rs_dragIng);

        dl_el.addEventListener("mousedown", rs_dragStart);
        dl_el.addEventListener("touchstart", rs_dragStart);
        dl_el.addEventListener("mousemove", rs_dragIng);
        dl_el.addEventListener("touchmove", rs_dragIng);

        window.addEventListener("mouseup", function() { resiz0r.dragging = "none"; });
        window.addEventListener("mouseleave", function() { resiz0r.dragging = "none"; });
        window.addEventListener("touchend", function() { resiz0r.dragging = "none"; });
        window.addEventListener("touchcancel", function() { resiz0r.dragging = "none"; });
    }, 2000);
})();