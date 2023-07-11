//Boolean Values and Comparison Operator

let booleanType = true;
let stringType = "true";
console.log(typeof booleanType, typeof stringType);

// Method return boolean values

let email ="wowcoder@example.com";
let booleanVal = email.includes("@");
console.log(booleanVal);

//comparison operators always return Boolean Value
// ==, ===, !=, !==
// > , >=
// <, <=

let points = 23;
console.log(points == "23")
console.log(points === "23")
console.log(points != "23")
console.log(points <= "234")
console.log(points >= "10")
if(points ==="23")
    console.log("Adult");
else{
    console.log("Not adult")
}