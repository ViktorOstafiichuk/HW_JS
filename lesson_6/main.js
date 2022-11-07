// // - Знайти та вивести довижину настипних стрінгових значень
// // 'hello world', 'lorem ipsum', 'javascript is cool'
// let str = ['hello world', 'lorem ipsum', 'javascript is cool'];
// for (let string of str) {
//     console.log(string.length);
// }

// // - Перевести до великого регістру наступні стрінгові значення
// // 'hello world', 'lorem ipsum', 'javascript is cool'
// let str = ['hello world', 'lorem ipsum', 'javascript is cool'];
// for (let string of str) {
//     console.log(string.toUpperCase());
// }

// // - Перевести до нижнього регістру настипні стрінгові значення
// // 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
// let str = ['HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'];
// for (let string of str) {
//     console.log(string.toLowerCase());
// }

// // - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
// let str = ' dirty string   ';
// console.log(str.trim());

// // - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
// //     let str = 'Ревуть воли як ясла повні';
// // let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
// let str = 'Ревуть воли як ясла повні';
// console.log(str.split(' '));

// // - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та
// колбеку перетворити всі об'єкти в масиві на стрінгові.
// let arr = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
// console.log(arr.map(value => `${value}`));

// // - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
// //     let nums = [11,21,3];
// // sortNums(nums,'ascending') // [3,11,21]
// // sortNums(nums,'descending') // [21,11,3]
// let nums = [11, 21, 3, 5, 7, 9, 0, 2, 4];
//
// const numbers = (arr, direction) => {
//     switch (direction) {
//         case 'ascending':
//             arr.sort((a, b) => a - b);
//             break;
//         case 'descending':
//             arr.sort((a, b) => b - a);
//             break;
//     }
//     return arr;
// };
// console.log(numbers(nums, 'ascending'));
// console.log(numbers(nums, 'descending'));

// // - є масив
// // let coursesAndDurationArray = [
// //     {title: 'JavaScript Complex', monthDuration: 5},
// //     {title: 'Java Complex', monthDuration: 6},
// //     {title: 'Python Complex', monthDuration: 6},
// //     {title: 'QA Complex', monthDuration: 4},
// //     {title: 'FullStack', monthDuration: 7},
// //     {title: 'Frontend', monthDuration: 4}
// // ];
// // -- відсортувати його за спаданням за monthDuration
// // -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// let sort = coursesAndDurationArray.sort((user1, user2) => user1['monthDuration'] - user2['monthDuration']);
// console.log(sort);
// console.log(sort.filter(value => value.monthDuration > 5));


// // описати колоду карт
// // - знайти піковий туз
// // - всі шістки
// // - всі червоні карти
// // - всі буби
// // - всі трефи від 9 та більше
// //
// //
// // {
// //     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
// //         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
// //     color:'', // 'red','black'
// // }
// let cards = [
//     {cardSuit: 'clubs', value: 'Ace', color: 'black'},
//     {cardSuit: 'clubs', value: 2, color: 'black'},
//     {cardSuit: 'clubs', value: 3, color: 'black'},
//     {cardSuit: 'clubs', value: 4, color: 'black'},
//     {cardSuit: 'clubs', value: 5, color: 'black'},
//     {cardSuit: 'clubs', value: 6, color: 'black'},
//     {cardSuit: 'clubs', value: 7, color: 'black'},
//     {cardSuit: 'clubs', value: 8, color: 'black'},
//     {cardSuit: 'clubs', value: 9, color: 'black'},
//     {cardSuit: 'clubs', value: 10, color: 'black'},
//     {cardSuit: 'clubs', value: 'Jack', color: 'black'},
//     {cardSuit: 'clubs', value: 'Queen', color: 'black'},
//     {cardSuit: 'clubs', value: 'King', color: 'black'},
//
//     {cardSuit: 'diamonds', value: 'Ace', color: 'red'},
//     {cardSuit: 'diamonds', value: 2, color: 'red'},
//     {cardSuit: 'diamonds', value: 3, color: 'red'},
//     {cardSuit: 'diamonds', value: 4, color: 'red'},
//     {cardSuit: 'diamonds', value: 5, color: 'red'},
//     {cardSuit: 'diamonds', value: 6, color: 'red'},
//     {cardSuit: 'diamonds', value: 7, color: 'red'},
//     {cardSuit: 'diamonds', value: 8, color: 'red'},
//     {cardSuit: 'diamonds', value: 9, color: 'red'},
//     {cardSuit: 'diamonds', value: 10, color: 'red'},
//     {cardSuit: 'diamonds', value: 'Jack', color: 'red'},
//     {cardSuit: 'diamonds', value: 'Queen', color: 'red'},
//     {cardSuit: 'diamonds', value: 'King', color: 'red'},
//
//     {cardSuit: 'hearts', value: 'Ace', color: 'red'},
//     {cardSuit: 'hearts', value: 2, color: 'red'},
//     {cardSuit: 'hearts', value: 3, color: 'red'},
//     {cardSuit: 'hearts', value: 4, color: 'red'},
//     {cardSuit: 'hearts', value: 5, color: 'red'},
//     {cardSuit: 'hearts', value: 6, color: 'red'},
//     {cardSuit: 'hearts', value: 7, color: 'red'},
//     {cardSuit: 'hearts', value: 8, color: 'red'},
//     {cardSuit: 'hearts', value: 9, color: 'red'},
//     {cardSuit: 'hearts', value: 10, color: 'red'},
//     {cardSuit: 'hearts', value: 'Jack', color: 'red'},
//     {cardSuit: 'hearts', value: 'Queen', color: 'red'},
//     {cardSuit: 'hearts', value: 'King', color: 'red'},
//     {value: 'Joker', color: 'red'},
//
//     {cardSuit: 'spades', value: 2, color: 'black'},
//     {cardSuit: 'spades', value: 3, color: 'black'},
//     {cardSuit: 'spades', value: 4, color: 'black'},
//     {cardSuit: 'spades', value: 5, color: 'black'},
//     {cardSuit: 'spades', value: 6, color: 'black'},
//     {cardSuit: 'spades', value: 7, color: 'black'},
//     {cardSuit: 'spades', value: 8, color: 'black'},
//     {cardSuit: 'spades', value: 9, color: 'black'},
//     {cardSuit: 'spades', value: 10, color: 'black'},
//     {cardSuit: 'spades', value: 'Jack', color: 'black'},
//     {cardSuit: 'spades', value: 'Queen', color: 'black'},
//     {cardSuit: 'spades', value: 'King', color: 'black'},
//     {cardSuit: 'spades', value: 'Ace', color: 'black'},
//     {value: 'Joker', color: 'black'},
//
// ];


