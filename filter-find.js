const n = [5, 13, 7, 41, 29, 79, 5, 3, 19];
const bigNum = n.filter(number => number > 20);
//console.log(bigNum)

const product = [
    { name: 'water bottle', price: 50, color: 'red' },
    { name: 'Tv', price: 15000, color: 'grew' },
    { name: 'phone', price: 50000, color: 'black' },
    { name: 'smart watch', price: 3000, color: 'pink' },
    { name: 'laptop', price: 75000, color: 'silver' },




]

const expensive = product.filter(p => p.color == 'black')
console.log(expensive);