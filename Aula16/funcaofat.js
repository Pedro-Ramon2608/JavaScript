/*
function fatorial(x) {
    let fat = 1;
    for (let c = x; c > 1; c--) {
        fat *= c;
    }
    return fat;
}
*/

// Função recursiva: 
function fatorial(n) {
    if (n == 1) {
        return 1;
    } else {
        return n * fatorial(n-1);
    }
}

console.log(fatorial(5));