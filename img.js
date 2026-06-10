// ==UserScript==
// @name         imglist
// @namespace    http://tampermonkey.net/i/
// @version      0.0.1
// @description  try to take over the world!
// @author       You
// @match        *://*/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
  'use strict';
  
  window.addEventListener("load", () => {
    addDisplayButton();
  });
  
  function addDisplayButton() {
    document.querySelector('body').insertAdjacentHTML('beforeend',
      `
        <div id="mysr" style="font-size: 12pt; position: fixed !important; top: 0px;left: 180px; z-index: 2147483647 !important;">
          <div id="img-list-button">画像一覧</div>
        </div>
      `
    );
    document.querySelector('#img-list-button').onclick = item => {
      addListContainer();
    };
  }
  
  function addListContainer() {
    document.querySelector('body').insertAdjacentHTML('beforeend',
      `
        <div id="img-list-container" style="font-size: 12pt; position: fixed !important; top: 0px;left: 180px; z-index: 2147483647 !important;">
          <div id="img-list-container-close">X 閉じる</div>
        </div>
      `
    );
    document.querySelector('#img-list-container-close').onclick = () => {
      imgListContainer.remove();
    };
    const imgListContainer = document.querySelector('#img-list-container');
    document.querySelectorAll('img').forEach(item => {
      const newImg = item.cloneNode();
      addSingleListImage(imgListContainer, newImg);
      /*newImg.width=200;
      imgListContainer.appendChild(newImg);*/
    });
    addCssBg(imgListContainer);
  }
  
  function addCssBg(imgListContainer) {
    console.log('bg')
    document.querySelectorAll('*').forEach(item => {
      //console.log(item)
      const css = window.getComputedStyle(item).backgroundImage;
      console.log(css)
      const matchList = css.match(/(?:url\s*\(\s*")([^\s]*)(?:"\s*\))/);
      if (!matchList) {
        return;
      } else {
        
      }
      console.log(matchList[1])
      const newImage = new Image();
      newImage.src = matchList[1];
      newImage.onload = () => {
        addSingleListImage(imgListContainer, newImage);
      };
    });
  }
  
  function addSingleListImage(imgListContainer, newImg) {
    newImg.width = 200;
    imgListContainer.appendChild(newImg);
  }
})();