const v1 = document.querySelector("#valor1");
const v2 = document.querySelector("#valor2");
const botaoVerificar = document.querySelector("#verificar");

botaoVerificar.onclick = function() {

    console.log((Number.parseInt(v1.value)<Number.parseInt(v2.value))? `${v1.value},${v2.value}` : ` ${v2.value},${v1.value}`);
    let texto = (Number.parseInt(v1.value)<Number.parseInt(v2.value))? `${v1.value},${v2.value}` : ` ${v2.value},${v1.value}`;
    document.querySelector("#res").innerHTML = texto;
}