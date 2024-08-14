function solution(s, t) {
    let answer = 0;

    for (let x of s) {
        if (x === t) {
            answer++;
        }
    }

    return answer;
}

let str = 'COMPUTERPROGRAMMING';
console.log(solution(str, 'R'));

//

// 정답 풀이
function solution2(s, t) {
    let answer = 0;
    for (let x of s) {
        if (x === t) answer++;
    }

    return answer;
}

function solution3(s, t) {
    let answer = s.split(t).length;

    return answer - 1;
}
