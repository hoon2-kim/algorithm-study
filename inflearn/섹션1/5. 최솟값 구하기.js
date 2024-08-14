function solution(arr) {
    let answer,
        min = Number.MAX_SAFE_INTEGER;

    for (let i = 0; i < arr.length; i++) {
        min = Math.min(min, arr[i]);
        answer = min;
    }

    return answer;
}

let arr = [5, 7, 1, 3, 2, 9, 11];
let arr2 = [5, 3, 7, 11, 2, 15, 17];
console.log(solution(arr));
console.log(solution(arr2));

//

// 정답 풀이
function solution2(arr) {
    let answer,
        min = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    answer = min;
    return answer;
}

function solution3(arr) {
    const answer = MAth.min(...arr);

    return answer;
}
