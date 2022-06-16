// fetch('http://localhost:3000/articles')
// .then(res => console.log(res))

function renderArticles(article){
    let card = document.createElement('li');
    card.innerHTML = `
    <div>
        <h2>${article.title}</h2>
        <p>${article.content}</p>
    </div>`
    document.getElementById('li-elements').appendChild(card);
}

function getArticles(){
    fetch('http://localhost:3000/articles')
    .then(res => res.json())
    .then(data => data.forEach(element => {
        renderArticles(element)
    }))
}
function initialize(){
    getArticles()
}
initialize()