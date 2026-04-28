const btn = document.getElementById("btn");

btn.addEventListener("click", verificar);

function verificar() {
    const data = new Date();
    const ano = data.getFullYear();

    const msgano = document.getElementById("ano");
    const nasc = Number(msgano.value);

    let result = document.querySelector("div#result");
    
    if (msgano.value.length == 0 || nasc > ano) {
        alert("[ERRO} Por favor, verifique seus dados e tente novamente.");
    } else {
        const sexo = document.getElementsByName("sexo");
        const idade = ano - nasc;
        let imagem = document.getElementById("foto");

        let genero = " ";
        if (sexo[0].checked) {
            genero = "Homem";

            if (idade >= 0 && idade <= 12) {
                // Criança
                imagem.setAttribute("src", "menino.png");
            } else if (idade <= 25) {
                // Jovem
                imagem.setAttribute("src", "jovem_h.png");
            } else if (idade < 60) {
                // Adulto 
                imagem.setAttribute("src", "homem.png");
            } else if (idade < 150) {
                // Idoso
                imagem.setAttribute("src", "idoso.png");
            }
        } else if (sexo[1].checked) {
            genero = "Mulher";

            if (idade >= 0 && idade <= 12) {
                // Criança
                imagem.setAttribute("src", "menina.png");
            } else if (idade <= 25) {
                // Jovem
                imagem.setAttribute("src", "jovem_m.png");
            } else if (idade < 60) {
                // Adulta
                imagem.setAttribute("src", "mulher.png"); 
            } else if (idade < 150) {
                // Idosa
                imagem.setAttribute("src", "idosa.png");
            }
        }

        result.innerHTML = `Foi detectado ${genero} de ${idade} anos.`;
        
        result.appendChild(imagem);
    }
}