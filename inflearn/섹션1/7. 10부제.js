function solution(day, arr) {
    let answer = 0;

    for (let i = 0; i < arr.length; i++) {
        if (String(arr[i]).includes(day)) {
            answer += 1;
        }
    }

    return answer;
}

arr = [25, 23, 11, 47, 53, 17, 33];
console.log(solution(3, arr));
arr2 = [12, 20, 54, 30, 87, 91, 30];
console.log(solution(0, arr2));

//

// 정답 풀이
function solution2(day, arr) {
    let answer = 0;
    for (const x of arr) {
        if (x % 10 === day) {
            answer++;
        }
    }

    return answer;
}
