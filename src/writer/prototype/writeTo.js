import { startInterval_TXT } from "../module/wsv.js";
import { startInterval_TXTS } from "../module/wmv.js";

export function prototypeWriteTo (element , text) {
  const useless = typeof text == 'object' && text.length == 1;
  if (useless) {
    text = text.toString();
  };
  const objectclass = this;
  const important = {element , text , objectclass};
  
  if ( typeof important.text == 'string') {
    let charIndex = 1;
    element.innerHTML = text[0];
    element.style.opacity = 0;
    startInterval_TXT(important , charIndex);
  };
  if (typeof text == 'object' && text.length >1) {
    let charIndex = 1;
    let textIndex = 0;
    let textNow = text[textIndex];
    element.innerHTML = textNow[0];
    element.style.opacity = 0;
    startInterval_TXTS(important, charIndex , textIndex , textNow);
  };

  this.__activeText = important.text;
  this.__activeElement = element;
  return this;
};