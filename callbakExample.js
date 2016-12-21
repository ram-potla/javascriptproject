'use strict';
//  function reusableFunction(num1,num2, callback){
//   console.log('main function');
//    console.log(callback(num1,num2));
//    console.log('hij');
// }
//
// function sum(x,y){
//
//   return (x+y);
// }
//
//
// function x(x,y){
//   return (x*y);
// }
//
// function d(x,y){
//   return x-y;
// }
//
//  reusableFunction(1,2,sum);
//  reusableFunction(1,2,x);
//  reusableFunction(1,2,d);
//
// var fruits = ["apple","banana","pear"];
//  function displayNames(v){
//    console.log(v);
//  }
//
// fruits.forEach(displayNames);

function ram() {
  // return new Promise(function (resolve, reject) {
    return Promise.resolve('my callback finished');
  // })
}

function mysandwich(param1, param2) {
  return new Promise(
    (resolve, reject) => {
    setTimeout( () => {
      console.log('set time out function hi');
      resolve(' my params: ' + param1 + param2);
    }, 2000);
  })
}

mysandwich('ham', 'tomato').then( (res) => {
  console.log(' first promise' + res);
  return ram();
}).then( res => console.log(res))
  .catch(error => console.log(error.message));



