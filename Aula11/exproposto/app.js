const nacionalidade = document.getElementById("nacionalidade");
const verificador = document.getElementById("verificador");

verificador.addEventListener("click", verificar);

function verificar() {
    const pais = nacionalidade.value
    const result = document.getElementById("result");
    result.innerHTML = `<p>Vivendo em ${pais}</p>`;

    if (pais == "Brasil") {
        result.innerHTML += "<p>Você é Brasileiro</p>";
    } else {
        result.innerHTML += "<p>Você é Estrangeiro</p>";
    }
}