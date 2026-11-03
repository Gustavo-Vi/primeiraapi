function buscarApi() {
    fetch("https://viacep.com.br/ws/69902145/json/")
    .then(resposta => {
        return resposta.json()
    }) .then(data => {
        console.log(data)
    })
}

async function buscarApiAsync() {
    let resposta = await fetch("https://viacep.com.br/ws/69902145/json/")
    let data = await resposta.json();

    console.log(data)
}

buscarApiAsync();