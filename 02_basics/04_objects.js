//const tinderUser = new Object()
const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name = "summy"
tinderUser.isLoggedIn = false;
console.log(tinderUser)
// objects contain further object
const regularUser = {
    fullname : {
        username:{
            firstname:"ishita",
            lastname:"bansal"
        }
    }
}
console.log(regularUser.fullname.username)  // { firstname: 'ishita', lastname: 'bansal' }
console.log(regularUser.fullname.username.firstname) // ishita
// array of objects
const obj1 = {1:"a" , 2:"b"}
const obj2 = {3:"a",4:"b"}
const obj5 = {5:"a",6:"b"}
const obj3 = {...obj1,...obj2}
console.log(obj3);
const obj4 = Object.assign({},obj1,obj2,obj5)
console.log(obj4);

// when values come for database

const users = [
    {
        id:1,
        email:"h@gmail.com"
    },
    {
        id:2,
        email:"i@gmail.com"
    }
]
console.log(users[1].email);
console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('isLoggedIn'));
