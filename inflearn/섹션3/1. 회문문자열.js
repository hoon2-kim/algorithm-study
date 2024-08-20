function solution(s) {
    let answer = 'YES';
    s = s.toLowerCase();

    for (let i = 0; i < Math.floor(s.length / 2); i++) {
        if (s[i] !== s[s.length - i - 1]) {
            answer = 'NO';
            break;
        }
    }

    return answer;
}

let str = 'goooG';
let str2 = 'qwwq';
let str3 = 'goooowoG';
console.log(solution(str));
console.log(solution(str2));
console.log(solution(str3));
