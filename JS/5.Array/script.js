// ARRAYS - en lista med ett eller flera värden

// names = []; //Gör inte
// var names = []; //Undvik
// let = names = []; //Gör såhär
// const names = []; //Gör såhär

//Gör inte
const multiArray = ['12', 12, true, {firstName: 'Kalle'}, [1,2,3,4], null];

const array = [1,2,34,5,7];

const users = [
    {firstName: 'Kalle', lastName: 'Anka', age: 34},
    {firstName: 'Fnatte', lastName: 'Anka', age: 33},
    {firstName: 'Tjatte', lastName: 'Anka', age: 5},
  ]

  let names = ['Kalle', 'Fnatte', 'Tjatte'];

// hämta information från en array
// console.log(names); // hela arrayen
// console.log(names[0]);
// console.log(names[1]);
// console.log(names[2]);

// .unshift() - Lägg till i början av en array
names.unshift('Kajsa');
// console.log('Med unshift: ' + names);

// .shift() - Ta bort i början av en array
names.shift();
// console.log('Med shift: ' + names);

// .push() - Lägg till i slutet av en array
names.push('Kajsa');
// console.log('Med push: ' + names);

// .pop() - Ta bort i slutet av en array
names.pop();
// console.log('Med pop: ' + names);

names[0] = 'Nisse';


// delete names[1];
// delete names[names.indexOf('Nisse')]; //Tar bort värdet men inte positionen i arrayen
// names[0] = 'kajsa';
// console.log(names);
console.log(names);
names.splice(1,2, 'Nytt namn', 'Pluto');
console.log(names);


console.log(names.length);

names = names.concat(['Fido', 'Pelle']);
console.log(names);

names.sort();
names.reverse();

//Filter  === Where
const notKalle = users.filter(u => u.firstName !== 'Kalle');
console.log(notKalle);

//Map === Select
const ages = users.map(u => u.age);
console.log(ages);

users.forEach(u => {
    // const {firstName} = u;
    document.body.innerHTML += `<p> Name: ${u.firstName}</p>`
})

