
let score = 33
console.log(typeof score);
console.log(typeof(number));

let score0 = "33abc"
console.log(typeof score0);
console.log(typeof(score0));
let valueInNumber0 = Number(score0);
console.log(typeof valueInNumber0);
console.log(valueInNumber0);

let valueInNumber = Number(score);
console.log(typeof score);

let score1 = null
console.log(typeof score1);
let valueInNumber1 = Number(score1);
console.log(typeof valueInNumber1);
console.log(valueInNumber1);


let score2 = undefined
console.log(typeof score2);
let valueInNumber2 = Number(score2);
console.log(typeof valueInNumber2);
console.log(valueInNumber2);

let score3 = true
console.log(typeof score3);
let valueInNumber3 = Number(score3);
console.log(typeof valueInNumber3);
console.log(valueInNumber3);

let score4 = "hitesh"
console.log(typeof score4);
let valueInNumber4 = Number(score4);
console.log(typeof valueInNumber4);
console.log(valueInNumber4);

let isLoggedIn =1;
let booleanIsLoggedIn = Boolean(isLoggedIn) 
console.log(booleanIsLoggedIn);

let isLoggedIn1 ="";
let booleanIsLoggedIn1 = Boolean(isLoggedIn1) 
console.log(booleanIsLoggedIn1);

let isLoggedIn2 = "hitesh";
let booleanIsLoggedIn2 = Boolean(isLoggedIn2) 
console.log(booleanIsLoggedIn2);

// 1 = true ; 0=false
//"" = false
// "hitesh" = true

let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);

// **************************** operaions *******************

let value = 3
let negValue = -value
console.log(negValue);

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**3);
console.log(2/3);
console.log(2%3);

let str1 = "hello"
let str2 = "hitesh"
let str3 = str1 + str2 
console.log(str3);

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);

console.log(true);
console.log(+true);
console.log(+"");

let num1 , num2 , num3 ;
num1 = num2 = num3 = 2+2

let gamecounter = 100 
gamecounter++
console.log(gamecounter);

// postfix
let x = 3;
const y = x++;
console.log( x , y);

// prefix
let a = 3;
const b = ++a ;
console.log(a,b);
