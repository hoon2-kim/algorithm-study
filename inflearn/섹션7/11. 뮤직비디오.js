function count(songs, capacity) {
    let cnt = 1; // 하나의 DVD는 무조건 사용
    let sum = 0; // DVD에 들어간 노래 용량 총 합계

    for (let x of songs) {
        if (sum + x > capacity) {
            // 꽉 찼다면
            cnt++;
            sum = x;
        } else {
            // 담기
            sum += x;
        }
    }
    return cnt;
}

function solution(m, songs) {
    let answer;
    let lt = Math.max(...songs); // 최소 용량(가장 긴 거 한개)
    let rt = songs.reduce((a, b) => a + b, 0); // 최대 용량(모든 곡 길이)

    while (lt <= rt) {
        let mid = Math.floor((lt + rt) / 2); // 중간 값(DVD 용량)

        if (count(songs, mid) <= m) {
            answer = mid;
            rt = mid - 1;
        } else {
            lt = mid + 1;
        }
    }

    return answer;
}

// 결정알고리즘(이분검색 활용)

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(solution(3, arr));
