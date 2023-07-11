// 'if', 'else if' ,'else if' statements

let budget = 1000;
if(budget > 6000){
    console.log('will do dinner in hotel');
}else if(budget === 5000){
    console.log('Can think of doing dinner in hotel');
}
else{
    console.log('will not do dinner in hotel');
}

//Nested if statements
let num = 23;

if(num>22){
    console.log("Greater thn 22");
    if(num>25)
        console.log("Greate than 25");
}


//Break and continue statement

//also called jump statement

//continue iteration--> used to skip some values

for(let i = 1;i<=5;i++){
    if(i===2) continue;
    console.log("Value of 'i' is",i);
}
//break iteration--> used to end itr at certain condition

console.log("-------------------")

for(let i = 1;i<=5;i++){
    if(i===2) break;
    console.log("Value of 'i' is",i);
}

//ternary operator
let age = 20;
let weight = 60;
if(age>=18)
    console.log("Can Vote");
else{
    console.log("Cannot vote");
}
//Single line solution

// let result = age>18 ?"Can vote":"Cannot vote";


let result = age>18 ?weight>55 ?"Qualify":"weightIssue":"Cannot vote";
console.log(result);

//switch case

let Age = 115;

switch(Age){
    case 15:
        result = "Age is 15"
        break;
    case 16:
        result="Age is 16";
        break;
    default:
        result="default case";
}
console.log(result);