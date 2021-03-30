const fs = require("fs");
const cryptoJS = require("crypto-js");
let fileContent = fs.readFileSync("./task1/tx.json", "utf8");
const str1 = fileContent.split(" ").join("");
const str2 = str1.replace(/\r?\n/g, "")

console.log(str2);
let hash = cryptoJS.MD5(str2).toString();
console.log(hash);