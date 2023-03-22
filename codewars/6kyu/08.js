// 문제 : Detect Pangram
// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

// ---------------------

// 나의 풀이
function isPangram(string) {
    //...
    const al = "abcdefghijklmnopqrstuvwxyz";
    const change = al.split("");
    string = string.toLowerCase();

    for (let i = 0; i < string.length; i++) {
        for (let j = 0; j < change.length; j++) {
            if (!string.includes(change[j])) {
                return false;
            }
        }
    }
    return true;
}

// 이중 for문이 쓰인데다가 너무 복잡하게 푼거같아서 아쉽다....

// ---------------------

// 다른사람 풀이

// function isPangram(string) {
//     string = string.toLowerCase();
//     return "abcdefghijklmnopqrstuvwxyz".split("").every(function (x) {
//         return string.indexOf(x) !== -1;
//     });
// }

// every는 배열 안의 모든 요소가 주어진 판별 함수를 통과하는지 테스트한다.
