var _ = require('lodash');

var aNames = ['melbourne','sydney','brisbane'];
var cObjects ={'country' :'australia',"age":20,"capital" :"canberra"};

var dogs = [{ name: "arf", age: 3}, {name:'bark', age: 5}]


console.log(_.drop(aNames,4));
console.log(_.findIndex(aNames,['sydney']));

_.forEach(aNames,function(key,value,collection){
  console.log(value);
  console.log(collection);
});

_.forEach(cObjects,function(v,k){
  // console.log(k);
  console.log(k);
})

_.forEach({ 'a': 1, 'b': 2 }, function(value, key) {
  console.log(key);
});

var users = [
  { 'user': 'barney', 'age': 36, 'active': true },
  { 'user': 'fred',   'age': 40, 'active': false }
];

// console.log(_.filter(users,{'user' :'barney', 'age':36}));

// console.log(_.map(users,{'user':'barney','age':36})) ;
console.log(_.map(users,'age')) ;
console.log(_.filter(users,{'age':36}));

//
// _.filter(users, function(o) { return !o.active; });
// // => objects for ['fred']
//
// // The `_.matches` iteratee shorthand.
// _.filter(users, { 'age': 36, 'active': true });
// // => objects for ['barney']
//
// // The `_.matchesProperty` iteratee shorthand.
// _.filter(users, ['active', false]);
// // => objects for ['fred']
//
// // The `_.property` iteratee shorthand.
// _.filter(users, 'active');
// // => objects for ['barney']           