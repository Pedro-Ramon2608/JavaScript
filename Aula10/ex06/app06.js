const area = document.getElementById("areajs")

area.addEventListener("click", clicar);
area.addEventListener("mouseenter", entrar);
area.addEventListener("mouseout", sair);

function clicar() {
    area.innerText = "Clicou!";
    area.classList.toggle("vermelho");
}

function entrar() {
    area.innerText = "Entrou!";
}

function sair() {
    area.innerText = "Saiu!";
    area.classList.remove("vermelho");
}
