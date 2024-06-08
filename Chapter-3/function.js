// Example of Function1

const hello =()=>{
    console.log("Hello How are You ! IAm Fine Yarr..")
    return("HII")
}

let v=hello();
console.log(v)


// Example of Function2
const sum=(p,q)=>{
    return (p+q)
}
console.log(sum(12,8))






// Example of Function3
function sid(x,y){
    // console.log("Done")
    return (x+y)/2
}
let a=10
let b= 13
let c=54


console.log('The Avg value of A&B is',sid(a,b))
console.log('The Avg value of B&C is',sid(b,c))
console.log('The Avg value of A&C is',sid(a,c))