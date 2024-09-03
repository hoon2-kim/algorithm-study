function solution(n, k, card) {
    let answer;
    let sum = [];

    for (let i = 0; i < n - 2; i++) {
        for (let j = i + 1; j < n - 1; j++) {
            for (let k = j + 1; k < n; k++) {
                sum.push(card[i] + card[j] + card[k]);
            }
        }
    }
    sum.sort((a, b) => b - a);

    answer = sum[k - 1];

    return answer;
}

let arr = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
console.log(solution(10, 3, arr));
