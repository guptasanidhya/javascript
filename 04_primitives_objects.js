//primitive
let a = null;
let b= 45;
let c= "Sandy";
let d = Symbol("I am the Symbol");
let e = true;
let f = BigInt("1324")+BigInt("12");
let g
console.log(a,b,c,d,e,f,g);
console.log(typeof(f));
//non primitive

const price={
    "bottle":20,
    "chain":30,
    rubber:"30"
}
//In JavaScript objects, keys are automatically converted to strings, regardless of whether you provide them as string literals or other data types.
console.log(price)
console.log(price["bottle"]);
console.log(typeof(price.rubber));