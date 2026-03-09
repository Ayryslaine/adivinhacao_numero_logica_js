//1. Crie um contador que comece em 1 e vá até 10 usando um loop while. Mostre cada número.

let contador = 0;

while (contador <= 10) {
    alert(`A sequência de números é ${contador}`);
    //console.log(contador); -> para mostrar a sequência no console
    contador++;
}

//2. Crie um contador que começa em 10 e vá até 0 usando um loop while. Mostre cada número.

let contador_2 = 10;

while (contador_2 > 0) {
    console.log(contador_2);
    contador--;
}

//3. Crie um programa de contagem regressiva. Peça um número e conte deste número até 0, 
//usando um loop while no console do navegador.

let numeroPedido = prompt("Digite um número");

while (numeroPedido >= 0) {
    console.log(numeroPedido);
    numeroPedido--;
}

//4. Crie um programa de contagem progressiva. Peça um número e conte de 0 até esse número, 
// usando um loop while no console do navegador.

let numeroContagem = prompt("Digite um número");
let contador_3 = 0

while (contador_3 <= numeroContagem) {
    console.log(contador_3);
    contador_3++;
}