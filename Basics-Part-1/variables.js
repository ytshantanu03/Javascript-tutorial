const accountId = 144553;
let accountEmail = "naruto@gmail";
var accountPassword = "12345";
accountcity = "konoha";
let accountstate;

// accountId = 2;   // not allowed

accountEmail = "hc@gmail";
accountPassword = "21212121";
accountcity = "sand";

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/
console.table([accountEmail, accountId, accountPassword, accountcity,accountstate]);
