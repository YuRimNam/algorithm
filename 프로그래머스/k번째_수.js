function solution(array, commands) {
    let answer = [];
    let buf = [];
    let start;
    let end;
    
    for (let i in commands) {
        start = commands[i][0] - 1;
        if (commands[i][1] - commands[i][0] == 0) {
            end = 0;
        } else {
            end = commands[i][1] - commands[i][0];
        }

        buf = array.splice(start, end);
        buf.sort();
        answer.push(buf[(commands[i][2])]);
    }
    
    return answer;
}