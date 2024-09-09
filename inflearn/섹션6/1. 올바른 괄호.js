function solution(s) {
    let answer = 'YES';
    let stack = [];

    for (let x of s) {
        if (x === '(') {
            stack.push(x);
        } else {
            if (stack.length === 0) {
                // 만약 주어진 s의 첫시작이 ')' 이거나
                // 올바른 괄호들이 모두 제거되고 다시 시작이 ')'라면 올바른 괄호가 아니니까
                return 'NO';
            }
            stack.pop();
        }
    }

    // console.log(stack);

    if (stack.length !== 0) {
        return 'NO';
    }

    return answer;
}

let a = '(()(()))(()';
let b = '(())(())()';
console.log(solution(a));
console.log(solution(b));
