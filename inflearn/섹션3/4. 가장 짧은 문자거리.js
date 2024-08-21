function solution(s, t) {
    let answer = [];
    let pos = Number.MIN_SAFE_INTEGER;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === t) {
            pos = i;
        }
        answer.push(i - pos);
    }

    pos = Number.MAX_SAFE_INTEGER;
    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] === t) {
            pos = i;
        }
        answer[i] = Math.min(answer[i], pos - i);
    }

    return answer;
}

let str = 'teachermode';
console.log(solution(str, 'e'));
