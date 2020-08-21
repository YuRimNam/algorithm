function solution(clothes) {
    let answer = 1;
    let a ={};
    
    clothes.forEach((key) => {
        if (a[key[1]] >= 1) {
            a[key[1]] += 1;
        } else {
            a[key[1]] = 1;
        }   
    })
    
    
    for (let i in a) {
        answer *= (a[i]+1);
    }
    
    return answer-1;
}