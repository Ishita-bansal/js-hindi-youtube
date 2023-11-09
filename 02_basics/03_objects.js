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
console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
console.log(JsUser[mySym]);