function solution(arr) {
    let answer = 0;
    let n = arr.length;
    // 상하좌우
    const directions = [
        [-1, 0],
        [1, 0],
        [0, -1],
        [0, 1],
    ];
    let isMax = true;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            isMax = true;
            for (let [dx, dy] of directions) {
                if (
                    i + dx >= 0 &&
                    j + dy >= 0 &&
                    i + dx < n &&
                    j + dy < n &&
                    arr[i][j] <= arr[i + dx][j + dy]
                ) {
                    isMax = false;
                    break;
                }
            }
            if (isMax) {
                answer++;
            }
        }
    }

    return answer;
}

let arr = [
    [5, 3, 7, 2, 3],
    [3, 7, 1, 6, 1],
    [7, 2, 5, 3, 4],
    [4, 3, 6, 4, 1],
    [8, 7, 3, 5, 2],
];
console.log(solution(arr));

//

// 정답 풀이
function solution2(arr) {
    let answer = 0;
    let dx = [-1, 0, 1, 0];
    let dy = [0, 1, 0, -1];
    const n = arr.length;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            let flag = 1;
            for (let k = 0; k < 4; k++) {
                let nx = i + dx[k]; // 행 좌표
                let ny = j + dy[k]; // 열 좌표
                if (
                    nx >= 0 &&
                    nx < n &&
                    ny >= 0 &&
                    ny < n &&
                    arr[nx][ny] >= arr[i][j]
                ) {
                    flag = 0;
                    break;
                }
            }
            if (flag) answer++;
        }
    }

    return answer;
}
