function solution(n, arr) {
    let answer,
        max = Number.MIN_SAFE_INTEGER,
        sum;

    for (let x of arr) {
        sum = String(x)
            .split('')
            .reduce((a, b) => a + Number(b), 0);

        if (sum > max) {
            max = sum;
            answer = x;
        }

        if (sum === max) {
            answer = Math.max(answer, Number(x));
        }
    }

    return answer;
}

let arr = [128, 460, 603, 40, 521, 137, 123];
let arr2 = [235, 1234];
console.log(solution(7, arr));
console.log(solution(2, arr2));

//

// 정답 풀이
function solution2(n, arr) {
    let answer,
        max = Number.MIN_SAFE_INTEGER;
    for (let x of arr) {
        let sum = 0,
            tmp = x;
        // 자리수 더하기
        while (tmp) {
            sum += tmp % 10;
            tmp = Math.floor(tmp / 10);
        }
        if (sum > max) {
            max = sum;
            answer = x;
        } else if (sum === max) {
            if (x > answer) {
                answer = x;
            }
        }
    }

    return answer;
}
