const verificar = document.querySelector("#verificar");
verificar.onclick = function() {
    
    const quant  = document.querySelector("#quant");
    console.log(`Quantidade de maças :${quant.value}`);
    if(quant.value<12 ) {

        console.log(`Total de ${quant.value * 2.50} reais `);
        console.log(`Cada maçã vai sair por 2.50 reais `);
        let texto = `Total de ${quant.value * 2.50} reais `
        document.querySelector("#res").innerHTML = texto

    }else{

        console.log(`Total de ${(quant.value * 1.90).toFixed(2)} reais`);
        console.log(`Cada maça vai sair por 1.90 reais`)
        let texto = `Total de ${quant.value * 2.50} reais `
        document.querySelector("#res").innerHTML = texto

    }
}