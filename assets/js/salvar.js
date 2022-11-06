const form = document.getElementById("form_salvar")
const itens = JSON.parse(localStorage.getItem("itens")) || []
/* console.log(document.getElementById("codigo_do_usuario").innerHTML) */

form.addEventListener("submit", function (evento) {
    evento.preventDefault()

    const nome = evento.target.elements['opcao_campo-nome'].value
    const descricao = evento.target.elements['opcao_campo-descricao'].value
    const cor = evento.target.elements['opcoes_campo-cor'].value
    const linguagem = evento.target.elements['linguagem'].value
    const codigo = document.getElementById("codigo_do_usuario").innerHTML

    const existe = itens.find(elemento => elemento.nome === nome)

    if (existe) {
        alert("Já existe um item com esse nome!")
        return
    }

    /* evento.target.elements['opcao_campo-nome'].value = ""
    evento.target.elements['opcao_campo-descricao'].value = "" */

    armazenaLocalmente(nome, descricao, cor, linguagem, codigo)
})

function armazenaLocalmente(nome, descricao, cor, linguagem, codigo) {
    /* const itens = JSON.parse(localStorage.getItem("itens")) || [] */
    itens.push({
        nome,
        descricao,
        cor,
        linguagem,
        codigo
    })

    localStorage.setItem("itens", JSON.stringify(itens))
}
/* console.log(itens) */
