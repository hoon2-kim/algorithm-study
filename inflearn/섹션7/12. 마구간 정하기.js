function count(stable, dist) {
    let horse = stable[0]; // 처음 말은 무조건 첫번째 좌표에
    let count = 1; // 처음 말은 들어가 있으니까

    for (let x of stable) {
        // 두 말의 사이거리가 mid값 이상일 때
        if (x - horse >= dist) {
            count++;
            horse = x;
        }
    }

    return count;
}

function solution(c, stable) {
    let answer;
    stable.sort((a, b) => a - b);
    let lt = stable[0];
    let rt = stable[stable.length - 1] - stable[0];

    while (lt <= rt) {
        let mid = Math.floor((lt + rt) / 2);

        if (count(stable, mid) >= c) {
            answer = mid;
            lt = mid + 1; // 조건식에서 c랑 같거나 크면 여유로우니까 크기를 늘림
        } else {
            rt = mid - 1; // 여유롭지 않으니까 줄임
        }
    }

    return answer;
}

let arr = [1, 2, 8, 4, 9];
console.log(solution(3, arr));
