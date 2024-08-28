function solution(s, t) {
    let answer = [];
    let pos = Number.MIN_SAFE_INTEGER;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === t) {
            pos = i;
        }
        answer.push(i - pos);
    }

    pos = Number.MAX_SAFE_INTEGER;
    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] === t) {
            pos = i;
        }
        answer[i] = Math.min(answer[i], pos - i);
    }

    return answer;
}

let str = 'teachermode';
console.log(solution(str, 'e'));

//

// 정답 풀이
function solution2(s, t) {
    let answer = [];
    let p = 1000; // 문자열 길이를 넘는 큰 값
    for (let x of s) {
        if (x === t) {
            p = 0;
            answer.push(p);
        } else {
            p++;
            answer.push(p);
        }
    }

    // 거꾸로
    p = 1000;
    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] === t) {
            p = 0;
        } else {
            p++;
            answer[i] = Math.min(answer[i], p);
        }
    }

    return answer;
}
