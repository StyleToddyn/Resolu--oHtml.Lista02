const verificar = document.querySelector("#verificar");
        verificar.onclick = function(){
        const valor  = document.querySelector("#valor");
            console.log(`Whow ${valor.value}`)
            if(valor.value < 0){
                console.log("Negativo")
                let texto = "Negativo"
                document.querySelector("#res").innerHTML = texto
                
            }
            else{
                console.log("Positivo")
                let texto = "Positivo"
                document.querySelector("#res").innerHTML = texto
            }
        }
        
        