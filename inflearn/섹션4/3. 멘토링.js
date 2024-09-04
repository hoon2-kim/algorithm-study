function solution(test) {
    let answer = 0;
    const n = test.length;
    const students = test[0].length; // 학생 수
    // let tmp = [];

    for (let mentor = 1; mentor <= students; mentor++) {
        for (let mentee = 1; mentee <= students; mentee++) {
            if (mentor === mentee) continue; // 멘토랑 멘티가 같은 학생이면 넘기기
            let isPair = true;

            for (let k = 0; k < n; k++) {
                const mentorIndex = test[k].indexOf(mentor); // 멘토 위치
                const menteeIndex = test[k].indexOf(mentee); // 멘티 위치

                if (mentorIndex > menteeIndex) {
                    isPair = false;
                    break;
                }
            }
            if (isPair) {
                // tmp.push([mentor, mentee]);
                answer++;
            }
        }
    }
    // console.log(tmp);
    return answer;
}

let arr = [
    [3, 4, 1, 2],
    [4, 3, 2, 1],
    [3, 1, 4, 2],
];
let arr2 = [
    [1, 2, 3, 4, 5],
    [1, 3, 2, 5, 4],
];
console.log(solution(arr));
console.log(solution(arr2));
//

// 정답 풀이
function solution2(test) {
    let answer = 0;
    const m = test.length;
    const n = test[0].length; // 학생 수

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            let cnt = 0;
            for (let k = 0; k < m; k++) {
                let pi = 0; // i 학생 등수
                let pj = 0; // j 학생 등수
                for (let s = 0; s < n; s++) {
                    // i 학생 찾기
                    if (test[k][s] === i) {
                        pi = s;
                    }
                    // j 학생 찾기
                    if (test[k][s] === j) {
                        pj = s;
                    }
                    if (pi < pj) {
                        cnt++; // 시험 전부 쳤는지
                    }
                }
                if (cnt === m) {
                    answer++;
                }
            }
        }
    }

    return answer;
}
