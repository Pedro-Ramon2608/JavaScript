const agora = new Date();
const hora = agora.getHours();

const msg = document.getElementById("msg");
const imagem = document.getElementById("imagem");

msg.innerHTML = `Agora são ${hora} horas.`;


if (hora < 6) {
    imagem.innerHTML = '<img src="madrugada.png">';
    document.body.classList.toggle("madrugada");
} else if (hora < 12) {
    imagem.innerHTML = '<img src="manha.png">';
    document.body.classList.toggle("manha");
} else if (hora < 18) {
    imagem.innerHTML = '<img src="tarde.png">';
    document.body.classList.toggle("tarde");
} else if (hora < 24) {
    imagem.innerHTML = '<img src="noite.png">';
    document.body.classList.toggle("noite");
}