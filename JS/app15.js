let x = document.querySelector("#x");
let y = document.querySelector("#y");
let botaoVerificar = document.querySelector("#verificar");

botaoVerificar.onclick = function () {
    console.log("Whow");
    let z =(Number.parseInt(x.value) * Number.parseInt(y.value)) + 5;
    console.log(z)
    if(z <=0){
        console.log("Resposta A");
        let texto = `${z}; Resposta A`
        document.querySelector("#res").innerHTML = texto;
    }else if(z<=100){
        console.log("Resposta B");
        let texto = `${z}; Resposta B`
        document.querySelector("#res").innerHTML = texto;
    }else{
        console.log("Resposta C");
        let texto = `${z}; Resposta C`
        document.querySelector("#res").innerHTML = texto;
    }
}
