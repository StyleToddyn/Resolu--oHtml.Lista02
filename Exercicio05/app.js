const v1 = document.querySelector("#valor1");
const v2 = document.querySelector("#valor2");
const calcular = document.querySelector("#verificar");


calcular.onclick = function(){
    let media = ((Number.parseInt(v1.value)+Number.parseInt(v2.value))/2);
    console.log(`nota 1 : ${v1.value} e nota 2: ${v2.value}`);
    console.log("Media :" + media);
    if(media>=7){
        console.log('Aluno aprovado')
    }else{
        console.log("Aluno reprovado")
    }
    
   
}



