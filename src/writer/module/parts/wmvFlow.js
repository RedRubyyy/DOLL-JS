export function wmvFLow ({element , text , objectclass }, charIndex , textIndex , textNow) {
    switch (objectclass.closeMode) {
        case 'forward' : {
          if (objectclass.objectShow) return element.innerHTML = text[textIndex - 1] + objectclass.object;
          element.innerHTML = text[textIndex - 1];
        } break;
        case 'begining' : {
          element.innerHTML = '' + objectclass.object;
          if (!objectclass.object) {
            element.style.opacity = 0;
          };
        } break;
        case 'infinity' : {
          textIndex = 0;
          charIndex = 1;
          textNow = text[textIndex];
          startInterval_TXTS({element , text , objectclass} , charIndex , textIndex , textNow);
        } break;
      };
    return;
};