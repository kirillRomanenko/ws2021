const fs = require("fs");
// const cryptoJS = require("crypto-js");
// const jsSHA = require("jssha");
const { SHA3 } = require('sha3');
let sourceHash = fs.readFileSync("./task3/Task3-hash.txt", "utf8");
console.log(sourceHash);
console.log(sourceHash.length);
console.log(sourceHash.length * 4);

let dateStart = new Date (Date.UTC(2020));
const dateEnd = new Date (Date.UTC(2020,11,31));
console.log(dateStart);
console.log(dateStart.getTime());
console.log(dateEnd);
console.log(dateEnd.getTime());
let dateStartMilliseconds = dateStart.getTime();
const dateEndMilliseconds = dateEnd.getTime();
//1 000 мс * 60 секунд * 60 минут * 24 часа = 86 400 000 секунд
//Количество миллисекунд в сутках неизменно и всегда равно 86 400 000.
while (dateStartMilliseconds <= dateEndMilliseconds) {
    const hash = new SHA3(256);
    hash.update(String(dateStartMilliseconds));
    // console.log(hash.digest("hex"));
    distHash = hash.digest("hex");
    // console.log(distHash);
    if (distHash == sourceHash) {
        console.log(dateStartMilliseconds);
        console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
    }
    // console.log(hash);
    dateStartMilliseconds = dateStartMilliseconds + 86400000;
}






