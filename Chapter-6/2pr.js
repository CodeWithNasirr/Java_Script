let runagain=true
while(runagain){
    let a = prompt("Enter Your Age: ")
    a=Number.parseInt(a)
    if (a>18){
        alert("U can Drive")
    }
    else{
        alert("u Cant Drive ")
    }
    runagain = confirm("Do You want to see the prompt again: ")
    if (runagain ===false ){
        alert("Thanks For Playing This Game ")
        break;
    }

}
