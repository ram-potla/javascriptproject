'use strict';

var Q = require('q');
let myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('good to go');
  }, 2000)
});

let myPromise2 = new Promise( (resolve,reject) =>{
    setTimeout( () => {
      reject('second promise');
    },5001)
});

Q.all([myPromise,myPromise2])
  .then((res) =>{
    console.log(res)
  })
  .catch( (e) =>{
    console.log(e);
    throw e;
  });

var someAsync = function() {
  var x;
  return new Promise((resolve, reject)=> {
    if (x !== undefined) {
      resolve(x + 2);
    }
    else {
      reject('x is not defined');
    }

  });
};

someAsync().then((res)=>{
  console.log(res);

},(err) => {
   throw new Error(`I am throw error  ${err}`);
})
.catch((err)=>{
  console.log(`catch err ${err}`);
});
