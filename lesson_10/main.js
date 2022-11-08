// document.getElementById('btn')
//     .onclick = () => {
//     console.log('clc');
// }

//
// let i = 0
// while (i < 999999999) {
//   i++
// }

let money = 0;

// // послідовність виконання асинхронних дій на промісах з finaly
// function getSalary (salary){
//     return new Promise((resolve, reject) => {
//         if (salary) {
//             console.log('I howe salary');
//             money += salary;
//             resolve(money);
//         } else {
//             reject('I am relaxing');
//         }
//     })
//
// }
//
//
// function goToUkraine(money) {
//     return new Promise((resolve, reject) => {
//         if (money < 800) {
//             reject('No money no honey');
//         } else {
//             console.log('Swimming all day');
//             money -= 600;
//             resolve(money);
//         }
//     })
// }
//
// function bySouvenirs(money) {
//     return new Promise((resolve, reject) => {
//         if (money < 300) {
//             reject('I dont have money on magnets');
//         } else {
//             console.log('By magnets');
//             money -= 250;
//             resolve(money)
//         }
//     })
// }
//
// getSalary(700)
//     .then(salary => {
//         console.log('I howe', salary,'!');
//         return goToUkraine(salary);
//     })
//     .then(moneyAfterTrip => {
//         console.log('After trip i got', moneyAfterTrip);
//         return bySouvenirs(moneyAfterTrip);
//     })
//     .then(moneyAfterShopping => {
//         console.log('I got', moneyAfterShopping, 'after relax day');
//     })
//     .catch(reason => {
//         console.warn('OOOOOPS!!!', reason)
//     })
//     .finally(()=> {
//         console.log('Finaly');
//     });

// // Робота синхронних дій
// function getSalary(salary) {
//     if (salary) {
//         console.log('I howe salary', salary);
//         money += salary;
//     } else {
//         console.log('I am relaxing');
//     }
//     return money;
// }
//
//
// function goToUkraine(money) {
//     if (money < 800) {
//         console.log('No money no honey');
//         return 0;
//     } else {
//         console.log('Swimming all day');
//         money -= 600;
//         return money;
//     }
// }
//
// function bySouvenirs(money) {
//     if (money < 300) {
//         console.log('I dont have money on magnets');
//     } else {
//         console.log('By magnets');
//         money -= 250;
//     }
//     return money;
// }
//
// let salary = getSalary(500);
// if (salary >= 800) {
//     let moneyOnTrip = goToUkraine(salary);
//     console.log('After trip I got', moneyOnTrip);
//     let bySouvenirs1 = bySouvenirs(moneyOnTrip);
//     console.log('I got', bySouvenirs1, 'after relax day');
// } else {
//     console.log('Поїду в село');
// }

// Ось чому асинхронні дії не працюють без промісів в необхідному порядку
// function getSalary (salary){
//     setTimeout(() => {
//         if (salary) {
//             console.log('I howe salary', salary);
//             money += salary;
//         } else {
//             console.log('I am relaxing');
//         }
//         return money;
//     }, 5000);
// }
//
//
//
// function goToUkraine(money) {
//     setTimeout(() => {
//         if (money < 800) {
//             console.log('No money no honey');
//             return 0;
//         } else {
//             console.log('Swimming all day');
//             money -= 600;
//         return money;
//         }
//     }, 2000);
// }
//
// function bySouvenirs(money) {
//     setTimeout(() => {
//         if (money < 300) {
//             console.log('I dont have money on magnets');
//         } else {
//             console.log('By magnets');
//             money -= 250;
//         }
//         return money;
//     }, 500);
// }
//
// let salary = getSalary(800);
// if (salary >= 800) {
//     let moneyOnTrip = goToUkraine(salary);
//     console.log('After trip I got', moneyOnTrip);
//     let bySouvenirs1 = bySouvenirs(moneyOnTrip);
//     console.log('I got', bySouvenirs1, 'after relax day');
// } else {
//     console.log('Поїду в село');
// }

