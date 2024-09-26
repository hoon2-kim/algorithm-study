function solution(s) {
    let answer;
    let stack = [];

    for (let x of s) {
        if (!isNaN(x)) {
            // 숫자는 일단 스택에 넣는다.
            stack.push(Number(x));
        } else {
            let pop2 = stack.pop(); // 먼저 제거된 뒤의 숫자
            let pop1 = stack.pop(); // 그 후에 제거된 앞의 숫자

            switch (x) {
                case '+':
                    stack.push(pop1 + pop2);
                    break;
                case '-':
                    stack.push(pop1 - pop2);
                    break;
                case '*':
                    stack.push(pop1 * pop2);
                    break;
                case '/':
                    stack.push(pop1 / pop2);
                    break;
            }
        }
    }
    answer = stack[0];
    return answer;
}
let str = '352+*9-';
console.log(solution(str));

//

// 정답 풀이 - 스택
function solution2(s) {
    let answer;
    let stack = [];
    for (let x of s) {
        if (!isNaN(x)) {
            stack.push(Number(x));
        } else {
            let rt = stack.pop();
            let lt = stack.pop();
            if (x === '+') stack.push(lt + rt);
            else if (x === '-') stack.push(lt - rt);
            else if (x === '*') stack.push(lt * rt);
            else if (x === '/') stack.push(lt / rt);
        }
    }
    answer = stack[0];
    return answer;
}
