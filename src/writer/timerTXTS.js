import { CHANGEOVER_DELAY, DELETE_SPEED } from "../var/global.js";

export function createOveralTime_TXTS (objectclass , texts) {
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
