console.log('Connected....')

// Fun1=()=>{
//     console.log("It's Function 1");
// }
// fun2 = (callback)=>{
//     callback();
//     console.log('From Function 2')
// }
// fun2(Fun1);

// console.log('Connected....')

// Fun1=(a)=>{
//     console.log(a+"It's Function 1");
// }
// fun2 = (a,callback)=>{
//     callback(a);
//     console.log('From Function 2')
// }
// fun2(10,Fun1);

// console.log('Connected....')

// function Fun2(callback) {
//     let a = 10
//     callback(a);
// }
// Fun2(()=>{console.log('Function 1 '+a)});

//SetTimeout is a callback function....
//example:-

// var students=[
//     {Name:'Ram', Roll: 10, Subject: 'JavaScript'},
//     {Name:'Shyam', Roll: 20, Subject: 'Java'}
// ]
// function add(student) {
    
//     setTimeout(() => {
//         students.push(student)
//     }, 1000);
// }

// function show() {
//     setTimeout(() => {
//         console.log (students)
//     }, 3000);
    
// }
// var student = {Name:'Rishi', Roll: 30, Subject: 'Python'};
// add(student)
// show()

// var aa = (no)=>  {
//     console.log(`The Number Of Century Virat Have Is ${no}`)
//     bb(100);
// } 
// var bb=(no)=>{

//     console.log(`The Number Of Century Sachin Have Is also ${no}`)
    
// }
// aa(100)
// var numbers = [65, 44, 12, 4];
// var Num = numbers.map(i=>{
//     return i+1;
// })
// console.log(numbers)
// console.log(Num)

// var MyNum=(some)=>{
//     console.log(some);
//     document.body.innerHTML=some
// }
// let MyNumResolve = new Promise((resolve,reject)=>{
//     let x =10
//     if (x ==10){
//         resolve("Ok It's Resolved")
//     }else{
//         reject("Sorry It's Rejected..")
//     }
// })
// MyNumResolve.then(
//     function (params) {
//         MyNum(params);
//     },
//     function (error) {
//         MyNum(error);
//     }
// )

// let x = (xx)=>{
//     document.body.innerHTML=xx;
// }

// let MyPromise = new Promise((done,notdone)=>{
//     let name = 'Razzz';
//     if (name=="Razz"){
//         done('Correct..')
//     }else{
//         notdone('Not Correct!!!')
//     }
// })
// MyPromise.then(
//     function (params) {
//         x(params)
//     },
//     function (param) {
//         x(param)
//     }
// )
// console.log('start')
// var gn = (namee, callback) => {
//     console.log('inside before')
//     setTimeout(() => {
//         console.log(namee)
//         callback(namee)
//     }, 1000);
    
//     console.log('inside after')
// }
// var gh = (namee, callback) => {
//     console.log('inside before')
//     setTimeout(() => {
//         console.log(namee)
//         callback(["cricket","football","hockey"])
//     }, 1000);
    
//     console.log('inside after')
// }
// var d = gn('raghu',(d)=>{console.log(d);gh(d,(h)=>{console.log(h)})})
// var c= gh(d,(c)=>{console.log(c)})
// console.log('end') 

// console.log('start')
// var gn = (namee) => {
//     return new Promise((resolve,reject)=>{

//         console.log('inside before')
//         setTimeout(() => {
//         console.log(namee)
//         resolve(namee)
//     }, 2000);
    
//     console.log('inside after')
//     })
    
// }
// var gh = (namee) => {
//     return new Promise ((resolve,reject)=>{
//         setTimeout(() => {
//         console.log("inside")
//         resolve(["cricket","football","hockey"])
//         reject('rejected')
//     }, 3000);
    
//     console.log('inside after')
//     })
    
// }
// gn('Ranjan')    
// .then(nm =>{gn(nm)})
// .then(hobby =>console.log(hobby))
// async function showhobby() {
//     const nm = await gn('Raka');
//     const hobby = await gh(nm);
//     console.log(nm)
//     console.log(hobby)
// }
// console.log('end') 
// }
// var gename=(nam)=>{
//     return new Promise((y,n)=>{
//         setTimeout(() => {
//             console.log('inside start');
//             y(nam);
//         }, 1000);
//     })
// }

// var gethobby=(nam)=>{
//     return new Promise((y,n)=>{
//         console.log('inside 2nd begin');
//         setTimeout(() => {
//             y([10,20,30,40])
//         }, 1000);
        
//     })
// }

// let name=()=> {
//     const a = await gename('Raka');
//     const b = await gethobby(a);

//     console.log(b)
// }

// async function rahul() {
//     const response = await fetch("https://api.github.com/users");
//     console.log("before response")
//     const User = response.json()
//     return User;
// }

// console.log("before Rahul");
// let a= rahul();
// console.log("After Rahul")
// console.log(a)
// console.log("last line")
// var fetchdata =()=>{
//     fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(res=>{res.json()
//     .then(user=>{
//         let out = "<ul>";
//         user.forEach(usr=>{
//             out+=`<li>
//                 id: ${user.id}<br>
//                 User Id : ${user.userId}<br>
//                 Title : ${user.title}<br>
//                 Body : ${user.body}
//                 </li>`
//         })
//         out+="</ul>"
//     })
//     });
// }
var x
fetch('https://jsonplaceholder.typicode.com/posts')
.then(r=>{r.json()
    .then(u=>{
        let out = '<ul>';
            u.forEach(element => {
                out+=`<li>
                ID : ${element.id}<br>
                User Id : ${element.userId}<br>
                Title : ${element.title}<br>
                Body : ${element.body}
                </li>`
            
            });
            out+="</ul>"
            document.body.innerHTML=out
            let y= JSON.stringify(out)
            x=y
        })

})
console.log()