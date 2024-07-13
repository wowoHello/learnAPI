// .try取得請求的資料
// .catch接住錯誤的資訊
const find = document.querySelector("#find");
const createUser = document.querySelector("#create");
const updateUser = document.querySelector("#update");
const show = document.querySelector("#show");
let dataUrl = 'https://reqres.in/api/users?page=2';

let name = '';
let img = '';
let email = '';

// GET請求，抓取資料
async function getfetchFunc() {
  try {
    const response = await fetch(dataUrl);
    const data = await response.json();
    let users = data.data; 
    console.log(data);
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
  } catch (error) {
  console.error('Error fetching data:', error);
  }
}

// POST請求，創建新資料
async function postfetchFunc() {
  try {
    const response = await fetch('https://reqres.in/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        first_name: 'John',
        last_name: "Doe",
        job: 'Software Developer'
      })
    });
    const data = await response.json();
    console.log(data);
    let id = data.id;
    let name = `${data.first_name} ${data.last_name}`;
    let job = data.job;
    let createTime = data.createdAt;

    let userElement = document.createElement('div');
    userElement.classList.add('user');
    userElement.innerHTML = `
        <h3>${id} ${name}</h3>
        <p>${job}</p>
        <p>${createTime}</p>`;
        
    show.appendChild(userElement);    
  } catch (error) {
    console.error('Error posting data:', error);
  }
}

// PUT請求，更新現有資料
async function putfetchFunc() {
  try {
    const getResponse = await fetch('https://reqres.in/api/users/2');
    const getData = await getResponse.json();
    console.log(getData);
    let user = getData.data;
    let name = `${user.first_name} ${user.last_name}`;
    let img = user.avatar;
    let beforeUpdateElement = document.createElement('div');
    beforeUpdateElement.classList.add('user');
    beforeUpdateElement.innerHTML = `
      <h3>Before Update</h3>
      <p>ID: ${user.id}</p>
      <p>Name: ${name}</p>
      <img src="${img}" alt="${name}">
      <p>Job: ${user.job || 'N/A'}</p>
      `;

    show.appendChild(beforeUpdateElement);

    const putResponse = await fetch('https://reqres.in/api/users/2', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: 'Jane Smith',        
        job: 'Product Manager'
      })
    });
    let data = await putResponse.json();
    let afterUpdateElement = document.createElement('div');
    afterUpdateElement.classList.add('user');
    afterUpdateElement.innerHTML = `
      <h3>After Update</h3>
      <p>ID: ${user.id}</p>
      <p>Name: ${data.name}</p>
      <img src="${img}" alt="${name}">
      <p>Job: ${data.job || 'N/A'}</p>
      <p>Updated At: ${data.updatedAt}</p>
      `;
          
    show.appendChild(afterUpdateElement);
  } catch (error) {
    console.error('Error updating data:', error);
  }
}

find.addEventListener('click', ()=> getfetchFunc());
createUser.addEventListener('click', () => postfetchFunc());
updateUser.addEventListener('click', () => putfetchFunc());