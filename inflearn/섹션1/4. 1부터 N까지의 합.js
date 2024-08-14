function solution(n) {
    let answer = 0;

    for (let i = 1; i <= n; i++) {
        answer += i;
    }

    return answer;
}

console.log(solution(10));

//

// 정답 풀이
function solution2(n) {
    let answer = 0;
    for (let i = 1; i <= n; i++) {
        answer = answer + i;
    }

    return answer;
}
