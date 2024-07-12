// .then取得請求的資料
// .catch接住錯誤的資訊
const find = document.querySelector("#find");
const show = document.querySelector("#show");
let dataUrl = 'https://reqres.in/api/users?page=2';

let name = '';
let img = '';
let email = '';

// GET請求，抓取資料
const getfetchFunc = () => {
    fetch(dataUrl)
    .then(response => response.json())
    .then(data =>{
        console.log(data)
        let users = data.data;
        show.innerHTML = '';
        for (let i = 0; i < users.length; i++) {
            let user = users[i];
            let name = `${user.first_name} ${user.last_name}`;
            let img = user.avatar;
            let email = user.email;

            let userElement = document.createElement('div');
            userElement.classList.add('user');

            userElement.innerHTML = `
                <h3>${name}</h3>
                <img src="${img}" alt="${name}">
                <p>${email}</p>`;
                
            show.appendChild(userElement);
        }
    })
    .catch(error => console.log(error))
}

// POST請求，創建新資料
const postfetchFunc = () => {
    fetch('https://reqres.in/api/users', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify({
        name: 'John Doe',
        job: 'Software Developer'
        })
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        console.log(data.name);
    })
    .catch(error => console.error('Error posting data:', error));
}

// PUT請求，更新現有資料
const putfetchFunc = () => {
    fetch('https://reqres.in/api/users/2', {
        method: 'PUT',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify({
        name: 'Jane Smith',
        job: 'Product Manager'
        })
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        console.log(data.name);
    })
    .catch(error => {
        console.error('Error updating data:', error);
    });
}

find.addEventListener('click', ()=>{
    getfetchFunc();
    postfetchFunc();
    putfetchFunc();
})