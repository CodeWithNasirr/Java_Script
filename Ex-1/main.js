const randomNumber = Math.floor(Math.random() * 100) + 1;
console.log(randomNumber);

let i = 0;
let user = 0; // Initialize user variable outside the loop
while (randomNumber !== user) {
    user = parseInt(prompt("Guess the number (between 1 and 100):")); // Update user variable with user input
    if (randomNumber === user) {
        console.log("You guessed it right!");
    } else {
        if (randomNumber<user){
            console.log("You Guess it Wrong! Please Enter a smaller number")
        }
        else{
            console.log("You Guess it Wrong! Please Enter a LargerNumber number")
        }
    }
    i++;
}

console.log(`You Guess The Number WithIn ${i} guesses`);

