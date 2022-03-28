// function cong(a, b) {
//     return a + b;
// }

// var result = cong(2, 8);
// console.log(result);

// function getContentLength(content) {
//     return content.length;
// }


// // Mở tab Console để xem kết quả trực quan
// console.log(getContentLength('JavaScript'));
// console.log(getContentLength('Hello World'));
// console.log(getContentLength('Learning Javascript'))

// var games = [
//     'GOW',
//     'Fifa',
//     'PES',
//     'eFootball',
//     123,
//     NaN,
// ]

// console.log(games.join(' - '));

// function joinWithCharacter(array, charactor) {
//     return array.join(charactor);
// }


// // Ví dụ khi sử dụng
// var games = ['PES', 'Sekiro', 'Fifa', 'Genshin Impact', 'GOW'];

// var result = joinWithCharacter(games, ' * ');

// console.log(result); // Expected: "Honda - Mazda - Mercedes"

function getLastElement(array) { 
    return array[array.length - 1] 
}

// Ví dụ sử dụng
var animals = ['Monkey', 'Tiger', 'Elephant','Lion', 'Fox', 'Bird'];
var result = getLastElement(animals);

console.log(result); // Expected: "Elephant"
console.log(animals); // Expected: ['Monkey', 'Tiger', 'Elephant']