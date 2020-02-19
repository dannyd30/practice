const br = (scores) => {
    let min = scores[0];
    let max = scores[0];
    let result = [0,0];
    for(let i=1;i<scores.length;i++){
        if(scores[i] < min){
            result[1]++;
            min=scores[i]
        }

        if(scores[i]>max){
            result[0]++;
            max=scores[i]
        }
    }
    return result;
}

console.log(br([10, 5, 20, 20, 4, 5, 2, 25, 1]))
console.log(br([3, 4, 21, 36, 10, 28, 35, 5, 24, 42]))
console.log(br([1]));