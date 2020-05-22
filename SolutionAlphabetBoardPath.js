/**
 * @param {string} target
 * @return {string}
 */



var alphabetBoardPath = function(target) {
    var pos = [0, 0];
    let sequence = "";
    
    for (let char of target){
        sequence += moveToTarget(pos, char);
        sequence += "!";
    }
    
    return sequence;
};

var moveToTarget = function(pos, targetChar) {
    
    const boardSize = 5;
    const asciiOffset = 97;
    let path = "";
    let charOrder = targetChar.charCodeAt() - asciiOffset;
    let targetCharPos = [Math.floor(charOrder/boardSize), (charOrder)%boardSize];
    
    
    // Handle special case when current pos is at 'z'
    if (pos[0]==5 && pos[1]==0){
        if (targetCharPos[0]==5 && targetCharPos[1]==0) {   // target is 'z', path is ""
            return path;
        } else {                                            // move 1 step up and proceed
            path += 'U';
            pos[0]--;   
        }
    }
    
    
    // Vertical Shift
    let shift = targetCharPos[1] - pos[1];
    let nStep = Math.abs(shift);
    for (let i=1; i<=nStep; i++){
        let step = (shift < 0 ? "L":"R");
        path += step;
    }

    // Horizontal Shift
    shift = targetCharPos[0] - pos[0];
    nStep = Math.abs(shift);
    for (let i=1; i<=nStep; i++){
        let step = (shift < 0 ? "U":"D");
        path += step;
    }
    
    pos[0] = targetCharPos[0];
    pos[1] = targetCharPos[1];
    
    return path;
    
};




