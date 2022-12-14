// 시저 암호

// 문제 설명
// 어떤 문장의 각 알파벳을 일정한 거리만큼 밀어서 다른 알파벳으로 바꾸는 암호화 방식을 시저 암호라고 합니다. 예를 들어 "AB"는 1만큼 밀면 "BC"가 되고, 3만큼 밀면 "DE"가 됩니다. "z"는 1만큼 밀면 "a"가 됩니다. 문자열 s와 거리 n을 입력받아 s를 n만큼 민 암호문을 만드는 함수, solution을 완성해 보세요.

// 제한 조건
// 공백은 아무리 밀어도 공백입니다.
// s는 알파벳 소문자, 대문자, 공백으로만 이루어져 있습니다.
// s의 길이는 8000이하입니다.
// n은 1 이상, 25이하인 자연수입니다.
// 입출력 예
// s	    n	   result
// "AB"	    1	   "BC"
// "z"	    1	   "a"
// "a B z"	4	   "e F d"

// ---------------------------------------------------------------------------------------------------------------------

// 나의 풀이
function solution(s, n) {
    let answer = "";

    const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

    for (let i = 0; i < s.length; i++) {
        if (s[i] === " ") {
            answer += " ";
        } else {
            let loc = alphabet.indexOf(s[i]);
            const index =
                loc > 25
                    ? alphabet.slice(26, alphabet.length)
                    : alphabet.slice(0, 26);

            loc = index.indexOf(s[i]) + n;

            if (loc >= 26) {
                answer += index[loc - 26];
            } else {
                answer += index[loc];
            }
        }
    }

    return answer;
}

// 일단 알파벳을 소문자부터 대문자까지 쓴 다음 변수에 저장한다
// 그리고 s에 소문자인지 대문자인지 indexOf를 통해 알아내고 25보다 크다면 대문자로 작다면 소문자로 간다
// 그 다음 거기서 다시한번 위치를 찾아내고 n만큼 더한다
// n이 큰 수 이면 대문자,소문자의 길이를 넘어갈 수 있기 때문에 26을 빼준다
