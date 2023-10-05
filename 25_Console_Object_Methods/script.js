// console.log(console)
console.clear(console);
console.log("hello")
console.warn("this is a warning");
console.error("this is a error message");
console.log("err");
console.assert(5>555);
console.assert(555>5);

console.time("for loop");
for(let i =0;i<5;i++){
console.log("hello");
}
console.timeEnd("for loop");

console.time("whileLoop")

let i = 0;
while (i < 5) {
  console.log(233)
  i++;
}

console.timeEnd("whileLoop")
