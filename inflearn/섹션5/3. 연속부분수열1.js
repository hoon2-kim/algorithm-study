// 투 포인터
function solution(m, arr) {
    let answer = 0;
    let sum = 0;
    let lt = 0;

    // lt(시작점)를 기준으로 쭉 더해가기 위해
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];

        while (sum > m) {
            // 연속으로 더해주다가 목표를 넘어가면 시작점에서 시작하는 연속 부분수열은
            // 없으니 다음으로 넘어가기 위해 뺀다.
            sum -= arr[lt];
            lt++;
        }

        if (sum === m) {
            answer++;
        }
    }

    return answer;
}

let a = [1, 2, 1, 3, 1, 1, 1, 2];
console.log(solution(6, a));
