const fs = require('fs'); // require fs module fs - 'file system'
const http = require('http');

/////////////////////////////////////////////////////////////////////////////////////////

// const hello = 'Hellow world';
// console.log(hello);

//reading files inside fs module
//Blocking, synchronous way

// const textIn = fs.readFileSync('./txt/input.txt','UTF-8'); // unspecified UTF-8 / other will get the buffer but not text
// console.log(textIn);
// const textOut = `This is what we know about the avocado: ${textIn}. \nCreated on ${Date.now()}`;
// fs.writeFileSync('./txt/output.txt',textOut);
// console.log('File has been written');

//NON-BLOCKING ASYNCHRONOUS WAY

// fs.readFile('./txt/start.txt','utf-8',(err,data1)=>{
//     if (err) return console.log('Error ');
//     fs.readFile(`./txt/${data1}.txt`,'utf-8',(err,data2)=>{
//         console.log(data2);
//         fs.readFile(`./txt/append.txt`,'utf-8',(err,data3)=>{
//             console.log(data3);
//             fs.writeFile('./txt/final.txt',`${data2}\n${data3}`,'utf-8', err =>{
//                 console.log('Your file has been written :)');
//             });
//         });
//     });
// });
