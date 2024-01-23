function solution(s) {
    const answer = []
    const m = new Map()
    
    for(let i=0; i<s.length; i++) {
        m.has(s[i]) ? answer.push(i - m.get(s[i])) : answer.push(-1)
        
        m.set(s[i],i)
    }
    return answer
}

// 다른사람 풀이
// function solution(s) {
//     const hash={};

//     return [...s].map((v,i)=>{
//         let result = hash[v] !== undefined ? i - hash[v] : -1;
//         hash[v] = i;
//         return result;
//     });
// }