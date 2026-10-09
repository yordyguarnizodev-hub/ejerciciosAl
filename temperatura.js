function convertirTemperatura() {
  const input = prompt(
    "Conversor de Temperatura\nIngrese los grados Celsius (°C):",
  );
  if (input === null) return alert("Operación cancelada.");

  const celsius = parseFloat(input);

  if (isNaN(celsius)) {
    return alert(
      "Error: Debe ingresar un valor numérico para los grados Celsius.",
    );
  }

  const fahrenheit = ((celsius * 9) / 5 + 32).toFixed(2);
  const kelvin = (celsius + 273.15).toFixed(2);

  alert(
    `Equivalencias para ${celsius}°C:\n\n` +
      `• Fahrenheit: ${fahrenheit} °F\n` +
      `• Kelvin: ${kelvin} K`,
  );
}
