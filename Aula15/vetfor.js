let num = [1, 5, 23, 6, 2, 10, 9, 3];

num.sort((a, b) => a - b);

/*
for (let index = 0; index < num.length; index++) {
    console.log(num[index]);
}
*/

for (let index in num) {
    console.log(num[index]);
}

let pos = num.indexOf(5); // Passa o index que está o valor 5
console.log(`A posição do valor 5 é: ${pos}`);

let posicao = num.indexOf(7); // Como o valor 7 não existe, ele retorna -1 como index
console.log(`O número 7 está na posição: ${posicao}`);