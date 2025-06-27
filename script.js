let quantidade = parseInt(prompt("Quantos números você deseja digitar?"));


if (isNaN(quantidade) || quantidade <= 0) {
  alert("Por favor, digite um número válido maior que zero.");
} else {
  let soma = 0;

  for (let i = 1; i <= quantidade; i++) {
    let numero = parseFloat(prompt(`Digite o número ${i}:`));

    if (isNaN(numero)) {
      alert("Valor inválido. Será considerado 0.");
      numero = 0;
    }

    soma += numero;
  }

  let media = soma / quantidade;

  alert(`A média dos ${quantidade} números é: ${media}`);
  console.log(`A média dos ${quantidade} números é: ${media}`);
}
