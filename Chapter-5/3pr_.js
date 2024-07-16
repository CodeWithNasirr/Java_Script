// filter for numbers divisible by 10 from a given array.

let arr = [1, 2, 3, 4, 5,10,670]

const fnc=(a1)=>{
    return a1%10==0
}
let a=arr.filter(fnc)
console.log(`The Filter is divisile by 10 is ${a}`) 