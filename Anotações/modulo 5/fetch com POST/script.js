async function inserirPost(){
    document.getElementById('posts').innerHTML = 'carregando...';

    let req = await fetch ('https://jsonplaceholder.typicode.com/post', {
        method: 'POST',
        body: JSON.stringify({
            title: 'titulo',
            body: 'corpo',
            userId: 4
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    let json = await req.json();

    console.log(json);
}