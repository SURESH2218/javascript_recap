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

// var a = {
//   age: 0,
//   name: "suresh",
// };
// var b = [1, 3, 3, 5, 6, 7];
// console.log(typeof a, Array.isArray(a), Array.isArray(b));

//Higher order function

// function abcd(val) {}

// abcd(function () {});

// function abcd() {
//   return function () {};
// }
// abcd();

//constructor funciotns

// function circularButton(color) {
//   this.color = color;
//   this.width = 23;
//   this.height = 0;
// }
// var ob = new circularButton("green");
// var ob1 = new circularButton("red");
// var ob2 = new circularButton("blue");

//prototype Inheritence

// var human = {
//   name: "suresh",
//   canFly: false,
//   canWalk: false,
// };

// var sheryiansStuedent = {
//   canMakeWebsites: true,
// };

// sheryiansStuedent.__proto__ = human; //we are inheriting the properties of human

// call apply bind

//call

// function abcd() {
//   console.log(this.name);
// }

// var obj = {
//   name: "suresh",
// };

// abcd.call(obj);

//apply
// function abcd(val, val1, val2) {
//   console.log(this, val1, val2, val1);
// }

// var obj = {
//   name: "suresh",
// };

// abcd.apply(obj, [1, 2, 3]);

// bind

// var a = abcd.bind(obj);
// a();
