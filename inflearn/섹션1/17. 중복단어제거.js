function solution(s) {
    let answer = [];

    for (let x of s) {
        if (!answer.includes(x)) {
            answer.push(x);
        }
    }

    return answer;
}
let str = ['good', 'time', 'good', 'time', 'student'];
console.log(solution(str));

//

// 문제 풀이
function solution2(s) {
    let answer;
    answer = s.filter(function (v, i) {
        return s.indexOf(v) === i;
    });
    return answer;
}
