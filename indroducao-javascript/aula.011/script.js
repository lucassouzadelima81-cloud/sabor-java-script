let btnSoma = document.querySelector("#btnSoma")
let primeiroInput = document.querySelector("#primeiroNumero")
let segundoInput = document.querySelector("#segundoNumero")

function soma() {
    let resultado = Number(primeiroInput.value) + Number(segundoInput.value)
    alert(resultado)
}

btnSoma.addEventListener("click", soma)