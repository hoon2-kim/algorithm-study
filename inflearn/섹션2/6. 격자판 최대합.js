function solution(arr) {
    let answer = Number.MIN_SAFE_INTEGER;
    let n = arr.length;
    let sum1 = (sum2 = 0);

    // 가로,세로 합
    for (let i = 0; i < n; i++) {
        sum1 = 0;
        sum2 = 0;
        for (let j = 0; j < n; j++) {
            sum1 += arr[i][j];
            sum2 += arr[j][i];
        }
        answer = Math.max(answer, sum1, sum2);
    }

    // 대각선
    sum1 = 0;
    sum2 = 0;
    for (let k = 0; k < n; k++) {
        sum1 += arr[k][k];
        sum2 += arr[k][n - k - 1];
    }
    answer = Math.max(answer, sum1, sum2);

    return answer;
}

let arr = [
    [10, 13, 10, 12, 15],
    [12, 39, 30, 23, 11],
    [11, 25, 50, 53, 15],
    [19, 27, 29, 37, 27],
    [19, 13, 30, 13, 19],
];
console.log(solution(arr));

//

// 정답 풀이
function solution2(arr) {
    let answer = Number.MIN_SAFE_INTEGER;
    let n = arr.length;
    let sum1 = 0; // 행의 합
    let sum2 = 0; // 열의 합

    for (let i = 0; i < n; i++) {
        sum1 = sum2 = 0; // 각각의 합 초기화
        for (let j = 0; j < n; j++) {
            sum1 += arr[i][j]; // 행
            sum2 += arr[j][i]; // 열
        }
        answer = Math.max(answer, sum1, sum2);
    }

    // 대각선
    sum1 = sum2 = 0; // 초기화
    for (let i = 0; i < n; i++) {
        sum1 += arr[i][i];
        sum2 += arr[i][n - i - 1];
    }
    answer = Math.max(answer, sum1, sum2);

    return answer;
}
