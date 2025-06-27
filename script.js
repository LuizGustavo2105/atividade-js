function gerarCampos() {
  const quantidade = parseInt(document.getElementById('quantidade').value);
  const container = document.getElementById('inputs-container');
  const calcularBtn = document.getElementById('calcularBtn');

  container.innerHTML = ''; // limpa campos anteriores

  if (!quantidade || quantidade <= 0) {
    alert('Digite um número válido!');
    return;
  }

  for (let i = 1; i <= quantidade; i++) {
    const input = document.createElement('input');
    input.type = 'number';
    input.placeholder = `Número ${i}`;
    input.className = 'numero';
    container.appendChild(input);
  }

  calcularBtn.style.display = 'block';
}

function calcularMedia() {
  const inputs = document.querySelectorAll('.numero');
  let soma = 0;

  for (const input of inputs) {
    const valor = parseFloat(input.value);
    if (isNaN(valor)) {
      alert('Preencha todos os campos com números!');
      return;
    }
    soma += valor;
  }

  const media = soma / inputs.length;
  document.getElementById('resultado').textContent = `Média: ${media.toFixed(2)}`;
}
