// fetch('json.json')
//     .then(res => {
//         console.log(res);
//         const data = res.json();
//         console.log(data);

//         //return res.json();
//     })
//     .then(data => console.log(data));

let btn1 = document.querySelector('#btn1');
let textOutput = document.querySelector('#text-output');

btn1.addEventListener('click', function(){

    // fetch('text.txt')
    //     .then(function(res){
    //         // console.log(res);
    //         // console.log(res.text());
    //         return res.text();
    //     })
    //     .then(function(data){
    //         console.log(data);
    //         textOutput.innerHTML = data;
    //     })

    fetch('text.txt')
        .then(res => res.text())
        .then(data => {
            textOutput.innerHTML = data})

})

const jsonBtn = document.querySelector('#btn2');
const jsonOutput = document.querySelector('#json-output');

const getJson = () => {
    fetch('json.json')
        .then(res => res.json())
        .then(data => {
            console.log(data);

            jsonOutput.innerHTML = "";
            data.forEach(post => {
                jsonOutput.innerHTML +=
                    `
                <div class="card">
                    <div class="card-body">
                        <h3 class="card-title">${post.title}</h3>
                        <p class="card-text">${post.body}</p>
                    </div>
                </div>
                `
            })
        })
        .catch(error => {
            console.log('Error ' + error);
        })
}

jsonBtn.addEventListener('click', getJson);

const gitBtn = document.querySelector('#btn3');
const gitOutput = document.querySelector('#git-output');

const getGit = () => {

        fetch('https://api.github.com/users/lexicon-NA22/repos', {
            method : 'GET',
            headers : {
                'Accept' : 'application/json'
            }
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);

            gitOutput.innerHTML = '';

            data.forEach(repo => {
                gitOutput.innerHTML += 
                    `
            <div class="card">
            <div class="card-body">
              <h5 class="card-title">${repo.name}</h5>
              <p class="card-text">This repository have been forked ${repo.forks_count} times</p>
              <a href="${repo.html_url}" class="card-link">${repo.name}</a>
              <a href="${repo.owner.html_url}" class="card-link">Organisation</a>
            </div>
            </div>

            `
            })
        })
        .catch(err => console.log('Error ' + err));

}

gitBtn.addEventListener('click', getGit);

const gitAsyncBtn = document.querySelector('#btn4');
const gitAsyncOutput = document.querySelector('#gitasync-output');


// const getData = async () => {

// }

// const test = getData();
// console.log(test);

const getJson2 = async (url) => {

    const res = await fetch(url);
    // console.log(res);
    if(res.status !== 200)
        throw new Error('Failed to fetch data');

    const data = await res.json();
    // console.log(data);
    return data;
}

const res = getJson2('json.json')
    .then(data => console.log(data))
    .catch(err => console.log(err.message))

const getGitAsync = async () => {

        const res = await fetch('https://api.github.com/users/Lexicon-NA22/repos', {
            method: 'GET',
            headers: {
                'Accept': 'application/json'
            }
        });
        const data = await res.json()
    
        gitAsyncOutput.innerHTML = '';
        data.forEach(repo => {
                gitAsyncOutput.innerHTML +=
                `
                <div class="card">
                <div class="card-body">
                  <h5 class="card-title">${repo.name}</h5>
                  <p class="card-text">This repository have been forked ${repo.forks_count} times</p>
                  <a href="${repo.html_url}" class="card-link">${repo.name}</a>
                  <a href="${repo.owner.html_url}" class="card-link">Organisation</a>
                </div>
                </div>
    
                `
            })
    }
    
    gitAsyncBtn.addEventListener('click', getGitAsync);



