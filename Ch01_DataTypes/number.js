//Numbers

let score = 50;
console.log(score,typeof score)

//Mathematical Operators -> * / % ** + -

let result = score/1.4;     //Give quotient
let result1 = score%3;      //Give remainder
console.log(result1);

//Mathematical Expression

let result2 = score *2 + (4*3) - 8/2 %4;

//Using Priority and Precedence
//1 () Brackets(Parantheses)
//2 ** Power Operator
//3 * / % left to right
//4 + - (from left to right)
console.log(result2);

//Concatenation of numbers

let result3 = "My total score is = "+result;
console.log(result3, typeof result3);   //Dynamic conversion -> jvascript loosely coupled

//Loose Equality (==) vs Strict Equality (===)

//Loose Equality Operator ==

let age = 22;
console.log(age == "22");   //checks only

//Strict Equality Operator ===
console.log(age === "22");  //checks value and type too 

console.log(age != "22")    //Loose not equality
console.log(age !== "22")   //Strictly not equality

//Type Conversion
44.43