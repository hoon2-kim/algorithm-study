function solution(size, arr) {
    // let answer = Array.from({ length: size }, () => 0);
    let answer = [];

    for (let i = 0; i < arr.length; i++) {
        if (answer.length >= size) {
            answer.pop();
        }

        if (answer.includes(arr[i])) {
            const idx = answer.indexOf(arr[i]);
            answer.splice(idx, 1);
            answer.unshift(arr[i]);
        } else {
            answer.unshift(arr[i]);
        }
    }

    return answer;
}

let arr = [1, 2, 3, 2, 6, 2, 3, 5, 7];
console.log(solution(5, arr));
console.log(solution(1, [1, 2, 3, 2, 1])); // [1]
console.log(solution(5, [1, 2, 3])); // [3, 2, 1]
console.log(solution(3, [1, 2, 3, 1, 2, 3, 4])); // [4, 3, 2]
console.log(solution(3, [1, 2, 3, 2, 1, 4, 5])); // [5, 4, 1]

// 풀이
function solution2(size, arr) {
    let answer = [];
    arr.forEach((x) => {
        let pos = -1;
        for (let i = 0; i < size; i++) if (x === answer[i]) pos = i;
        if (pos === -1) {
            answer.unshift(x);
            if (answer.length > size) answer.pop();
        } else {
            answer.splice(pos, 1);
            answer.unshift(x);
        }
    });

    return answer;
}
