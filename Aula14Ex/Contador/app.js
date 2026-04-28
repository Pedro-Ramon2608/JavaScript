const inicio = document.getElementById("inicio");
const fim = document.getElementById("fim");
const passo = document.getElementById("passo");
const btn = document.getElementById("btn");

btn.addEventListener("click", contar);

function contar() {
    const start = Number(inicio.value);
    const end = Number(fim.value);
    const pass = Number(passo.value);
    const result = document.getElementById("result");

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        alert("[ERRO] É necessário preencher todos os campos.");
    } else {
        result.innerHTML = "<p>Contando: </p>";

        if (pass <= 0){
            alert("[ERRO] Passo inválido, digite um número maior que 0!");
        }
        if (start < end) {
            // Crescente
            for (let c = start; c <= end; c += pass) {
                result.innerHTML += `${c} \u{1F449} `;
            }
        } else {
            // Decrescente
            for (let c = start; c >= end; c -= pass) {
                result.innerHTML += `${c} \u{1F449} `;
            }
        }
        result.innerHTML += "\u{1F3C1}";
    }
}
