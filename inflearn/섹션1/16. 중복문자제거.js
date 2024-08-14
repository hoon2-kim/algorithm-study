function solution(s) {
    let answer = '';

    for (let x of s) {
        if (!answer.includes(x)) {
            answer += x;
        }
    }

    return answer;
}
console.log(solution('ksekkset'));

//

// 정답 풀이
function solution2(s) {
    let answer = '';
    for (let i = 0; i < s.length; i++) {
        if (s.indexOf(s[i]) === i) {
            answer += s[i];
        }
    }
    return answer;
}
