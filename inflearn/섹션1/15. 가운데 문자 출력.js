function solution(s) {
    let answer = '';
    const mid = Math.floor(s.length / 2);

    if (s.length % 2 === 0) {
        answer = s.slice(mid - 1, mid + 1);
    } else {
        answer = s.slice(mid, mid + 1);
    }

    return answer;
}
console.log(solution('study'));
console.log(solution('good'));
