//To find LCM
//-> find prime factors of the two numbers
//-> take union of both the factors
//-> multiply all the numbers in the union

const prime = (n) => {
    for(let i=2;i< n;i++){
        if(n % i ===0 )
            return false;
    }
    return true;
}

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

const gcd = (a,b) => {
    if(b===0)
        return a;
    return gcd(b, a%b);
}
//15,20
//20,15
//15,5
//5,0

const lcm_1 = (a,b) => {
    // const p1 = primeFactor(a);
    // const p2 = primeFactor(b);
    // console.log([...p1],[...p2])
    // const union =[...p1,...p2];
    // console.log(union)
    // const l = union.reduce((a,b) => a*b);
    // console.log(l);  
    //lcm(a,b) = (a*b)/GCD(a,b) 
    const gcdval = gcd(a,b);
    const l = (a*b)/gcd(a,b);
    return l;
}
console.log(lcm_1(15,20))
console.log(lcm_1(60,100))

const lcm_arr = (a) => {
    let factor = 1;
    a.forEach(e => {
        factor = lcm_1(factor,e);
    });
    return factor;
}
console.log(lcm_arr([15,20,100]))