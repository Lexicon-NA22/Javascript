


  const getRequest = (url, cb) => {

      const http = new XMLHttpRequest();
      
      http.addEventListener('readystatechange', () => {
          if(http.readyState === 4 && http.status === 200){
              const data = JSON.parse(http.responseText);
              cb(undefined, data);
          }
          else if(http.readyState === 4){
            cb('Server error', undefined)
          }
        });
      
        http.open('GET', url);
        http.send();

  }


  console.log(1);
  console.log(2);
  console.log(3);
  console.log(4);
  getRequest('user.json', (err, data) => {
      console.log(err, data);
      getRequest('todos.json', (err, data) => {
          console.log(err, data);
      getRequest('todos2.json', (err, data) => {
          console.log(err, data);
      })
      })
    });
  console.log(5);
  console.log(6);
  console.log(7);




    




  