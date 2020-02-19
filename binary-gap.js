function bGap(n){
    if(parseInt(n) === NaN)
        return;
    
    const bin = n.toString(2);
    let binArr = bin && bin.split && bin.split("") || [];
    binArr = binArr.map(n => parseInt(n));
    console.log(binArr)
    if(binArr.indexOf(0) === -1)
        return 'No gap';
    
    const gaps = [];
    let gap=0;
    for(let i=0; i<binArr.length;i++){
        
        if(binArr[i] === 0 && binArr[i-1] === 1){
            gap=1;
        } else if(binArr[i] === 1){
            if(gap >0) gaps.push(gap);
            gap=0;
        } else if(binArr[i] === 0){
            if(gap > 0 ) gap++;
        }
    }
    if(gaps.length === 0)
        return 'no gap'
    
    return Math.max(...gaps);

    
}
console.log((90).toString(2));
console.log(bGap(90));
