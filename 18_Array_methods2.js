// let num1 = [2,4,35,4,6];
// let num2= [2,5,1,9,0];
// console.log(num1.length);
// delete num1[0];//delete the item but not its address or position
// console.log(num1.length);
// console.log(num1);

// let arr= num1.concat(num2);
// console.log(arr);
// num1[0]=5;
// console.log(arr,num1);

//sort method
/*

let compare=(a,b)=>{
    return a-b;
}
let num = [551, 22, 3, 14, 5, 6, 7, 8, 229]
num.sort(compare);
//if we didn't use compare inside sort it will sort according to strings and ans will be [14, 22, 229, 3, 5, 551, 6, 7, 8]
//when you use compare it will sort according to numeric value
console.log(num)

*/

//splice and slice
let num=[551,22,3,14,5,6,7,8,229]
// let deletedValues = num.splice(2, 4, 1021, 1022, 1023, 1024, 1025)
// //can delete elements splice(from index,total deleted count,numbers to add)
// console.log(num)
// console.log(deletedValues)


let newNum=num.slice(3,5);
console.log(newNum)

// let a= "Sanidhya";
// let b= a.slice(1);
// console.log(b);