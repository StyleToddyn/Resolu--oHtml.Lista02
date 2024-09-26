let valor1 = document.querySelector("#valor1")
let valor2 = document.querySelector("#valor2")
let resposta = "S"
let botaoVerificar = document.querySelector("#verificar")

botaoVerificar.onclick = function () {
    console.log("Whow")
    while(resposta.value == "S"){
            while(valor1.value < 0 || valor1.value> 10 && valor2.value < 0 || valor2.value > 10){
            }
            reposta.value = prompt("Deseja fazer um novo calculo? S/N?")
}
}