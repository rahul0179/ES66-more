
// problem--1
var num = 45;
let string = 'Coding is fun';
const s = 'unchangeable variable'


//console.log(string, num, s);
num = 100;
string = 'put your hand'
//s = 'change'
//console.log(string, num, s);

//2.Problem-2 (template String)
// --------------------------------------
const st = "ami vat khai. Dhaka bangladesh er rajdhani";
const st2 = 'hi i am rahul  .kaice ho ap'
const st3 = ` hi 
              hi
              how are  you.
              i am fine and u
              ${st}`;
const first = 'Sadiya';
const secound = 'sarmin';
const fullName = first + " " + secound;
const fb = `FullName:${first} ${secound}`;
// console.log(fb)
// console.log(fullName);

// console.log(st, st2)
// console.log(st3);

//problem-3=array
//----------------------------
const arr = [1, 2, 3, 4, 5, 6];


const add = (num1, num2) => num1 + num2;
let sum = add(12, 12);
//console.log(sum)
const add2 = (num1, num2, num3) => num1 * num2 * num3;
let sum2 = add2(12, 12, 12);
//console.log(sum2)
const div = (num) => num / 5
const result = div(50);
//console.log(result)
const division = (array) => {
    const newArr = []
    for (const i of array) {
        let operation = i * 2;
        newArr.push(operation);
    }
    return newArr;
}
const result2 = division(arr)
//console.log(result2);

const divi = x => x / 5
//console.log(divi(50));
const mul = (x, y) => (x + y) * 2;
//console.log(mul(2, 2));
const mul3 = (x, y, z) => x * y * z;
//console.log(mul3(2, 2, 3));

// problem-5
// -----------------------------------------------------------------
const arr2 = [2, 4, 6, 8, 10];
//const arrOperation1 = x => x * 2;
const newarr2 = arr2.map(x => x * 2);
console.log(newarr2);









