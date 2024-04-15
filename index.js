console.log("Olá, seja bem vindo(a) ao DESAFIO CLASSIFICADOR DE NÍVEL DE HERÓI!!!")
let nomeHeroi = "Felipão da DIO"
let xpHeroi = 10500
let nivelHeroi = ""

if (xpHeroi > 0 && xpHeroi <= 1000){
    nivelHeroi = "Ferro"
} else if (xpHeroi > 1000 && xpHeroi <= 2000){
    nivelHeroi = "Bronze"
} else if (xpHeroi > 2000 && xpHeroi <= 5000){
    nivelHeroi = "Prata"
} else if (xpHeroi > 5000 && xpHeroi <= 7000){
    nivelHeroi = "Ouro"
} else if (xpHeroi > 7000 && xpHeroi <= 8000){
    nivelHeroi = "Platina"
} else if (xpHeroi > 8000 && xpHeroi <= 9000){
    nivelHeroi = "Ascendente"
} else if (xpHeroi > 9000 && xpHeroi <= 10000){
    nivelHeroi = "Imortal"
} else if (xpHeroi > 10000){
    nivelHeroi = "Radiante"
} else {
    console.log("Valor de XP inválido!")
}

console.log("O Herói de nome " + nomeHeroi + " possui " + xpHeroi + " XP e está no nível de experiência " + nivelHeroi + "!!!")


