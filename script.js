// function greet(user){
//     console.log(`Hello ${user} welcome to guvi`)
// }
// function foo(cb){
//     res = prompt("Enter your name")
//     cb(res)
// }
// foo(greet)























// var span = document.getElementById("span");
// span.innerHTML = 10
// // document.body.append(span)
// var count = 10
// setTimeout(()=>{
//     count = count-1
//     span.innerHTML = count
//     setTimeout(()=>{
//         count = count-1
//         span.innerHTML = count
//         setTimeout(()=>{
//             count = count-1
//             span.innerHTML = count
//             setTimeout(()=>{
//                 count = count-1
//                 span.innerHTML = count
//                 setTimeout(()=>{
//                     count = count-1
//                     span.innerHTML = count
//                     setTimeout(()=>{
//                         count = count-1
//                         span.innerHTML = count
//                         setTimeout(()=>{
//                             count = count-1
//                             span.innerHTML = count
//                             setTimeout(()=>{
//                                 count = count-1
//                                 span.innerHTML = count
//                                 setTimeout(()=>{
//                                     count = count-1
//                                     span.innerHTML = count
//                                     setTimeout(()=>{
//                                         span.innerHTML = "Happy Independence Day"
//                                     },1000)
//                                 },1000)
//                             },1000)
//                         },1000)
//                     },1000)
//                 },1000)
//             },1000)
//         },1000)
//     },1000)
// },1000)





















// function getdata(num){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>resolve(5*num),3000)
//     })
// }

// function putdata(num){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>reject("This is rejected state"+5*num),3000)
//     })
// }
// getdata(5).then((data)=>{
//     console.log(data);
//     return getdata(data);
// }).then((data2)=>{
//     console.log(data2);
//     return putdata(data2);
// }).then((data3)=>{
//     console.log(data3);
//     return getdata(data3);
// })
















// function getdata(){
//     return new Promise((resolve,reject)=>setTimeout(()=>resolve("this is resolved after 3 sec"),3000))
// }
// function resdata(){
//     return new Promise((resolve,reject)=>setTimeout(()=>reject("this is rejected after 5 sec"),5000))
// }
// var res = resdata();
// // res.then((data)=>console.log(data))

// res.catch((error)=>console.log(error))

// var final_get =getdata();
// final_get.then((data)=>console.log(data))





// var res = new Promise((resolve,reject)=>{

//     var age = parseInt(prompt("enter the age"))
//     if (age>=18){
//         resolve("You are eligible to vote!!")
//     }
//     else{
//         reject("yout not eligible to vote!!!")
//     }


// });
// console.log(res)


// var p1 = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         if(5>4){
//             resolve("This is p1 resolved state")
//         }
//         else{
//             reject("This is p1 rejected state")
//         }
//     },3000)
// })
// var p2 = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         if(5<4){
//             resolve("This is p1 resolved state")
//         }
//         else{
//             reject("This is p1 rejected state")
//         }
//     },1000)
// })
// var p3 = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         if(5>4){
//             resolve("This is p1 resolved state")
//         }
//         else{
//             reject("This is p1 rejected state")
//         }
//     },5000)
// })

// var pr1 = p1.then((data)=>console.log(data)).catch((error)=>console.log(error));
// var pr2 = p2.then((data1)=>console.log(data1)).catch((error1)=>console.log(error1));
// var pr3 = p3.then((data2)=>console.log(data2)).catch((error2)=>console.log(error2));
// console.log(pr1,pr2,pr3);
// Promise.allSettled([p1,p2,p3]).then((data)=>console.log(data)).catch((error)=>console.log(error));



//XHR:XMLHTTPREQUEST
//It is an Object which ,is needed to interact with servers via API
//4step
//1 St Step
//Create a XHR object
// var request = new XMLHttpRequest();
//2nd Step
//initiate a request,we will be providing the HTTP method as well as the API
// request.open("GET","https://restcountries.com/v3.1/all")
//3rd step:
//sending a request
//to send the request to the server
// request.send()
//4th step
//once the data has been successfully received from the server(status code = 200)
// request.onload = function(){
    //This line converts JSON string to Object
    // var result = JSON.parse(request.response)
    // console.log(result);
    // for(var i=0;i<result.length;i++){
    //     console.log(`Country Name:${result[i].name.common},Region:${result[i].region}`);
    // }
//  
// }
var res = fetch("https://restcountries.com/v3.1/all")
.then((data)=>data.json()).then((data1)=>console.log(data1))

// var res = fetch("https://restcountries.com/v3.1/all")
// .then((data)=>data.json()).then((data1)=>{
//     for(var i=0;i<data1.length;i++){
//             console.log(`Country Name:${data1[i].name.common},Capital:${data1[i].capital} Flags:${data1[i].flags.png} Timezone: ${data1[i].timezones}`);
//         }

// })


// var res = fetch("https://data.covid19india.org/v4/min/data.min.json")
// .then((data)=>data.json()).then((data1)=>console.log(data1))

// var res = fetch("https://data.covid19india.org/v4/min/data.min.json")
// .then((data)=>data.json()).then((data1)=>{

//     console.log(Object.getOwnPropertyNames(res))
//     console.log(`Country Name:${data1.AN.delta.tested} states:${data1}`)
//     for(var i=0;i<data1.length;i++){
            
//             console.log(`State Name:`);
//         }

// })



const element = document.getElementById("div-02");
element.remove(); // Removes the div with the 'div-02' id
