// Use reduce to calculate factorial of a given number from an array of first n natural numbers (n being the number whose factorial needs to be calculated).
let arr = [1, 2, 3,4,5]

const func=(val1,val2)=>{
    return val1 * val2
}

let a1=arr.reduce(func)
console.log(a1)
