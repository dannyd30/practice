const cb = (s,d,m) => {
    let result = 0;
    if(m === 1){
        if(s.indexOf(d) === -1) return 0;
        result = s.reduce((r,e) => e===d?r=r+1:r,0);
        return result;
    }
    for(let i=0;(i+m-1)<s.length;i++){
        let  sum = 0;
        for(let j=0;j<m;j++){
            sum += s[i+j];
        }

        if(sum === d) result++;
    }


    return result;
}

console.log(cb([1, 2, 1, 3, 2],4,3));
