function solution(s) {
    let answer;
    let stack = [];

    for (let x of s) {
        if (x === '(') {
            stack.push(x);
        } else if (x === ')') {
            stack.pop();
        }

        if (x !== '(' && x !== ')') {
            if (!(stack.includes('(') || stack.includes(')'))) {
                stack.push(x);
            }
        }
    }

    answer = stack.join('');
    return answer;
}

let str = '(A(BC)D)EF(G(H)(IJ)K)LM(N)';
console.log(solution(str));

// 리팩토링 코드
function solution2(s) {
    let stack = [];

    for (let x of s) {
        if (x === ')') {
            // 여는 괄호 '('가 나올 때까지 스택에서 문자 제거
            // while문에 조건문만 있는 경우 조건만 검사하면서 실행
            // pop()을 통해 제거한걸 반환하니까 '('까지 제거 후 false되서 끝
            while (stack.pop() !== '(');
        } else {
            // 여는 괄호 '('와 그 외의 문자들을 스택에 추가
            stack.push(x);
        }
    }

    // 스택에 남아있는 문자를 합쳐서 반환
    return stack.join('');
}

//

// 정답 풀이 - 스택
function solution3(s) {
    let answer;
    let stack = [];
    for (let x of s) {
        if (x === ')') {
            while (stack.pop() !== '(');
        } else {
            stack.push(x);
        }
    }
    answer = stack.join('');
    return answer;
}
