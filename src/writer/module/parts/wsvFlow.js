import { dltInterval_TXT } from "../dsv.js"
import { startInterval_TXT } from "../wsv.js";

export function innerFlow ( {element , text , objectclass} , charIndex , DA) {
    return function () {
    
        switch (objectclass.closeMode) {
            case 'forward' : {
          
              objectclass.objectShow 
              ? element.innerHTML = text + objectclass.object
              : element.innerHTML = text;
          
            }; break;
          
            case 'begining' : {
          
              if (DA) return dltInterval_TXT({element , text , objectclass} , charIndex , false);
              element.innerHTML = objectclass.object;
              
              if (!objectclass.objectShow) {
                return element.style.opacity = 0;
              };
          
            }; break;
            case 'infinity' : {
          
              if (DA) {return dltInterval_TXT({element , text , objectclass} , charIndex , true);};
              !objectclass.objectShow 
              ? element.style.opacity = 0 
              : element.innerHTML = objectclass.object;
              
              charIndex = 0;
              startInterval_TXT({element , text , objectclass}, charIndex);
            } break;
        };
    
    };
}