let salario = document.querySelector("#salario");
let valorVendas  = document.querySelector("#vendas");
let botaoVerificar = document.querySelector("#verificar");

botaoVerificar.onclick = function() {
    if(((Number.parseInt(valorVendas.value)) ) >1500){
        console.log("O valor excedeu 1500 reias");

        let comisao = (0.03 * 1500) + (0.05 *(Number.parseInt(valorVendas.value)-1500));
        console.log(`Valor da comisao: ${comisao}`)

        let salarioTotal = Number.parseInt(salario.value) + comisao
        console.log(`Salário total ${totalVendas} reais`)
        document.querySelector("#res").innerHTML = (`Salário total é ${salarioTotal} reais`)
    }else{
        console.log("O valor não excedeu 1500 reais");

        let comisao = (0.03 * (Number.parseInt(valorVendas.value)))
        console.log(`Valor da comisão: ${comisao} reais`)
        console.log(`Valor do salário: ${salario.value} reais `)
        let salarioTotal = (comisao) + (Number.parseInt(salario.value))
        console.log(`Salário total de: ${salarioTotal} reais`)
        document.querySelector("#res").innerHTML = (`Salário total é ${salarioTotal} reais`)
}
}

