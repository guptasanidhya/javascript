// let x =Math.random()*10; //gives float
// let x = Math.random()*100;
let x = Math.floor(Math.random()*100);
console.log(x);
let score = 100;
let guess;
do{
guess=prompt("Please enter number");
if(x<guess){
    console.log("you entered ",guess," but x is smaller");
    score--;
}else if(x>guess){
    console.log("you entered ",guess," but x is GREATER");
    score--;
}
else{
    console.log("you guessed the right number");
}
}while(x!=guess);
console.log("score is "+score);