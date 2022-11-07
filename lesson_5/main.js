// // - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// function square(a, b) {
//     document.write(`${a * b}`);
// }
//
// square(1, 1);
// square(2, 7);

// // - створити функцію яка обчислює та повертає площу кола з радіусом r
// function area(r) {
//     document.write((3.14 * Math.pow(r, 2)).toFixed(2));
// }
// area(7);

// // - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// function areaCylinder(h, r) {
//     document.write((2 * 3.14 * r * h).toFixed(2))
// }
// areaCylinder(5, 2);

// // - створити функцію яка приймає масив та виводить кожен його елемент
// function arrayOutput(arrays) {
//     for (let i of arrays) {
//         document.write(`<div>${i}</div>`);
//     }
// }
//
// arrayOutput([1, 2, 3, 4, 5]);
// arrayOutput([5, 4, 3, 2, 1]);

// // - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// function createsParagraphText(text) {
//     document.write(`<p>${text}</p>`);
// }
// createsParagraphText('Hello');
// createsParagraphText('body');

// // - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// function createsUlLi(text) {
//     document.write('<ul>');
//     for (let i = 0; i < 3; i++) {
//         document.write(`<li>${text}</li>`);
//     }
//     document.write('</ul>');
// }
// createsUlLi('text');

// // - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// function createsUlLi(text, li) {
//     document.write('<ul>');
//     for (let i = 0; i < li; i++) {
//         document.write(`<li>${text}</li>`);
//     }
//     document.write('</ul>');
// }
// createsUlLi('text', 3);

// // - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// function buildsList (arr) {
//     document.write('<div>');
//     for (let arrElement of arr) {
//         document.write(`${arrElement} `);
//     }
//     document.write('</div>');
// }
// buildsList([65, 'String', true]);

// // - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
// function outputsObjectData(arr) {
//
//         for (let j of arr) {
//     document.write(`<div>`);
//             for (let jKey in j) {
//                 document.write(`${j[`${jKey}`]} `)
//                 }
//             }
//     document.write(`</div>`);
// }
//
// outputsObjectData([{
//     id: 'id1',
//     name: 'Vasyl1',
//     age: 32.1
// }, {
//     id: 'id2',
//     name: 'Vasyl2',
//     age: 32.2
// }, {
//     id: 'id3',
//     name: 'Vasyl3',
//     age: 32.3
// }, {
//     id: 'id4',
//     name: 'Vasyl4',
//     age: 32.4
// }]);
// outputsObjectData([{
//     id: 'id1',
//     name: 'Vasyl1',
//     age: 32.1
// }, {
//     id: 'id2',
//     name: 'Vasyl2',
//     age: 32.2
// }, {
//     id: 'id3',
//     name: 'Vasyl3',
//     age: 32.3
// }, {
//     id: 'id4',
//     name: 'Vasyl4',
//     age: 32.4
// }]);

// // - створити функцію яка повертає найменьше число з масиву
//
// function smallestNumber(arr) {
// let small = arr[0];
//     for (let i = 1; i < arr.length; i++) {
//         if (small > arr[i]) {
//             small = arr[i];
//         }
//
//     }
//     return small;
// }
//
// document.write(smallestNumber([10, 5, 9, 7, 5, 9, 7, 9]));

// // - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// function sumNumbers(arr) {
// let sum = 0;
//     for (let arrElement of arr) {
//         sum += arrElement;
//     }
//         return sum;
// }
// document.write(sumNumbers([1, 2, 20]));

// //rest argument
// function fooBar (a,b,c,...fff) {
//     console.log(fff);
//     for (const fffElement of fff) {
//         document.write(fffElement);
//     }
// };
//
// fooBar(1, 2, 3, 0,9,8);

// // this
// let asd = {
//     name: 'vasya',
//     greeting: function () {
//         document.write(`hi ${this.name}`);
//     },
//     greeting2: () => {
//         document.write(`hi ${asd.name}`);
//     }
// }
//
// asd.greeting();
// asd.greeting2();

// // зміна масиву по індексу
// const arr = [1, 2, 3, 4,5,6, 7, 8];
//
// const swap = (arr, index) => {
//     let temp = arr[index];
//     arr[index] = arr[index + 1];
//     arr[index + 1] = temp;
//
//     return arr;
// }
//
// console.log(swap(arr, 4));

// // знайти найменше значення масиву
// let arr = [-10, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//
// let minSum = (array) => {
//     let minNum = array[0];
//
//     for (const arrayElement of array) {
//         if (minNum > arrayElement) {
//             minNum = arrayElement;
//         }
//     }
//
//     // for (let i = 0; i < array.length; i++) {
//     //     if (minNum > array[i+1]) {
//     //         minNum = array[i + 1];
//     //     }
//     // }
//
//     return minNum;
// }
//
// console.log(minSum(arr));
