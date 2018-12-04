//please make sure to update the input.txt file with your input
const fs = require("fs");
const input = fs.readFileSync(__dirname + "/input.txt", "utf-8");
const arr = input
    .replace(/\r\n/g, "\r")
    .replace(/\n/g, "\r")
    .split("\r"); //force it to work with any EOL

console.log(arr);
