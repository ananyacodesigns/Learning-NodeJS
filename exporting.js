/* const a = require("./index");
a.average(2,4);
a.percent(20,100); */ //this is for file based module
// 5s module import and export

//import a from "./index";//if file name is mjs
 //file based, built in and third part

 //built in
 const fs = require("fs");
 /*fs.readFile("./file.txt","utf-8",(err,data)=>{
 if(err){
    return err;
 }
 console.log(data);
 }); */ //asynchronous function (takes more time and let other commands work.
 //if you want the above to work first: fs.readFile --> fs.readFileSync (no error data call back function required)

/*  const b = fs.readFileSync("./file.txt","utf-8"); */ //stores the read data in b
 //console.log(b);

 //console.log("I am first haha"); */ //this comes second if readFileSync is used instead

 //instead of having to use fs.readFile multiple times we can just use import:
/*  import(fs.readFileSync) = require("fs"); */

/* const a = "This is made by ananya"; */
/* fs.writeFile("./sample.txt", a, ()=>{ 
    console.log("written")});
/* console.log(a); */
/* console.log("I am first haha"); */


const a = "This is made by Me";
fs.writeFileSync("./sample1.txt", a, ()=>{ 
    console.log("written")});
/* console.log(a); */
console.log("I am first haha");

