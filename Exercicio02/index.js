const v1 = document.querySelector('#valor1');
const v2 = document.querySelector('#valor2');
const resultado = document.querySelector('#resultado');
const botaoCalcular = document.querySelector('#calcular');

botaoCalcular.onclick = function(){
    let soma = Number.parseInt(v1.value) + Number.parseInt(v2.value);
    resultado.value = soma;
};