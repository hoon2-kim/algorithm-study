function solution(arr) {
    let answer = arr;

    for (let i = 1; i < arr.length; i++) {
        let key = arr[i];
        let j = i - 1;

        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }

        arr[j + 1] = key;
    }

    return answer;
}

let arr = [11, 7, 5, 6, 10, 9];
console.log(solution(arr));
