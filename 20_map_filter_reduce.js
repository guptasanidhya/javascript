let arr = [45,24,54];
//Array map method
let a = arr.map((value,index,arr)=>{
    // console.log(value);
    return value+index;
})
// console.log(arr);
// console.log("after adding indexes",a);

//filter
let arr2=[45,2,3,4,6,8]
let a2=arr2.filter((value,index,arr2)=>{
    
    return value<10;
})

// console.log(a2);

//Array reduce method
//returns a single values
let arr3=[1,2,3,5,2,1]
const reduce_fun=(h1,h2)=>{
    return h1+h2
}
let newarr3=arr3.reduce(reduce_fun)
console.log(newarr3)
