let salario = document.querySelector("#salario");
let horasTrabalhadas = document.querySelector("#qntHoras");
let botaoVerificar = document.querySelector("#calcular");

botaoVerificar.onclick = function() {
if ((Number.parseInt(horasTrabalhadas.value)) >160) {
    let salarioFixo = (Number.parseInt(salario.value)) *160
    let salarioExtra = ((Number.parseInt(horasTrabalhadas.value) - 160) *(Number.parseInt(salario.value) +((Number.parseInt(salario.value)) * 0.5) ) )
    console.log(`Seu salario é de: ${salarioFixo + salarioExtra} reais`);
    let texto = `Seu salário é de: ${salarioFixo + salarioExtra} reais`
    document.querySelector("#res").innerHTML = texto
}else{
    let salarioFixo = Number.parseInt(horasTrabalhadas.value) * Number.parseInt(salario.value)
    console.log(`Seu sálario é de: ${salarioFixo} reais`);
    let texto = `Seu salario é de: ${salarioFixo} reais`
    document.querySelector("#res").innerHTML = texto
    
}
}