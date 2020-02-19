//Solution
//Two arr a1 n a2
//Our result number n
//n shud be divisible by all elements of a1 -> so n can be considered as LCM(...a1)
//n shud divide all elements of a2 -> so n can be considered as GCD(...a2)
//obviously n will be different for both so v have to find the common numberrs
//GCD(...a2) % n shud be zero..because if GCD is divisible by n then all elements of a2 will be divisible by n

const getGcd = (a,b) => {
    if(b===0)
        return a;
    return getGcd(b,a%b);
} 
const getLcm = (a,b) => {
    return (a*b)/getGcd(a,b);
}

const getTotal = (arr1,arr2) => {
    let factor = 1;
    let multiple = 0;
    for(let i=0;i<arr2.length;i++){
        multiple = getGcd(multiple,arr2[i]);
    }
    for(let j=0;j<arr1.length;j++){
        factor = getLcm(factor,arr1[j]);
       
        if(factor > multiple){
            return 0;
        }
    }
    if(multiple % factor !== 0){
        return 0;
    }
    let totalX = 1;
        
    for (let i = factor; i < multiple; i++) {
        if (multiple % i == 0 && i % factor == 0) {
            totalX++;
        }
    }

    return totalX;    
}
console.log(getTotal([2,4],[16,32,96]));