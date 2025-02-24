const name = "naruto";
const repoCount = 50;

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("Naruto-hc-com");

console.log(gameName[0]);

console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf("t"));

const newString = gameName.substring(6, 4);
console.log(newString);

const anotherString = gameName.slice(-6, 3);
console.log(anotherString);

const newStringOne = "    naruto   ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://Naruto.com/naruto%20Uzumaki";
console.log(url.replace("%20", "-"));

console.log(url.includes("uto"));

console.log(gameName.split("-"));

