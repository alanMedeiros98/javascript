async function enviar(){
    let arquivo = document.getElementById('arquivo').files[0];

    let body = new formData();
    body.append('title', 'Bla Bla Bla');
    body.append('arquivo', arquivo);

    let req = await fetch('https://www.meusite.com.br/uplaod', {
        method = 'POST',
        body: body,
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });
}