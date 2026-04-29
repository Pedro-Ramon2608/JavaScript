let pessoa = { // {} cria o objeto
    nome: "José",
    sexo: "M",
    peso: 77.4, 
    engordar(p) { // é possível criar uma function dentro do objeto 
        console.log(`${this.nome} engordou ${p}Kg`); 
        this.peso += p;
    }
};

console.log(`${pessoa.nome} pesa ${pessoa.peso.toFixed(2)}Kg`);

pessoa.engordar(3.2);
console.log(`${pessoa.nome} pesa ${pessoa.peso.toFixed(2)}Kg`);
