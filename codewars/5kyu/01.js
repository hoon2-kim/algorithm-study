// 문제 : Pete, the baker
// Pete likes to bake some cakes. He has some recipes and ingredients. Unfortunately he is not good in maths. Can you help him to find out, how many cakes he could bake considering his recipes?

// Write a function cakes(), which takes the recipe (object) and the available ingredients (also an object) and returns the maximum number of cakes Pete can bake (integer). For simplicity there are no units for the amounts (e.g. 1 lb of flour or 200 g of sugar are simply 1 or 200). Ingredients that are not present in the objects, can be considered as 0.

// Examples:

// // must return 2
// cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200});
// // must return 0
// cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000});

// ---------------------

// 나의 풀이
function cakes(recipe, available) {
    let temp = Number.MAX_SAFE_INTEGER;
    for (let key in recipe) {
        if (!available[key]) {
            return 0;
        }
        temp = Math.min(temp, Math.floor(available[key] / recipe[key]));
    }

    return temp;
}

// for문을 돌며 recipe에 있는 key값이 available에 없다면 케이크를 만들 수 없으므로 바로 0을 리턴하도록 하였다.
// 그리고 해당이 안되면 Math.min을 활용하여 최솟값이 최대로 만들 수 있는 케이크 수가 될꺼라 생각하여 위의 코드를 만들었다.

// ---------------------

// 다른사람 풀이

const cakes = (needs, has) =>
    Math.min(
        ...Object.keys(needs).map((key) =>
            Math.floor(has[key] / needs[key] || 0)
        )
    );

// speread와 Object.keys와 map을 활용하여 이렇게 간단하게 식을 만들 수 있다는거에 감탄이 나왔다......
// 나는 아직 많이 부족한거같다.....ㄴ
