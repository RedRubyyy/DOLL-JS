import { writerClass } from "./constructor/writerConstructor.js";

//prototype
import { prototypeWriteTo } from "./writer/prototype/writeTo.js";
import { prototypeOnsolve } from "./writer/prototype/onSolve.js";
import { prototypeOnText } from "./writer/prototype/onText.js";

export const TextWriter = writerClass();

TextWriter.prototype.writeTo = prototypeWriteTo;
TextWriter.prototype.onSolve = prototypeOnsolve;
TextWriter.prototype.onText = prototypeOnText;
