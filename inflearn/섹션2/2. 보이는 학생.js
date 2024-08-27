function solution(arr) {
    let answer = 1;
    let max = Number.MIN_SAFE_INTEGER;

    for (let i = 1; i < arr.length; i++) {
        max = Math.max(arr[i - 1], max);
        if (arr[i] > max) {
            answer++;
        }
    }

    return answer;
}

let arr = [130, 135, 148, 140, 145, 150, 150, 153];
console.log(solution(arr));

//

// 정답 풀이
function solution2(arr) {
    let answer = 1;
    let max = arr[0]; // 첫번째 사람

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            answer++;
            max = arr[i];
        }
    }

    return answer;
}
