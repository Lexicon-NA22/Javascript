// en kommentar kan skrivas såhär om det är en rad  ( ctrl + ' )


/* 
  en kommentar kan skrivas såhär
  om det är flera rader
  ( shift + alt + a )
*/

document.body.innerHTML = 'Banan';

console.log('Här skriver vi nåt i konsolen');
console.warn('Warning');
console.error('error');

console.log(name);
//Scope
let age = 34; //Global Scope
// let age = 34; Aja baja

if(age === 34){
  let age = 45; //Helt ok i JS ej i C#!
  let name = 'Kalle'; //lokalr scope bara synligt här
  console.log("Kodblock 1", age);
  console.log("Kodblock 1", name);
}


if(age === 34){
  let age = 50; //Helt ok i JS ej i C#!
  var name = 'Nisse'; //synligt även utanför
  console.log("Kodblock 2", age);
  console.log("Kodblock 2", name);
}

console.log('Ute ur kodblocken', age);
console.log('Ute ur kodblocken', name);

