let runAgain = true;
while (runAgain) {
    let a = prompt("Enter Your Age: ");
    a = Number.parseInt(a);
    if (a<0){
        console.error("You Enter Less Then 0 Value");
        break;
    }

    else if (a > 18) {
        alert("You Can Drive");
    } else {
        alert("You Can't Drive");
    }
    runAgain = confirm('Do you want to see the prompt again?');
    if (runAgain === false) {
        alert('Thanks for playing this game!');
        break;
    }
}
