function saymyname() {
    console.log("h");
    console.log("i");
    console.log("t");
    console.log("e");
    console.log("s");
    console.log("h");
}

// saymyname()

// write function to add two numbers

// function addtwonumbers(number1,number2){
//     console.log(number1+number2);
// }
// addtwonumbers(5,10)
// addtwonumbers(3,"4")
// addtwonumbers(6,"a")
// addtwonumbers(4,null)
function addtwonumbers(number1,number2){
    // let result = number1+number2
    // return result
    return number1+number2
     }
const result = addtwonumbers(3,5)
//console.log("result:", result);

function loginuserMessage(username){
    if(username === undefined){
       console.log("Enter your username");
       return
    }
    return`${username} just logged in`
}
//console.log(loginuserMessage("hitesh"));
console.log(loginuserMessage());