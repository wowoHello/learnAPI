const find = document.querySelector("#find")
const show = document.querySelector("#show")
let dataUrl = 'https://randomuser.me/api/'

let name = ''
let img = ''
let email = ''

const Func = ()=>{
  $.ajax({
    url: dataUrl,
    type: 'GET',
    dataType: 'json',
    success: function (data) {
      let user = data.results[0]
      name = `${user.name.first} ${user.name.last}`
      img = user.picture.large
      email = user.email
      console.log(user.name)
  
      show.innerHTML =
        `<h3>${name}</h3>
        <img src=${img}>
        <p>${email}</p>`
    },
    error: function (error) {
      console.error(error)
    }
  })
}

find.addEventListener('click', ()=>{
  Func()
})