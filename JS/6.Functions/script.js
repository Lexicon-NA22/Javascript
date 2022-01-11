
const calc = function(num1, num2){
    let sum = num1 + num2;
    return sum;
}

//Arrow function
const calc2 = (num1, num2) => num1 + num2;

const calc3 = (num1, num2) => {
    //do something
    let sum = num1 + num2;
    return sum;
}

let res = calc3(2,4);
console.log(res);

const arrow = num => num * 3;
console.log(arrow(2));

const print = function(){
    console.log('Hej på dig');
}

// alert('Hej');
aaaa = {
    firstName : 'Kalle',
    values : [ 1,2,3,4 ]
}
//console.log('XXXXX ' + x);
console.log(window.aaaa);

let res2 = print();
console.log(res2);


hej('Kalle', 'Anka', 23);
hej('Kalle');



function hej(message, message2 = 'Default'){
    console.log('hej hej ' + message.toUpperCase() + '  ' + message2);
}

const hejFunc = function(){
    console.log('hej constfunc');
}

// hejFunc();
// hej();



let product = {
    name: 'Iphone',
    price: '3000'
}

//consotructor function
function Product(name, price){
    this.name = name;
    this.price = price;
}

const iphone = new Product('Iphone', 3000);
iphone.name = 'samsung';
console.log(iphone);


let names = ['Kalle', 'Kajsa', 'Hans'];

names.forEach(names => {
    console.log(names);
})

names.forEach(names => console.log(names));


const testfunc = (nr1, nr2, cb) => {
    let sum = nr1 + nr2;
    setTimeout(() => {
        cb(sum);
    },2000);
}

testfunc(2,5, summa => console.log(summa));
testfunc(2,5, summa => console.log(summa / 2));





