function solution(a, b, c) {
    let answer;

    answer = Math.min(a, b, c);

    return answer;
}

console.log(solution(2, 5, 1));

//

// 정답 풀이
function solution2(a, b, c) {
    let answer;
    if (a < b) {
        answer = a;
    } else {
        answer = b;
    }
    if (c < answer) {
        answer = c;
    }

    return answer;
}

console.log(solution2(6, 5, 11));
