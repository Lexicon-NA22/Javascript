let number = 13;
let string = '13';

console.log(number == 13);
console.log(number == 20);
console.log(number != 13);
console.log(number != 20);

//  två = tecken jämför bara värdet
console.log(number == string);
// tre = jämför värdet OCH datatyp
console.log(number === string);

// IF SATSER

if(string == number) {
    // Jämför värder
    // console.log('Påståendet är sant: string == number')
}

if(string === number) {
    //Jämför värdet och datatyp 
    // console.log('Påståendet är sant: string === number')
}

/*

        &&      och
        ||      eller
        !       inte
        <       mindre än
        >       större än
        <=      mindre eller lika med
        >=      större eller lika med

        !==    om det inte är lika med och inte har samma datatyp 
        !=     om det inte är lika med

*/

let st = '13';
let nr = 13;

//Ternary
//condition ? expression : expression;
//

let res = st < nr ? 1: {name: 'kalle'} ; 
console.log(res);


//Switch

let car = {
    color : 'blue',
    brand : 'Volvo'
 }
 
 switch(car.color) {
 
   case 'red':
     console.log('color is red');
     break;
   case 'blue':
     console.log('color is blue');
     break;
   case 'orange':
     console.log('color is orange');
     break;
   case 'white':
     console.log('color is white');
     break;
   case 'black':
     console.log('color is black');
     break;
 
   default:
     console.log('color unknown!')
 }