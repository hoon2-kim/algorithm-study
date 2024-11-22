function solution(target, arr) {
    // 이진검색 O(logn)
    let answer;
    let sortedArr = arr.sort((a, b) => a - b);
    let start = 0;
    let end = sortedArr.length - 1;
    let middle = Math.floor((start + end) / 2);

    while (sortedArr[middle] !== target && start <= end) {
        if (target < sortedArr[middle]) {
            end = middle - 1;
        } else {
            start = middle + 1;
        }
        middle = Math.floor((start + end) / 2);
    }
    answer = middle + 1;
    return answer;
}

function solution2(target, arr) {
    let answer;
    let sortedArr = arr.sort((a, b) => a - b);

    // O(n)
    for (let i = 0; i < sortedArr.length; i++) {
        if (target === sortedArr[i]) {
            answer = i;
            break;
        }
    }

    return answer + 1;
}

let arr = [23, 87, 65, 12, 57, 32, 99, 81];
console.log(solution(32, arr));
console.log(solution2(32, arr));
