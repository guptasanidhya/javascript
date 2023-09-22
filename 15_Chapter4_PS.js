//chapter 4 practice set
let str = "Har\"";
console.log(str.length)

//problem 2
names="Sanidhya Gupta is my name";
console.log(names.startsWith("S"));
console.log(names.startsWith("my"));
console.log(names.endsWith("me"));

//problem 3
console.log(names.toLowerCase());

//problem 4

s="Please give Rs 1000";
// console.log(s.slice(15));
let amount=Number.parseInt(s.slice(15));
console.log(amount);
console.log(typeof amount);

// Problem 5
let friend = "Deepika"
friend[3] = "R"
console.log(friend) // friend is not changed, because string is immutable