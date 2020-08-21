function solution(citations) {
    let answer = 0;
    let buf = [];
    let j = 0;
    let flag = 0;
    
    citations = citations.sort((a, b) => {
        return a - b;
    });
    
    j = citations.length;
    
    for (let i in citations) {
        buf[i] = [citations[i], j];
        j--;
    }
    
    for (let i in buf) {
        if (buf[i][1] >= buf[i][0]) {
            for (j=0; j<i; j++) {
                if (j==buf[i][0]) {
                    flag = 1;
                    break;
                }
            }
            
            if (flag == 0) {
                answer = buf[i][0];
            }
            
        }
        console.log(answer); 
    }
    
    return answer;
} // 배열 안에서 ㅗ-index를 찾는 경우의 수!^^