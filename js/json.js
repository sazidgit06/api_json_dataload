const obj = {id : 1, name : "lamborgini", color : "red"};
console.log(obj);
const stringified = JSON.stringify(obj);
console.log(stringified);
const objagain = JSON.parse(stringified);
console.log(objagain);