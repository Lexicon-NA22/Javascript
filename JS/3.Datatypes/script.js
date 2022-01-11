/* 
    Javascript Datatyper
    --------------------------------------------------
    String        =   Text
    Number        =   Tal, decimaltal, stora tal
    Boolean       =   Sant / Falskt   true/false
    null          =   Tomt, ingenting alls (manuellt)
    undefined     =   Tomt, har ej blivit definierad än (automatiskt)
    Object        =   ett object/klass som innehåller ett eller flera värden
    Array         =   OBJECT (lista med ett eller flera värden)
    Symbol        =   symboler används med objekt, kommer vi inte att använda
*/

// var = global variabel - accessbar överallt i koden
// let = lokal variabel - accessbar bara inom det angivna området
// const = lokal konstant variabel - kan inte skrivas över (undantag finns)

let name1 = 'Kalle';
let name2 = 'Kalle Anka'; //Använd ej ""
let name3 = `Här kan vi text ${name1} ${name2}`;

name1 = 5;
name1 = [];
name1 = {};
name1 = "Kalle";

const x = 5;
// x = 'Text'; //Aj aj

let firstName = 'Kalle';

console.log(firstName);
console.log(firstName.length);
console.log(firstName[0]);
console.log(firstName.toUpperCase());
//console.log(x.toUpperCase());
//window.hej = 'Kalle';
console.log(firstName.indexOf('a'));

let fullName = 'Kalle Anka';
// console.log(fullName);
// console.log(fullName.length); // Kollar längden på en string
// console.log(fullName[0]);     // skriver ut värdet på en specifik plats
// console.log(fullName[2]);
// console.log(fullName.indexOf('a')); // Hittar Index platsen på det första värdet som matchas
// console.log(fullName.lastIndexOf('a')) // Index på det sista förekommande värdet

// console.log(fullName.toUpperCase());
// console.log(fullName.toLowerCase());

// console.log(fullName.split(' '))    // Delar en string på det angivna värdet

// console.log(fullName.trim())  // tar bort whitespace före och efter en string



// Numbers
// ------------------------
/* 
    Math operators

    +   lägg till
    -   ta bort
    *   gångra
    **  upphöjt i
    /   dela
    %   division remainder

    ++  öka med 1
    --  minska med 1

    =   lika med
    +=  lägg till
    -=  ta bort
    *=  gångra och lägg till
    /=  dela och lägg til
    %=  division remainder

*/


let dataType;

console.log(typeof datatype);
datatype = 'en text';
console.log(typeof datatype);
datatype = 3;
console.log(typeof datatype);
datatype = null;
console.log(typeof datatype);   // det här är en bugg i javascript
datatype = true;
console.log(typeof datatype);
datatype = {};
console.log(typeof datatype);
datatype = [];
console.log(typeof datatype);


