function solution(n, k) {
    let answer;
    let q = Array.from({ length: n }, (_, i) => i + 1);
    let count = 1;

    while (true) {
        if (q.length === 1) {
            break;
        }

        if (count === k) {
            q.shift();
            count = 1;
        } else {
            q.push(q.shift());
            count++;
        }
    }
    answer = q[0];
    return answer;
}

// 리팩토링
// shift()는 배열 크기가 커질수록 느려진다고 한다.
function solution2(n, k) {
    let answer;
    let q = Array.from({ length: n }, (_, i) => i + 1);
    let index = 0;

    while (q.length > 1) {
        // k번째 부르는 왕자 제거(-1은 q인덱스가 0부터니까)
        // 그리고 제거된 위치부터 다시 세야하니까 다시 index에 재할당
        // % q.length 해주는 이유는 원형이니까 다시 인덱스 0으로 돌아가게 해줄수있음
        index = (index + k - 1) % q.length;
        q.splice(index, 1); // 제거
    }

    answer = q[0];
    return answer;
}

console.log(solution(8, 3));

//

// 정답 풀이 - 큐
function solution3(n, k) {
    let answer;
    let queue = Array.from({ length: n }, (v, i) => i + 1);
    while (queue.length) {
        for (let i = 1; i < k; i++) {
            queue.push(queue.shift());
        }
        queue.shift();
        if (queue.length === 1) {
            answer = queue.shift();
        }
    }

    return answer;
}

console.log(solution3(8, 3));
