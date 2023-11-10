//const tinderUser = new Object()
const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name = "summy"
tinderUser.isLoggedIn = false;
console.log(tinderUser)

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
