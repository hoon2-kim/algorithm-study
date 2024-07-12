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
