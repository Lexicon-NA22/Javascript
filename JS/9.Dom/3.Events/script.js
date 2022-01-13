const btn = document.querySelector('#btnAlert');
const form = document.querySelector('#loginForm');
const p = document.querySelectorAll('p')
            .forEach(p => p.addEventListener('click', e => {
            console.log('works');
}))


// btn.addEventListener('click', function(e){
//     alert('eventet triggades');
// })

// btn.addEventListener('dblclick', function(e){
//     alert('eventet triggades');
// })

// btn.addEventListener('mousedown', function(e){
//     alert('eventet triggades');
// });

// btn.addEventListener('mouseup', function(e){
//     alert('eventet triggades')
// });

// btn.addEventListener('mouseenter', function(e){
//     alert('eventet triggades')
// });

// btn.addEventListener('mouseleave', function(e){
//     alert('eventet triggades')
// });


// form['firstName'].addEventListener('focus', function(e){
//     console.log('focus');
//     this.classList.add('focus');
// });

// form['firstName'].addEventListener('focus', (e) => {
//     console.log('focus');
//     e.target.classList.add('focus');
// });

form['firstName'].addEventListener('blur', (e) => {
    console.log('focus');
    e.target.classList.add('focus');
});

form['firstName'].addEventListener('keydown', (e) => {
   console.log(e.key);
});

// form['select'].addEventListener('change', (e) => {
//    console.log(e.target.value);
// });

// form.addEventListener('submit', e => {
//         e.preventDefault();
//         console.log('Hej');
//         form.reset();
// });

