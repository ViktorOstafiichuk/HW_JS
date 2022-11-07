// function userBuilder(name, age, surname) {
//     let user = {name, surname, age}
//     console.log(user.name);
//     return {
//         getName() {
//             return user.name;
//         },
//         getSurname() {
//             return user.surname;
//         },
//         getAge() {
//             return user.age;
//         },
//         setAge() {
//             if (age > 0) {
//                 user.age = age
//                 return user.age;
//             }
//         }
//     };
// }
//
// userBuilder('vas', -12, 'pet');

// // (JS)..Дописать функцию getPersistence, которая принимает не отрицательное число number и возвращает его мультипликативную устойчивость. Чтобы посчитать мультипликативную устойчивость, нужно умножать цифры даного числа между собой, пока результат не будет содержать только одну цифру.
// //
// // 'use strict';
// //
// // /**
// //  * @param {Number} number
// //  *
// //  * @returns {Number}
// //  */
// //
// // function getPersistence(number) {
// //     let i = 0;
// //     while (number > 9) {
// //         i++;
// //         let [a, ...b] = number.toString();
// //         for (let k of b) a *= k;
// //         number = a;
// //     }
// //     return i;
// // }
// // console.log(getPersistence(39));
// //
// function getPersistence(number) {
//     let i = 0;
//
//     while (number > 9) {
//         let a = 1;
//         i++;
//         for (let k of number.toString()) a *= k;
//         number = a;
//     }
//     return i;
// }
//
// console.log(getPersistence(39));
// //
// // Пример:
// //
// //     getPersistence(39) === 3 (3*9 = 27, 2*7 = 14, 1*4 = 4)
// // getPersistence(1000) === 1 (1*0*0*0 = 0)
// // getPersistence(5389) === 2 (5*3*8*9 = 1080, 1*0*8*0 = 0)
// // getPersistence(4) === 0

// //напиши функцію яка приймає число і ліміт. Поки число менше за лімінт
// // збільш його вдвічі. виведи масив всіх чисел
// //Test.assertSimilar(findMultiples(5, 25), [5, 10, 15, 20, 25])
// // Test.assertSimilar(findMultiples(1, 2), [1, 2])
// // Test.assertSimilar(findMultiples(5, 7), [5])
// // Test.assertSimilar(findMultiples(4, 27), [4, 8, 12, 16, 20, 24])
// // Test.assertSimilar(findMultiples(11, 54), [11, 22, 33, 44])
//
// function findMultiples(integer, limit) {
//     let arr = [integer];
//
//     while(arr[(arr.length - 1)] + integer <= limit){
//
//         arr.push(arr[arr.length -1] + integer);
//     }
//     return arr;
// }
//
// console.log(findMultiples(4, 100));

// //створити функцію consecutive(arr), яка приймає масив цілих чисел і
// // повертає мінімальну кількість цілих b';
// ///-*
// // Наприклад:
// // Якщо arr містить [4, 8, 6], тоді результат має бути 2, оскільки до масиву потрібно додати два числа (5 і 7), щоб зробити його послідовним масивом чисел від 4 до 8. Числа в arr будуть унікальними .
// //describe("Tests", () => {
// //   it("test", () => {
// // Test.assertEquals(consecutive([4,8,6]),2);
// // Test.assertEquals(consecutive([1,2,3,4]),0);
// // Test.assertEquals(consecutive([]),0);
// // Test.assertEquals(consecutive([1]),0);
// //   });
// // });
//
// function consecutive(arr) {
//     let sort = arr.sort((a, b) => a - b);
//     let n = Number;
//
//     if (!(arr.length === 0)) {
//
//         n = sort[sort.length - 1] - sort.length - (sort[0] - 1);
//     } else {
//         n = 0;
//     }
//
//
//     return n;
// }
//
// console.log(consecutive([4, 8, 6]));
// console.log(consecutive([1, 2, 3, 4]));
// console.log(consecutive([]));
// console.log(consecutive([1]));
// console.log(consecutive([5, 9, 7, 6, 3, 4]));
// console.log(consecutive([9, 8, 2, 7, 52, 6, 5, 47, 4]));

// let user = {
//     user1: {
//         name: 'vasul',
//         age: 23
//     },
//     user2: {
//         name: 'dima',
//         age: 24
//     }
//
//
// }
//
// let kokos = {...user, user1:{...user.user1, status: true}};
//
// console.log(kokos);

// // копія
// let user = {
//     name: 'vasul',
//     age: 23,
//     wife: {name: 'anna'},
//     greeting(){
//         console.log('hi');
//     }
// };
//
// // let kokos = {
// //     ...user,
// //     status: true,
// //     name: 'muhmuh',
// // };
//
// // console.log(kokos);
// // console.log(kokos === user);
// // console.log(user);
// // console.log(kokos.wife === user.wife);
// // console.log(kokos.age === user.age);
// // console.log(kokos.name === user.name);
//
// // // // копіювання обєкта з створенням нового з різним посиланням
// // // let userJson = JSON.stringify(user);
// // // console.log(userJson);
// // // let userParse = JSON.parse(userJson);
// // // console.log(userParse);
// // // // скорочений варіант
// // let userParse = JSON.parse(JSON.stringify(user));
// // console.log(userParse);
// //
// // console.log(userParse === user);
// // console.log(userParse.wife === user.wife);
// // console.log(userParse.wife.name === user.wife.name);
//
// //
//
// let kokos = Object.assign({}, user);
// console.log(kokos)
//
// console.log(user.wife === kokos.wife);


// let user = {
//     name: 'vas',
//     age: 12,
//     foo(){
//         console.log('foobar');
//     }
// }
//
// user.foo();
// console.log(user.name);
// user.age = -1000;
// console.log(user.age);


function userBuilder(name, age){
    let user = {name, age};
    return {
        getName(){
            return user.name;
        },
        getAge(){
            return user.age;
        },
        setAge(age){
            if (age > 0) {
                user.age = age;
            }
        },
        setName(name){
            if (typeof name === 'string' && name){
                user.name = name;
            }
        },
        info(){
            return {...user}
        }
    };
}

let res = userBuilder('vas', 17);
console.log(res.getAge());
console.log(res.getName());
res.setAge(20);
console.log(res.getAge());
res.setName('zxc');
console.log(res.getName());
let data = res.info();
console.log(data);

document.write(`${data.name} - `);
document.write(data.age);

