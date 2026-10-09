function calculadora() {
  const input1 = prompt("Calculadora\nIngrese el primer número:");
  if (input1 === null) return alert("Operación cancelada.");

  const input2 = prompt("Calculadora\nIngrese el segundo número:");
  if (input2 === null) return alert("Operación cancelada.");

  const num1 = parseFloat(input1);
  const num2 = parseFloat(input2);

  if (isNaN(num1) || isNaN(num2)) {
    return alert("Error: Debe ingresar números válidos.");
  }

  const suma = num1 + num2;
  const resta = num1 - num2;
  const multiplicacion = num1 * num2;
  const division =
    num2 !== 0
      ? (num1 / num2).toFixed(2)
      : "Indefinida (no se puede dividir entre 0)";

  alert(
    `Resultados para ${num1} y ${num2}:\n\n` +
      `• Suma: ${suma}\n` +
      `• Resta: ${resta}\n` +
      `• Multiplicación: ${multiplicacion}\n` +
      `• División: ${division}`,
  );
}
