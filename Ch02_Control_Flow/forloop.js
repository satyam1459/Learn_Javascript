//Control Flow
//For loops

//Run the specific task 5 times

// console.log("Run");
// console.log("Run");
// console.log("Run");
// console.log("Run");

//For loop

// for(let i=1;i<=10000;i++){
//     console.log("Run the task",i,'*');
// }


//Use case of for loop

let dishes =['Paneer','Chat','Dal','Chole-Bathure'];

for(let i=0;i<dishes.length;i++){
    console.log(dishes[i]);
}
for(let i = dishes.length-1;i>=0;i--){
    console.log(dishes[i]);
}

//iteration and value of i
// 0, 1 , 2 , 3 ,4

//while loop
console.log("*--------------------*");
let i = 0;
while(i<dishes.length){
    console.log("----->",dishes[i]);
    i++;
}

//do while loop

let j =2;
do{
    console.log("At least run one time =",j)
    j++;
}while(j<2)     //condition false already


