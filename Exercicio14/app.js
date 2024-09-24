let estoque = document.querySelector("#estoque");
let estoqueMaximo = document.querySelector("#estoqueMaximo");
let estoqueMinimo = document.querySelector("#estoqueMinimo");
let botaoVerificar = document.querySelector("#verificar");

botaoVerificar.onclick = function(){
    console.log("Whow");
    let mediaEstoque = (Number.parseInt(estoqueMaximo.value) + Number.parseInt(estoqueMinimo.value))/2
    console.log(`Média de estoque: ${mediaEstoque}`)
    console.log(`Estoque atual: ${estoque.value}`)
    if(Number.parseInt(estoque.value) >= mediaEstoque){
        console.log("Não efetuar compra")
        let texto = `Estoque maior que a média... Não efetuar a compra <br> Média do estoque: ${mediaEstoque} <br> Estoque atual: ${estoque.value} `
        document.querySelector("#res").innerHTML = texto
    }else{
        console.log("Efetuar compra")
        let texto = `Estoque menor que a média... Efetuar a compra <br> Média do estoque: ${mediaEstoque} <br>Estoque atual: ${estoque.value}`
        document.querySelector("#res").innerHTML= texto
    }
}
