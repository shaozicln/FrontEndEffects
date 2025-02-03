const button = document.querySelector('button');
const img = document.querySelector('img');
// button.addEventListener('click', () => {
//     fetch('https://dog.ceo/api/breeds/image/random')
//         //判断，eg:网址输入错误
//         .then(response => {
//             if (response.ok) {
//                 return response.json();
//             } else {
//                 throw new Error("又不交电费！")
//             }
//         })
//         .then(imga => img.src = imga.message);
// })



const inputname = document.querySelector('#username');
const inputpassword = document.querySelector('#password');
button.addEventListener('click', ()=>{
    fetch('http://192.168.5.41:3000/users/login',{
        method: 'POST',
        body: JSON.stringify({username:inputname.value,password:inputpassword.value}),
        headers:{
            'Content-Type':'application/json;charset=UTF-8'
        },
    })
    .then(response => response.json())
    .then(data => console.log(data));
})


// const user = { username: rsafe, password: 124 };
// const response = await fetch('http://192.168.5.41:3000/users/login', {
// method: 'POST',
// headers: {
// 'Content-Type': 'application/json;charset=utf-8'
// },
// body: JSON.stringify(user)
// });


