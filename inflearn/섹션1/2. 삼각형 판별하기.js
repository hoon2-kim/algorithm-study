function solution(a, b, c) {
    let answer = 'YES',
        max,
        total;

    max = Math.max(a, b, c);
    total = a + b + c;

    if (total - max <= max) {
        answer = 'NO';
    }

    return answer;
}

console.log(solution(6, 7, 11));
console.log(solution(13, 33, 17));

//

// 정답 풀이
function solution2(a, b, c) {
    let answer = 'YES',
        max;
    let sum = a + b + c;

    if (a > b) {
        max = a;
    } else {
        max = b;
    }
    if (c > max) {
        max = c;
    }

    if (sum - max <= max) {
        answer = 'NO';
    }

    return answer;
}

console.log(solution2(6, 7, 11));
console.log(solution2(13, 33, 17));
