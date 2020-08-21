function solution(progresses, speeds) {
    let answer = [];
    let leftp = 0;
    let j=1;
    let answeridx = 0;
    let leftd = [];


    for (let i in progresses) {
        leftp = 100-progresses[i];
        leftd[i] =  Math.floor(leftp/speeds[i]+(leftp % speeds[i] === 0 ? 0 : 1));
    }

    for (let i in leftd) {
        if (i == 0) {
            answer.push(1);
        } 

        for (j=i-1; j>=0; j--) {
            if (leftd[j] >= leftd[i]) {
                answer[answeridx]++;
                break;
            } else if (j == 0) {
                answer.push(1);
                answeridx++; 
            }
        }
        j++;
    }
    
    return answer;
}