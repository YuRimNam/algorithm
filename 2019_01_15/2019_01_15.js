function solution(n) {
    let answer = 0;
    let sArr = new Array();
    sArr[1] = 1;
    sArr[2] = 2;
    for (let i=3; i<=n; i++) {
        sArr[i] = (sArr[i-1] + sArr[i-2])%1000000007;
        answer = sArr[i];
    }
    return answer;
}