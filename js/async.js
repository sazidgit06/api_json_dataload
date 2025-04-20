const loadComments = async() => {
    const res = await fetch('https://jsonplaceholder.typicode.com/comments');
    const data = await res.json();
    displayComments(data);
}

// const displayComments = (data) => {
//     const div = document.getElementById('ulId');
//     for(const comment of data){
//         console.log(comment);
//         const li = document.createElement('li');
//         li.innerText = comment.body;
//         div.appendChild(li);
//     }
// }

const displayComments = (data) => {
    const divid = document.getElementById('divId');
    for(const list of data){
        console.log(list);
        const div = document.createElement('div');
        div.classList.add('comment');
        div.innerHTML = `
            <h5>Id - ${list.id}</h5>
            <h4>Name - ${list.name}</h4>
            <h5>Email - ${list.email}</h5>
        `;
        divid.appendChild(div);
    }
}