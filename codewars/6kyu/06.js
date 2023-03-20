// 문제 : Is a number prime?
// Define a function that takes an integer argument and returns a logical value true or false depending on if the integer is a prime.

// Per Wikipedia, a prime number ( or a prime ) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

// Requirements
// You can assume you will be given an integer input.
// You can not assume that the integer will be only positive. You may be given negative numbers as well ( or 0 ).
// NOTE on performance: There are no fancy optimizations required, but still the most trivial solutions might time out. Numbers go up to 2^31 ( or similar, depending on language ). Looping all the way up to n, or n/2, will be too slow.

// Example
// is_prime(1)  /* false */
// is_prime(2)  /* true  */
// is_prime(-1) /* false */

// ---------------------

// 나의 풀이
function isPrime(num) {
    //TODO
    if (num <= 1) {
        return false;
    }

    for (let i = 2; i <= parseInt(Math.sqrt(num)); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// 소수 판별 문제이다.... 과거 인터넷강의에서 한번 배웠던 내용이다..

// ---------------------

// 다른사람 풀이

// 다른사람들의 풀이들을 봤는데 위의 코드에서 크게 벗어나지 않았다....
