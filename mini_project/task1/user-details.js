// На странице user-details.html:
// 4 Вивести всю, без виключення, інформацію про об'єкт user на який клікнули
// 6 Каждому посту додати кнопку/посилання, при кліку на яку відбувається перехід на сторінку post-details.html, котра має детальну інфу про поточний пост.
//     5 Додати кнопку "post of current user", при кліку на яку, з'являються title всіх постів поточного юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
let item = JSON.parse(localStorage.getItem('id'))['id'];
// console.log(item);

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => {
        let div = document.createElement('div');
        document.body.appendChild(div);
        let findDiv = document.getElementsByTagName('div');
        let ol = document.createElement('ol');
        let keyUser = Object.keys(data[item]);
        let keyUserAddress = Object.keys(data[item]['address']);
        let keyUserAddressGeo = Object.keys(data[item]['address']['geo']);
        let keyUserCompany = Object.keys(data[item]['company']);

        ol.innerHTML = `
        <li>${keyUser[0]}: ${data[item]['id']}</li>
        <li>${keyUser[1]}: ${data[item]['name']}</li>
        <li>${keyUser[2]}: ${data[item]['username']}</li>
        <li>${keyUser[3]}: ${data[item]['email']}</li>
        <li>${keyUser[4]}</li>
        <ul>
        <li>${keyUserAddress[0]}: ${data[item]['address']['street']}</li>
        <li>${keyUserAddress[1]}: ${data[item]['address']['suite']}</li>
        <li>${keyUserAddress[2]}: ${data[item]['address']['city']}</li>
        <li>${keyUserAddress[3]}: ${data[item]['address']['zipcode']}</li>
        <li>${keyUserAddress[4]}</li>
        <ul>
        <li>${keyUserAddressGeo[0]}: ${data[item]['address']['geo']['lat']}</li>
        <li>${keyUserAddressGeo[1]}: ${data[item]['address']['geo']['ing']}</li>
        </ul>
        </ul>
        <li>${keyUser[5]}: ${data[item]['phone']}</li>
        <li>${keyUser[6]}: ${data[item]['website']}</li>
        <li>${keyUser[7]}:</li>
        <ul>
        <li>${keyUserCompany[0]}: ${data[item]['company']['name']}</li>
        <li>${keyUserCompany[1]}: ${data[item]['company']['catchPhrase']}</li>
        <li>${keyUserCompany[2]}: ${data[item]['company']['bs']}</li>
</ul>
        `;

        findDiv[0].appendChild(ol);

        let buttonPost = document.createElement('button');
        buttonPost.innerText = 'post of current user';
        buttonPost.classList.add('button');
        document.body.appendChild(buttonPost);

        buttonPost.onclick = function () {
            fetch('https://jsonplaceholder.typicode.com/userss/USER_ID/posts')
                .then(response => {
                    return response.json();
                })
                .then(data => {

                    let filter = data.filter(value => value['userId'] === +item + 1);

                    let divClone = div.cloneNode(false);
                    divClone.classList.add('posts');
                    document.body.appendChild(divClone);

                    for (const filterKey in filter) {
                        let divClone = div.cloneNode(false);
                        divClone.innerHTML = `<p>${+filterKey + 1}. ${filter[filterKey]['title']}</p> 
                        `;
                        let button = document.createElement('button');
                        button.innerText = 'detailed information';
                        findDiv[1].appendChild(divClone);
                        findDiv[+filterKey + 2].appendChild(button);

                        button.onclick = function () {
                            location.href = 'post-details.html';
                            localStorage.clear();
                            localStorage.setItem('id', JSON.stringify({id: filterKey}));
                        };
                    }
                });
        };
    });

