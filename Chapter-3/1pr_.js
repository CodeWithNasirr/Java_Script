const marks={
    Harry:90,
    Rohan:78,
    Akash:82
}
// For in loop

// for (let keys in marks){
//     console.log(keys + " marks is " + marks[keys])
// }


//for loop

for(i=0;i<Object.keys(marks).length;i++){
    console.log(`The Marks of the ${Object.keys(marks)[i]} are ${marks[Object.keys(marks)[i]]}`)
}