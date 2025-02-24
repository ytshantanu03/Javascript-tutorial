// Singleton

// objects literals

const mySym = Symbol("key1");

const JsUser = {
  name: "Naruto",
  "full name": "Naruto Uzumaki",
  [mySym]: "myKey1",
  age: 16,
  location: "Konoha",
  email: "Naruto@gmail.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"],
};
// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "Minato@chatgpt.com";
// Object.freeze(JsUser);
JsUser.email = "Baruto@microsoft.com";
// console.log(JsUser);

JsUser.greeting = function () {
  console.log("hello js user");
};
console.log(JsUser.greeting());

JsUser.greeting2 = function () {
  console.log(`hello js user, ${this.name}`);
};
console.log(JsUser.greeting2());
