//Variables, Constants and Comments

var score = 34;
var score = 56; //Redeclare
console.log(score);

let points = 23;    //only declared once

//constants

// const value = 10;
// value = 15;

// const value;    //constants should be inintialised

// console.log(value);

console.log("Hello Programmers ..!!")

//Data Types of variables

//there are 7 datatypes

//1). Numbers 1, 2 , 22, 33, 76
//2). String "I love India", "34", '23'
//3). Boolean true/false
//4). Null - A special data type - Intentionally absent of value
//5). Undefined variable declare but not initialised
//6). Object complex data structure
//7). Symbols -Looks like object

//Strings
console.log("This is String");

let firstName = "Satyam";
let lastName = "Jaiswal";
console.log(firstName,lastName);    //, will create a space

//String concatenation

//Method 1. Using + operator

//here we will have to give space explicitly
// let fullName = firstName+" "+ lastName
// console.log(fullName);

//Method 2. Using template literals

let fullName=`I want to Become ${firstName} ${lastName}`;
console.log(fullName);


//Getting String character -- sequencee of characters
console.log(firstName[2]);

//String Methods

console.log(firstName.toLowerCase());
console.log(fullName.toUpperCase());


console.log(firstName.indexOf("m"));
console.log(firstName.indexOf("x"));

let hobbies='     Coding reading spacing       ';

//trim
let result = hobbies.trim();
console.log(result);

//indexOf

// console.log(hobbies.indexOf('Coding'));
console.log(result.lastIndexOf('spacing'));

//includes method-> return boolean value

console.log(result.includes("Coding"));

//slice method

let full="wowprogrammer";
let fullResult = full.slice(0,8); 
console.log(fullResult);    //excluding last one 0-7
//Note-  Above methods does not mutate original array.
console.log("Original String =",full);
console.log("Extracted string =",fullResult);

//string "split" method

let favColors ="Brown Blue Black Gray";
let arrColors =favColors.split(' ');
//string to array
console.log(arrColors);


//JavaScript strings are immutable

let str ="Hello";
str[0]="p";
str[1]="q";

//there will be no change in "str" variable
str = str+" Programmers";   //New memory Location
console.log(str)


