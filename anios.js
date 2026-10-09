function calcularEdad() {
  const nombre = prompt("Calculadora de Edad\nIngrese su nombre:");
  if (nombre === null || nombre.trim() === "") {
    return alert("Operación cancelada o nombre no ingresado.");
  }

  const inputAnio = prompt(
    `Hola ${nombre}, ingrese su año de nacimiento (ej. 1998):`,
  );
  if (inputAnio === null) return alert("Operación cancelada.");

  const anioNacimiento = parseInt(inputAnio, 10);
  const anioActual = new Date().getFullYear();

  if (
    isNaN(anioNacimiento) ||
    anioNacimiento > anioActual ||
    anioNacimiento < 1900
  ) {
    return alert("Error: Ingrese un año de nacimiento válido.");
  }

  const edadAproximada = anioActual - anioNacimiento;

  alert(
    `¡Hola ${nombre}!\n` +
      `Año actual: ${anioActual}\n` +
      `Tu edad aproximada es: ${edadAproximada} años.`,
  );
}
