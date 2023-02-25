function getComments(){
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(data => displayComments(data))
}

function displayComments(comments){
    const commentContainer = document.getElementById('comments-container');
    for(const comment of comments){
        const commentDiv = document.createElement('div');
        commentDiv.innerHTML = `
            <h3>Name: ${comment.name}</h3>
            <h3>Email: ${comment.email}</h3>
            <h3>Comments: ${comment.body}</h3>
        `
        commentContainer.appendChild(commentDiv);
    }
}
getComments();