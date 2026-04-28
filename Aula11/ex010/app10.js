const velocidade = document.getElementById("velocidade");
const calc = document.getElementById("verifica_velo");

calc.addEventListener("click", calcular);

function calcular() {
    const velo = Number(velocidade.value);
    const result = document.getElementById("result");
    result.innerHTML = `<p>A sua velocidade atual é de ${velo} Km/h</p>`
    if (velo > 60) {
        result.innerHTML += `<p>Sua velocidade é superior ao máximo permitido de 60 Km/h. Você está MULTADO!</p>`
    }
    result.innerHTML += "<p>Dirija sempre com o cinto de segurança.</p>"
}