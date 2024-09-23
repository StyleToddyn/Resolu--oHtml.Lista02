const now = new Date();
const anoAtual = now.getFullYear();
const ano = document.querySelector("#ano");
const botaoVerificar = document.querySelector("#verificar");

botaoVerificar.onclick = function(){
    console.log(`Estamos no ano de ${anoAtual}`);
    console.log(`Você nasceu no ano de ${ano.value},`);
    let idade = anoAtual - (ano.value);
    console.log(`Tem ${idade} anos`);
    if(idade >= 16){
        console.log("E já pode votar")
        let texto = `Você já tem ${idade} anos e pode votar`
        document.querySelector("#res").innerHTML = texto;
    }else{
        console.log("E não pode votar")
        let texto = `Você já tem ${idade} anos e não pode votar`
        document.querySelector("#res").innerHTML = texto;
    }




}