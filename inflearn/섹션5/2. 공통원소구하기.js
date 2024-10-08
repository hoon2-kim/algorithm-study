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

//

// 정답 풀이
function solution2(arr1, arr2) {
    let answer = [];
    arr1.sort(); // 한자리 숫자들은 이렇게 정렬해도됨
    arr2.sort();
    let p1 = (p2 = 0);

    while (p1 < arr1.length && p2 < arr2.length) {
        if (arr1[p1] === arr2[p2]) {
            answer.push(arr1[p1++]);
            p2++;
        } else if (arr1[p1] < arr2[p2]) {
            p1++;
        } else {
            p2++;
        }
    }

    return answer;
}
