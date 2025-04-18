function loadposts(){
    const url = 'https://jsonplaceholder.typicode.com/posts';
    fetch(url)
    .then(res => res.json())
    .then(data => displayposts(data))
}


function displayposts(posts){
    const divid = document.getElementById('divId');
    for(const post of posts){
        const div = document.createElement('div');
        div.classList.add('post');
        div.innerHTML = `
            <h5>Id-${post.id}</h5>
            <h4>Title-${post.title}</h4>
            <p>Body-${post.body}</p>
        `;
        divid.appendChild(div);
    }

}

loadposts();