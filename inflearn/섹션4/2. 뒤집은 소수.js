// 소수 판별
function isPrime(num) {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }

    return num > 1;
}

function solution(arr) {
    let answer = [];

    for (let x of arr) {
        const rX = parseInt(String(x).split('').reverse().join(''));
        if (isPrime(rX)) {
            answer.push(rX);
        }
    }

    return answer;
}

let arr = [32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution(arr));
