function solution(s) {
    let answer = '';

    for (let x of s) {
        answer += x.toUpperCase();
    }

    return answer;
}

let str = 'ItisTimeToStudy';
console.log(solution(str));

//

// 정답 풀이
function solution2(s) {
    let answer = '';
    for (let x of s) {
        if (x === x.toLowerCase()) answer += x.toUpperCase();
        else answer += x;
    }
    return answer;
}
