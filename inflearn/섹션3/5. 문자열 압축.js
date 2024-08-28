function solution(s) {
    let answer = '';
    const map = new Map();

    for (let i = 0; i < s.length; i++) {
        if (map.has(s[i])) {
            map.set(s[i], map.get(s[i]) + 1);
        } else {
            map.set(s[i], 1);
        }
    }

    for (const [key, value] of map) {
        answer += value === 1 ? key : key + value;
    }

    return answer;
}

let str = 'KKHSSSSSSSE';
console.log(solution(str));

//

// 정답 풀이
function solution2(str) {
    let answer = '';
    let cnt = 1;
    str = str + ' '; // 사실 자바스크립트에서는 안해도 되지만 라이브 코테같은 경우에는 해주는게 좋다
    // for문을 알파벳까지만 돈다.
    for (let i = 0; i < str.length - 1; i++) {
        if (str[i] === str[i + 1]) {
            cnt++;
        } else {
            answer += str[i];
            if (cnt > 1) {
                answer += String(cnt);
                cnt = 1;
            }
        }
    }

    return answer;
}

console.log(solution2(str));
