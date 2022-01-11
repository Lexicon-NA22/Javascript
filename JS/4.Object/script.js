/* 
    OBJECT - innehåller ett eller flera värden
    var person = {}
    let person = {}
    const person = {}


    används i klasser, objekt, json
    använder sig av key:value pairs
    alla värden är separerade av ett ,
*/


  /*   JS Object
    let person = {
      firstName: 'Joakim',
      lastName: 'Wahlström'
    }

    JSON Object
    let json = {
      "firstName": "Joakim",
      "lastName": "Wahlström",
      "age": 34
    } */

    // kovertera JS till JSON
//     let json = JSON.stringify(person)

//     // konvertera JSON till JS
//     let js = JSON.parse(json);

const user = {
    firstName: 'Kalle',
    lastName: 'Anka',
    age: 34,
    address: {
      street: 'en gata',
      nr: 12,
      zipCode: 72345,
      city: 'Ankeborg'
    },
    phoneNumbers: ['076-1234567', '070-9876543'],
    isActive: true
  }


/* const user2 = {
    firstName: 'Kalle',
    lastName: 'Anka',
    age: 34,
    address: {
      street: 'en gata',
      nr: 12,
      zipCode: 72345,
      city: 'Ankeborg'
    },
    phoneNumbers: ['076-1234567', '070-9876543'],
    isActive: true
  }
const user3 = {
    firstName: 'Kalle',
    lastName: 'Anka',
    age: 34,
    address: {
      street: 'en gata',
      nr: 12,
      zipCode: 72345,
      city: 'Ankeborg'
    },
    phoneNumbers: ['076-1234567', '070-9876543'],
    isActive: true
  } */

  console.log(user);
//   user.firstName = 1;
//   user.firstName = {};
 // user.firstName = 'Hej';
  user.salary = 540;
  user.favoriteColor = 'red';
  user.favoriteColorrrr = ' blue';
  console.log(user);
  user.address.banan = 'Yellow';
  console.log(user);

  console.log(user.firstName);
  console.log(user.address.city);

  console.log(user['age']);

  const key = 'age';
  console.log(user[key]);

  console.log(`User name ${user.firstName} lives in ${user.address.city}`);
  console.log('User name ' + user.firstName + '  ');

  let {firstName/* : name56 */, age, address:{city}} = user;
  //let firstName = user.firstName;
  console.log(firstName, age, city);