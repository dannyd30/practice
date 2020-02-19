//Find GCD of two numbers
//GCD of two numbers is the largest number which will divide both numbers with no remainder
//eg GCD(6,3) -> 3 
//GCD(12,6) -> 6
//Efficient solution is to use Euclidean algo
//Euclidean algo is if v subtract larger number with smaller number -> the number left when one is zero is the GCD

const gcd = (a,b) => {
    if(b === 0)
        return a;
    return gcd(b, a%b);
}

const gcd_arr = (a) => {
    let g=0;
    a.forEach(e => {
        g = gcd(g,e);   
    });
    return g;
}
console.log(gcd_arr([15,20,10]))
console.log(gcd(15,20));
console.log(gcd(5,10));