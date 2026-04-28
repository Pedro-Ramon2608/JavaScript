var nome = prompt("Digite seu nome: ")

document.getElementById("mensagem1").innerText = `Olá, ${nome}. Seu nome tem ${nome.length} letras` // mostra na tela a quantidade de caracteres do nome

document.getElementById("mensagem2").innerText = `Seu nome em Maiúsculas fica ${nome.toUpperCase()}` // transforma para maiúsculo

document.getElementById("mensagem3").innerText = `Seu nome em minúsculas ${nome.toLowerCase()}` // transforma para minúsculo