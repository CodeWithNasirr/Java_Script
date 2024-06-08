let a=[2,34,43,3433,23,3]
for (let i=0;i<a.length;i++){
    console.log(a[i])
}

// ForEach loop

a.forEach((value)=>{
    console.log(value*value) 
})


//Arrays From

let name="Nasir"
let arr=Array.from(name)
console.log(arr)

//for off loop

for (let i of a){
    console.log(i)
}


//For In Loop
for (let i in a){
    console.log(a[i])
}