
//Task for day 4:
//1.Print odd numbers in an array in anonymous function

//anonymous function//
/*
let number = [1,2,3,4,5,6,7,8,9];
let Oddnumbers = function(arr){
for (let i=0;i<arr.length; i++){
    let num= number[i];
    if (num % 2 !== 0){
        console.log(num);
    }
}
}
Oddnumbers(number);*/

/*2.Convert all the strings to title caps in a string array//

    example: 

    input: ['hello', 'world', 'javascript', 'programming']
    output: ['Hello', 'World', 'Javascript', 'Programming']

let inputNames = ['hello', 'world', 'javascript', 'programming'];

let titleCaps = inputNames.map(function(name) {
    return name.charAt(0).toUpperCase()+name.slice(1);
});
console.log(titleCaps) 

//3. Sum of all numbers in an array//

    example:

    input: [1, 2, 3, 4, 5, 6, 7, 8, 9]
    output: 45 //

    let numbers = [1,2,3,4,5,6,7,8,9];

    let SumOfArray= function (arr){

            return arr.reduce(function(total,current){
                return total+ current;
            },0);
        };

    console.log(SumOfArray(numbers)); 

   4. Return all the prime numbers in an array

    example:

    input: [1, 2, 3, 4, 5, 6, 7, 8, 9]
    output: [2, 3, 5, 7]

   
   let PrimeNumber = function(number) {
        if (number <=1) return false;
        for (let i=2; i<=Math.sqrt(number);i++){
            if (number % i===0) {
                return false;

            }
        }
        return true;
    }
let printprimenumbers = function(array){
    for (let i=0;i<=array.length; i++) {
        if (PrimeNumber(array[i])){
            console.log (array[i]);
        }
    }
}
let numbersArray = [1,2,3,4,5,6,7,8,9]
printprimenumbers(numbersArray); */

/*5. Return all the palindromes in an array

example:

    input: ['hello', 'world', 'javascript', 'programming', 'mom', 'dad', 'racecar', 'madam']
    output: ['mom', 'dad', 'racecar', 'madam'] 
 
    let isPalindrome = function(str){
        let reversed= str.split('').reverse().join('');
        return str === reversed
    }
    let findPalindrom = function(array){
        return array.filter(word=> isPalindrome(word));
    }
let words= ['hello', 'world', 'javascript', 'programming', 'mom', 'dad', 'racecar', 'madam']

let Palindrome= findPalindrom(words)
console.log(Palindrome);

*/

// 6.Return median of two sorted arrays of the same size.



/*let medianofArray= function(arr1,arr2) {
     let combinedArray= arr1.concat(arr2);
    combinedArray.slice().sort((a,b)=>a-b);
    let length = combinedArray.length;
  if(length % 2===1)  {
    combinedArray[Math.floor(length/2)];
    
  }else{
    let middle1= combinedArray [length/2-1];
    let middle2= combinedArray[length/2];
    return (middle1 + middle2)/2;


  }

}
let array1 =[1,3,5,7,9,11]
let array2 = [2,4,6,8,10,12]
let median = medianofArray(array1,array2);
console.log(median)
*/

// 7. Remove duplicates from an array

/*let numbers = function(array){
    return array.filter((value,index) => array.indexOf(value)===index);
}

let arrays = [1,2,3,5,6,7,8,8,5,4,3,9,7,9];
let getDublicates = numbers(arrays);
console.log(getDublicates)
*/

//8.Rotate an array by k times

/*let numbers= function(array){
    let k =4;
    for (i=0; i<k; i++){
        array.unshift(array.pop());
    }
    return array;
}
let arrays =[1,2,5,7,5]

let rotate = numbers(arrays)
console.log(rotate)*/

//IIFE FUNCTION//

//1.Print odd numbers in an array 

/*let number = [1,2,3,4,5,6,7,8,9];
(function(arr){
for (let i=0;i<arr.length; i++){
   let num= number[i];
    if (num % 2 !== 0){
        console.log(num);
    }
}
})
(number);
*/

