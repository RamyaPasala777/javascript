// console.log(1+"1"-1+"1");

// let a = 10,
//     b = 5;
//     c = a+b;
//     console.log(c);


// // addition


// const a = 12,
//   b = "12",
//   c = a + b;
// console.log(c)

// // object

//  let object = {
//     name:'ramya',
//     age:21,
//     city:'hyd',
//     designation:'ASE'
//  };
//  console.log(object);

 
//  console.log(object.name);
//  console.log(object.age);
//  console.log(object.city);
//  console.log(object.designation);

//  instead of writing everytime object......
// we can use object destructuring concept
// in object destructuring concept no need to write the object...... directly we print variables.

// //  object destructuring.

// let {name,age,city,designation} = object;
// console.log(name,age,city);


// console.log(object["name"]);
// console.log(object.name);
// object["name"]="ramya";
// console.log(object);
// object.name="c";
// console.log(object);



// // Array concept

// let arr =["Ramya",21,"hyd"]

// let arr =["Ramya",21,"hyd"]
// console.log(arr);

// // push method is used for to push the data in the array in last position.

// arr.push("JOHNY");
// console.log(arr)

// // unshift method is used to add the data in the array in first position.
// arr.unshift("abcd")
// console.log(arr)

// // shift method is used for to remove the data in the array in first position.
// arr.shift();
// console.log(arr);

// // pop method is used to remove the data in the array in last position.
// arr.pop();
// console.log(arr);

// splice is used for to add or remove the data in between the array

// arr.splice(3,0,"pasala")
// console.log(arr)

// arr.splice(1,1,);
// console.log(arr);

// let arr=["ramya",2,true];
// console.log(arr);
// console.log(arr[0]);
// arr.unshift(20);
// console.log(arr);;
// arr.splice(1);
// console.log(arr);;

// let add =  (num)=>{
//  if (num%2==0) {
//     isEven=true;
//  }
//  else{
//     isEven=false;
//  }
//  return isEven;
// };
// console.log(add(9));
// let num=5;

// for(let i=1;i<=num;i++){
//     if(i%2==0){
//         break
//     }
//     console.log(i);
// }

// let a = "hello",
//     b = a.split('');
//     console.log(b);
//   let c = b.reverse().join('');
//   console.log(c);

////functions
//  let b= (num)=>{
    //   if(num>15){
    //   console.log("true");
    //   }
    // else{
    //    console.log("false");
    // }
    // }
    // b(67)
    
    //  function a (n){
    //   return "ramya"
    // }
    
    // a(5);
    
    // let b=function(n){
    //   console.log("abcd")
    //   a(5);
    // }
    // b()
    
    // let c= ()=>{
    // console.log("xyz")
    // }
    // c()
    
    //  function a(d){
    // console.log("abcdefgh")
    //  }
    // let d=function b(){
    //     console.log("ijklmno")
    // }
    // a(d)
    
    // //anonymous function
    // let a=function(){
    //     console.log("helloo....!");
    //     console.log("hii......!")
    // }
    // a()
    
    // // named function
    // function a(){
    //     console.log("hii....!");
    //     console.log("helloooo.....!")
    // }
    // a()
    
    // // Arrow Functions
    // let a=()=>{
    //     console.log("ramyaa...!")
    // }
    // a()
    
    
    // // call back functions
    
    // function a(n){
    // console.log("ramya...!")
    // b()
    // console.log(c);
    // }
    
    // let b = function(){
    //     console.log("pasala")
    // }
    // let c=10
    
    // a(b);


//     function greet(name, callback) {
//     console.log('Hi' + ' ' + name);
//     callback();
// } 
// function callMe() {
//     console.log('I am callback function');
// }
//  greet('Peter', callMe);

// Asynchoronous
// let a = function(){
//     console.log("first")
//     setTimeout(()=>{
//         console.log("I am waiting here for 3seconds")

//     },3000)
//     console.log("last")

// }
// a()


//  const {addition,sub,PHONE,student}= require("./util.js");
//  addition(10,20);  
// sub(20,10);
// console.log(PHONE);
// const {age,name:fname}=student;
// console.log(age,fname);



// // let a=  (num1,num2)=>{
// //    let operations={
// //     add:num1+num2,
// //     sub: num2-num1,
// //     mul:num1*num2
// //    };
// //    return operations;

// // };
// // let v=a(2,3);
// // // console.log(v)
// // let {add,sub,mul}=v;
// // console.log(add,sub,mul);

