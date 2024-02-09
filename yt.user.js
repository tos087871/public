// ==UserScript==
// @name         YouTube Fullscreen 
// @namespace    http://tampermonkey.net/
// @version      0.1.10
// @description  try to take over the world!
// @author       You
// @match        https://m.youtube.com/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
  'use strict';

  // Your code here...
  console.log('yt started');
  let video = null;
  let videoSelectorText = '.html5-main-video';

  window.addEventListener("load", () => {
    document.querySelector('body').insertAdjacentHTML('beforeend',
      `
        <style id="sr−anim">
          video {
            min-height: 100% !important;
          }
        </style>
        <div id="mysr" style="font-size: 32pt; position: fixed !important; top: 200px; z-index: 2147483647 !important;">...
        <div id="fullscreen">全画面</div>
        </div>
      `);

    //document.querySelector('#sr-anim').setAttribute('style', 'display: none;');

    document.querySelector('#fullscreen').onclick = () => {
      //*  
      const video = document.querySelector(videoSelectorText);
      video.requestFullscreen();
      //video.exitFullscreen();
      // */
    };

    class Util {
      constructor() {

      }
      enableVideoControl(videoSelectorText) {
        if (!videoSelectorText) {
          videoSelectorText = 'video';
        }
        document.querySelector(videoSelectorText).setAttribute('controls', true);
      }
    }

    new Util().enableVideoControl(videoSelectorText);
    console.log('sr init completed');
  });
})();

/* 
<video data-v-6aee06f7="" playsinline="" autoplay="" src="blob:https://www.showroom-live.com/90ad881e-f28c-4c47-b748-bb3103aa4e08"></video>
*/