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

//

// 정답 풀이
function solution2(str) {
    let answer = '';
    for (let x of str) {
        if (!isNaN(x)) {
            answer += x;
        }
    }

    return parseInt(answer);
}

function solution3(str) {
    let answer = 0;
    for (let x of str) {
        if (!isNaN(x)) {
            answer = answer * 10 + Number(x);
        }
    }
    return answer;
}
