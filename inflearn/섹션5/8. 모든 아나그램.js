function solution(s, t) {
    let answer = 0;
    let tH = new Map();
    let sH = new Map();

    // 찾아야 하는 아나그램인 t 문자열 해쉬에 저장
    for (let x of t) {
        tH.set(x, (tH.get(x) || 0) + 1); // 있다면 get결과, 없다면 0
    }

    // s문자열을 아나그램인 t 문자열 길이만큼 해쉬에 저장
    for (let i = 0; i < t.length; i++) {
        sH.set(s[i], (sH.get(s[i]) || 0) + 1);
    }

    // 슬라이딩 윈도우(문제 5번처럼)
    for (let i = t.length; i < s.length; i++) {
        if (compareHashMap(tH, sH)) {
            answer++;
        }

        // 오른쪽 해쉬에 추가
        sH.set(s[i], (sH.get(s[i]) || 0) + 1);
        // 왼쪽 해쉬에서 값 빼거나 0이였으면 제거
        sH.set(s[i - t.length], (sH.get(s[i - t.length]) || 0) - 1);
        if (sH.get(s[i - t.length]) === 0) {
            sH.delete(s[i - t.length]);
        }
    }

    // 마지막꺼는 비교안되고 for문 나오니까 여기서 비교
    if (compareHashMap(tH, sH)) {
        answer++;
    }

    return answer;
}

// 아나그램 비교
function compareHashMap(map1, map2) {
    if (map1.size !== map2.size) {
        return false;
    }

    for (let [key, value] of map1) {
        if (map2.get(key) !== value) {
            return false;
        }
    }

    return true;
}

let a = 'bacaAacba';
let b = 'abc';
console.log(solution(a, b));
