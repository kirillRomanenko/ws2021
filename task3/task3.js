const fs = require("fs");
const { sha3_256,sha3_224,sha3_384,sha3_512 } = require('js-sha3');
let sourceHash = fs.readFileSync("./task3/Task3-hash.txt", "utf8");

let day = 1;
console.log("длина хеша: ", sourceHash.length);
console.log("размер: ", sourceHash.length * 4);

while (true) {
    let timeStamp = ((new Date(2020,0,day,3).getTime())/1000).toString();
    let resultHash =sha3_256(timeStamp);

    if (resultHash == sourceHash) {
        console.log("день: ", (new Date(2020,0,day,3)).getDate());
        console.log("месяц: ", (new Date(2020,0,day,3)).getMonth() + 1);
        console.log("время в секундах: ", (new Date(2020,0,day,3)).getTime() / 1000);
        break;
    }
    day++
}







