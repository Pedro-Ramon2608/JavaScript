const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const soma = document.getElementById("soma");


soma.addEventListener("click", somar);

function somar() {
    const n1 = Number(num1.value);
    const n2 = Number(num2.value);

    const soma = n1 + n2;

    const result = document.getElementById("result");
    result.innerHTML = `A soma entre  ${n1}  +  ${n2}  =  ${soma.toFixed(2).replace(".", ",")}`;
}

const theme = document.getElementById("btn");
theme.addEventListener("click", tema);

function tema() {
    document.body.classList.toggle("dark-theme");
}