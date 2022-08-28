// На странице post-details.html:
// 7 Вивести всю, без виключення, інформацію про об'єкт post на який клікнули .
// 8 Нижчє інформаці про пост, вивести всі коментарі поточного поста (ендпоінт  - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)
let item = JSON.parse(localStorage.getItem('id'))['id'];

fetch('https://jsonplaceholder.typicode.com/userss/USER_ID/posts')
    .then(response => {
        return response.json();
    })
    .then(data => {

        let div = document.createElement('div');
        document.body.appendChild(div);
        let findDiv = document.getElementsByTagName('div');
        // console.log(findDiv[0]);
        let createOl = document.createElement('ol');
        findDiv[findDiv.length - 1].appendChild(createOl);
        let findOl = findDiv[findDiv.length - 1].getElementsByTagName('ol');

        function getElementsPost(posts) {

            for (let [key, value] of Object.entries(posts)) {
                if (typeof value === 'object') {

                    getElementsPost(value);

                } else {

                    let li = document.createElement('li');

                    li.innerText = `${key}: ${value}`;
                    findOl[findOl.length - 1].appendChild(li);
                }
            }
        }

        getElementsPost(data[item]);

        fetch('https://jsonplaceholder.typicode.com/postss/POST_ID/comments')
            .then(response => {
                return response.json();
            })
            .then(data => {

                let filter = data.filter(value => value['postId'] === +item + 1);

                let cloneNode = div.cloneNode(false);
                cloneNode.classList.add('comments');
                document.body.appendChild(cloneNode);


                let findOl2 = document.body.getElementsByTagName('ol');

                for (const filterItem in filter) {

                    let olClone = createOl.cloneNode(false);
                    findDiv[findDiv.length - 1].appendChild(olClone);

                    for (let [keys, values] of Object.entries(filter[filterItem])) {
                        let li = document.createElement('li');

                        li.innerText = `${keys}: ${values}`;
                        findOl2[+filterItem + 1].appendChild(li);
                    }
                }
            });
    });
