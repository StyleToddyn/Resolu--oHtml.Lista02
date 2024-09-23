//Recebendo dados via html
const v1 = document.querySelector("#valor1").value;
const v2 = document.querySelector("#valor2").value;
const botaoVerificar = document.querySelector("#verificar");

//Criação da função
botaoVerificar.onclick = function(){

    console.log((Number.parseInt(v1)>Number.parseInt(v2))? `Maior valor é: ${v1}` : `Maior valor é:${v2}`);
    let texto =(Number.parseInt(v1)>Number.parseInt(v2))? `Maior valor é ${v1}` : `Maior valor é ${v2}`;
    document.querySelector("#res").innerHTML = texto;
}