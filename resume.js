// ==UserScript==
// @name         YouTube Resum
// @namespace    http://tampermonkey.net/
// @version      0.1.17
// @description  try to take over the world!
// @author       You
// @match        https://m.youtube.com/watch?v=*
// @match        https://www.bilibili.com/*
// @match        *//ok.ru/videoembed/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// @updateURL    https://raw.githubusercontent.com/tos087871/public/refs/heads/main/resume.js
// ==/UserScript==

(function() {
  'use strict';
  
  // Your code here...
  `
<div class="bpx-player-video-wrap"><video crossorigin="anonymous" preload="auto" src="blob:https://www.bilibili.com/e6ddf136-6439-447b-99ef-16871b83a22e"></video></div>
`
  console.log('start')
  /*
  const mode = 'test';
  /*/
  const mode = 'release';
 // */
  function getSelector() {
    //url.hostname
    if (mode==='test') {
      return'.html5-main-video';
    }
    switch (location.hostname) {
      case 'm.youtube.com':
      case 'www.youtube.com':
        return '.html5-main-video';
      case 'www.bilibili.com':
        return '.bpx-player-video-wrap video';
      case 'ok.ru':
      case '8tsu.net':
        return 'video';
      default:
        return '';
    }
  }
  
  //window.addEventListener('load',
  const video = document.querySelector(getSelector());
  if (!video) {
    console.log('video not exist')
    return;
  }
  console.log('video exists')
  const key = 'video resume'+location.url;
  
  const preTime = localStorage.getItem(key);
  if (preTime) video.currentTime = preTime;
  
  setInterval(() => {
    /*if (video.currentTime===video.duration) {
      
    }*/
    localStorage.setItem(key, video.currentTime); //sec
    console.log(video.currentTime)
  }, 5 * 1000);
  
})();
