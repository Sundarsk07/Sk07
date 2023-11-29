/*Day 3 assignments

1)


let obj1= { name:"Person 1", age:5};
let obj2= {age:5, name:"Person 1"};
let string1 = JSON.stringify(obj1);
let string2 = JSON.stringify(obj2);
if (string1===string2){
    console.log("The JSON objects are equal")
}else{
    console.log("The JSOn objects are not equal")
}
 

2)


let XMLHttpRequest = require('xhr2');

let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://restcountries.com/v3.1/all/');

xhr.onload = function () {
    for (let index in JSON.parse(xhr.responseText)) {
        console.log(JSON.parse(xhr.responseText)[index].flags);
    }
    
}
xhr.send(); 


let XMLHttpRequest = require('xhr2');

let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://restcountries.com/v3.1/all/');

xhr.onload = function () {
    for (let index in JSON.parse(xhr.responseText)) {
        console.log(JSON.parse(xhr.responseText)[index].region);
        console.log(JSON.parse(xhr.responseText)[index].subregion);
    }
    
}
xhr.send(); */