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