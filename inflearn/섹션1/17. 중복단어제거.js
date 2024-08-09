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
