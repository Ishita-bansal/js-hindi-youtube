let myDate = new Date()
console.log(myDate.toString()); 
// Sat Nov 04 2023 14:43:39 GMT+0000 (Coordinated Universal Time)

console.log(myDate.toDateString()); 
// Sat Nov 04 2023

console.log(myDate.toISOString()); 
// 2023-11-04T14:43:39.924Z

console.log(myDate.toJSON());  
// 2023-11-04T14:43:39.924Z

console.log(myDate.toLocaleDateString()); 
// 11/4/2023

console.log(myDate.toLocaleString()); 
// 11/4/2023, 2:43:39 PM

console.log(typeof myDate);

//   let mycreateDate = new Date(2023,10,4);
let mycreateDate = new Date(2023,10,4,8,34);
console.log(mycreateDate.toLocaleString());

let mytimestamp = Date.now();
console.log(mytimestamp);
console.log(mycreateDate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());
console.log(newDate.getDate());
