let start = document.querySelector("#valor1");
let end = document.querySelector("#valor2");
let botaoVerificar = document.querySelector("#verificar");
botaoVerificar.onclick = function() {


/*if(end < start){
    console.log(`${(24-Number.parseInt(start.value) + end.value)}`);
    let texto = `${(24-start.value) + end.value} horas jogadas; O jogo terminou no dia seguinte`
    document.querySelector("res").innerHTML = texto;
}else{
    console.log(`${end - start} horas jogadas; O jogo acabou no mesmo dia`);
    let texto = `${end - start} horas jogadas; O jogo acabou no mesmo dia`
    document.querySelector("#res").innerHTML= texto;

}*/
if((Number.parseInt(end.value)) < (Number.parseInt(start.value))) {
    console.log(`${24-(Number.parseInt(start.value))+(Number.parseInt(end.value))} horas jogadas; o jogo acabou no dia seguinte`);
    let texto = `${24-(Number.parseInt(start.value))+(Number.parseInt(end.value))} horas jogadas; o jogo acabou no dia seguinte`
    document.querySelector("#res").innerHTML = texto;
}else{
    console.log(`${(Number.parseInt(end.value)) - Number.parseInt(start.value)} horas jogadas; O jogo acabou no mesmo dia`);
    let texto = `${(Number.parseInt(end.value)) - Number.parseInt(start.value)} horas jogadas; O jogo acabou no mesmo dia`;
    document.querySelector("#res").innerHTML = texto;
}
}

