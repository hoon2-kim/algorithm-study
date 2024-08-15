function solution(arr) {
    let n = arr.length;
    let answer = Array.from({ length: n }, () => 1);

    for (let i = 0; i < n; i++) {
        let rank = 1;
        for (let j = 0; j < n; j++) {
            if (arr[i] < arr[j]) {
                rank++;
            }
        }
        answer[i] = rank;
    }

    return answer;
}

function solution2(arr) {
    const answer = Array(arr.length).fill(0);
    const sortArr = [...arr].sort((a, b) => b - a); // 100 92 89 87 76

    for (let i = 0; i < arr.length; i++) {
        const rank = sortArr.indexOf(arr[i]) + 1;
        answer[i] = rank;
    }

    return answer;
}

let arr = [87, 89, 92, 100, 76];
let arr2 = [90, 90, 90, 95];
console.log(solution(arr));
console.log(solution(arr2));
console.log(solution2(arr));
console.log(solution2(arr2));
