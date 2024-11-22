function solution(arr) {
    let answer = arr;

    answer.sort();

    return answer;
}

let arr = [
    [2, 7],
    [1, 3],
    [1, 2],
    [2, 5],
    [3, 6],
];

let arr2 = [
    [10, 13],
    [10, 40],
    [10, 17],
    [200, 401],
    [200, 100],
    [200, 106],
];
console.log(solution(arr));
console.log(solution(arr2));
