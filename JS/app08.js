const v1 = document.querySelector("#valor1").value;
const v2 = document.querySelector("#valor2").value;
const botaoVerificar = document.querySelector("#verificar");

botaoVerificar.onclick = function() {

    console.log((Number.parseInt(v1)<Number.parseInt(v2))? `${v1},${v2}` : ` ${v2},${v1}`);
    let texto = (Number.parseInt(v1)<Number.parseInt(v2))? `${v1},${v2}` : ` ${v2},${v1}`;
    document.querySelector("#res").innerHTML = texto;
}