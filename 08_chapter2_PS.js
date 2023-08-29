//01 
// let age = 15;
// if(age>10 && age<20){
//     console.log("your age lies between 10 and 20");
// }
// else{
//     console.log("your  age does not  lies between 10 and 20");
// }



//2
let age =16;
switch(age){
case 12:
    console.log("your age is 12");
break;
case 13:console.log("your age is 13");
break;
case 14:console.log("your age is 14");
break;
case 15:console.log("your age is 15");
break;
default:console.log("you are not a teenager");
}

//03
let a ="18";
a= Number.parseInt(a);
if(a%2==0 && a%3==0){
    console.log("it is divisible by 2 and 3");
}
else{
    console.log("it is not divisible by 2 and 3");
}

//04
a=20;
if(a%2==0 || a%3==0){
    console.log("it is divisible by 2 or 3");
}
else{
    console.log("it is not divisible by 2 and 3");
}

//05
age =20;
a = age>18?"you can drive":"you cannot drive";
console.log(a);
