const linguagem = document.querySelector('.linguagem')
const areaDoCodigo = document.querySelector('.codigo-wrapper')
const botao = document.querySelector('.botao')

function aplicaHl() {
    const codigo = areaDoCodigo.innerText
    areaDoCodigo.innerHTML = `<div class="editor_container-botoes"></div>
    <code class="preview hljs ${linguagem.value}" contenteditable="true" arial-label="Editor de código"></code>`
    areaDoCodigo.querySelector('code').textContent = codigo
    hljs.highlightElement(areaDoCodigo.querySelector('code'))
}

botao.addEventListener('click', () => {
    aplicaHl()
})