// 문제 : Simple Pig Latin
// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

// ---------------------

// 나의 풀이
function pigIt(str) {
    //Code here
    const al = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let a = str.split(" ");
    let b = [];
    for (let i = 0; i < a.length; i++) {
        if (al.includes(a[i][0])) {
            const first = a[i].slice(0, 1);
            const rest = a[i].slice(1);
            const newStr = rest + first + "ay";
            b.push(newStr);
        } else {
            b.push(a[i]);
        }
    }
    return b.join(" ");
}

// 너무 복잡하게 푼거같아 아쉽다....
// 예시 중에 특수문자가 들어가는 경우를 제외하려고 저렇게 식을 짯는데 코드가 너무 지저분해진거 같다.....

// ---------------------

// 다른사람 풀이

// function pigIt(str) {
//     return str.replace(/(\w)(\w*)(\s|$)/g, "\$2\$1ay\$3");
// }

// 정규표현식은 정말 배워두면 유용한거 같다.....
// 나도 정규표현식에 대해 공부해둬야 할거같다....
