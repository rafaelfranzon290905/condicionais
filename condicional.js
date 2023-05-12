let numero = Number(prompt("Digite um número"))
let outronumero = Number(prompt("Digite um número"))

if (numero > outronumero) {
    console.log(`${numero} é maior que ${outronumero}`)
}
else if (numero === outronumero){
    console.log(`Os números são iguais`)
}
else {
    console.log(`${outronumero} é maior que ${numero}`)
}


if (numero % 2 === 0){
    console.log("O número é par")
}
else {
    console.log("O número é ímpar")
}

let paisOrigem

switch(paisOrigem){
    case "Brasil":
        console.log("brasileiro")
        break
    case "EUA":
        console.log("americano");
        break
    case "Itália":
        console.log("italiano");
    default:
        console.log("Não foi possível achar nenhuma nacionalidade")
        break
}   

let pokeChoice = prompt("Escolha um pokémon inicial")

switch(pokeChoice.toLowerCase()) {
    case "bulbasauro":
        console.log("Planta e Veneno")
        break
    case "charmander":
        console.log("Fogo")
        break
    case "squirtle":
        console.log("Água")
        break
    case "pikachu":
        console.log("Elétrico")
        break
    default: 
        console.log("Pokémon não encontrado")
}

let ensino = prompt("já concluiu ensino médio? responda s ou n")
let idade = Number(prompt("Qual sua idade?"))
let faculdade = prompt("está cursando uma faculdade? Responda s ou n")

function estudar (ensino, idade, faculdade){
    if (ensino === "s" && idade >= 18 && faculdade === "n"){
        console.log("Pode cursar a faculdade")
    }
    else {
        if (ensino !== "s") {
            console.log("Não pode cursar a faculdade pois não completou o ensimo médio.")
        }
        if (idade < 18) {
            console.log("Não pode cursar a faculdade pois é menor de 18")
        }
        if (faculdade !== "n"){
            console.log("Não pode cursar a faculdade pois está em outra faculdade no momento")
        }
        
    }
}

estudar(ensino, idade, faculdade)