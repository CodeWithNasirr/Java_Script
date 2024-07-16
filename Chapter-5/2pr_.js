// Keep adding numbers to the array in question-1 until 0 is added the array

let arr=[1,2,3,4,5,6]
let a;
do{
    a = prompt('Enter a Number: ')
    a = Number.parseInt(a)
    arr.push(a)
}while(a!=0);
console.log(arr)