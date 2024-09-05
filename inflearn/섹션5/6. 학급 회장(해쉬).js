// 해쉬
function solution(s) {
    let answer;
    let sH = new Map();

    for (let x of s) {
        if (sH.get(x)) {
            sH.set(x, sH.get(x) + 1);
        } else {
            sH.set(x, 1);
        }
    }

    // map의 entries()는 [키, 값] 쌍을 이터러블(반복 가능한 객체)로 반환
    // ex) ['B', 3], ['A', 3], ['C', 4], ['D', 2], ['E', 2]
    answer = [...sH.entries()].reduce((a, b) => (a[1] > b[1] ? a : b))[0];

    return answer;
}

let str = 'BACBACCACCBDEDE';
console.log(solution(str));

// reduce에서 초기값을 안넣었으니 a에 초기값인 배열 첫번째 값 ['B',3]을 넣고, b에 그다음 ['A',3]을 넣어서 비교([1]이니까 숫자로)
// 이런식으로 비교해서 제일 큰 값만을 반환
