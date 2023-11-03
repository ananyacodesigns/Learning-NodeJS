//package: bundle of files, codes etc
console.log("Hello there!");
//console.log(window); //will only show in inspect console
//every thing in nodejs is module and can be transferred to another file!
const a= {
    average: (a,b) => {
        console.log((a+b)/2);
    },
    percent: 
    (a,b) => {
        console.log((a/b)*100);
    }
}

module.exports = a;



console.log(a);
