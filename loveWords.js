/*!
 * Filename: loveWords.js
 * Edition: V1.0.1
 * Author: MingTechPro
 * Blog：
 * Copyright © 2024 MingTechPro.
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
        if (document.getElementById("love_words_text")) {
            document.getElementById("love_words_text").innerHTML = data.content;
        } else {
            console.error("找不到 ID 为 love_words_text 的元素！");
        }
    });