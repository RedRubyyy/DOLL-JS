import { wmvReset } from "./parts/wmvReset.js";
import { wmvFLow } from "./parts/wmvFlow.js";

export function startInterval_TXTS ({element , text , objectclass }, charIndex , textIndex , textNow) {
  if (textIndex == text.length) {
    wmvFLow({element , text , objectclass }, charIndex , textIndex , textNow);
  };
  const interval = setInterval (function () {
    const cleanText = textNow.slice(0 , charIndex);
    if (cleanText === objectclass.__textEvent) {
      objectclass.__callback();
    };
    const argument = {
      element,
      text,
      objectclass,
    };
    if (charIndex == 1 ) {
      element.style.opacity = 1;
    };
    element.innerHTML = textNow.slice(0 , charIndex) + objectclass.object;
    if (charIndex == textNow.length) {
      wmvReset(argument , charIndex , textIndex , textNow , interval);
      return;
    };
    charIndex++;
  }, objectclass.writeTime);
};