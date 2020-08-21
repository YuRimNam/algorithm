function solution(clothes) {
    let answer = 1;
    let clo = {};
 
    clothes.forEach((key) => {
        if (clo[key[1]] >= 1) {
            clo[key[1]] += 1;
        } else {
            clo[key[1]] = 1;
        }
    });

    for(let i in clo) {
        answer *= (clo[i]+1)
    }
    return answer-1;
}