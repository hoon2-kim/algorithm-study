function solution(s) {
    let answer = '';

    for (let x of s) {
        if (x === x.toUpperCase()) {
            answer += x.toLowerCase();
        } else {
            answer += x.toUpperCase();
        }
    }

    return answer;
}

console.log(solution('StuDY'));

//

// 정답 풀이
function solution2(s) {
    let answer = '';
    for (let x of s) {
        if (x === x.toUpperCase()) answer += x.toLowerCase();
        else answer += x.toUpperCase();
    }
    return answer;
}
