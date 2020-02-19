//Find all factors of given number

const factor = (n) => {
    let r=[];
    for(let i=1;i<=n;i++){
        if(n%i === 0)
            r.push(i)
    }
    return r;
}
// console.log(factor(24));

const es6_factor = (n) => [...Array(n+1).keys()].filter(i => n%i ===0);

console.log(es6_factor(30));
// console.log(es6_factor(45));

const prime = (n) => { //run loop only till sqrt of the number
    for(let i=2;i<n;i++){
        if(n%i === 0)
            return false;
    }
    return true;
}
// console.log(prime(7));
const primeFactor = (n) =>{
    const factors = [];

    while(n%2 === 0){
        factors.push(2);
        n = n/2;
    }

    for(let i=3; i <= n;i++){
        if(n%i === 0){
            factors.push(i)
            n=n/i;
        }
        
    }

    if(n>2) factors.push(n);
    return factors;
};

console.log(primeFactor(30));
console.log(primeFactor(45));

const union = (a,b) => [...new Set(a.concat(b))];

console.log(union(primeFactor(30), primeFactor(45)));