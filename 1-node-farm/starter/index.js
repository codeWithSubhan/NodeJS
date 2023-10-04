const fs = require("fs");

// Blocking code synchronous
const textInput = fs.readFileSync("./txt/input.txt", "utf-8");
const textOut = `😂this is me and you and your text is ${textInput}`;
fs.writeFileSync("./txt/output.txt", textOut);
// console.log(textInput);

// Non-Blocking code asynchronous
fs.readFile("./txt/start.txt", "utf-8", (err, data) => {
  console.log(data);
});
console.log("TEST");
