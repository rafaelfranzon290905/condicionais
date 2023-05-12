// const respostaDoUsuario = prompt("Digite o número que você quer testar")
// const numero = Number(respostaDoUsuario)

// if (numero % 2 === 0) {
//   console.log("Passou no teste.")
// } else {
//   console.log("Não passou no teste.")
// }

// a) Explique o que o código faz. Qual o teste que ele realiza? 

// Ele recebe um número do usuário, transforma-o em Number e depois testa se ele é par (dividido por 2 com resto 0). Caso seja par ele é aceito, caso não, ele não passa no teste

// b) Para que tipos de números ele imprime no console "Passou no teste"? 

// Ele imprime passou no teste para todos os números pares

// c) Para que tipos de números a mensagem é "Não passou no teste"?

// Ele imprime não passou no teste para números ímpares.

let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
    break; // BREAK PARA O ITEM c.
  default:
    preco = 5
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

// a) Para que serve o código acima?

// O código acima serve para mostrar o preço de uma fruta pedida pelo usuario

// b) Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`?

// A mensagem impressa no console será "O preço da fruta maçã é R$ 2.25)

// c) Considere que um usuário queira comprar uma `Pêra`, qual seria a mensagem impressa no console se retirássemos o `break` que está logo acima do `default` (o `break` indicado pelo comentário "BREAK PARA O ITEM c.")?

// A mensagem escrita no console seria "O preço da fruta pêra é R$ 5" Isso se dá pois, em switch cases, todas as alternativas seguintes ocorrem, incluindo a default e, por isso, a variável preço se altera para 5.

const numero = Number(prompt("Digite o primeiro número."))

if(numero > 0) {
  console.log("Esse número passou no teste")
	let mensagem = "Essa mensagem é secreta!!!"
}

// console.log(mensagem)

// a) O que a primeira linha está fazendo?

// A primeira linha de código está recebendo um número do usuário

// b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?

// No caso do número 10 ele vai imprimir Esse número passou no teste. No caso de -10 ele não vai imprimir nada pois a condição do if não foi alcançada (if = false)

// c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.

// Sim, haverá um erro devido a variável mensagem estar dentro do if, e variáveis declaradas dentro de funções ou condicionais são variáveis locais e não podem ser lidas fora desse mesmo bloco igual as variáveis globais. Haverá um erro de referência

// 1. Faça um programa que pergunta ao usuário qual a idade dele e imprima no console se ele/ela pode dirigir (apenas maiores de idade).

//     a) Faça um `prompt` para receber a idade do usuário e guarde em uma variável.
    
let idade = Number(prompt("Qual a idade do motorista?"))

//     b) Garanta que essa variável é do tipo `Number`, você deve usar o cast para number para isso.
    
idade = Number(idade)

//     c) Agora veja se essa idade do usuário corresponde à idade mínima que permite dirigir. Se sim, imprima no console `"Você pode dirigir"`, caso contrário, imprima `"Você não pode dirigir."`

if (idade >= 18){
    console.log("Você pode dirigir")
}
else {
    console.log("Você não pode dirigir.")
}

// Agora faça um programa que verifica que turno do dia um aluno estuda. Peça para digitar M (matutino) ou V (Vespertino) ou N (Noturno). Imprima no console a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!". Utilize o bloco if/else

let hora = prompt("Digite seu turno").toLowerCase()
if (hora == "m") {
    console.log("Bom dia")
}
else if (hora == "v"){
    console.log("Boa tarde")
}
else if (hora == "n"){
    console.log("Boa noite")
}
else {
    console.log("Eita porra")
}

// Repita o exercício anterior, mas utilizando a estrutura de switch case agora.

switch (hora){
    case "m":
        console.log("Bom dia")
        break;
    case "v":
        console.log("Boa tarde")
        break;
    case "n":
        console.log("Boa noite")
        break;
    default:
        console.log("Ué porra tu n digitou certo") 
        break; 
}

// Considere a situação: você vai ao cinema com um amigo ou amiga, porém ele/ela só assistirá a um filme com você se ele for do gênero fantasia e se o ingresso está abaixo de 15 reais. Faça um código que pergunta ao usuário qual o gênero de filme que vão assistir e outra pergunta sobre o preço do ingresso, então verifique se seu amigo ou amiga vai topar assistir o filme. Caso positivo, imprima no console a mensagem: "Bom filme!", caso contrário, imprima "Escolha outro filme :("

let genero = prompt("Qual genero de filme vão assistir?")
let precoFilme = Number(prompt("Qual o preço do filme vão assistir?"))

if (genero == "fantasia" && precoFilme < 15){
    console.log("Bom filme!")
}
else{
    console.log("Escolha outro filme :(")
}