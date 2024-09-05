function solution(str1, str2) {
    let answer = 'YES';
    let sH = new Map();

    for (let x of str1) {
        if (sH.get(x)) {
            sH.set(x, sH.get(x) + 1);
        } else {
            sH.set(x, 1);
        }
    }

    for (let x of str2) {
        if (sH.get(x)) {
            sH.set(x, sH.get(x) - 1);
        } else {
            // 없거나 0이면 여기로
            return 'NO';
        }
    }

    //   // 모든 문자가 처리된 후 맵을 확인
    //   for (let value of sH.values()) {
    //     if (value !== 0) {
    //         return 'NO';
    //     }
    // }

    return answer;
}

let a = 'AbaAeCe';
let b = 'baeeACA';
let c = 'abaCC';
let d = 'Caaab';
console.log(solution(a, b));
console.log(solution(c, d));
