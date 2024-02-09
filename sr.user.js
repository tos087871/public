// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1.4
// @description  try to take over the world!
// @author       You
// @match        https://www.showroom-live.com/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
  'use strict';

  // Your code here...
  console.log('sr started');
  let video = null;
  let videoSelectorText = '.room-video';

  window.addEventListener("load", () => {
    document.querySelector('body').insertAdjacentHTML('beforeend',
      `
        <style id="sr−anim">
          
        </style>
        <div id="mysr" style="font-size: 50pt; position: relative; top: 200 px;">...</div>
        <div id="fullscreen">全画面</div>
      `);

    new MutationObserver(mutationInfoList => {
      for (let mutationInfo of mutationInfoList) {
        for (const node of mutationInfo.addedNodes) {
          if (node.attributes.getNamedItem('id').value === 'sr-anim') {
            //@rf node.attributes.style.display = 'none';
            node.setAttribute('style', 'display: none;');
            observer.disconnect();
            return;
          } else {

          }
        }
      }
    }).observe(document.body, {
      childList:true,
      subtree: true,
    });
    //document.querySelector('#sr-anim').setAttribute('style', 'display: none;');

//document.querySelector(videoSelectorText). attributes.controls = 'true';
document.querySelector(videoSelectorText).setAttribute('controls', true);
    document.querySelector('#fullscreen').onclick = () => {
      //*  
      const video = document.querySelector(videoSelectorText);
      video.requestFullscreen();
      //video.exitFullscreen();
      // */
    };

    console.log('sr completed');
  });
})();
class Util {
  constructor() {
    
  }
  enableVideoControl(videoSelectorText) {
    if (!videoSelectorText) {
      videoSelectorText='video';
    }
    document.querySelector(videoSelectorText).setAttribute('controls', true);
  }
}
/* 
<video data-v-6aee06f7="" playsinline="" autoplay="" src="blob:https://www.showroom-live.com/90ad881e-f28c-4c47-b748-bb3103aa4e08"></video>
*/

function parse(text) {
  for (var i = 0; i < text.length; i++) {
    const curChar = text.stringAt(i);
    if (new RegExp('/[0-9]/', c)) {

    }
  }
}