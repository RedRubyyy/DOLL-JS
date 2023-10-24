// DOLL PRODUCTION SCRIPTS


// GLOBAL VARIABLE
var DELETE_SPEED = 100; // DIGUNAKAN JIKA DELETE ANIMATION TRUE
var CHANGEOVER_DELAY = 1000;// DIGUNAKAN HANYA PADA CLOSEMODE INFNITY

// CONSTRUCTOR
function TextWriterF ({delay , writeTime , closeMode , object , objectShow , deleteAnimation} = {}) {    
    const complete_keys = ['delay' , 'writeTime' , 'closeMode', 'object' , 'objectShow' , 'deleteAnimation'];
    const auto_complete = [1000 , 200 , 'forward' , '|' , false , true];
    const arguments_object = arguments[0] || {};
  const arguments_keys = Object.keys(arguments_object);

  complete_keys.forEach(( key , index  )=> {
    !arguments_keys.includes(key)
      ? arguments_object[`${key}`] = auto_complete[index] 
      : arguments_object[`${key}`] = arguments_object[`${key}`];
  });

  const result = textWrite_argumentValidation(arguments_object);
  if (result == true) {
    this.delay = arguments_object.delay;
    this.writeTime = arguments_object.writeTime;
    this.closeMode = arguments_object.closeMode;
    this.object = arguments_object.object;
    this.objectShow = arguments_object.objectShow;
    this.deleteAnimation = arguments_object.deleteAnimation;
    
    // LETTER PROPERTIES
    this.__activeText = null;
    this.__activeElement = null;
    this.__textEvent = undefined;
    this.__callback = function () {};
  };
};
function writerClass () {
  return TextWriterF;
};

// MODULE WRITER
function startInterval_TXT ( {element , text , objectclass} , charIndex ) {
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
        
        setTimeout( function () {
    
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
        
        } , objectclass.delay);
        return;
      };
        charIndex ++;
    } , objectclass.writeTime);
  };
  function dltInterval_TXT ({element , text , objectclass} , charIndex , infinite) {
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

  function startInterval_TXTS ({element , text , objectclass }, charIndex , textIndex , textNow) {
    if (textIndex == text.length) {
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
        return;
      };
      charIndex++;
    }, objectclass.writeTime);
  };

  function textWrite_argumentValidation ({delay , writeTime , closeMode , object , objectShow , deleteAnimation}) {
    if (typeof delay != 'number') 
      throw console.error('The delay argument must be of type data number.');

    if (typeof writeTime != 'number') 
      throw console.error('The writeTime argument must be of type data number.');

    if (closeMode != 'forward' && closeMode != 'begining' && closeMode != 'infinity') 
      throw console.error('The closeMode types for arguments are only available "begining", "forward" and "infinity".');

    if (typeof object != 'string')
      throw console.error('The object argument must be a string data type.');

    if (typeof objectShow != 'boolean') 
      throw console.error('The objectShow argument must state either true or false , nothing else.');

    if (typeof deleteAnimation != 'boolean')
      throw console.error('The deleteAnimation argument must state either true or false , nothing else.');

    return true;
};
function createOveralTime_TXT(objectclass , text) {
    let result = 0;
    result += text.length * objectclass.writeTime;

    if (objectclass.deleteAnimation == true) {
      objectclass.closeMode == 'forward' 
        ? false 
        : result += (text.length+2) * DELETE_SPEED + objectclass.delay;
    };
    
    return result;
};
function createOveralTime_TXTS (objectclass , texts) {
    let result = 0;
    const textIndex = texts.length - 1;
    texts.forEach( ( text , index )=> {
        if (objectclass.closeMode == 'forward' && textIndex == index) {
            result += text.length * objectclass.writeTime;
        }else {
            result += text.length * objectclass.writeTime + objectclass.delay;
        };        
        if (texts.length - 1 !== index) {
            result += CHANGEOVER_DELAY ;
        };
        if (objectclass.deleteAnimation) {   
            if (objectclass.closeMode == "forward"  ) {
                textIndex !== index 
                    ? result += DELETE_SPEED * (text.length + 2)
                    : false;
            } else {
                result += DELETE_SPEED * (text.length + 2);
            };
        };
    });
    return result;
};
function prototypeOnsolve (callback) {
    const objectClass = this;
    const solveTime = typeof this.__activeText == 'string'
      ? createOveralTime_TXT(this , this.__activeText)
      : createOveralTime_TXTS(this , this.__activeText);

    setTimeout(function () {
      callback(objectClass.elementWrite);
    } , solveTime);
    return this;
};
function prototypeOnText (condition , callback) {
    this.__textEvent = condition;
    this.__callback = callback;
};
function prototypeWriteTo (element , text) {
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
const TextWriter = writerClass();

TextWriter.prototype.writeTo = prototypeWriteTo;
TextWriter.prototype.onSolve = prototypeOnsolve;
TextWriter.prototype.onText = prototypeOnText;