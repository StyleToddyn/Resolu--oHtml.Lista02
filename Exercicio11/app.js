let peso = document.querySelector("#peso");
let sexo = document.querySelector("#sexo");
let botaoVerificar = document.querySelector("#verificar");

botaoVerificar.onclick = function(){

    console.log("Funcionando");

    if(sexo.value == "Masculino" || sexo.value == "masculino"){
        console.log("Sexo masculino");
        
    }else{
        console.log("Sexo feminino");
    }

}
