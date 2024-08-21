function solution(s) {
    let answer = '';
    const map = new Map();

    for (let i = 0; i < s.length; i++) {
        if (map.has(s[i])) {
            map.set(s[i], map.get(s[i]) + 1);
        } else {
            map.set(s[i], 1);
        }
    }

    for (const [key, value] of map) {
        answer += value === 1 ? key : key + value;
    }

    return answer;
}

let str = 'KKHSSSSSSSE';
console.log(solution(str));
