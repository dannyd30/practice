//4! = 4*3*2*1

const iterate_fact = (i) => {
    let r = 1;
    while(i>1){
        r=r*i;
        i--;
    }
    return r;

}
console.log(iterate_fact(6))

const rec_fact = (i) => {
    if(i===0)
        return 1;
    return i*rec_fact(i-1)
}

console.log(rec_fact(4))