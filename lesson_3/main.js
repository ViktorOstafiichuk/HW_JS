// // - Є змінна х, якій ви надаєте довільне числове значення.
// //     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
// let x = 7;
// console.log('x= ' + !!x);
//
// let a = [1, 0, -3];
// for (let i of a) {
//     console.log('a= ' + !!i);
// }

// // - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// // (в першу, другу, третю или четверту частину години).
// // - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
// let time = 45;
// if (time >= 0 && time < 15) {
//     console.log('the first quarter of an hour');
// }
//
// if (time >= 15 && time < 30) {
//     console.log('the second quarter of an hour');
// }
//
// if (time >= 30 && time < 45) {
//     console.log('quarter of an hour');
// }
//
// if (time >= 45 && time < 59) {
//     console.log('a quarter past four');
// }

// // - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
// let day = prompt('write data');
// switch (day) {
//     case '1':
//         console.log('one');
//         break;
//     case '2':
//         console.log('two');
//         break;
//     case '3':
//         console.log('three');
//         break;
//     case '4':
//         console.log('four');
//         break;
//     case '5':
//         console.log('five');
//         break;
//     case '6':
//         console.log('six');
//         break;
//     case '7':
//         console.log('seven eight nine ten eleven');
//         break;
//     case '8':
//         console.log('eight');
//         break;
//     case '9':
//         console.log('nine');
//         break;
//     case '10':
//         console.log('ten');
//         break;
//     case '11':
//         console.log('eleven');
//         break;
//     case '12':
//         console.log('twelve');
//         break;
//     case '13':
//         console.log('thirteen');
//         break;
//     case '14':
//         console.log('fourteen');
//         break;
//     case '15':
//         console.log('fifteen');
//         break;
//     case '16':
//         console.log('sixteen');
//         break;
//     case '17':
//         console.log('seventeen');
//         break;
//     case '18':
//         console.log('eighteen');
//         break;
//     case '19':
//         console.log('nineteen twenty twenty one');
//         break;
//     case '20':
//         console.log('twenty');
//         break;
//     case '21':
//         console.log('twenty one');
//         break;
//     case '22':
//         console.log('twenty two');
//         break;
//     case '23':
//         console.log('twenty three');
//         break;
//     case '24':
//         console.log('twenty four');
//         break;
//     case '25':
//         console.log('twenty five');
//         break;
//     case '26':
//         console.log('twenty six');
//         break;
//     case '27':
//         console.log('twenty seven');
//         break;
//     case '28':
//         console.log('twenty eight');
//         break;
//     case '29':
//         console.log('twenty nine');
//         break;
//     case '30':
//         console.log('thirty');
//         break;
//     case '31':
//         console.log('thirty one');
//         break;
// }

// //     - Користувач вводить або має два числа.
// //         Потрібно знайти та вивести максимальне число з тих двох .
// //         Також потрібно врахувати коли введені рівні числа.
// let num1 = +prompt('writr first number');
// let num2 = +prompt('writr second number');
//
// if (num1 === num2) {
//     console.log('the numbers are the same');
// } else {
//     if (num1 > num2) {
//         console.log('the first number is greater');
//     } else {
//         console.log('the second number is larger');
//     }
// }

// //     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
// //         за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподыбне, тобто кастується до false)
// let x = 1;
// if(x === '' || x === 0 || x === undefined || x === null) {
//     x = 'default';
//     console.log(x);
// }
