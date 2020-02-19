'use strict';

//Utility functions

const print = (val) => {
        console.log(val);
}
//Each function denotes some basic exercises for practicing

const convertBase = (num, fromBase, toBase) => {
    return parseInt(num + '', fromBase).toString(toBase);
};

// print(convertBase(11,2,10));

const binToDec = binNo => parseInt(binNo + '',2);

// print(binToDec(1001))

const changeBase = (no,base) => parseInt(no,10).toString(base);
// print(changeBase(22,2));

const randomNum = (min,max) => {
    if(typeof min !== 'number' && typeof max !== 'number')
        return 0;
    
    if(typeof min !== 'number')
        min = 0;
    else if(typeof max !== 'number')
        max=min+1;
    return min + Math.floor(Math.random()*(max-min+1));
}

// print(randomNum(2,20));

const toDecimal = (no, points) => {
    if(typeof no !== 'number' || typeof points !== 'number')
        return;
    return parseFloat(no).toFixed(points);
}

// print(toDecimal(20.121212,1));

const getMaxNumber = (arr) => {
    if(!Array.isArray(arr))
        return 0;
    return Math.max(...arr);
}

// print(getMaxNumber([2,12,3,1,32]));

const getMinNumber = (arr) => {
    if(!Array.isArray(arr))
        return 0;
    return Math.min(...arr);
}

// print(getMinNumber([2,12,3,1,32]));

const findGcdFor = (x,y) => {
    if(typeof x !== 'number' || typeof y !== 'number')
        return;
        let temp ;
    while(y!==0){
        temp = y;
        y=x%y;
        x=temp;
    }
    return x;
}

// print(findGcdFor(20,24))

const gcdByRec = (x,y) => {
    if(y===0)
        return x;
    
    return gcdByRec(y, x%y);
}
// print(gcdByRec(32,9));
//GCD is associative that means GCD(a,b,c) = GCD(GCD(a,b),c)

const findLCM = (a,b) => {
    if(typeof a !== 'number' || typeof b !== 'number')
        return;

    return ((a*b)/gcdByRec(a,b))
}

print(findLCM(2,4));
print(gcdByRec(16,32,96))