const hello= ()=>{
    console.log("Hello!");
    return "Hiii"
}

function oneplusAvg(x,y){
    return 1+(x+y)/2;
}

const sum =(p,q)=>{return p+q;};

let a = 1;
let b = 2;
let c=  3;
let v = hello();
console.log(v);
console.log("one plus average of a and b is ",oneplusAvg(a,b));
console.log("one plus average of b and c is ",oneplusAvg(b,c));
console.log("one plus average of a and c is ",oneplusAvg(a,c));

console.log(sum(9,7));