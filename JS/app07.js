//Recebendo dados via html
const v1 = document.querySelector("#valor1");
const v2 = document.querySelector("#valor2");
const botaoVerificar = document.querySelector("#verificar");

//Criação da função
botaoVerificar.onclick = function(){

    console.log((Number.parseInt(v1.value)>Number.parseInt(v2.value))? `Maior valor é: ${v1.value}` : `Maior valor é:${v2.value}`);
    let texto =(Number.parseInt(v1.value)>Number.parseInt(v2.value))? `Maior valor é ${v1.value}` : `Maior valor é ${v2.value}`;
    document.querySelector("#res").innerHTML = texto;
}