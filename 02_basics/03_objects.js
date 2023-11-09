const mySym = Symbol("Key1")
const JsUser ={
    name : "hitesh" ,
    "full name" : "ishita bansal",
    age : 21,
    location : "Jaipur",
    [mySym] : "myKey1",
    email:"hitesh@gmail.com",
    isLoggedIn : false,
    LastLofinDays:["mondays","satursday"]
}
// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);
JsUser.email="hitesh@chatgpt.com"
// console.log(JsUser["email"]);
// Object.freeze(JsUser)
// JsUser.email="hitesh@microsoft.com"
// console.log(JsUser);
JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user,${this.name}`);
}
console.log(JsUser.greeting);
console.log(JsUser.greetingTwo());