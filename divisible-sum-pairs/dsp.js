const dsp = (n,k,ar) => {
    let result = 0;

    for(let i=0;i<ar.length-1;i++){
        for(let j=i+1;j<ar.length;j++){
            let val = ar[i]+ar[j];
            if(val % k === 0){
                result++;
            }
        }
    }
    return result;
}

console.log(dsp(6,3,[1,3,2,6,4,5,9]))

//Optimal solution using %
// do elements % k and for each remainder save it as object
// e % k = 1 -> obj
//e%k -0 -> obj and so on

const opt = (k,ar) => {
    let o ={};

    for(let i=0;i<ar.length;i++){
        if(!!o[ar[i]%k])
            o[ar[i]%k]++;
        else    
            o[ar[i]%k]=1;
    }
    return Object.values(o).reduce((r,e) => r+e,0);
}
console.log(opt(3,[1,3,2,6,4,5,9]))