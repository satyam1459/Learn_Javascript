//Logical Operators

// AND &&, Or || , Not !
//Example
let password ='qwerty@';
// if(password.length>5 && password.includes('@'))
//     console.log('Password Strength is Strong');
// else{
//     console.log('Password Strength is Weak');
// }

//Not Operator !
let status = false;
console.log(!status);

//Priorities
//Not
//And, Or, from left to right

let result = true && true || false && !false;
console.log(result);