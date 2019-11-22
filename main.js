'use strict';

//Utility functions

const print = (val) => {
        console.log(val);
}
//Each function denotes some basic exercises for practicing

const convertBase = (num, fromBase, toBase) => {
    return parseInt(num + '', fromBase).toString(toBase);
};

print(convertBase(11,2,10));
