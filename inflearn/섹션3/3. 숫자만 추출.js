function solution(str) {
    let answer = '';

    str = str.replace(/[^0-9]/g, '');
    answer += str;

    return parseInt(answer);
}

let str = 'g0en2T0s8eSoft';
let str2 = 'tge0a1h205er';
console.log(solution(str));
console.log(solution(str2));
