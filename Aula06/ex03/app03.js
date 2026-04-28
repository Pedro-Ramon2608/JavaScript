var num1 = Number(prompt("Digite um número: ")) // prompt retorna uma string
var num2 = Number(prompt("Digite outro número: ")) // transforma em Inteiro
// É possível usar parseInt para Inteiro e parseFloat para Real
// Usar o Number converte para número e o JS decide se é Int ou Float

var soma = num1 + num2 

// (Number + Number) faz a Soma +
// (String + String) concatena 

// alert("A soma de " + num1 + " + " + num2 + " = " + String(soma)) // concatenado 

alert(`A soma de ${num1} + ${num2} = ${soma}`) // usa template string