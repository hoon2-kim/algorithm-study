function solution(arr) {
    let answer = [];
    let sortArr = arr.slice(); // 복사

    sortArr.sort();

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== sortArr[i]) {
            answer.push(i + 1);
        }
    }

    return answer;
}

let arr = [120, 125, 152, 130, 135, 135, 143, 127, 160];
console.log(solution(arr));
