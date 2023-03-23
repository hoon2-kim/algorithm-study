// 문제 : Enough is enough!
// Task

// Given a list and a number, create a new list that contains each number of list at most N times, without reordering.
// For example if the input number is 2, and the input list is [1,2,3,1,2,1,2,3], you take [1,2,3,1,2], drop the next [1,2] since this would lead to 1 and 2 being in the result 3 times, and then take 3, which leads to [1,2,3,1,2,3].
// With list [20,37,20,21] and number 1, the result would be [20,37,21].

// ---------------------

// 나의 풀이
function deleteNth(arr, n) {
    // ...
    let obj = {};
    let result = [];

    for (let x of arr) {
        if (!obj[x]) {
            obj[x] = 1;
            result.push(x);
        } else {
            if (obj[x] < n) {
                obj[x]++;
                result.push(x);
            }
        }
    }
    return result;
}

// 빈 객체와 빈 배열을 만든 뒤 arr을 순회하면서 객체에 해당 키가 없으면 1로 넣고 빈 배열에 넣어주고
// 있으면 n 보다 큰지 확인한 뒤 안크면 해당 키의 값을 ++ 시켜주고 빈 배열에 넣어주었다.

// ---------------------

// 다른사람 풀이

// function deleteNth(arr, x) {
//     var cache = {};
//     return arr.filter(function (n) {
//         cache[n] = (cache[n] || 0) + 1;
//         return cache[n] <= x;
//     });
// }

// filter를 사용하면 간단히 풀 수 있다는 걸 알았다.....
// 메소드를 활용 해야하는데 나는 아직 미숙한거 같다....
