// // - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// // створити пустий масив, наповнити його 10 об'єктами new User(....)
// function User(id, name, surname , email, phone) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }
//
// let newUser = [];
//
// for (let i = 10; i > 0; i--) {
// newUser.push(new User(`${i}`, 'vasyl', 'vasylenko', 'vasyl@gmail.com', '+380645404099'));
// }
// console.log(newUser);
//
//
//
// //
// // - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
// newUserFilter = newUser.filter(value => value.id % 2 === 0);
// console.log(newUserFilter);
//
// //
// // - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
// newUserSort = newUser.sort((a, b) => a.id - b.id);
// console.log(newUserSort);


// // - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// // створити пустий масив, наповнити його 10 об'єктами Client
// // - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
//
//
// class User{
//     constructor(id, name, surname, email, phone, order) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
//     }
// }
//
//
// let user1 = new User(1, 'vasyl', 'vasylenko', 'vasyl@gmail.com', '+380645404099', [1]);
// let user2 = new User(2, 'vasyl', 'vasylenko', 'vasyl@gmail.com', '+380645404099', [1, 2]);
// let user3 = new User(4, 'vasyl', 'vasylenko', 'vasyl@gmail.com', '+380645404099', [1,2,3,4]);
// let user4 = new User(9, 'vasyl', 'vasylenko', 'vasyl@gmail.com', '+380645404099', [1,2,3,4,5,6,7,8,9]);
// let user5 = new User(8, 'vasyl', 'vasylenko', 'vasyl@gmail.com', '+380645404099', [1,2,3,4,5,6,7,8]);
// let user6 = new User(3, 'vasyl', 'vasylenko', 'vasyl@gmail.com', '+380645404099', [1,2,3]);
// let user7 = new User(5, 'vasyl', 'vasylenko', 'vasyl@gmail.com', '+380645404099', [1,2,3,4,5]);
// let user8 = new User(10, 'vasyl', 'vasylenko', 'vasyl@gmail.com', '+380645404099', [1,2,3,4,5,6,7,8,9,10]);
// let user9 = new User(6, 'vasyl', 'vasylenko', 'vasyl@gmail.com', '+380645404099', [1,2,3,4,5,6]);
// let user10 = new User(7, 'vasyl', 'vasylenko', 'vasyl@gmail.com', '+380645404099', [1,2,3,4,5,6,7]);
//
// let client = [];
//
// client.push(user1, user2, user3,user4, user5,user6,user7,user8,user9,user10);
// console.log(client);
// newUserSort = client.sort((a, b) => a.order.length - b.order.length);
// console.log(newUserSort);


// // - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// // -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// // -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// // -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// // -- changeYear (newValue) - змінює рік випуску на значення newValue
// // -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
// function User(model, vurobnuk, year, maxSpeed, obiemD) {
//     this.model = model;
//     this.vurobnuk = vurobnuk;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.obiemD = obiemD;
//     this.drive = function (){
//         console.log(`їдемо зі швидкістю ${maxSpeed} на годину`);
//     }
//     this.info = function (){
//         for (let i in this) {
//             if (typeof this[i] !== 'function'){
//
//             console.log(`${i} - ${this[i]}`);
//             }
//         }
//     }
//
//     this.increaseMaxSpeed = function (newSpeed){
//         this.maxSpeed += newSpeed;
//     }
//     this.changeYear = function (newValue) {
//         this.year = newValue;
//     }
//     this.addDriver = function (driver) {
//         this.driver = driver;
//     }
// }
//
// let user1 = new User('opel', 'nimec', 2015, 220, 1.3);
//
// console.log(user1);
// user1.drive();
// user1.info();
// user1.increaseMaxSpeed(50);
// console.log(user1);
// user1.changeYear(2022);
// console.log(user1);
// user1.addDriver('volodia');
// console.log(user1);


// // - (Те саме, тільки через клас)
// // Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// // -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// // -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// // -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// // -- changeYear (newValue) - змінює рік випуску на значення newValue
// // -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
// class Car {
//     constructor(model, vurobnuk, year, maxSpeed, obiemD) {
//         this.model = model;
//         this.vurobnuk = vurobnuk;
//         this.year = year;
//         this.maxSpeed = maxSpeed;
//         this.obiemD = obiemD;
//         this.drive = function (){
//             console.log(`їдемо зі швидкістю ${maxSpeed} на годину`);
//         }
//         this.info = function (){
//             for (let i in this) {
//                 if (typeof this[i] !== 'function'){
//
//                     console.log(`${i} - ${this[i]}`);
//                 }
//             }
//         }
//
//         this.increaseMaxSpeed = function (newSpeed){
//             this.maxSpeed += newSpeed;
//         }
//         this.changeYear = function (newValue) {
//             this.year = newValue;
//         }
//         this.addDriver = function (driver) {
//             this.driver = driver;
//         }
//     }
//
//
// }
//
// let user1 = new Car('opel', 'nimec', 2015, 220, 1.3);
//
// console.log(user1);
// user1.drive();
// user1.info();
// user1.increaseMaxSpeed(50);
// console.log(user1);
// user1.changeYear(2022);
// console.log(user1);
// user1.addDriver('volodia');
// console.log(user1);


// // -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// // Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// //     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
// //     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
// class Cinderella {
//     constructor(name, age, footSize) {
//         this.name = name;
//         this.age = age;
//         this.footSize = footSize;
//     }
// }
//
// let cinderella1 = new Cinderella('Romanna1', 18, 35);
// let cinderella2 = new Cinderella('Romanna2', 19, 36);
// let cinderella3 = new Cinderella('Romanna3', 20, 37);
// let cinderella4 = new Cinderella('Romanna4', 21, 38);
// let cinderella5 = new Cinderella('Romanna5', 22, 39);
// let cinderella6 = new Cinderella('Romanna6', 23, 40);
// let cinderella7 = new Cinderella('Romanna7', 24, 41);
// let cinderella8 = new Cinderella('Romanna8', 25, 42);
// let cinderella9 = new Cinderella('Romanna9', 26, 43);
// let cinderella10 = new Cinderella('Romanna10', 27, 44);
// let cinderellaArr = [];
// cinderellaArr.push(cinderella1, cinderella2, cinderella3, cinderella4, cinderella5, cinderella6, cinderella7, cinderella8, cinderella9, cinderella10);
// console.log(cinderellaArr);
//
// class Prince extends Cinderella{
//     constructor(name, age, footFind) {
//         super(name, age);
//         this.footFind =footFind;
//     }
//
// }
//
// let prince = new Prince('kokos', 32, 39);
// console.log(prince);
//
// // let find = (cinderellaArr, prince) => {
// //     for (let i of cinderellaArr) {
// //         if (prince.footFind === i.footSize) {
// //             return `Hi my princes ${i.name}`;
// //         }
// //
// //     }
// // }
// //
// // console.log(find(cinderellaArr,prince));
//
// let cin = cinderellaArr.find(value => prince.footFind === value.footSize)
// console.log(`Hi my cinderella ${cin.name}`);
