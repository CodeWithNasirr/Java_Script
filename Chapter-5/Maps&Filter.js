//Array Map Method
let arr=[13,4,3]
let a1 = arr.map((value,index,arrays)=>{
    console.log(value,index,arrays)
    return value + index
})
console.log(a1)

//Array Fillter Method
let arr1=[12,3,433,545342,21,21,232,454,32]
let a2=arr1.filter((a)=>{
    return a>1000
})
console.log(a2)


//Array Reduce Method yaha per num1&num2 1,2 ha dono pluse hoga uske baad sab 1 ,1 karke plue honge ex-(1+2=3)+3=6+4=10
let arr2=[1,2,3,4,5,6]

const func=(num1,num2)=>{
    return num1+num2
}
let a3=arr1.reduce(func)
console.log(a3)
