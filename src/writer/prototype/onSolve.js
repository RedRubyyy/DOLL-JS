import { createOveralTime_TXT } from "../timerTXT.js";
import { createOveralTime_TXTS } from "../timerTXTS.js";

export function prototypeOnsolve (callback) {
    const objectClass = this;
    const solveTime = typeof this.__activeText == 'string'
      ? createOveralTime_TXT(this , this.__activeText)
      : createOveralTime_TXTS(this , this.__activeText);

    setTimeout(function () {
      callback(objectClass.elementWrite);
    } , solveTime);
    return this;
};