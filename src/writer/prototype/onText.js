export function prototypeOnText (condition , callback) {
    this.__textEvent = condition;
    this.__callback = callback;
};