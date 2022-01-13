const product = {
    name : "banan",
    price : 12,
    decription : 'Fruit',
    eat: function() {
      console.log(`You eat the ${this.name}!`);
    },
    eat2() {
      console.log(`You eat the ${this.name}!`);
    }
  };

  product.eat2();

  //Factory function
  function createProduct(name, price, desc){
      return{
          name,
          price,
          desc,
          eat(){
            console.log(`You eat the ${this.name}!`);
          }
      }
  }

  const prod2  = createProduct('Banan', 12, 'gul');
  prod2.eat();
  prod2.eat = 2;

  //Constructor function
  function Product(name, price, desc){
    // console.log(this);
    this.prodName = name;
    this.price = price;
    this.desc = desc;
  }


  const prod3 = new Product('Mjölk', 10, 'Dryck');
  console.log(prod3);

  console.log(product.constructor);
  console.log(prod2.constructor);
  console.log(Product.constructor);

  let fruit = 'banan';
  let fruit2 = new String('banan')


  function Product2(name, price, desc){
    // console.log(this);
    this.prodName = name;
    this.price = price;
    this.desc = desc;

    this.print = function(){
        console.log(`Product name ${this.prodName}`);
    }

    // this.print2 = () => {
    //     console.log(`Product name ${this.prodName}`);
    // }
    
  }

  const prod4 = new Product2('Mjölk', 10, 'Dryck');
  const prod5 = new Product2('Mjölk', 10, 'Dryck');
  prod4.print();
//   prod4.print2();

console.log(prod4);
console.log(prod5);


function ProductPrivate(name, price, desc){

    //Private
    let discount = 1;
    let calculatePrice = () => price - discount;
   
    //Properties (funkar inte på IE)
    Object.defineProperty(this, 'discount',{
        get: function(){
            return discount;
        },
        set: (value) => discount = value < 0 ? 0 : value
    })

    //Public
    this.prodName = name;
    this.price = price;
    this.desc = desc;

    this.print = function(){
        console.log(`Product name ${this.prodName}`);
    }

    this.buy = function(){
        let scope = 20; //local scope
        console.log(`You buy ${this.prodName} for ${calculatePrice()} scope nr ${scope}`);
        discount ++;
    }
}

const prodP = new ProductPrivate('Mjölk', 10, 'Dryck');
// console.log(prodP.calculatePrice());
prodP.buy();
prodP.buy();
prodP.buy();
prodP.buy();

prodP.discount = 5;
console.log(prodP);
