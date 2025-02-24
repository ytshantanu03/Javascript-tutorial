let myDate = new Date();
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toTimeString());
// console.log(myDate.toUTCString());
// console.log(typeof myDate);

// console.log(myDate.getDate());
// console.log(myDate.getDay());
// console.log(myDate.getFullYear());
// console.log(myDate.getHours());
// console.log(myDate.getMilliseconds());
// console.log(myDate.getMinutes());
// console.log(myDate.getMonth());
// console.log(myDate.getSeconds());
// console.log(myDate.getTime());
// console.log(myDate.getTimezoneOffset());
// console.log(myDate.getUTCDate());
// console.log(myDate.getUTCDay());
// console.log(myDate.getUTCFullYear());
// console.log(myDate.getUTCHours());
// console.log(myDate.getUTCMilliseconds());
// console.log(myDate.getUTCMinutes());
// console.log(myDate.getUTCMonth());
// console.log(myDate.setUTCSeconds());

// let myCreatedDate = new Date(2025, 0, 25);
// console.log(myCreatedDate.toDateString());

// let myCreatedDate = new Date(2025, 0, 25, 5, 3, 7);
// console.log(myCreatedDate.toLocaleString());

// let myCreatedDate = new Date("2025-09-03");
// console.log(myCreatedDate.toLocaleString());

let myCreatedDate = new Date("03-09-2025");
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now() / 1000));

let newDate = new Date();
// console.log(newDate);
// console.log(newDate.getDate());
// console.log(newDate.getDay());
// console.log(newDate.getMonth() + 1);

newDate.toLocaleString("default", {
  weekday: "long",
});
