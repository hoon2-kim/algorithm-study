function solution(arr) {
    let answer = arr;
    let noSwap;

    for (let i = answer.length; i > 0; i--) {
        noSwap = true;
        for (let j = 0; j < i - 1; j++) {
            if (answer[j] > answer[j + 1]) {
                let temp = answer[j];
                answer[j] = answer[j + 1];
                answer[j + 1] = temp;
                noSwap = false;
            }
        }
        if (noSwap) break;
    }

    return answer;
}

let arr = [13, 5, 11, 7, 23, 15];
console.log(solution(arr));

//

// 정답풀이
// i가 0일때 제일 큰 수가 맨 뒤로 간다.
function solution2(arr) {
    let answer = arr;
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }

    return answer;
}
