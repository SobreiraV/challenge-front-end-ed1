const form = document.getElementById("form_salvar")
const itens = JSON.parse(localStorage.getItem("itens")) || []

form.addEventListener("submit", function (evento) {
    evento.preventDefault()

    const nome = evento.target.elements['opcao_campo-nome'].value
    const descricao = evento.target.elements['opcao_campo-descricao'].value
    const cor = evento.target.elements['opcoes_campo-cor'].value
    const linguagem = evento.target.elements['linguagem'].value

    const existe = itens.find(elemento => elemento.nome === nome)

    if (existe) {
        alert("Já existe um item com esse nome!")
        return
    }

    evento.target.elements['opcao_campo-nome'].value = ""
    evento.target.elements['opcao_campo-descricao'].value = ""

    armazenaLocalmente(nome, descricao, cor, linguagem)
})

function armazenaLocalmente(nome, descricao, cor, linguagem) {
    /* const itens = JSON.parse(localStorage.getItem("itens")) || [] */
    itens.push({
        nome,
        descricao,
        cor,
        linguagem
    })

    localStorage.setItem("itens", JSON.stringify(itens))
}