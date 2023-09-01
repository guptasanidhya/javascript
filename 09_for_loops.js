let sum = 0;
let n=5;
 
for (let i =0;i<n;i++){
    sum = sum +i+1;
}
console.log("sum of first "+n +"natural numbers is = "+sum);


let obj={
    sanidhya:90,
    nitin:80,
    namrata : 80,
    mayank:95
}
//for in loop
for (let a in obj){
    console.log("Marks of "+a+" are "+obj[a])
}

//for of loop 
for(let b of "sanidhya"){
    console.log(b);
}