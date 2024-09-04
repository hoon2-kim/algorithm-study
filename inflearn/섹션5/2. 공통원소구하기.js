// 투 포인터 알고리즘
function solution(arr1, arr2) {
    let answer = [];
    let a1 = 0;
    let a2 = 0;
    const n = arr1.length;
    const m = arr2.length;
    arr1.sort((a, b) => a - b);
    arr2.sort((a, b) => a - b);

    // &&으로 한 이유는 끝가지 비교 후 a1,a2 둘 중 하나가 늘어나고 false로 마무리 하기 위해
    while (a1 < n && a2 < m) {
        if (arr1[a1] < arr2[a2]) {
            a1++;
        } else if (arr1[a1] > arr2[a2]) {
            a2++;
        } else if (arr1[a1] === arr2[a2]) {
            answer.push(arr1[a1]);
            a1++;
            a2++;
        }
    }

    return answer;
}

let a = [1, 3, 9, 5, 2];
let b = [3, 2, 5, 7, 8];
console.log(solution(a, b));
