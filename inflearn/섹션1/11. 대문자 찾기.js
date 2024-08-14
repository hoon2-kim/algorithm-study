function solution(s) {
    let answer = 0;

    for (let x of s) {
        if (x === x.toUpperCase()) {
            answer++;
        }
    }

    return answer;
}

let str = 'KoreaTimeGood';
console.log(solution(str));

//

// 정답 풀이
function solution2(s) {
    let answer = 0;
    for (let x of s) {
        if (x === x.toUpperCase()) answer++;
    }
    return answer;
}
