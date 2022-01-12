const btn = document.querySelector('#btn');
const div2 = document.querySelector('#div2');
const div3 = document.querySelector('#div3');
document.querySelector('#num1').addEventListener('keyup', function(){
        console.log('Hej');
});
// const number2 = document.getElementById('number').value;



const changeText = () => div1.innerText = "Ny text från js";

btn.addEventListener('click', function(e){
        // console.log(this);
        // console.log(e);
        // console.log(e.target);
    //     let next = this.nextElementSibling;
    //     console.log(next);
    //     next.innerText = 'Banan';
    // let h1 = document.createElement('h1');
    // h1.innerText = 'Banan';
    // div3.appendChild(h1);

});


// btn.addEventListener('click', (e) => {
//     // div2.style.backgroundColor = '#cecece';
//     // div2.classList.add('upper');
    
//     // if(div2.classList.contains('upper')){
//     //     div2.classList.remove('upper');
//     // }
//     // else{
//     //     div2.classList.add('upper');
//     // }

//     div2.classList.toggle('upper');
//     div2.innerHTML = ` <ul>
//     <li>1</li>
//     <li>2</li>
//     <li>3</li>
// </ul>`;
// });


// btn.addEventListener('click', function(e) {
//     console.log(this);
//     console.log(e.target);

// });