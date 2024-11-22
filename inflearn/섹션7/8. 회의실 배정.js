function solution(meeting) {
    let answer = 0;

    // 종료 시간이 가장 빠른 회의시간으로 정렬(같다면 시작 시간이 빠른걸로 정렬)
    let sortedMeeting = meeting.sort((a, b) => a[1] - b[1] || a[0] - b[0]);

    let last = 0; // 종료시간이 가장 빠른 회의를 선택하기 위해 종료시간 0
    for (let i = 0; i < sortedMeeting.length; i++) {
        if (sortedMeeting[i][0] >= last) {
            answer++;
            last = sortedMeeting[i][1];
        }
    }

    return answer;
}

let arr = [
    [1, 4],
    [2, 3],
    [3, 5],
    [4, 6],
    [5, 7],
];
let arr2 = [
    [3, 3],
    [1, 3],
    [2, 3],
];
console.log(solution(arr));
console.log(solution(arr2));
