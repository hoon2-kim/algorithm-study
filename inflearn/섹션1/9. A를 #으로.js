function solution(s) {
    let answer = '';

    for (let x of s) {
        if (x === 'A') {
            answer += '#';
        } else {
            answer += x;
        }
    }

    return answer;
}

let str = 'BANANA';
console.log(solution(str));

//

// 정답 풀이
function solution2(s) {
    let answer = '';
    for (let x of s) {
        if (x === 'A') answer += '#';
        else answer += x;
    }
    return answer;
}

function solution3(s) {
    let answer = s;
    answer = answer.replace(/A/g, '#');
    return answer;
}
