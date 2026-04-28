let num = [5, 3, 8, 2, 10]; // Cria um vetor/array

console.log(num);

console.log(`O primeiro valor do vetor é: ${num[0]}`);

console.log(`${num.length}`); // Olha o tamanho do array

num.push(7); // Adiciona um valor ao array no final
num.push(1);

num.sort((a, b) => a - b); // Organiza o array em forma crescente

console.log(num);