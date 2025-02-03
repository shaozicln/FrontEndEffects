// const username = "cln";
// const password = "123456"
// fetch(`http://192.168.5.41:3000/json?username=${username}&password=${password}`)
//     .then((response) => {
//         return response.json();
//     })
//     .then((data) => {
//         console.log(data);
//     })
// let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const A = new Set(a)
// console.log(A instanceof Set);

// try {
//     let wrongJson = `{"name": "Jonh",}`;
//     let result = JSON.parse(wrongJson);
//     console.log(result);
// } catch (error) {
//     console.log(error instanceof SyntaxError); // true
//     console.log(error);
// }

// try{
//     let wj = '{"name": "Jonh",}';
//     let r = JSON.parse(wj);
//     console.log(r);
// } catch (error) {
//     console.log(error instanceof SyntaxError); // true
//     console.log(error);
// }

// const user = {
//     name : "cln",
//     password : "123456"
// }
// const result = JSON.stringify(user, (key, value) => {
//     if (key === "password") {
//         return "******";
//     }
//     return value;
// })

// console.log(JSON.stringify({ x: undefined, y: Object, z: Symbol("") }));

// const user = {
//     name: "cln",
//     password: "123456",
//     books: [
//         "mm",
//         "nnn",
//         "ooo"
//     ]
// }
// const result = JSON.stringify(user, null, " ");
// console.log(result);
// console.log(JSON.parse(result));
// console.log(typeof result);

// function replacer(key, value){
//     if(typeof value === "string"){
//         return undefined;
//     }
//     return value;
// }
// let foo = {foundation:"Mozilla", model:"box", week:45, transport:"car",month:5};
// let jsonString = JSON.stringify(foo, replacer);

// console.log(jsonString);


// document.querySelector('form').addEventListener('submit', function (event) {
//     event.preventDefault();//阻止表单默认提交事件

//     let username = document.getElementById("username").value;
//     let password = document.getElementById("password").value;
//     let reg = /^[a-zA-Z0-9_-]{4,16}$/;
//     if (!reg.test(username)) {
//         alert("用户名格式不正确");
//         return;
//     }
//     if (!reg.test(password)) {
//         alert("密码格式不正确");
//         return;
//     }
//     fetch("http://192.168.5.41:3000/users/login", {
//         methon: "POST",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify({
//             username: username,
//             password: password
//         })
//     })
//         .then((response) => response.json())
//         .then((data) => {
//             console.log(data);
//             console.log(typeof data);
//         })
//         login(username, password);
// })

// async function login(username, password){
//     const response = await fetch("http://192.168.5.41:3000/users/login", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify({
//             username: username,
//             password: password
//         })
//     })
// }

///JSON.parse()方法可以将一个JSON字符串转换为一个JavaScript对象。
let a = JSON.parse("{\"name\":\"cln\",\"age\":25,\"books\":[\"mmm\",\"www\",\"nnn\"]}")
console.log(a);
try {
    let wrongJson = `{"name": "Jonh",}`;
    let result = JSON.parse(wrongJson);
    console.log(result);
} catch (error) {
    // SyntaxError解析语法错愕
    console.log(error instanceof SyntaxError); // true
    console.log(error);
}
// JSON.parse('{"p":5}', function(k,v){
//     if(k === 'p') return v + 1;
//     return v;
// })

JSON.parse('{"1":1, "2":2,"3":{"4":4,"5":{"6":6}}}',function(kk,vv){
    console.log(kk,vv);
    return vv;
})

let day = '{"date":"2024-05-03T15:48:45.000Z"}';
let result = JSON.parse(day,function(k,v){
    if(k === 'date') return new Date(v);
    return v;
});
console.log(result);

let message = '{"name":"che", "age":2, "city":"harbin"}';
let mess = JSON.parse(message,function(k,v){
    if(k === 'city') return undefined;
    return v;
});
console.log(mess);

let s = '["a","b","c"]';
let aaa = JSON.parse(s,function(k,v){
    if(k === "") return new Set(v);
    return v;
});
console.log(aaa);

//JSON.stringify() 方法将一个 JavaScript 对象或值转换为 JSON 字符串
let obj = {name : "cln", age : 25, books : ["mmm","www","nnn"]}
let objs = JSON.stringify(obj,replacer,"\t");
console.log(objs);

function replacer(_, v){
    if(typeof v === "string"){
        return undefined;
    }
    return v;
}



var bbb = {
    name:"huahuo",
    toJSON : function(){
        return "我就是欢愉";
    },
};
console.log(JSON.stringify(bbb));
console.log(JSON.stringify({x: bbb}));
console.log({bbb : JSON.stringify(bbb)});

// 创建一个示例数据
var session = {
    screens: [],
    state: true,
  };
  session.screens.push({ name: "screenA", width: 450, height: 250 });
  session.screens.push({ name: "screenB", width: 650, height: 350 });
  session.screens.push({ name: "screenC", width: 750, height: 120 });
  session.screens.push({ name: "screenD", width: 250, height: 60 });
  session.screens.push({ name: "screenE", width: 390, height: 120 });
  session.screens.push({ name: "screenF", width: 1240, height: 650 });
  
  // 使用 JSON.stringify 转换为 JSON 字符串
  // 然后使用 localStorage 保存在 session 名称里
  localStorage.setItem("session", JSON.stringify(session));
  
  // 然后是如何转换通过 JSON.stringify 生成的字符串，该字符串以 JSON 格式保存在 localStorage 里
  var restoredSession = JSON.parse(localStorage.getItem("session"));
  
  // 现在 restoredSession 包含了保存在 localStorage 里的对象
  console.log(restoredSession);
  