const verificar = document.querySelector("#verificar");
verificar.onclick = function() {
    const quant  = document.querySelector("#quant");
    console.log(`Quantidade de maças :${quant.value}`);
    if(quant.value<12 ) {
        console.log(`Cada maça vai custar ${quant.value * 2.50} reais `);
    }else{
        console.log(`Cada maça vai custar ${(quant.value * 1.90).toFixed(2)} reais`);
    }
}
