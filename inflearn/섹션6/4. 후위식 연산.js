function solution(s) {
    let answer;
    let stack = [];

    for (let x of s) {
        if (!isNaN(x)) {
            // 숫자는 일단 스택에 넣는다.
            stack.push(Number(x));
        } else {
            let pop2 = stack.pop();
            let pop1 = stack.pop();

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
