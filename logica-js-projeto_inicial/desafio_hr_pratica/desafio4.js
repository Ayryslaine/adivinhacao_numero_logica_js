//1. Crie um programa que utilize o console.log para exibir uma mensagem de boas-vindas.

let mensagem = "Boas-vindas ao console!";
console.log(mensagem);

//2. Crie uma variável chamada "nome" e atribua a ela o seu nome. 
// Em seguida, utilize o console.log para exibir a mensagem "Olá, [seu nome]!" no console do navegador.

let nome = "Ayryslaine Kelle";
console.log(`Olá, ${nome}!`);

//3. Crie uma variável chamada "nome" e atribua a ela o seu nome. 
// Em seguida, utilize o alert para exibir a mensagem "Olá, [seu nome]!" .

let nome_2 = "Ayryslaine Kelle";
alert(`Olá, ${nome_2}!`);

//4.Utilize o prompt e faça a seguinte pergunta: 
// Qual a linguagem de programação que você mais gosta?. 
// Em seguida, armazene a resposta em uma variável e mostre no console do navegador.

let pergunta = prompt("Qual a linguagem de programação que você mais gosta?");
console.log(`A linguagem que você mais gosta é ${pergunta}`);

//5. Crie uma variável chamada "valor1" e outra chamada "valor2", 
// atribuindo a elas valores numéricos de sua escolha. 
// Em seguida, realize a soma desses dois valores 
// e armazene o resultado em uma terceira variável chamada "resultado". 
// Utilize o console.log para mostrar a mensagem "A soma de [valor1] e [valor2] é igual a [resultado]." no console.

let valor1 = 5;
let valor2 = 25;
let resultado = valor1 + valor2;
console.log(`A soma de ${valor1} e ${valor2} é igual a ${resultado}`);

//6. Crie uma variável chamada "valor1" e outra chamada "valor2", 
// atribuindo a elas valores numéricos de sua escolha. 
// Em seguida, realize a subtração desses dois valores e armazene o resultado em uma terceira variável 
// chamada "resultado". Utilize o console.log para mostrar a mensagem 
// "A diferença entre [valor1] e [valor2] é igual a [resultado]." no console.

let valor_1 = 5;
let valor_2 = 25;
let resultado_1 = valor_1 - valor_2;
console.log(`A diferença entre ${valor_1} e ${valor_2} é igual a ${resultado_1}`);

//7. Peça ao usuário para inserir sua idade com prompt. 
// Com base na idade inserida, utilize um if para verificar se a pessoa é maior ou menor de idade, 
// exibindo uma mensagem apropriada no console.

let idade = prompt("Digite sua idade");
let idadeUsuario = idade >= 18 ? "Você é maior de idade" : "Você é menor de idade";
console.log(idadeUsuario);

//8. Crie uma variável "numero" e peça um valor com prompt verifique se é positivo, negativo ou zero. 
// Use if-else para imprimir a respectiva mensagem.

let numeroUsuario =  Number(prompt("Digite um número"));

if (numeroUsuario > 0) {
    alert(`O número ${numeroUsuario} é positivo`);
} else if (numeroUsuario == 0) {
    alert(`O número ${numeroUsuario} é zero`);
} else {
    alert(`O número ${numeroUsuario} é negativo`);
}

//9. Use um loop while para imprimir os números de 1 a 10 no console.

let contador_log = 1;

while (contador_log <= 10) {
    console.log(contador_log);
    contador_log++;
}

//10. Crie uma variável "nota" e atribua um valor numérico a ela. 
// Use if-else para determinar se a nota é maior ou igual a 7 e exiba "Aprovado" ou "Reprovado" no console.

let nota = 8.5;
let notaUsuario = nota >= 7 ? "Aprovado" : "Reprovado";
console.log(notaUsuario);

//11. Use o Math.random para gerar qualquer número aleatório e exiba esse número no console.

let numeroAleatorio = Math.floor(Math.random() * 10);
console.log(numeroAleatorio);

//12. Use o Math.random para gerar um número inteiro entre 1 e 10 e exiba esse número no console.

let numeroAleatorio_2 = Math.floor(Math.random() * 10) + 1;
console.log(numeroAleatorio_2);

//13. Use o Math.random para gerar um número inteiro entre 1 e 1000 e exiba esse número no console.

let numeroAleatorio_3 = Math.floor(Math.random() * 1000) + 1;
console.log(numeroAleatorio_3);
