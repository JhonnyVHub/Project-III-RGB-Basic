function rgb() {
    let divColor = document.querySelector("#divColor");
    // Ao não colocar ".value" nos comandos abaixo, eles passam a servir como uma "chave estrangeira" estabelecendo um "link" entre o ele. e a var.
    let txt1 = document.querySelector("#txt1");
    let txt2 = document.querySelector("#txt2");
    let txt3 = document.querySelector("#txt3");
    // Os comandos abaixo está pegando os valores dado pelo Range
    let range1 = document.querySelector("#range1").value;
    let range2 = document.querySelector("#range2").value;
    let range3 = document.querySelector("#range3").value;

    // É necessário pegar os valores ao declarar a variavel e trocar (Se não da errado)
    // Está pegando os valores da var e alterando pelo do range (pode fazer o msm da linha de cima com o range)
    txt1.value = range1;
    txt2.value = range2;
    txt3.value = range3;

    // Espécie de macete para criar uma cor RGB
    let color = `rgb(${txt1.value},${txt2.value},${txt3.value})`; // RGB funciona em js assim: rgb(r,g,b) (valores em int, representando as cores)

    divColor.style.background = color;

    // start(); // Está formando um loop utilizando dos comandos da outra function;
}

// function start() {
//     // "addEventListener" torna possivel a seleção de um evento (condição) e uma consequencia para quando ele for iniciado
//     // Quando tiver alteração no range (Um valor estiver entrando) irá iniciar a consequencia
//     range1.addEventListener("input", rgb);
//     range2.addEventListener("input", rgb);
//     range3.addEventListener("input", rgb);
// }