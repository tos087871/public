// ==UserScript==
// @name         YouTube Fullscreen 
// @namespace    http://tampermonkey.net/
// @version      0.1.15
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
  `
<div class="bpx-player-video-wrap"><video crossorigin="anonymous" preload="auto" src="blob:https://www.bilibili.com/e6ddf136-6439-447b-99ef-16871b83a22e"></video></div>
`
  
  function getSelector() {
    //url.hostname
    switch (location.hostname) {
      case 'm.youtube.com':
      case 'www.youtube.com':
        return ''
      case 'www.bilibili.com':
        return '.bpx-player-video-wrap video';
      case '8tsu.net':
        return '';
      default:
        return '';
    }
  }
  
  //window.addEventListener('load',
  const video = document.querySlector(getSelector());
  if (!video) return;
  
  const key = 'video resume';
  
  setInterval(() => {
    localStorage.setItem(key, video.currentTime); //sec
  }, 5 * 1000);
  
  const preTime = localStorage.getItem(key);
  if (preTime) video.currentTime = preTime;
  
})();
