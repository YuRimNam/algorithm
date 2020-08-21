function solution(s, location)
{
    let answer = 0;
    let buf;
    let cnt = 0;

    s.map(i => {
        s[cnt] = [i,cnt];
        cnt++;
    })

    cnt = 0;

    for (let i=0; i<s.length+1; i++) {
        buf = s[cnt];
        for (let j=cnt; j<s.length; j++) {
            if (buf[0] < s[j][0]) {
                s.splice(cnt, 1);
                s.push(buf);
                break;
            }
            
            if (j == s.length-1) {
                cnt++;
                i = 0 + cnt;
            }
        }
    }
    

    for (let i=0; i<s.length; i++) {
        if (s[i][1] == location) {
            answer = i+1;
        }
    }
    
    
    return answer;
}