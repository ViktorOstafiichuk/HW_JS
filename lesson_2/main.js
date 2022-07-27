// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (const i of arr1) {
    console.log(i);
}

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let books1 = {
    title: 'Toreadors from Vasyukivka',
    pageCount: '450',
    genre: 'Fiction'
};
let books2 = {
    title: 'Toreadors from Vasyukivka',
    pageCount: '450',
    genre: 'Fiction'
};
let books3 = {
    title: 'Toreadors from Vasyukivka',
    pageCount: '450',
    genre: 'Fiction'
};
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - масив. Кожен автор має поля name,age
let books4 = {
    title: 'Toreadors from Vasyukivka',
    pageCount: '450',
    genre: 'Fiction',
    authors: [
        {
            name: 'Всеволод',
            age: 84
        }
    ]
};
let books5 = {
    title: 'Toreadors from Vasyukivka',
    pageCount: '450',
    genre: 'Fiction',
    authors: [
        {
            name: 'Всеволод',
            age: 84
        }
    ]
};
let books6 = {
    title: 'Toreadors from Vasyukivka',
    pageCount: '450',
    genre: 'Fiction',
    authors: [
        {
            name: 'Всеволод',
            age: 84
        }
    ]
};

// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
let arr2 = [
    {
        name: 'Vasyl1',
        username: 'vas',
        password: 'p1'
    },
    {
        name: 'Vasyl2',
        username: 'vas',
        password: 'p2'
    },
    {
        name: 'Vasyl3',
        username: 'vas',
        password: 'p3'
    },
    {
        name: 'Vasyl4',
        username: 'vas',
        password: 'p4'
    },
    {
        name: 'Vasyl5',
        username: 'vas',
        password: 'p5'
    },
    {
        name: 'Vasyl6',
        username: 'vas',
        password: 'p6'
    },
    {
        name: 'Vasyl7',
        username: 'vas',
        password: 'p7'
    },
    {
        name: 'Vasyl8',
        username: 'vas',
        password: 'p8'
    },
    {
        name: 'Vasyl9',
        username: 'vas',
        password: 'p9'
    },
    {
        name: 'Vasyl10',
        username: 'vas',
        password: 'p10'
    }
];

for (let y = 0; y < arr2.length; y++) {
    console.log(arr2[y].password);
}

