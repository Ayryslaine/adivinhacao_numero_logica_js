//1. Pergunte ao usuário qual é o dia da semana. 
// Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". 
// Caso contrário, mostre "Boa semana!".

let diaDaSemana = prompt("Qual o dia da semana? Ex: Quarta-feira");
console.log(diaDaSemana);

if (diaDaSemana == "Sábado" || diaDaSemana == "Domingo") {
    alert("Bom fim de semana!");
    console.log('Resultado da comparação:', diaDaSemana == "Sábado" || diaDaSemana == "Domingo");
} else {alert("Boa semana!");}

//2. Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando.

let numeroUsuario = prompt("Digite um número: ");
console.log(numeroUsuario);

if (numeroUsuario > 0) {
    alert(`O número que você digitou foi ${numeroUsuario} e ele é positivo`);
} else {
    alert(`O número que você digitou foi ${numeroUsuario} e ele é negativo`);
}

//3. Crie um sistema de pontuação para um jogo. 
// Se a pontuação for maior ou igual a 100, mostre "Parabéns, você venceu!". 
// Caso contrário, mostre "Tente novamente para ganhar.".

let pontuacao = prompt("Qual foi sua pontuação no jogo?");

if (pontuacao >= 100) {
    alert("Parabéns, você venceu!");
} else {
    alert("Tente novamente para ganhar.");
}

//4. Crie uma mensagem que informa o usuário sobre o saldo da conta, 
// usando uma template string para incluir o valor do saldo.

let saldoConta = 1000;
alert(`O saldo da sua conta é ${saldoConta}`);

//5. Peça ao usuário para inserir seu nome usando prompt. 
// Em seguida, mostre um alerta de boas-vindas usando esse nome.

let nomeUsuario = prompt("Insira seu nome: ");
alert(`Boas-vindas ${nomeUsuario}`);