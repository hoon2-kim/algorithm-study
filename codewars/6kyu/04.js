// 문제 : Two Sum
// Write a function that takes an array of numbers (integers for the tests) and a target number. It should find two different items in the array that, when added together, give the target value. The indices of these items should then be returned in a tuple / list (depending on your language) like so: (index1, index2).

// For the purposes of this kata, some tests may have multiple answers; any valid solutions will be accepted.

// The input will always be valid (numbers will be an array of length 2 or greater, and all of the items will be numbers; target will always be the sum of two different items from that array).

// Based on: http://oj.leetcode.com/problems/two-sum/

// twoSum([1, 2, 3], 4) // returns [0, 2] or [2, 0]

// ---------------------

// 나의 풀이

function twoSum(numbers, target) {
    // ...
    let hs = {};

    for (let i = 0; i < numbers.length; i++) {
        const currentValue = hs[numbers[i]];

        if (currentValue >= 0) {
            return [currentValue, i];
        } else {
            const numberToFind = target - numbers[i];
            hs[numberToFind] = i;
        }
    }
    return null;
}
// 과거 인강에서 배웠던 내용이다 해쉬를 이용하여 풀었다.

// ---------------------

// 다른사람 풀이

// function twoSum(numbers, target) {
//     let seen = new Map();
//     for (let i = 0; i < numbers.length; i++) {
//       let x = numbers[i], y = target - x;
//       if (seen.has(y))
//         return [seen.get(y), i];
//       seen.set(x, i);
//     }
//   }

// new Map()을 이용해서 풀면 훨씬 코드가 간결해지는거 같다.
