let valor1 = document.querySelector("#valor1")
let valor2 = document.querySelector("#valor2")
let botaoVerificar = document.querySelector("#verificar")

botaoVerificar.onclick = function () {
    console.log("Whow")
    for(;valor2.value == 0;){
        valor2.value = prompt("Digite um novo valor")
        console.log(alert("Valor inválido"))
    }
    console.log(`Resultado da divisão = ${Number.parseInt(valor1.value) / Number.parseInt(valor2.value)}`)
    let texto = `${valor1.value} / ${valor2.value} = ${Number.parseInt(valor1.value) / Number.parseInt(valor2.value)}`
    document.querySelector("#res").innerHTML = texto
}