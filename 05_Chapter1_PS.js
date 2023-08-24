//q1 add number to string
let a = "sandy";
let b=6;
console.log(a+b);
//q2 waht is the type of a+b
console.log(typeof(a+b));
//q3 create a const object and later change it to number

const item={
    "Sanidhya":"Sandy",
    "Nitin":5
}
item["Sanidhya"]="1";
console.log(typeof(item["Nitin"]));
//q4 add a new key
item["mayank"]="mj";
console.log(item);
//q5 create a dictionary of 3 keywords
const dict={
    "apple":"fruit",
    "basketball":"game",
    "alien":"species from outer space"
}
//treated as identifier same rules as variable names
console.log(dict.apple);
//when use [] you have to use string
console.log(dict["apple"]);