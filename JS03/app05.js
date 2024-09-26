let valor1 = document.querySelector("#valor1")
let valor2 = document.querySelector("#valor2")
let resposta = "S"
let botaoVerificar = document.querySelector("#verificar")

botaoVerificar.onclick = function() {
    console.log("Whow")
    
    while(valor1.value < 0 || valor1.value > 10){
        console.log("Error")
        valor1 = 1
    }
    //console.log(`A média desses valores é : ${media(valor1,valor2)}`)
}
const media = (valor1,valor2) => (Number.parseInt(valor1.value)+Number.parseInt(valor2.value))/2

