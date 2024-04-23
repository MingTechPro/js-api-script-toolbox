/*!
 * Filename: rmPsuhplusAd.js
 * Edition: V1.0.0
 * Author: MingTechPro
 * Copyright © 2024 MingTechPro. All Rights Reserved.
 * License: MIT & CC BY 4.0
 */
function rmPsuhplusAd(selector) {
    if (window.location.href.includes("https://www.pushplus.plus/")) {
        var elements = document.querySelectorAll(selector);
        elements.forEach(function(element) {
            element.parentNode.removeChild(element);
        });
        console.log("All matching elements have been deleted.");
    } else {
        console.log("The current page is not https://www.pushplus.plus/, The deletion operation cannot be performed.");
    }
}

document.addEventListener("DOMContentLoaded", function(event) {
    rmPsuhplusAd(".container.py-3.text-center");
});
