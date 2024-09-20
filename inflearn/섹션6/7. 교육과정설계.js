function solution(need, plan) {
    let answer = 'YES';
    let q = Array.from(need); // 큐에 필수과목 넣기

    for (let x of plan) {
        if (x === q[0]) {
            // 필수과목과 동일하면 제거
            q.shift();
        }
    }

    return q.length !== 0 ? 'NO' : answer;
}

let a = 'CBA';
let b = 'CBDAGE';
let c = 'CGEADB';
console.log(solution(a, b));
console.log(solution(a, c));
