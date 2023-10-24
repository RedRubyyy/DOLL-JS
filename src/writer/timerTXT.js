import { DELETE_SPEED } from "../var/global.js";

export function createOveralTime_TXT(objectclass , text) {
    let result = 0;
    result += text.length * objectclass.writeTime;

    if (objectclass.deleteAnimation == true) {
      objectclass.closeMode == 'forward' 
        ? false 
        : result += (text.length+2) * DELETE_SPEED + objectclass.delay;
    };
    
    return result;
};