const fs = require('fs');

///////////////////////////////// FILES /////////////////////////////////
// Blocking code synchronous
// const textInput = fs.readFileSync('./txt/input.txt', 'utf-8');
// const textOut = `😂this is me and you and your text is ${textInput}`;
// fs.writeFileSync('./txt/output.txt', textOut);
// console.log(textInput);

// Non-Blocking code asynchronous
// fs.readFile('./txt/start.txt', 'utf-8', (err, data1) => {
//   if (err) return console.log('ERROR! 💥');

//   fs.readFile(`./txt/${data1}.txt`, 'utf-8', (err, data2) => {
//     console.log(data2);
//     fs.readFile('./txt/append.txt', 'utf-8', (err, data3) => {
//       console.log(data3);

//       fs.writeFile('./txt/final.txt', `${data2}\n${data3}`, 'utf-8', err => {
//         console.log('Your file has been written 😁');
//       })
//     });
//   });
// });
// console.log('Will read file!');
