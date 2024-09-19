function solution(s) {
    let answer = 0;
    let stack = [];

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            stack.push(s[i]);
        } else {
            stack.pop(); // 레이저 or 쇠막대기 끝
            if (s[i - 1] === '(') {
                // 앞에가 '('라면 레이저니까 남은(자른)만큼 추가
                answer += stack.length;
            } else {
                // 앞에가 ')'라면 쇠막대기 끝이니까 한개 추가
                answer += 1;
            }
        }
    }

    return answer;
}

let a = '()(((()())(())()))(())';
let b = '(((()(()()))(())()))(()())';
console.log(solution(a));
console.log(solution(b));
