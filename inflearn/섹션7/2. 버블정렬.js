function solution(arr) {
    let answer = arr;
    let noSwap;

    for (let i = answer.length; i > 0; i--) {
        noSwap = true;
        for (let j = 0; j < i - 1; j++) {
            if (answer[j] > answer[j + 1]) {
                let temp = answer[j];
                answer[j] = answer[j + 1];
                answer[j + 1] = temp;
                noSwap = false;
            }
        }
        if (noSwap) break;
    }

    return answer;
}

let arr = [13, 5, 11, 7, 23, 15];
console.log(solution(arr));

//

// 정답풀이
// i가 0일때 제일 큰 수가 맨 뒤로 간다.
function solution2(arr) {
    let answer = arr;
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }

    return answer;
}

// 버블정렬이란?
// 인접한 두 원소를 비교하여 스왑한다. O(n^2)

// solutio2를 기준으로 설명하자면 첫번째 for문을 통해 반복문을 돌면서
// 두번째 for문에서 정렬을 하는데 if문 기준이 큰쪽을 기준으로 하기때문에 큰 수가 맨 뒤로 간다.
// 이런식으로 큰 수를 뒤 쪽으로 먼저 정렬시킨다.

// 그나마 성능적으로는 solution이 낫다.
// 첫번째 for문은 끝에서 시작한다. 왜냐면 끝에서부터 정렬이 완료되니까
// 두번째 for문 부터 똑같이 정렬을 시작한다. 만약 정렬을 안하면 끝난거므로 break한다.
