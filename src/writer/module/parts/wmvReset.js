import { CHANGEOVER_DELAY } from "../../../var/global.js"
import { dltInterval_TXTS  } from "../dmv.js";
import { startInterval_TXTS } from "../wmv.js";

export function wmvReset ({element , text , objectclass} , charIndex , textIndex , textNow , interval) {
  clearInterval(interval);
  objectclass.objectShow 
    ? element.innerHTML = textNow.slice(0 , charIndex) + objectclass.object
    : element.innerHTML = textNow.slice(0 , charIndex);
    
  if (objectclass.deleteAnimation) {  
    setTimeout (function () {
      dltInterval_TXTS({element , text , objectclass} , charIndex , textIndex , textNow );
    } , objectclass.delay);
    return;
  };
  charIndex = 1;
  textIndex++;
  textNow = text [textIndex];
    
  setTimeout (function () {
    if (objectclass.closeMode != 'forward') {
      objectclass.objectShow 
        ? element.innerHTML = objectclass.object 
        : element.style.opacity = 0;
    };
          
    setTimeout(function () {
      if (textIndex != text.length) {
          objectclass.objectShow 
            ? element.innerHTML = objectclass.object 
            : element.style.opacity = 0;
      };
      startInterval_TXTS({element , text , objectclass} , charIndex , textIndex , textNow);
    } , CHANGEOVER_DELAY);

  }, objectclass.delay);
};