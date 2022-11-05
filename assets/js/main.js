document.querySelector('#opcoes_campo-cor').addEventListener("change", trocacor) 

function trocacor() {
    document.querySelector('#editor_fundo').style.background = document.querySelector('#opcoes_campo-cor').value
}