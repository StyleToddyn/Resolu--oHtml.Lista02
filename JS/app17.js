let codigo = document.querySelector("#codigo")
let senha  = document.querySelector("#senha")
let botaoVerificar = document.querySelector("#verificar")

botaoVerificar.onclick = function (){
    if(codigo.value ==1234){
        console.log(`Código:${codigo.value}`)
         if(senha.value == 9999){
            console.log("Whow")
            let texto = "Tudo certo"
            document.querySelector("#res").innerHTML = texto
        }else{
            console.log("Senha inválida")
            let texto = "Senha inválida"
            document.querySelector("#res").innerHTML = texto
        }
    }else{
        console.log("Código inválida")
        let texto = "Código inválido"
        document.querySelector("#res").innerHTML = texto
    }
}