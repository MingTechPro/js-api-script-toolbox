/*!
 * Filename: loveWords.js
 * Edition: V1.0.0
 * Author: MingTechPro
 * Blog：
 * Copyright © 2024 MingTechPro. All Rights Reserved.
 * License: MIT & CC BY 4.0
 */
fetch('https://api.uomg.com/api/rand.qinghua')
    .then(response => {
        if (!response.ok) {
            throw new Error('The network response is abnormal: ' + response.statusText);
        }
        return response.json();
    })
    .catch(error => {
        console.error('There is a problem with your fetch operation: ', error);
    })
    .then(data => {
        document.getElementById("love_words_text").innerHTML = data.content;
    });