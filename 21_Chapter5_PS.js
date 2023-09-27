//1

// let arrr=[1,2,3,4,5];
// let aa= prompt("enter a number");
// let num=Number.parseInt(aa);
// arr.push(num);
// console.log(arrr);


//2

// let arr=[1,2,3,4,5];
// let a;
// do{
// a= prompt("enter a number");
// let num=Number.parseInt(a);
// arr.push(num);
// console.log(arr);}while(a!=0);

//3

let numbers=[10,20,30,3,4,5];

let filtered = numbers.filter((value)=>{
    return value%10==0;
})

console.log(filtered);

//4

let single=[1,2,3,4,5]

let square=single.map((value)=>{
    return value*value;
})

console.log(square);


//5

let number=[1,2,3,4,5]
let factorial=number.reduce((x1,x2)=>{
    return x1*x2;
})

console.log(factorial)