/*2.Convert all the strings to title caps in a string array 

  //  input: ['hello', 'world', 'javascript', 'programming']
   // output: ['Hello', 'World', 'Javascript', 'Programming']

let inputNames = ['hello', 'world', 'javascriPt', 'programMing'];

(function (arr){
    arr.forEach((word,index) => {
        arr[index] = word.charAt(0).toUpperCase()+word.slice(1).toLocaleLowerCase();
    });
    console.log(arr)

}) (inputNames)

*/
//3. Sum of all numbers in an array//

    /*example:

    input: [1, 2, 3, 4, 5, 6, 7, 8, 9]
    output: 45 

    let numbers = [1,2,3,4,5,6,7,8,9];

    let SumOfArray= function (arr){

            return arr.reduce(function(total,current){
                return total+ current;
            },0);
        };

    console.log(SumOfArray(numbers)); */

    //4. Return all the prime numbers in an array

    /*example:

    input: [1, 2, 3, 4, 5, 6, 7, 8, 9]
    output: [2, 3, 5, 7] */

   
  /* let PrimeNumber = function(number) {
        if (number <=1) return false;
        for (let i=2; i<=Math.sqrt(number);i++){
            if (number % i===0) {
                return false;

            }
        }
        return true;
    }
let printprimenumbers = function(array){
    for (let i=0;i<=array.length; i++) {
        if (PrimeNumber(array[i])){
            console.log (array[i]);
        }
    }
}
let numbersArray = [1,2,3,4,5,6,7,8,9]
printprimenumbers(numbersArray); */


/*5. Return all the palindromes in an array

example:

    input: ['hello', 'world', 'javascript', 'programming', 'mom', 'dad', 'racecar', 'madam']
    output: ['mom', 'dad', 'racecar', 'madam'] 


const strings= ['hello', 'world', 'javascript', 'programming', 'mom', 'dad', 'racecar', 'madam'];

(function(arr) { 
    function isPalindrome(str) {
    const reversedStr = str.split('').reverse().join('');
    return str=== reversedStr
}
const polindromeStrings = arr.filter(string=> isPalindrome(string));
    console.log (polindromeStrings);

}) (strings);
*/

// 6.Return median of two sorted arrays of the same size.



/*let numbers = [1,3,2,9,6,5,4,11,8,12];

let median = (function (arr) {
    let sortedArray = arr.slice().sort((a,b) => a-b);
    let middleIndex = Math.floor(sortedArray.length/2);

    if (sortedArray.lenth % 2 ===0 ){
        return (sortedArray[middleIndex-1]+ sortedArray[middleIndex])/2;
    }
        else{
            return sortedArray[middleIndex]

        }
    })(numbers);

    console.log(median); */


    // 7. Remove duplicates from an array

   /* let arrays = [1,2,3,5,6,7,8,8,5,4,3,9,7,9];
let numbers = (function(array){
    return array.filter((value,index) => array.indexOf(value)===index);
}) (arrays);
console.log(numbers)
*/

//8.Rotate an array by k times
/*let arrays =[1,2,5,7,5]
let numbers= (function(array){
    let k =4;
    for (i=0; i<k; i++){
        array.unshift(array.pop());
    }
    return array;
})(arrays);

console.log(numbers)
*/
    
//1.Print odd numbers in an array in arrow function

/*let numbers = [1,2,3,4,5,6,7,8,9,]

let oddNumbers = numbers.filter(number => number % 2 !==0 );

console.log(oddNumbers);
*/

/*2.Convert all the strings to title caps in a string array 

  //  input: ['hello', 'world', 'javascript', 'programming']
   // output: ['Hello', 'World', 'Javascript', 'Programming']

  /* let inputNames = ['hello', 'world', 'javascriPt', 'programMing'];
    let titleCase = inputNames.map(word=> {
        return word.charAt(0).toUpperCase()+word.slice(1).toLocaleLowerCase();
        
    });
   

    console.log(titleCase);
    */

   //3. Sum of all numbers in an array//

    // example:

    // input: [1, 2, 3, 4, 5, 6, 7, 8, 9]
    // output: 45 

   /* let numbers = [1,2,3,4,5,6,7,8,9];

    let SumOfArray= numbers.reduce((total,current)=> total+ current,0);

    console.log(SumOfArray); */

    //4. Return all the prime numbers in an array

    /*example:

    input: [1, 2, 3, 4, 5, 6, 7, 8, 9]
    output: [2, 3, 5, 7] 

    let numbersArray = [1,2,3,4,5,6,7,8,9]
  let PrimeNumber = number=> {
        if (number <2) return false;
        for (let i=2; i<=Math.sqrt(number);i++){
            if (number % i===0) {
                return false;

            }
        }
        return true;
    }
let printPrimenumbers = numbersArray.filter(number=> PrimeNumber(number));
console.log(printPrimenumbers)
    */

//5. Return all the palindromes in an array

/*example:

    input: ['hello', 'world', 'javascript', 'programming', 'mom', 'dad', 'racecar', 'madam']
    output: ['mom', 'dad', 'racecar', 'madam'] 


let strings= ['hello', 'world', 'javascript', 'programming', 'mom', 'dad', 'racecar', 'madam'];

let isPalindrome = (str=> {
    reversedStr = str.split('').reverse().join('');
    return str=== reversedStr
})
let polindromeStrings = strings.filter(string=> isPalindrome(string));
    console.log (polindromeStrings); */

    


















