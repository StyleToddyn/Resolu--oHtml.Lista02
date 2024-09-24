let saldo = document.querySelector("#saldo");
let debito = document.querySelector("#debito");
let credito = document.querySelector("#credito");
let botaoVerificar = document.querySelector("#verificar");

botaoVerificar.onclick = function() {
    console.log("Whow");
    let saldoAtual = Number.parseInt(saldo.value) - Number.parseInt(debito.value) + Number.parseInt(credito.value) ;
    console.log(saldoAtual);
    if(saldoAtual > 0) {
        document.querySelector("#res").innerHTML = `Saldo atual de: ${saldoAtual} reais:<br> Saldo positivo`
        console.log("Saldo positivo")
    }else{
        document.querySelector("#res").innerHTML = `Saldo atual de: ${saldoAtual} reais <br> Saldo negativo`
        console.log("Saldo negativo")
    }
}
