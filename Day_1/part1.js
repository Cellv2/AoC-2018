//please make sure to update the input.txt file with your numbers for the day
const fs = require("fs");
const input = fs.readFileSync(__dirname + "/input.txt", "utf-8");
const arr = input
    .replace(/\r\n/g, "\r")
    .replace(/\n/g, "\r")
    .split("\r"); //force it to work with any EOL

let curFreq = 0;
for (let i = 0; i < arr.length; i++) {
    curFreq += parseInt(arr[i]);
}

console.log(curFreq);
