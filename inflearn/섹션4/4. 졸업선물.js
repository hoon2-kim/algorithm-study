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

//

// 정답 풀이
function solution2(m, product) {
    let answer = 0;
    const n = product.length;
    product.sort((a, b) => a[0] + a[1] - (b[0] + b[1]));

    for (let i = 0; i < n; i++) {
        // i번째 상품은 할인(쿠폰)
        let money = m - (product[i][0] / 2 + product[i][1]); // 할인 받고 남은 금액
        let cnt = 1; // 할인한건 무조건 사니까
        for (let j = 0; j < n; j++) {
            // break걸 조건(앞으로 사야할게 남은 금액보다 크면)
            if (j !== i && product[j][0] + product[j][1] > money) {
                break;
            }

            if (j !== i && product[j][0] + product[j][1] <= money) {
                // j!==i 할인된건 사면 안되니까
                money -= product[j][0] + product[j][1];
                cnt++;
            }
        }
        answer = Math.max(answer, cnt);
    }

    return answer;
}
