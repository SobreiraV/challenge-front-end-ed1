const apagar = document.getElementById("botao_apagar")

console.log(apagar)

apagar.addEventListener("click", function () {
        localStorage.clear();
        alert("Dados apagados com sucesso!");
        location.reload();
    });