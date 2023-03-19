// 문제 : Which are in?
// Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.

// Example 1:
// a1 = ["arp", "live", "strong"]

// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

// returns ["arp", "live", "strong"]

// Example 2:
// a1 = ["tarp", "mice", "bull"]

// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

// returns []

// ---------------------

// 나의 풀이

function inArray(array1, array2) {
    //...
    let result = [];

    for (let x of array1) {
        for (let q of array2) {
            if (q.includes(x)) {
                result.push(x);
                break;
            }
        }
    }
    return result.sort();
}

// ---------------------

// 다른사람 풀이
// function inArray(array1, array2) {
//     return array1.filter((a1) => array2.find((a2) => a2.match(a1))).sort();
// }
// filter와 find를 이용해서 정규식표현에 사용하는 match까지 활용하는 법에 대해 알게되었다....

// function inArray(array1, array2) {
//     return array1.filter((item) => {
//         return array2.some((element) => {
//             return element.includes(item);
//         });
//     });
// }
// filter를 이용한 뒤 some을 이용 할수도 있다는 것을 알 수 있었다.
