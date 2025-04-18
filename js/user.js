function loadName(){
    const url = 'https://jsonplaceholder.typicode.com/users';
    fetch(url)
    .then(res => res.json())
    .then(data => displayUserName(data))
}

function displayUserName(data){
    const ul = document.getElementById('ulid');
    for(const user of data){
        const li = document.createElement('li');
        li.innerText = user.name;
        ul.appendChild(li);
    }
}