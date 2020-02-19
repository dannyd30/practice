function solution(A,K){
    if(A.length === 0 || A.length === K)
        return A;
    if(K > A.length)
        K = K-A.length;
    
    let mapArr=[];
    let len = A.length;
    for(let i=0; i<len;i++){
        let map={};
        if(i+K < len ){
            map[A[i]]=i+K;
        }else {
            map[A[i]] = i+K-len;
        }
        mapArr.push(map);
    }
    console.log(mapArr.sort((a,b) => ));
    // map.sort()
}
console.log(solution([1,2,3],1));
//1