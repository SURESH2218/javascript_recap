// function abcd() {
//   for (var i = 0; i < 12; i++) {
//     console.log(i);
//   }
//   console.log(i);
// }
// abcd();

// the above function is working because we are using var var ----->> function scoped

//if we use let we will get at line no .5 bcz let is a braces scoped and it will be giving us ----> not defined

// function abcd1() {
//   for (let i = 0; i < 12; i++) {
//     console.log(i);
//   }
//   console.log(i);
// }
// abcd1();

// in javascript we actually use some features which are not there in the language but we use
// thoe features through window
// window ------->>>> box of features given by browser to use with js

//setTimeout function

// setTimeout(function () {
//   console.log("after 5 seconds");
// }, 5000);

//first class functions

// if we use fucntion as a value then we call it as a first class function
// we can save everything below here in a variable

// var a = 23;
// var a = true;
// var a = function() {
//   console.log("suresh alabani");
// };
// a();

// function abcd(a) {
//   a();
// }
// abcd(function () {
//   console.log("suresh");
// });

//array or object

var a = {
  age: 0,
  name: "suresh",
};
var b = [1, 3, 3, 5, 6, 7];
console.log(typeof a, Array.isArray(a), Array.isArray(b));
