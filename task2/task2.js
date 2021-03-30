const fs = require("fs");
const cryptoJS = require("crypto-js");
let fileContent = fs.readFileSync("./task2/Task2-block.json", "utf8");
const jsonObj = JSON.parse(fileContent);
 
let nonceNumber = 0;
while (true) {
    jsonObj.nonce = nonceNumber;
    fileContent = JSON.stringify(jsonObj);

    const str1 = fileContent.split(" ").join("");
    const str2 = str1.replace(/\r?\n/g, "").replace("\t",""); // получаем блок в виде строки без пробелов
    const hashBlock = cryptoJS.SHA256(str2).toString(); // берем хеш от блока
    const substr = hashBlock.substr(hashBlock.length - 4);
    if (substr == "0000") {
        jsonObj.hash = hashBlock;
        console.log(jsonObj);

        break;
    }
    nonceNumber++;
}