class User {

    #loggedIn;

    constructor(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.#loggedIn = false;
    }
    
    login() {
      this.#loggedIn = true;
      console.log(`${this.firstName} has logged in ${this.#loggedIn}`)
    }

  }
  
  const user1 = new User('Kalle', 'Anka');
  const user2 = new User('Kajsa', 'Anka');
  const user3 = new User('Joakim', 'Von Anka');

//   user1.loggedIn = true;
  console.log(user1);
  console.log(user1.login());
  //console.log(user1);

  let users = [user1, user2, user3];

  class Admin extends User{

    // constructor(firstName, lastName){
    //     super(firstName, lastName)
    // }

    removeUser(user){
        users = users.filter(u => u.firstName != user.firstName);
    }
  }

  console.log(users);
  const admin = new Admin('Banan', 'Anka');
  console.log(admin.firstName);
  admin.removeUser(user1);
  console.log(users);


  class Animal {
    constructor(name) {
      this.name = name;
    }
    makeSound() {
      return `${this.name} makes a generic sound!`
    }
  }

  class Dog extends Animal {
    constructor(name, age) {
      super(name)
      this.age = age
    }
  }

  class Cat extends Animal {
    constructor(name, race) {
      super(name)
      this.race = race
    }
    pur() {
      return `${this.name} is purring!`
    }
    makeSound(){
      let sound = super.makeSound()
      console.log(`${this.name} is purring!`, sound)
    }
  }

const dog = new Dog('fido', 3);
const cat = new Cat('diva', 'nork skogskatt');
console.log(dog.makeSound());
console.log(cat.makeSound());







