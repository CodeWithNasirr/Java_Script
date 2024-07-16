let a=12;
let b = prompt("Enter Your Guess");
let i=0;

while(a!=b){
    b=prompt("Enter your Guess");
    i++;
}

console.log(`You Guess The Number ${a} in ${i} attempt`)