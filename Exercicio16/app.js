let homem1 = document.querySelector("#homem1");
let homem2 = document.querySelector("#homem2");
let mulher1 = document.querySelector("#mulher1");
let mulher2 = document.querySelector("#mulher2");
let botaoVerificar = document.querySelector("#verificar");

botaoVerificar.onclick = function() {
    console.log("whow")

    if(homem1.value > homem2.value && mulher1.value<mulher2.value){
        console.log(Number.parseInt(homem1.value)+Number.parseInt(mulher1.value))
        console.log(Number.parseInt(homem2.value)*Number.parseInt(mulher2.value))
        let result1 = Number.parseInt(homem1.value)+Number.parseInt(mulher1.value)
        let result2 = Number.parseInt(homem2.value)*Number.parseInt(mulher2.value)
        document.querySelector("#res").innerHTML = `${result1} ; ${result2}`    
    }
    else if(homem1.value > homem2.value && mulher1.value>mulher2.value){
        console.log(Number.parseInt(homem1.value)+Number.parseInt(mulher2.value))
        console.log(Number.parseInt(homem2.value)*Number.parseInt(mulher1.value))
        let result1 =Number.parseInt(homem1.value)+Number.parseInt(mulher2.value)
        let result2 =Number.parseInt(homem2.value)*Number.parseInt(mulher1.value)
        document.querySelector("#res").innerHTML = `${result1} ; ${result2}`    
    
    }
    else if(homem1.value < homem2.value && mulher1.value>mulher2.value){
        console.log(Number.parseInt(homem2.value)+Number.parseInt(mulher2.value))
        console.log(Number.parseInt(homem1.value)*Number.parseInt(mulher1.value))
        let result1=Number.parseInt(homem2.value)+Number.parseInt(mulher2.value)
        let result2=Number.parseInt(homem1.value)*Number.parseInt(mulher1.value)
        document.querySelector("#res").innerHTML = `${result1} ; ${result2}`    
    }
    else{
        console.log(Number.parseInt(homem2.value)+Number.parseInt(mulher1.value))
        console.log(Number.parseInt(homem1.value)*Number.parseInt(mulher2.value))
        let result1 = Number.parseInt(homem2.value)+Number.parseInt(mulher1.value)
        let result2 = Number.parseInt(homem1.value)*Number.parseInt(mulher2.value)
        document.querySelector("#res").innerHTML = `${result1} ; ${result2}`    
    }
    
}



