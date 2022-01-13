function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.revised = false;

    // this.read = () => {
    //     console.log('read');
    // }
  }

  let book = new Book('Banan', 'Kalle', 1909);
  let book2 = new Book('Apelsin', 'Nisse', 2000);

  //book.read = () => console.log('read');
  //book2.read();

  
  Book.prototype.read = function(){
      console.log('read');
    }

Book.prototype.summary = function(){
    return `${this.title} was written by ${this.author}`;
}
    
    console.log(book);
    book.read();
  //const read = () => console.log('read');


  console.log(book.summary());
  