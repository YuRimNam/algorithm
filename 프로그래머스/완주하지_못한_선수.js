function solution(participant, completion) {
    let answer = '';
    let i;
    
    for (i in completion) {
        participant.splice(participant.indexOf(completion[i]), 1);
    }
    
    answer = participant[0];
    return answer;
} // 50점


function solution(participant, completion) {
    let answer = '';
    let i;
    
    participant.sort();
    completion.sort();

    for (i in participant) {
        if (participant[i] !== completion[i]) {
            answer = participant[i];
            break;
        }
    }
    
    return answer;
} // 100점