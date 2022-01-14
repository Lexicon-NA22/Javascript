class Book{

    constructor(title, author, year){
        this.title = title;
        this.author = author;
        this.year = year;
        this.revised = false;
    }

    summary(){
        return `${this.title} was written by ${this.author}`;
    }

}

const book1 = new Book('C#', 'Kalle', 2020);
console.log( book1.summary());

// const book2 = new Book(2, {}, []);
// console.log(book2);
// book2.title = [1,2,3];
// console.log(book2.title);
// book2.title = "Kalle";
// book2.title = {firstName : 'Kalle'};
// console.log(book2);


// console.log(book1);
// console.log(book1.summary());
// console.log(book1.title);
// console.log(typeof book1.author);
// console.log(typeof book1.year);
// console.log(typeof book1);
// console.log(typeof book1.revised);


class Person{

    #firstName;
    #lastName;
   

    get firstName(){
        return  this.#firstName;
    }

    set fullName(value){
        const parts = value.split(' ');
        this.#firstName = parts[0];
        this.#lastName = parts[1];
    }

    constructor(firstName, lastName){
        this.#firstName = firstName;
        this.#lastName = lastName;
    }

    #privateFunc(){
        console.log("private");
    }

    getFullNameFunktion(){
        this.#privateFunc();
        return `${this.#firstName} ${this.#lastName}`;
    }

}

let person = new Person('Kalle', 'Anka');
// console.log(person.getFullNameFunktion());
// console.log(person.firstName);
// person.fullName = 'Anders Karlsson';
// console.log(person);
// console.log(person.privateFunc());