import { startInterval_TXTS } from './wmv.js'
import { CHANGEOVER_DELAY , DELETE_SPEED } from '../../var/global.js';

export function dltInterval_TXTS ({element , text , objectclass} , charIndex , textIndex , textNow ) {
  if (objectclass.closeMode == 'forward' && textIndex == text.length - 1) {
    
    objectclass.objectShow 
    ? element.innerHTML = textNow + objectclass.object
    : element.innerHTML = textNow;
    
    return;

  };
  const interval = setInterval (function () {
    element.innerHTML = textNow.slice(0 , charIndex) + objectclass.object;
    if (charIndex == 0) {

      clearInterval(interval);
      textIndex++;
      textNow = text[textIndex];

      !objectclass.objectShow ? 
      element.style.opacity = 0 : false;

      setTimeout(function () {
        charIndex = 1;
        startInterval_TXTS({element , text , objectclass } , charIndex , textIndex , textNow);
      } , CHANGEOVER_DELAY);
    return;
    };
    charIndex--;
  } , DELETE_SPEED);
};