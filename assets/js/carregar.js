const itens = JSON.parse(localStorage.getItem("itens")) || []
const lista = document.getElementById("cards_list")
console.log(itens)

for (let i = 0; i < itens.length; i++) {
    const item = itens[i]
    const card = document.createElement("div")
    card.classList.add("card")
    card.innerHTML = `
        <div class="card-body">
            <div class="card-editor_fundo" style="background-color: ${item.cor}">
                <div class="editor-botoes"></div>
                <code class="codigo_texto">${item.codigo}</code>
                <div class="card-editor"></div>
            </div>
            <h5 class="card-nome">${item.nome}</h5>
            <p class="card-descricao">${item.descricao}</p>
            <div class="card-rodape">
                <div class="card-social">
                    <button class="card-comentarios botaosocial">9</button>
                    <button class="card-likes botaosocial">9</button>
                </div>
                <img src="/assets/img/autor-mini.png" class="card-autor">
            </div>
        </div>
    `
    lista.appendChild(card)
}

/*
notas para o futuro:
1-fazer os comentarios e os likes serem interativos
2-implementar o usuario
*/

