function solution(n) {
    let answer = [];
    for (let i = 1; i <= n; i++) {
        n % i === 0 ? answer.push(i) : null
    } 
    return answer;
}