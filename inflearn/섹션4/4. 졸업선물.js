function solution(m, product) {
    let answer = 0;
    let n = product.length;
    let sortP = product.sort((a, b) => a[0] + a[1] - (b[0] + b[1]));

    for (let i = 0; i < n; i++) {
        let sale = sortP[i][0] / 2;
        let cnt = 1;
        for (let j = i + 1; j < n; j++) {
            if (sale <= m) {
                sale += product[j][0] + product[j][1];
                cnt++;
            } else {
                break;
            }
        }
        answer = Math.max(answer, cnt);
    }

    return answer;
}

let arr = [
    [6, 6],
    [2, 2],
    [4, 3],
    [4, 5],
    [10, 3],
];
console.log(solution(28, arr));