// // let b=(num1)=>{
// //     if(num1%2 == 0){
// //         console.log(`${num1} is even number`);
// //     }else{
// //         console.log(`${num1} is odd number`);
// //     }

// //    }
// // let a = (num2)=>{
// //    setTimeout(b(num2),4000);
// //    console.log("processing............")
    
// // };
// //  a(5);


// // const fnBuildingPromise =()=>{   
// //     return new Promise((resolve,reject)=>{
// //     const bstatus = false;
// //     setTimeout(()=>{
// //         if(bstatus){
// //             resolve("success");
// //         }
// //         else{
// //             reject("error");
// //         }
// //     },3000);
// // })}
// // fnBuildingPromise().then((oSuccessData)=>{
// //                   console.log(oSuccessData);}).catch((error)=>{
// //                     console.log(error)
// //                   })

// // let a =function(){
// //     console.log("Ramya")
// // }
// // console.log(a);


// //  function a(num1){
// //     console.log("RAMYA")
// //     console.log(num1);
// //  };
// //  a(5);

// //  let b= function(num1){
// //       console.log(num1),
// //       console.log("Ramya")
// //  }
// //  b(7);

// //  let c=(n)=>{
// //     console.log("Ramya");
// //     console.log(n);
// //  };c(5)


// // let userInput = prompt("Enter something:")
// // console.log(userInput);

// // let bbb=(n)=>{
// //     setTimeout(b=()=>{
// //         console.log("RAMYA")
// //     },3000);
// //     console.log("RAJESH");
// // }bbb(7);

// // function a (num) {
// //     console.log("ramya"),
// //     console.log(num)
// // };a(5)

// // let a = () =>{
// //     console.log("RAMYA"),
// //     console.log(a)
// // }a(5)


// // let a=function(n){
// //     console.log("hiiiii"),
// //     console.log(n)
// // }
// // a(5)

// // function a(num){
// //     console.log(num);
// // }
// // a(676)

// // function a(num1){
// //   console.log("hiii")
// //   num1()
  
// // }
// // num1 =()=>{
// //     console.log("hello")
    
// //   }
// //   a(num1)

// // a=(b)=>{
// //     console.log("hiiiiiiiii");
// //     b()

// // }
// // b =()=>{
// //    console.log("hellooooooooooooooooo")
// // }
// // a(b)

// // function a(b){
// //     setTimeout(c=()=>{
// //         console.log("rajesh chowdary")
// //     },3000)
// //     console.log("ramya")
// //     b()
// // }
// // function b(){
// //     console.log("pasala")
// // }
// // a(b)




// // let a = new Promise(function(resolve,reject){
// //        const x = "ramya"
// //        const y = "pasala"
// //        if(x==y){
// //         resolve();
// //        }
// //        else{
// //         reject()
// //        }

// // });
// // a.then(function(){
// //     console.log("success")
// // }).
// // catch(function(){
// //     console.log("error")
// // })

// // let a = new Promise(function (resolve,reject){
// //    const num1 = 2
// //     if(num1%2 ==0){
// //         resolve()
// //     }
// //     else{
// //        reject()
// //     }
// // })
// // a.then(function(){
// //     console.log("sucess")
// // }).catch(function() {
// //     console.log("error")
    
// // // })


// let a = new Promise(function(resolve,reject){
//     let a=100;
//     if(a%2 ==0){
//         resolve();
//     }
//     else{
//         reject();
//     }
// })
// a.then(function(){
//     console.log("success")
// })
// .catch(function(){
//     console.log("error")
// })
// .finally(function(){
//     console.log("finally block executed")
// })

// let a= function(b){
//     console.log("ramya");
//     b();
// }
// b=function(){
//     console.log("heloooooo")
// }
// a(b);

// Async and Await

// function a() {
//     let first_promise = 
//         new Promise((resolve, reject) => resolve("Hello"));
//     let second_promise = 
//         new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(" GeeksforGeeks..");
//         }, 1000);
//     });
//     let combined_promise = 
//         Promise.all([first_promise, second_promise]);
//     return combined_promise;
// }
 
// async function display() {
//     let data = await a();
//     console.log(data);
// }
 
// display();


//  a=()=>{
//     let f_p = new Promise((resolve,reject)=>{
//         resolve("hello")
//     }
       
//     )
//     let s_p = new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("hiiiiiii")
//         },2000)
//         console.log("second promise")
//     })
//   let c_p = Promise.all([f_p,s_p])
//    return c_p;
// }
// async function display() {
//     let data = await a();
//     console.log(data);
    
// }
// display();

