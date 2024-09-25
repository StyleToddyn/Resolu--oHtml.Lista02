let altura = document.querySelector("#altura");
let sexo = document.querySelector("#sexo");
let botaoVerificar = document.querySelector("#verificar");

botaoVerificar.onclick = function(){

    console.log("Funcionando");

    if(sexo.value == "Masculino" || sexo.value == "masculino"){
        console.log("Sexo masculino");
        let texto = `O peso ideal para o sexo masculino é: ${(72.7 * (Number.parseFloat(altura.value))) - 58}`
        document.querySelector("#res").innerHTML = texto;      
    }else{
        console.log("Sexo feminino");
        let texto = `O peso ideal para o sexo masculino é: ${62.1 * (Number.parseFloat(altura.value)) - 44.7}`
        document.querySelector("#res").innerHTML = texto;      

    }

}
