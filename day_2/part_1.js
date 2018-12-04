//please make sure to update the input.txt file with your input
const fs = require("fs");
const input = fs.readFileSync(__dirname + "/input.txt", "utf-8");
const arr = input
    .replace(/\r\n/g, "\r")
    .replace(/\n/g, "\r")
    .split("\r"); //force it to work with any EOL

let twoCount = 0;
let threeCount = 0;

for (let i = 0; i < arr.length; i++) {
    let word = arr[i];
    let twoCountTemp = 0;
    let threeCountTemp = 0;
    let letterCountObj = new Object(); //idea is to add all letters to the array as the key, and a value with the number of times it's appeared

    for (let letter in word) {
        const curLetter = word[letter];
        if (letterCountObj.hasOwnProperty(curLetter)) {
            letterCountObj[curLetter] = letterCountObj[curLetter] + 1;
        } else {
            const pair = { [curLetter]: 1 };
            letterCountObj = { ...letterCountObj, ...pair };
        }
    }

    for (key in letterCountObj) {
        if (letterCountObj[key] === 2) {
            twoCountTemp = 1;
        }

        if (letterCountObj[key] === 3) {
            threeCountTemp = 1;
        }
    }

    if (twoCountTemp) {
        twoCount++;
    }

    if (threeCountTemp) {
        threeCount++;
    }
}

console.log(twoCount);
console.log(threeCount);
console.log("Answer: " + twoCount * threeCount);

