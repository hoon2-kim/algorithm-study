function solution(arr) {
    let answer = arr;

    for (let i = 0; i < arr.length; i++) {
        let lowest = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[lowest]) {
                lowest = j;
            }
        }

        if (i !== lowest) {
            let temp = arr[i];
            arr[i] = arr[lowest];
            arr[lowest] = temp;
        }
    }

    return answer;
}

let arr = [13, 5, 11, 7, 23, 15];
console.log(solution(arr));

//

// 정답 풀이
function solution2(arr) {
    let answer = arr;

    for (let i = 0; i < arr.length - 1; i++) {
        let idx = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[idx]) {
                idx = j;
            }
            [arr[i], arr[idx]] = [arr[idx], arr[i]];
        }
    }

    return answer;
}

let arr2 = [13, 5, 11, 7, 23, 15];
console.log(solution2(arr2));
