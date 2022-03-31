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

// function getLastElement(array) { 
//     return array[array.length - 1] 
// }

// // Ví dụ sử dụng
// var animals = ['Monkey', 'Tiger', 'Elephant','Lion', 'Fox', 'Bird'];
// var result = getLastElement(animals);

// console.log(result); // Expected: "Elephant"
// console.log(animals); // Expected: ['Monkey', 'Tiger', 'Elephant']
// let date = new Date();
// console.log(date.getDate())

// let random = Math.floor(Math.random() * 100);

// if (random < 10) {
//     console.log('chuc mung thanh nien 🤑🤑🤑🤑');
// } else {
//     console.log('Tach roi nhe 🤡🤡🤡🤡');
// }

// const number = [12, 43, 65, 32, 96];
// console.log(number [2]);

// console.log(typeof (21, 54, 65, 5, 32, 65, 62));

// const unChek = 20 / 'a';
// console.log(isNaN(unChek));

// let date = Math.floor(Math.random() * 10 );

// if (date === 2) {
//     console.log('Today is Monday 🍟');
// } else if (date === 3) {
//     console.log('Today is Tuesday 🍚');
// } else if (date === 4) {
//     console.log('Today is Wednesday 🥪')
// } else if (date === 5) {
//     console.log('Today is Thursday 🥓');
// } else if (date === 6) {
//     console.log('Today is Friday 🍤')
// } else if (date === 7) {
//     console.log('Today is Saturday 🍚');
// } else if (date === 8) {
//     console.log('Today is Sunday 🥪');
// } else {
//     console.log('Out of date 🥐')
// }

// const date = Math.floor(Math.random() * 10);
// switch(date) {
//     case 2:
//         console.log('Today is Monday 🍟');
//         break;
//     case 3:
//         console.log('Today is Tuesday 🍚');
//         break;
//     case 4:
//         console.log('Today is Wednesday 🥪');
//         break;
//     case 5:
//         console.log('Today is Thursday 🥓');
//         break;
//     case 6:
//         console.log('Today is Friday 🍤');
//         break;
//     case 7:
//         console.log('Today is Saturday 🍚');
//         break;
//     case 8:
//         console.log('Today is Sunday 🥪');
//         break;
//     default:
//         console.log('Out of date 🥐');
// }

// const course = {
//     name: 'Python',
//     coin: 25 0
// }

// if (course.coin > 0) {
//     console.log(`${course.coin} Coins`);
// } else {
//     console.log('Free Course');
// }

// let result = course.coin > 0 ? `${course.coin} Coins` : 'Free Course';
//     console.log(result);

// const dayWeek = Math.floor(Math.random() * 10);

// let weekCon = dayWeek < 7 ? 'It\' a weekday 👔' : 'Not define 🎇🎞🏉🏈🎮';
// console.log(weekCon);

//Loop

const myArrayZodiac = [
    '🐀',
    '🐃',
    '🐯',
    '🐱',
    '🐲',
    '🐍',
    '🐴',
    '🐐',
    '🐵',
    '🐔',
    '🐶',
    '🐷',
]

const myArrayDouble = [
    1,
    3,
    [2, 5 , 9],
    4, 
    6, 
    [0, 3, 1, 8],
]

const arrayLength = myArrayDouble.length

// let i = 0;

// do {
//     i++;
//     // if (i%2 !== 0){
//     //     continue;
//     // }
    
//     console.log(myArrayZodiac[i-1])
//     if (i >= 12) {
//         break;
//     }
// } while (i < myArrayZodiac.length)


// const myString = 'Responsibility'

let gameLibrary = [
    {
    game: 'Pes',
    type: '⚽',
    time: 2022,
    price: 0,
    shit: true,
    },
    {
    game: 'GOW',
    type: '⚔',
    time: 2092,
    price: 0,
    shit: false,
    },
    {
    game: 'Fifa',
    type: '⚽',
    time: 2022,
    price: 0,
    shit: false,
    },
    {
    game: 'Elden Ring',
    type: '🪓',
    time: 2022,
    price: 0,
    shit: false,
    },
    {
    game: 'NFS',
    type: '🚗',
    time: 2012,
    price: 0,
    shit: true,
    }
]

let newLibrary = gameLibrary.map(function (gameLib) {
    return {
        game: gameLib.game,
        type: `gerne ${gameLib.type}`,
        price: gameLib.price,
    }
})
console.log(newLibrary);

// let isThisYear = gameLibrary.some(function(year, index) {
//     return year.time === 2022;
// });
// console.log(isThisYear);

// let currentYear = gameLibrary.filter(function(year2) {
//     return year2.time === 2022;
// });
// console.log(currentYear);

// gameLibrary.forEach(function(num) {
//     console.table(num);
// });

// let yearBorn = gameLibrary.every(function(game) {
//     return game.time === 2021;
// })
// console.log(yearBorn);

// let i = 0;
// let j = gameLibrary.length;

// do {
//     i++;
//     console.log(gameLibrary[i-1])
// } while (i < j);

// for(; i < j, i++;) {
//     console.log(gameLibrary[i]);
// }
// for (var key in gameLibrary) {
//     if (gameLibrary[key].time !== 2022) {
//         continue;
//     }
// console.table(gameLibrary[key])
// };
// for (var value of gameLibrary) {
//     if (value.time !== 2022) {
//         continue;
//     }
//     console.log(value);
// };

    // let thisYear = gameLibrary.every(function(game) {
    //     return game.time === 2022;
    // });
    // console.log(thisYear);

// for (var key in myArrayDouble) {
//     console.log(myArrayDouble[key]);
// }


// for (var key in myArrayDouble) {
// // for (var key = 0; key < myArrayDouble.length; key++) {
//     for (var j = 0; j < myArrayDouble[key].length; j++) {
//         console.log(myArrayDouble[key][j]);
//     }
//     // console.log (`you're ${myArray[key]}`);
// }


// console.log(Object.keys(myObject))

// for (var key of Object.values(myObject)) {
//     console.log(key);
// }

// const bird = {
//     size: "small"
//   };
  
//   const mouse = {
//     name: "Mickey",
//     small: true
//   };

// console.log(bird['size']);

// for (var i = 100; i >= 1; i--) {
//     console.log(i);
// }

// let i = 0;
// do {
//     i += 5;
//     console.log(i);
// } while (i < 50);

// console.log(Math.max());

// const myArrayLetter = ['a', 'b', 'c', 'd', 'a', 'f', 'g', 'a']
// console.log([...(new Set(myArrayLetter))]);
// console.log((new Set(myArrayLetter)));

// function countDown(num) {
//     if(num > 0) {
//         console.log(num)
//         return countDown(num - 1);
//     }
//     return num;
// }
// countDown(5);

// function loop(start, end, cb) {
//     if (start < end) {
//         cb(start);
//         return loop(start + 1, end, cb);
//     }
// }

// loop(0, myArrayLetter.length, function(index) {
//     console.log(myArrayLetter[index]);
// });

// function giaiThua (num) {
//     if (num > 0) {
//         return num * giaiThua(num - 1);
//     }
//     return 1;
// }
// console.log(giaiThua(10));

// function capSoCong (num) {
//     if (num > 0) {
//         return num + capSoCong(num - 1);
//     }
//     return 0;
// }
// console.log(capSoCong(4));



// giaiThua(5);

// function giaiThua(num) {
//     let output = 1;
//     for (let i = num; i > 0; i--) {
//         output = output * i;
//     }
//     return output;
// }
// console.log(giaiThua(6));