function solution(s) {
    let answer = 'YES';
    s = s.toLowerCase();

    for (let i = 0; i < Math.floor(s.length / 2); i++) {
        if (s[i] !== s[s.length - i - 1]) {
            answer = 'NO';
            break;
        }
    }

    return answer;
}

let str = 'goooG';
let str2 = 'qwwq';
let str3 = 'goooowoG';
console.log(solution(str));
console.log(solution(str2));
console.log(solution(str3));

//

// 정답 풀이
function solution2(s) {
    let answer = 'YES';
    s = s.toLowerCase();
    let len = s.length;
    for (let i = 0; i < Math.floor(len / 2); i++) {
        if (s[i] !== s[len - i - 1]) {
            return 'NO';
        }
    }

    return answer;
}

function solution3(s) {
    let answer = 'YES';
    s = s.toLowerCase();
    if (s.split('').reverse().join('') !== s) {
        return 'NO';
    }

    return answer;
}
