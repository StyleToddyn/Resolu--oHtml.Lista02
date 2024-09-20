const verificar = document.querySelector("#verificar");
        verificar.onclick = function(){
        const valor  = document.querySelector("#valor");
            console.log(`Whow ${valor.value}`)
            if(valor.value < 0){
                console.log("Negativo")
            }
            else{
                console.log("Positivo")
            }
        }
        