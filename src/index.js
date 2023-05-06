// Desafio 1

var digiteUmNumero = prompt("Digite um número:");
var dobroDoNumero = digiteUmNumero * 2;

alert(dobroDoNumero);

// Desafio 2

var valorDaConta = prompt("Digite o valor da conta:");
var taxaGarcon = 10
var valorConta = parseFloat(valorDaConta);
var totalConta = valorConta + (valorDaConta * (taxaGarcon / 100));

alert(totalConta);

// Desafio 3

var digiteValorConta = prompt("Digite o valor da conta:");
var quantidadeClientes = prompt("Digite a quantidade de clientes:");
var valorPorCliente = digiteValorConta / quantidadeClientes;

alert(valorPorCliente);
