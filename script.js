
document.getElementById("tituloH1").innerHTML = "Exercício de Javascript 1"

var nome = String(window.prompt("Digite seu nome: "))
document.getElementById("nome").innerHTML = `Olá ${nome}`

num1 = 10
num2 = 50
soma = num1 + num2
document.getElementById("soma").innerHTML = `A soma ${num1} + ${num2} é ${soma}`

var num3 = 3
var quadrado = num3 * num3
document.getElementById("quadrado").innerHTML = `O quadrado de ${num3} é ${quadrado}`

var num4 = 4
var dobro = num4 * 2
document.getElementById("dobro").innerHTML = `O dobro de ${num4} é ${dobro}`

var num5 = 5
var antes = num5 - 1
var depois = num5 + 1
document.getElementById("antesDepois").innerHTML = `Antes do número ${num5} vem o ${antes} e depois vem o ${depois}`

var totalDias = 30 * 7
document.getElementById("totalDias").innerHTML = `07 meses tem um total de ${totalDias} dias`

var nota1 = 10
var nota2 = 9
var nota3 = 8
var nota4 = 7
var nota5 = 6
var media = (nota1 + nota2 + nota3 + nota4 + nota5) / 5
document.getElementById("media").innerHTML = `A média das notas ${nota1}, ${nota2}, ${nota3}, ${nota4}, ${nota5} é ${media}`

var metros = 5
var converter = metros * 100
document.getElementById("converter").innerHTML = `${metros} metros tem ${converter} centímetros`

var valor = 250
var desconto = 10 / 100
var descontFinal = (valor * (1 + desconto)) - valor
var valorFinal = valor - descontFinal
document.getElementById("desconto").innerHTML = `Valor final com desconto de ${descontFinal} reais é de ${valorFinal} reais`