// 문제 : Count characters in your string
// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.

// ----------------------

// 나의 풀이
function count(string) {
    // TODO
    let obj = {};

    for (let x of string) {
        if (obj[x]) {
            obj[x] = obj[x] + 1;
        } else {
            obj[x] = 1;
        }
    }

    return obj;
}

// ---------------------

// 다른사람 풀이
// function count (string) {
//     var count = {};
//     string.split('').forEach(function(s) {
//        count[s] ? count[s]++ : count[s] = 1;
//     });
//     return count;
//   }

// forEach를 이용하는 방법도 있다는 것을 알았다.
