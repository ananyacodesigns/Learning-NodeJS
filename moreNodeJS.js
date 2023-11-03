const { log } = require("console");
const path = require("path");
const  b =path.extname("/nodejs/index.js");
//gives us the extension of the file
const a = path.basename("c:/Users/HP/Desktop/NodeJS/moreNode.js"); 
console.log(b);
//takes us to the given path in the terminal!
const c= path.dirname("c:/Users/HP/Desktop/NodeJS/moreNode.js")
console.log(c); 
// shows which directory the file is in
const e= "/Learning c++";
const d= path.join("c:/Users/HP/Desktop/NodeJS/moreNode.js"+e);
console.log(d);

const os =require("os");
console.log(os.freemem());
console.log(os.hostname());
console.log(os.totalmem());
