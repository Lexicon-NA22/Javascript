const doSomething = (value) => {
    return new Promise( (resolve, reject) => {
        if(value){
          resolve('Success');
        }
        else{
          reject('Error');
        }
    })
}

// const test = doSomething(true);
// console.log(test);

// doSomething(true)
//     .then(data => console.log(data))
//     .catch(err => console.log(err));




  const getRequest = (url) => {

      return new Promise( (resolve, reject) => {

        
        const http = new XMLHttpRequest();
        
        http.addEventListener('readystatechange', () => {
            if(http.readyState === 4 && http.status === 200){
                const data = JSON.parse(http.responseText);
                // cb(undefined, data);
                resolve(data);
            }
            else if(http.readyState === 4){
              // cb('Server error', undefined)
               reject('Cant fetch data');
            }
          });
        
          http.open('GET', url);
          http.send();

      })
  }

  getRequest('user.json')
        .then(data => {
          console.log(data);
          return getRequest('todos.json');
        })
        .then(todos => {
          console.log(todos);
          return getRequest('todos2.json');
        })
        .then(todos2 => {
          console.log(todos2);
        })
        .catch(err =>  {
          console.log(err);
        })







    




  