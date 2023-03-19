// 문제

// Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

// Examples
// "()"              =>  true
// ")(()))"          =>  false
// "("               =>  false
// "(())((()())())"  =>  true
// Constraints
// 0 <= length of input <= 100

// All inputs will be strings, consisting only of characters ( and ).
// Empty strings are considered balanced (and therefore valid), and will be tested.
// For languages with mutable strings, the inputs should not be mutated.

// ------------------------------

// 나의 풀이
function validParentheses(parenStr) {
    let check = [];

    for (let paren of parenStr) {
        if (paren === "(") check.push(x);
        else {
            // 닫는 괄호를 빼려는데 없다면
            if (check.length === 0) return false;
            // 있다면
            check.pop();
        }
    }
    // ( 가 더 많은 경우
    if (check.length > 0) return false;

    return true;
}

// 다른사람 풀이
//   function validParentheses(parenStr) {
//     let curr = 0;
//     for(let i = 0; i < parenStr.length; i++) {
//       if (parenStr[i] === '(') {
//         curr++;
//       } else {
//         curr--;
//       }
//       if (curr < 0) {
//         return false;
//       }
//     }
//     return curr === 0;
//   }
