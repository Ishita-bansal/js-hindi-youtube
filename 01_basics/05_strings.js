const name ="isha"
const repocount = 50;
// console.log(name + repocount + "value");
console.log(`hello my name is ${name} and my repo count is ${repocount}`);

// const gameName = new String("isha");
// console.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('s'));

const gameName = new String("isha-bansal");
const newstring = gameName.substring(0,7);
console.log(newstring);

const anotherstring = gameName.substring(-8,4);
console.log(anotherstring);

const newstringOne = "      isha     "
console.log(newstringOne);
console.log(newstringOne.trim());

const url = "https://www.google.com/isha%20bansal"
console.log(url.replace('%20', '-'));
console.log(url.includes('isha'));
console.log(gameName.split('-'));