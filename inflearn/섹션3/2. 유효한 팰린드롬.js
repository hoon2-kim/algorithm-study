function solution(s) {
    let answer = 'YES';
    s = s.toLowerCase().replace(/[^a-z]/g, '');

    for (let i = 0; i < Math.floor(s.length / 2); i++) {
        if (s[i] !== s[s.length - i - 1]) {
            answer = 'NO';
            break;
        }
    }

    return answer;
}

let str = 'found7, time: study; Yduts; emit, 7Dnuof';
console.log(solution(str));
