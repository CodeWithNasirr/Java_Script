write=true;
while(write){
    const fnc=(comp,user)=>{
        if (user===randomNumber){
            return null
        }
        else if (comp==="s"){
            if (user==="w"){
                return false
            }
            else if (user==="g"){
                return true
            }
        }
        else if (comp==="w"){
            if (user==="g"){
                return false
            }
            else if (user==="s"){
                return true
            }
        }
        else if (comp==="g"){
            if (user==="s"){
                return false
            }
            else if (user==="w"){
                return true
            }
        }
    };
    
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    let comp;
    if (randomNumber===1){
        comp="s"
    }
    else if (randomNumber===2){
        comp="w"
    }
    else if (randomNumber===3){
        comp="g"
    }
    
    let user=prompt('Your Turn: Snake(s), Water(w),Gun(g)')
    
    let compchoice=`Comp Choose ${comp}`
    let youchoice=`Your Choose ${user} `
    alert(compchoice,youchoice)
    
    
    let a=fnc(comp,user)
    
    if (a===true){
        alert("You Won")
    }
    else if(a===null){
        alert("Match Draw")
    }
    else{
        alert("You Lose!")
    }
    let write=confirm("Do You Want Play Agian! ")
    if (write===false){
        alert("Thanks For Playing This Game! ")
        break;
    }


}

