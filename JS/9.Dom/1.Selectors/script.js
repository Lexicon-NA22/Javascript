// console.log(window);
// console.log(document);
// console.log(document.body);
// console.log(document.body.children);

let p1 = document.getElementsByTagName('p');
console.log(p1);

// let p2 = document.getElementsByClassName('paragraph').forEach(p => console.log(p));
// console.log(p2);

let p3 = document.getElementById('para');
console.log(p3);

//Query selector
let q1 = document.querySelectorAll('p');
console.log(q1);

let q2 = document.querySelector('.paragraph');
console.log(q2);

document.querySelectorAll('.paragraph').forEach(p => console.log(p));
// console.log(q3);

let q4 = document.querySelector('div.paragraph');
console.log(q4);

let item3 = document.querySelector('#list > li:nth-child(3)');
console.log(item3.textContent);

let list = document.querySelector('#list');
console.log(list);

console.log(list.parentNode);
console.log(list.childNodes);
console.log(list.children);
console.log(list.children[0]);
console.log(list.nextSibling);
console.log(list.nextElementSibling);
console.log(list.previousSibling);
console.log(list.previousElementSibling);