// Додатково по reduce
// Взяти описану колоду карт, та за допомоги редюсу попакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }

// let arr = [];
// arr.push(
//     {
//         spades: [],
//         diamonds: [],
//         hearts: [],
//         clubs: []
//     }
// );
// console.log(arr)

// let reduce = cards.reduce((accum, card) => {
//     if (card.cardSuit === 'spades') {
//         accum.spades.push(card);
//     } else if (card.cardSuit === 'diamonds') {
//         accum.diamonds.push(card);
//     } else if (card.cardSuit === 'hearts') {
//         accum.hearts.push(card);
//     } else if (card.cardSuit === 'clubs') {
//         accum.clubs.push(card);
//     } else {
//         accum.joker.push(card);
//     }
//     return accum;
// }, {
//     spades: [],
//     diamonds: [],
//     hearts: [],
//     clubs: [],
//     joker: []
// });
//
// console.log(reduce);


let users = [
    {name: 'vova', age: 21, status: true},
    {name: 'max', age: 32, status: true},
    {name: 'dima', age: 45, status: false},
    {name: 'mukola', age: 47, status: true},
    {name: 'petia', age: 52, status: false},
    {name: 'vasia', age: 12, status: true},
    {name: 'max', age: 32, status: true},
    {name: 'yra', age: 25, status: false},
    {name: 'muhmuh', age: 26, status: true},
    {name: 'anton', age: 11, status: true},
    {name: 'taras', age: 72, status: false}
];

let usersCyrillic = [
    {name: 'вова', age: 21, status: true},
    {name: 'макс', age: 32, status: true},
    {name: 'діма', age: 45, status: false},
    {name: 'микола', age: 47, status: true},
    {name: 'петя', age: 52, status: false},
    {name: 'вася', age: 12, status: true},
    {name: 'макс', age: 32, status: true},
    {name: 'юра', age: 25, status: false},
    {name: 'михмих', age: 26, status: true},
    {name: 'антон', age: 11, status: true},
    {name: 'тарас', age: 72, status: false}
];
// users.forEach(value => {
//     if (!value.status) {
//         console.log(value);
//     }
// });

// let filter = users.filter(value => !value.status);
// console.log(filter);
// let filter = users.filter(value => value.age < 30);
// console.log(filter);

// users.map(value => console.log(value));
// users.map(value => console.log(value.name));
// let map = users.map((value,index) => ({id: index, ...value}));
// console.log(map);

// // знаходить тільки перше співпадіння і зупиняється
// let find = users.find((value) => value.name === 'max');
// console.log(find);

// // щоб знайти всі спвпадіння використовується фільтер
// let filter = users.filter(value => value.name === 'max');
// console.log(filter);

// //сортування по числах
// let sort = users.sort((a, b) => a.age - b.age);
// console.log(sort);

// // сортування по алфавіту
// let sort = usersCyrillic.sort((a, b) => {
//     if (a.name > b.name){
//         return 1;
//     }
//     if (a.name < b.name) {
//         return -1;
//     }
//     if (a.name === b.name) {
//         return 0;
//     }
// });
//
// console.log(sort);

// reduce фасування, редуктор в обєкт
// let reduce = users.reduce((accumulator, user) => {
//     if (user.status) {
//         accumulator.statusTrue.push(user);
//     } else {
//         accumulator.statusFalse.push(user);
//     }
//     return accumulator;
// }, {statusTrue: [], statusFalse: []});
//
// console.log(reduce);

// // reduce фасування, редуктор в масив
// let reduce = users.reduce((accumulator, user) => {
//     if (user.status) {
//         accumulator[0].push(user);
//     } else {
//         accumulator[1].push(user);
//     }
//     return accumulator;
// }, [[], []]);
//
// console.log(reduce);
