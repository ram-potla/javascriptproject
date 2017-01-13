'use strict';

let person = {

  firstname: 'ram',
  secondname: 'babu',

  sayname () {
    return `my name is ${this.firstname} ${this.secondname}`
  }
};

let name = person.sayname();

console.log(name);