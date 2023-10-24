import {CHANGEOVER_DELAY , DELETE_SPEED } from '../../var/global.js'

export function dltInterval_TXT ({element , text , objectclass} , charIndex , infinite) {
  const interval = setInterval (function () {
    element.innerHTML = text.slice(0 , charIndex) + objectclass.object;

    if (charIndex == 0) {
      if (!objectclass.objectShow) {
        element.style.opacity = 0;
      };
      clearInterval(interval);
      
      infinite ? setTimeout (function () {
        startInterval_TXT({element , text , objectclass} , charIndex);
      } , CHANGEOVER_DELAY) : false;
      return;
      
    };
    charIndex--;
  } , DELETE_SPEED);
};