// Problem No 1

let marks = {
    Sanidhya :90,
    nitin:80,
    mayank:90
}
for (let i = 0; i < Object.keys(marks).length; i++) {
    // console.log("The marks of " + Object.keys(marks)[i] + " are " + marks[Object.keys(marks)[i]])
}

//print marks of object/students
/*
let obj = {
    Sanidhya :90,
    nitin:80,
    mayank:90
}

for (let key in obj){
    console.log("the marks of students are "+obj[key]);

}
*/
//print try again till user enters correct no.
let n=10;

while(n!=15)
{
if(n==15){
    break;
}
else{
    console.log("try again");
    n++;
}
}

const mean= (a,b,c,d,e)=>{
    return (a+b+c+d+e)/5;
}

console.log(mean(1,2,3,4,5));