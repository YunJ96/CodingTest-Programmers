function solution(numLog) {
    let answer = '';
    for (let i = 0; i < numLog.length - 1; i++) {
        if (numLog[i + 1] - numLog[i] === 1) {
            answer += 'w';
        } else if (numLog[i + 1] - numLog[i] === -1) {
            answer += 's';
        } else if (numLog[i + 1] - numLog[i] === 10) {
            answer += 'd'
        } else if (numLog[i + 1] - numLog[i] === -10) {
            answer += 'a';
        }
    }
    return answer;
}