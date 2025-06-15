function calcularIR() {
  const salario = parseFloat(document.getElementById('salario').value);
  const resultado = document.getElementById('resultado');

  if (isNaN(salario) || salario <= 0) {
    resultado.innerHTML = "Informe um salário válido.";
    return;
  }

  let aliquota = 0;
  let deducao = 0;

  if (salario <= 2112.00) {
    resultado.innerHTML = "Isento de IRPF.";
    return;
  } else if (salario <= 2826.65) {
    aliquota = 0.075;
    deducao = 158.40;
  } else if (salario <= 3751.05) {
    aliquota = 0.15;
    deducao = 370.40;
  } else if (salario <= 4664.68) {
    aliquota = 0.225;
    deducao = 651.73;
  } else {
    aliquota = 0.275;
    deducao = 884.96;
  }

  const imposto = (salario * aliquota) - deducao;

  resultado.innerHTML = `Imposto devido: <strong>R$ ${imposto.toFixed(2)}</strong>`;
}
