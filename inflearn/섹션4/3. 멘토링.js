function solution(test) {
    let answer = 0;
    const n = test.length;
    const students = test[0].length; // 학생 수

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
                answer++;
            }
        }
    }

    return answer;
}

let arr = [
    [3, 4, 1, 2],
    [4, 3, 2, 1],
    [3, 1, 4, 2],
];
console.log(solution(arr));
