// Estrutura condicional aninhada
const idade = 64;

console.log(`Você tem ${idade} anos.`);
/*
if (idade < 16) {
    console.log("Não vota.");
} else {
    if (idade < 18) {
        console.log("Voto Opcional.");
    } else {
        if (idade >= 65) {
            console.log("Voto Opcional.");
        } else {
            console.log("Voto Obrigatório.");
        }
    }
}
*/
 
// OU

if (idade < 16) {
    console.log("Não vota.");
} else if (idade < 18) {
    console.log("Voto Opcional.");
} else if (idade >= 65) {
    console.log("Voto Opcional.")
} else {
    console.log("Voto Obrigatório.");
}