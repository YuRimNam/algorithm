function solution(board, moves) {
    let answer = 0;
    let number = 0;
    let buf = [];
    let index = 0;
    
    moves = moves.map(a => a - 1);
    
    for (let i in moves) {
         for (let j=0; j<board.length; j++) {
            if (board[j][moves[i]] != 0) {
                
                buf.push(number);
                board[j][moves[i]] = 0;
                
                if (i==0) index = 0;
                else index++;
                
                break;
             }
         }
        console.log(buf[index], buf[index-1]);
        console.log(buf[index] == buf[index-1]);
        
        if (buf[index] == buf[index-1]) {
            index -= 2;
            buf.splice(index-1, 2);
            answer += 2;
        }
    }
    
    console.log(buf);
    
    return answer;
}