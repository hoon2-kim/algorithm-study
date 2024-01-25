function solution(food) {
    let answer = '';
    
    for(let i=1; i<food.length; i++) {
        const count = Math.floor(food[i] /2)
        answer+=String(i).repeat(count)
    }
    
    const reverseString = answer.split('').reverse().join('')
    
    return answer+'0'+reverseString
}