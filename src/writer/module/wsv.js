import { innerFlow } from "./parts/wsvFlow.js";


export function startInterval_TXT ( {element , text , objectclass} , charIndex ) {
  const interval = setInterval(function () {
    if (charIndex == 1) {
      element.style.opacity = 1;
    };
    element.innerHTML = text.slice(0 , charIndex) + objectclass.object;
      
    if (charIndex == text.length) {
      const DA = objectclass.deleteAnimation;
      clearInterval(interval);
      
      objectclass.objectShow 
        ? element.innerHTML = text.slice(0 , charIndex) + objectclass.object
        : element.innerHTML = text.slice(0 , charIndex);
      
      setTimeout(innerFlow ({element , text , objectclass } , charIndex , DA) , objectclass.delay);
      return;
    };
      charIndex ++;
  } , objectclass.writeTime);
};