// // послідовність виконання асинхронних дій на промісах
// function getSalary (salary){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (salary) {
//                 console.log('I howe salary', salary);
//                 money += salary;
//                 resolve(money);
//             } else {
//                 reject('I am relaxing');
//             }
//         }, 1000);
//     })
//
// }
//
//
//
// function goToUkraine(money) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (money < 800) {
//                 console.log('No money no honey');
//                 reject('поїду в село');
//             } else {
//                 console.log('Swimming all day');
//                 money -= 600;
//                 resolve(money);
//             }
//         }, 500);
//     })
// }
//
// function bySouvenirs(money) {
//     return new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if (money < 300) {
//             reject('I dont have money on magnets');
//         } else {
//             console.log('By magnets');
//             money -= 250;
//             resolve(money);
//         }
//     }, 250);
//     })
// }
//
// getSalary(500)
//     .then(salary => {
//         return goToUkraine(salary);
//     })
//     .then(rest => {
//         console.log('I have left', rest);
//         return bySouvenirs(rest);
//     })
//     .then(rest => {
//         console.log('After trip I got', rest)
//     })
//     .catch(er => {
//         console.warn('OOOPS!', er);
//     })

// // послідовність виконання асинхронних дій на async, await
// function getSalary(salary) {
//     return new Promise((resolve, reject) => {
//         if (salary) {
//             console.log('I howe salary');
//             money += salary;
//             resolve(money);
//         } else {
//             reject('I am relaxing');
//         }
//     })
//
// }
//
//
// function goToUkraine(money) {
//     return new Promise((resolve, reject) => {
//         if (money < 800) {
//             reject('No money no honey');
//         } else {
//             console.log('Swimming all day');
//             money -= 600;
//             resolve(money);
//         }
//     })
// }
//
// function bySouvenirs(money) {
//     return new Promise((resolve, reject) => {
//         if (money < 300) {
//             reject('I dont have money on magnets');
//         } else {
//             console.log('By magnets');
//             money -= 250;
//             resolve(money)
//         }
//     })
// }
//
// async function holiday(salary) {
//     try {
//         const payment = await getSalary(salary);
//         console.log('I howe', payment);
//
//         const moneyAfterTrip = await goToUkraine(payment);
//         console.log('After trip i got', moneyAfterTrip);
//
//         const moneyAfterShopping = await bySouvenirs(moneyAfterTrip);
//         console.log('I got', moneyAfterShopping, 'after relax day');
//
//     } catch (e) {
//         console.warn('OOOOOPS!!!', e)
//     }
// }
//
// holiday(1000);

// // послідовність виконання асинхронних дій на async, await
// // декілька викликів
// function getSalary(salary) {
//     return new Promise((resolve, reject) => {
//         if (salary) {
//             console.log('I howe salary');
//             money += salary;
//             resolve(money);
//         } else {
//             reject('I am relaxing');
//         }
//     })
//
// }
//
//
// function goToUkraine(money) {
//     return new Promise((resolve, reject) => {
//         if (money < 800) {
//             reject('No money no honey');
//         } else {
//             console.log('Swimming all day');
//             money -= 600;
//             resolve(money);
//         }
//     })
// }
//
// function bySouvenirs(money) {
//     return new Promise((resolve, reject) => {
//         if (money < 300) {
//             reject('I dont have money on magnets');
//         } else {
//             console.log('By magnets');
//             money -= 250;
//             resolve(money)
//         }
//     })
// }
//
// async function holiday(salary) {
//     try {
//         const payment = await getSalary(salary);
//         console.log('I howe', payment);
//
//         const moneyAfterTrip = await goToUkraine(payment);
//         console.log('After trip i got', moneyAfterTrip);
//
//         const moneyAfterShopping = await bySouvenirs(moneyAfterTrip);
//         console.log('I got', moneyAfterShopping, 'after relax day');
//
//     } catch (e) {
//         console.warn('OOOOOPS!!!', e)
//     }
// }
//
//
// const one = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(holiday(1000));
//         money = 0;
//     }, 0)
// });
//
// const two = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(holiday(10000));
//         money = 0;
//     }, 0)
// });
//
// const three = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(holiday(5000));
//         money = 0;
//     }, 0)
// });
//
// async function holidayTurn(boolean) {
//     try {
//         const ones = await one;
//
//         const twos = await two;
//
//         const thees = await three;
//
//     } catch (e) {
//         console.warn('OOOOOPS!!!', e)
//     }
// }
//
// holidayTurn(true);

// const one = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(1);
//     }, 346)
// });
//
// const two = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('TEST');
//     }, 645)
// });
//
// const three = new Promise(resolve => {
//     setTimeout(() => {
//         resolve('XXXX')
//     }, 847)
// });
//
// // Promise.all([one, two, three])
// //   .then(value => {
// //     console.log(value);
// //   })
// //   .catch(e => {
// //     console.warn(e);
// //   });
//
// // Promise.allSettled([one, two, three])
// //   .then(value => {
// //     console.log(value);
// //   })
//
// // Promise.race([one, two, three])
// //     .then(value => {
// //         console.log(value);
// //     })
