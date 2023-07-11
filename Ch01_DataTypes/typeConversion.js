//Type Conversion

let stringType = "54";
console.log(stringType, typeof stringType)

//Number method

let numType = Number(stringType);
console.log(numType,typeof numType);

//Important Note
//In number method passing string should be of numeric value

let num = 54;
let string = String(num);
console.log(string,typeof string); 

//Boolean Method - true/false
let age = "12";         //Only 0 and "" is false
let boolean = Boolean(age);
console.log("Boolean value of age is ",boolean);

//Arrays

let dishes = ['Biryani','Chat','Parantha'];

//Access
console.log(dishes[2]);

//Modify the array
dishes[0] = "Paneer"
console.log(dishes);

//Array Methods

//Join method
console.log(dishes.join('-'));  //separator will be added
console.log(dishes);

//indexOf method
console.log(dishes.indexOf("Chat"));

//concat method

let newDishes = ['sweetes','rasgulla'];
let updatedDishes = newDishes.concat(dishes)
console.log(updatedDishes);  //which is first added first in list- this will not modify array but give new array
console.log(dishes.length);
console.log(newDishes.length);
console.log(updatedDishes.length);

//push method - mutator method(array will change)
console.log(updatedDishes.push('Dal makhni'));  //returns length of updated array

console.log(updatedDishes);

//pop method -- remove elements
console.log(updatedDishes.pop());   // removes last element



