alert("Bem-vindo(a) ao jogo do número secreto");

let numeroMaximo = 1000;
let numeroSecreto = Math.floor(Math.random() * numeroMaximo) + 1;
console.log(numeroSecreto);
let numeroChute;
let tentativas = 0

while (numeroChute != numeroSecreto) {
    numeroChute = prompt(`Escolha um número de 1 a ${numeroMaximo}`);
    tentativas++; 
    console.log('Valor do chute:', numeroChute);

    //Comparando o numero chute do usuário com o número secreto pré-definido 
    if (numeroChute == numeroSecreto) {
        break;
    } else if (numeroChute > numeroSecreto) {
            alert(`O número secreto é menor que o ${numeroChute}`);
    } else {
            alert(`O número secreto é maior que o ${numeroChute}`);
        }
}

let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
alert(`Você acertou o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);

