// 슬라이딩 윈도우
function solution(k, arr) {
    let answer = 0;
    let sum = 0;
    let tempSum = 0;

    for (let i = 0; i < k; i++) {
        sum += arr[i]; // 첫 합계
    }
    tempSum = sum; // 첫 합계 임시 저장

    for (let i = k; i < arr.length; i++) {
        // 처음 12+15+11이고 다음이 15+11+20이니까
        // 처음 더했던 12를 빼기 위해 i에서 k만큼 빼준다.
        sum = sum - arr[i - k] + arr[i];

        tempSum = Math.max(tempSum, sum);
    }

    answer = tempSum;

    return answer;
}

let a = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
console.log(solution(3, a));
