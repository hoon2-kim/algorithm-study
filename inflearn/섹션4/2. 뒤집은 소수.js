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

//

// 정답 풀이
function isPrime2(num) {
    if (num === 1) return false;
    for (let i = 2; i <= parseInt(num / 2); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

function solution2(arr) {
    let answer = [];
    for (let x of arr) {
        // x를 뒤집어서 저장할 변수
        let res = 0;
        while (x) {
            // 뒤집기
            let t = x % 10;
            res = res * 10 + t;
            x = parseInt(x / 10);
        }

        if (isPrime2(res)) {
            answer.push(res);
        }
    }

    return answer;
}

// 참고
// 소수판별 - 에라토스테네스의 체
/** 에라토스테네스의 체란?
 * 2~120까지의 수를 예로들면(1은 소수가 아니다)
 * 2부터 소수를 구하고자 하는 구간의 모든 수를 나열한다
 * 2는 소수이므로 오른쪽에 2를 쓴다
 * 자기 자신을 제외한 2의 배수를 모두 지운다
 * 남아있는 수 가운데 3은 소수이므로 오른쪽에 쓴다
 * 자기 자신을 제외한 3의 배수를 모두 지운다
 * 남아있는 수 가운데 5는 소수이므로 오른쪽에 쓴다
 * 자기 자신을 제외한 5의 배수를 모두 지운다
 * 남아있는 수 가운데 7은 소수이므로 오른쪽에 쓴다
 * 자기 자신을 제외한 7의 배수를 모두 지운다
 * 위의 과정을 반복하면 구하는 구간의 모든 소수가 남는다
 *
 * 그래서 2~120의 경우 11^2 > 120 이므로 11보다 작은 수 의 배수들만 지워도 충분
 * 즉, 2,3,5,7의 배수를 지우고 남는 수는 모두 소수이다
 */

// 구현
function isPrimeSolution(n) {
    let arr = Array(n + 1) // 주어진 숫자 포함한 배열 만듬(Array(n+1)) / 0부터라서
        .fill(true)
        .fill(false, 0, 2); // 0,1은 소수가 아니니 false로 바꿈

    for (let i = 2; i * i <= n; i++) {
        if (arr[i]) {
            for (let j = i * i; j <= n; j += i) {
                arr[j] = false;
                // j는 i의 제곱
                // j=i*i가 n보다 작을 때 까지
                // j+i씩 증가
                // i가 2일 경우 4,6,8,10...100
                // i가 3일 경우 9,12,15,18...99
            }
        }
    }
    return arr; // 이렇게만 하면 false,true 배열 반환
    return arr.filter((e) => e).length; // 소수 개수 반환
    return arr.map((v, i) => (v ? i : 0)).filter((e) => e); // 소수 반환
}
console.log(isPrimeSolution(10));

// arr.filter((e)=>e) 만 하면 true만 반환
