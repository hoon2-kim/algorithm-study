function solution(board, moves) {
    let answer = 0;
    let stack = [];

    for (let i = 0; i < moves.length; i++) {
        for (let j = 0; j < board.length; j++) {
            // 변수에 저장해줘서 써야한다. 왜냐면 변수에 저장안하고 그냥 쓰면
            // 밑에서 0으로 만들기 때문에 0으로 계속 쓰인다.
            let doll = board[j][moves[i] - 1];
            // 뽑는다면
            if (doll !== 0) {
                board[j][moves[i] - 1] = 0; // 뽑았으니 그 자리 0으로
                if (stack.length > 0 && stack[stack.length - 1] === doll) {
                    stack.pop();
                    answer += 2;
                } else {
                    stack.push(doll);
                }
                break;
            }
        }
    }

    return answer;
}

let a = [
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 3],
    [0, 2, 5, 0, 1],
    [4, 2, 4, 4, 2],
    [3, 5, 1, 3, 1],
];

let b = [1, 5, 3, 5, 1, 2, 1, 4];
console.log(solution(a, b));

//

// 정답 풀이 - 스택
function solution2(board, moves) {
    let answer = 0;
    let stack = [];
    moves.forEach((pos) => {
        for (let i = 0; i < board.length; i++) {
            if (board[i][pos - 1] !== 0) {
                let tmp = board[i][pos - 1];
                board[i][pos - 1] = 0;
                if (tmp === stack[stack.length - 1]) {
                    stack.pop();
                    answer += 2;
                } else stack.push(tmp);
                break;
            }
        }
    });

    return answer;
}
let c = [
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 3],
    [0, 2, 5, 0, 1],
    [4, 2, 4, 4, 2],
    [3, 5, 1, 3, 1],
];

let d = [1, 5, 3, 5, 1, 2, 1, 4];
console.log(solution2(c, d));
