const agora = new Date();
const hora = agora.getHours();

const msg = document.getElementById("msg");
const imagem = document.getElementById("imagem");

msg.innerHTML = `Agora são ${hora} horas.`;

if (hora < 6) {

} else if (hora < 12) {

} else if (hora < 18) {

} else if (hora < 24) {
    imagem.innerHTML = '<img src="linguagem-python.png"';
} else {

}
