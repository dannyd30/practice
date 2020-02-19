const mb = (arr) => {
    let o={};

    for(let i=0;i<arr.length;i++){
        if(!!o[arr[i]]) o[arr[i]]++;
        else o[arr[i]]=1;
    }
    let max=0;
    let id=null;
    for(let e in o){
        if(!id) id=e; 
        if(o[e] > max ) {
            
            max=o[e]; id=e;
        } 
    }
return id;

}
console.log(mb( [2,2,1,1]))