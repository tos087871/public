// ==UserScript==
// @name         YouTube Fullscreen 
// @namespace    http://tampermonkey.net/
// @version      0.1.14
// @description  try to take over the world!
// @author       You
// @match        https://m.youtube.com/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// @updateURL    https://github.com/tos087871/public/raw/main/yt.user.js
// ==/UserScript==

(function() {
  'use strict';

  // Your code here...
  console.log('yt started');
  let video = null;
  let videoSelectorText = '.html5-main-video';

  window.addEventListener("load", () => {
    console.log('yt-loaded');
    document.querySelector('body').insertAdjacentHTML('beforeend',
      `
        <style id="sr−anim">
          /*@media screen and (max-height: 550px) {*/
          /*video {
            min-height: 100vh !important;
            //position: fixed;
            top: 0;
            left: 0;
            z-index: 2147483647 !important;
          }
        /*  }*/
        </style>
        <div id="mysr" style="font-size: 24pt; position: fixed !important; top: 0px;left: 180px; z-index: 2147483647 !important;">
          <div id="fullscreen">全画面</div>
        </div>
      `);

    document.querySelector('#fullscreen').onclick = () => {
      //*  
      const video = document.querySelector(videoSelectorText);
      //video.attributes.style.min
      video.requestFullscreen();
      //video.exitFullscreen();
      // */
      new Util().enableVideoControl(videoSelectorText);
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