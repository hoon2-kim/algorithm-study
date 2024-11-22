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

//

// 정답 풀이

// 삽입정렬이란? O(n^2)
// 첫 숫자는 놔두고, 두 번째 자리 숫자부터 뽑아서 그 숫자가 첫 숫자보다 크면
// 첫 숫자 오른쪽에, 작으면 왼쪽에 넣는다 세 번째 자리 숫자를 뽑아서 앞의
// 두 숫자와 크기를 비교해 알맞은 자리에 넣는다 이 과정을 반복
