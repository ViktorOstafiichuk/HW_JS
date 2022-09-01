// 1 отримати масив об'єктів з endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вивести id,name всіх user в index.html. Окремий блок для кожного user.
// 3 Додати кожному блоку кнопку/посилання , при кліку на яку відбувається перехід  на сторінку user-details.html, котра має детальну інфорацію про об'єкт на який клікнули
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {
        return response.json();
    })
    .then(data => {

        for (const dataKey in data) {
            let div = document.createElement('div');
            div.innerText = data[dataKey]['id'] + ' ' + data[dataKey]['name'];

            let button = document.createElement('button');
            button.innerText = 'user-details';
            button.id = `myButton_${dataKey}`;
            let findDiv = document.body.getElementsByTagName('div');

            document.body.appendChild(div);
            findDiv[dataKey].appendChild(button);

            button.onclick = function () {
                location.href = 'user-details.html';
                localStorage.clear();
                localStorage.setItem('id', JSON.stringify({id: dataKey}));
            };
        }
    });
