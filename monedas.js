function conversorDivisas() {
  // Tasas referenciales fijas (puedes ajustar los valores según la TRM)
  const TASA_USD_COP = 3900; // 1 USD = 3.900 COP
  const TASA_EUR_COP = 4250; // 1 EUR = 4.250 COP

  const opcion = prompt(
    "Conversor de Divisas\nElija una opción:\n" +
      "1. Pesos (COP) a USD y EUR\n" +
      "2. Dólares (USD) a Pesos (COP)",
  );

  if (opcion === null) return alert("Operación cancelada.");

  if (opcion === "1") {
    const inputCOP = prompt("Ingrese el monto en Pesos Colombianos (COP):");
    if (inputCOP === null) return alert("Operación cancelada.");

    const cop = parseFloat(inputCOP);
    if (isNaN(cop) || cop < 0) return alert("Error: Ingrese un valor válido.");

    const aDolares = (cop / TASA_USD_COP).toFixed(2);
    const aEuros = (cop / TASA_EUR_COP).toFixed(2);

    alert(
      `$${cop.toLocaleString("es-CO")} COP equivale a:\n\n` +
        `• Dólares: $${aDolares} USD\n` +
        `• Euros: €${aEuros} EUR`,
    );
  } else if (opcion === "2") {
    const inputUSD = prompt("Ingrese el monto en Dólares (USD):");
    if (inputUSD === null) return alert("Operación cancelada.");

    const usd = parseFloat(inputUSD);
    if (isNaN(usd) || usd < 0) return alert("Error: Ingrese un valor válido.");

    const aPesos = (usd * TASA_USD_COP).toFixed(2);

    alert(
      `$${usd} USD equivale a:\n• $${Number(aPesos).toLocaleString("es-CO")} COP`,
    );
  } else {
    alert("Opción no válida. Ingrese 1 o 2.");
  }
}
