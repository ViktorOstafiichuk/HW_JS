// // - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// // Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// // Завдання робити через цикли.
// for (let items of coursesAndDurationArray) {
//     let createDiv = document.createElement('div');
//     createDiv.innerHTML = `<h1>${items['title']}</h1><p>${items['monthDuration']}</p>`;
//     document.body.appendChild(createDiv);
// }

//-------------------------------------------------------------------------------

// // - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
// // За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
// //     Завдання робити через цикли.
// for (let items of coursesAndDurationArray) {
//     let createDiv = document.createElement('div');
//     createDiv.classList.add('item');
//     createDiv.innerHTML = `<h1 class="heading">${items['title']}</h1><p class="description">${items['monthDuration']}</p>`;
//
//     document.body.appendChild(createDiv);
// }


// ------------------------------------------------------------------------------

// //     - Створити довільний елемент з id = text.  Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".
// let createDiv = document.createElement('div');
// // createDiv.id = 'text';
// createDiv.innerText = 'kokos';
// let createButton = document.createElement('button');
// createButton.innerText = 'click me';
//
// document.body.append(createDiv, createButton);
// let findButton = document.getElementsByTagName('button');
// let button1 = findButton[0];
// button1.onclick = function () {
//     if (createDiv.id !== 'text') {
//     createDiv.id = 'text';
//     } else {
//         createDiv.id = '' ;
//     }
// };


// //     - створити інпут який приймає вік людини та кнопку яка підтверджує
// //     дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача.
// let form = document.createElement('form');
// document.body.appendChild(form);
//
//
// let findForm = document.getElementsByTagName('form')[0];
//
// let button = document.createElement('button');
// button.innerText = 'click me';
// button.id = 'but1';
// button.setAttribute('value', 'send');
//
// let input = document.createElement('input');
// input.classList.add('input');
// input.setAttribute('type', 'number');
// input.setAttribute('name', 'age');
// input.id = 'input1';
//
//
// findForm.append(input, button);
//
// console.log(input.value);
//
// findForm.onsubmit = function (e) {
//     e.preventDefault()
//     let age = this.age.value;
//     if(age < 18 && age > 0) {
//         alert('you are too young');
//
//     } else if (age <= 0 || age > 120) {
//         alert('enter your real age');
//     } else {
//         alert('all right');
//     }
// }

// *** Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
let form = document.createElement('form');
form.innerHTML = `
<input type="number" name="lines">
<input type="number" name="columns">
<input type="text" name="text">
<button id="but">click me</button>
`;

document.body.appendChild(form);
let findForm = document.getElementsByTagName('form')[0];

findForm.onsubmit = function (e) {
    e.preventDefault();
    let numberOfLines = this.lines.value;
    let numberOfColumns = this.columns.value;
    let text = this.text.value;


    let table = document.createElement('table');
    document.body.appendChild(table);

    let findTable = document.getElementsByTagName('table')[0];
    for (let i = 0; i <= numberOfLines; i++) {
        let tr = document.createElement('tr'); //рядок
        findTable.appendChild(tr);


        let findTr = document.getElementsByTagName('tr')[i];

        for (let j = 0; j < numberOfColumns; j++) {
            findTr.innerHTML += `<td>${text}</td>`;
        }
    }
}
