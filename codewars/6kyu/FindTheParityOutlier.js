// 문제
// You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

// Examples
// [2, 4, 0, 100, 4, 11, 2602, 36]
// Should return: 11 (the only odd number)

// [160, 3, 1719, 19, 11, 13, -21]
// Should return: 160 (the only even number)

// ---------------------

// 나의 풀이
function findOutlier(integers) {
    //your code here
    let result = [];
    let result2 = [];

    for (const integer of integers) {
        if (integer % 2 === 0) {
            result.push(integer);
        } else {
            result2.push(integer);
        }
    }
    return result.length === 1 ? result[0] : result2[0];
}

// 다른사람 풀이
// function findOutlier(integers){
//     var even = int.filter(a=>a%2==0);
//     var odd = int.filter(a=>a%2!==0);
//     return even.length==1? even[0] : odd[0];
//   }

// filter를 이용해서 풀 수 있다는것을 다른사람 풀이 보고 알았다.....
