// 투 포인터
function solution(m, arr) {
    let answer = 0,
        sum = 0,
        lt = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];

        while (sum > m) {
            sum -= arr[lt];
            lt++; // 구간 축소(타겟 숫자를 넘으면 앞 부분은 끝이니까)
        }

        // 타겟 숫자가 같건나 넘지 않으면 해당 i의 위치에서 가능한 연속 부분 수열 경우의 수를 더한다.
        answer += i - lt + 1;
    }

    return answer;
}

let a = [1, 3, 1, 2, 3];
console.log(solution(5, a));

//

// 정답 풀이
function solution2(m, arr) {
    let answer = 0;
    let sum = 0;
    let lt = 0;

    for (let rt = 0; rt < arr.length; rt++) {
        sum += arr[rt];

        while (sum > m) {
            sum -= arr[lt++];
        }

        answer += rt - lt + 1;
    }

    return answer;
}
