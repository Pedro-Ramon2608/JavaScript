const numero = document.getElementById("numero");
const btn = document.getElementById("btn");

btn.addEventListener("click", tabuada);

function tabuada() {
    const tab = document.getElementById("restab");
    const num = Number(numero.value);

    if (numero.value.length == 0) {
        alert("É necessário preencher o campo.");
    } else {
        tab.innerHTML = " "; // Limpa o Select

        for (let c = 1; c <= 10; c++) {
            const item = document.createElement("option");
            item.text = `${num} x ${c} = ${num*c}`;
            tab.appendChild(item);
        }
    }
}