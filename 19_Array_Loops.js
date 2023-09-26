let num = [1,5,7,10,25];

num.forEach((element)=>{
    console.log(element)
})
num.forEach((element)=>{
    console.log(element*element)
})

let names="San idhya"
//arrayfrom
let arr= Array.from(names);//convert any object array to string array
console.log(arr);

//for...of
for(let item of num){
    console.log(item);
}


//for ... in (for getting keys)
for(let item in num){
    console.log(item);
}