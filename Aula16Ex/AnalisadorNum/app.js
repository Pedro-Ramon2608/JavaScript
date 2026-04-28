const btnad = document.getElementById("btnad");
const btnfim = document.getElementById("btnfim");
let numero = document.getElementById("numero");
let lista = document.getElementById("lista");
const result = document.getElementById("result");
let listanum = [];

btnad.addEventListener("click", adicionar);
btnfim.addEventListener("click", finalizar);

function inLista(n, l) {
    return l.includes(n);
}

function adicionar() {
    const num = Number(numero.value);
    result.innerHTML = "";

    if (numero.value.length == 0) {
        alert("[ERRO] É necessário preencher o campo");
    } else if (num < 1 || num > 100) {
        alert("Digite um valor entre 1 e 100!");
    } else if (inLista(num, listanum)) {
        alert("O número digitado ja está na lista.");
    } else {
        listanum.push(num);

        let item = document.createElement("option");
        item.text = `Valor ${num} adicionado.`;
        lista.appendChild(item);
    }
    numero.value = "";
    numero.focus();
}

function finalizar() {
    if (listanum.length == 0) {
        alert("Adicione valores para que seja possível finalizar.")
    } else {
        let maior = listanum[0];
        let menor = listanum[0];
        let soma = 0;
        
        for (index in listanum) {
            if (listanum[index] > maior) {
                maior = listanum[index];
            }
        }
        
        for (index in listanum) {
            if (listanum[index] < menor) {
                menor = listanum[index];
            }
        }
        
        for (index in listanum) {
            soma += listanum[index];
        }
        let media = soma / listanum.length
        
        result.innerHTML = `<p>Ao todo, temos ${listanum.length} números cadastrados.</p>`;
        result.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`;
        result.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`;
        result.innerHTML += `<p>A soma de todos os valores digitados é ${soma}</p>`;
        result.innerHTML += `<p>A média dos valores é ${media.toFixed(2)}</p>`;
    }
}