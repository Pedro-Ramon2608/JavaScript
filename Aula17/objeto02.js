let pessoa = {
    nome: "Pedro",
    sexo: "M",
    peso: 60.8,
    falar() {
        console.log("Hello, World!");
    }
};

pessoa.idade = 18;

delete pessoa.sexo;

pessoa.falar();
console.log(pessoa);