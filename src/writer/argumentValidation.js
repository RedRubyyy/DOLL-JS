export function textWrite_argumentValidation ({delay , writeTime , closeMode , object , objectShow , deleteAnimation}) {
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