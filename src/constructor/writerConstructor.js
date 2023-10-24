import { textWrite_argumentValidation } from '../writer/argumentValidation.js'

// COLPLETE FIELD AND KEYS
const complete_keys = ['delay' , 'writeTime' , 'closeMode', 'object' , 'objectShow' , 'deleteAnimation'];
const auto_complete = [1000 , 200 , 'forward' , '|' , false , true , true];

function TextWriter ({delay , writeTime , closeMode , object , objectShow , deleteAnimation } = {}) {    
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

export function writerClass () {
  return TextWriter;
};