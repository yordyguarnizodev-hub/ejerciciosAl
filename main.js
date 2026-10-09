let employeeList = [];

const isNull = (value) => {
  if (value === null) {
    alert("Operación cancelada.");
    return true;
  }
  return false;
};

const createEmployeeRow = (employee) => {
  return `
          <tr>
            <td class="table-item">${employee.name}</td>
            <td class="table-item">${employee.jobTittle}</td>
            <td class="table-item">${employee.city}</td>
            <td class="table-item">${employee.age}</td>
            <td class="table-item">${employee.workedDays}</td>
            <td class="table-item">${employee.baseSalary}</td>
            <td class="table-item">${employee.devSalary}</td>
          </tr>
    `;
};

function renderCart(list, output) {
  const DomOutput = document.querySelector(output);
  if (!DomOutput) return;

  DomOutput.innerHTML = list.map((emp) => createEmployeeRow(emp)).join("");
}

function addEmployee() {
  const name = prompt("Introduzca el nombre del empleado");
  if (isNull(name)) return;

  const jobTittle = prompt("Introduzca el cargo del empleado");
  if (isNull(jobTittle)) return;

  const city = prompt("Introduzca la ciudad del empleado");
  if (isNull(city)) return;

  const age = prompt("Introduzca la edad del empleado");
  if (isNull(age)) return;

  const workedDays = prompt(
    "Introduzca el numero de dias que trabajo el empleado",
  );
  if (isNull(workedDays)) return;

  const baseSalary = prompt("Introduzca el salario base del empleado");
  if (isNull(baseSalary)) return;

  if (
    isNaN(baseSalary) ||
    isNaN(workedDays) ||
    baseSalary.trim() === "" ||
    workedDays.trim() === ""
  ) {
    alert(
      "El salario base y los dias trabajados deben estar en numeros validos",
    );
    return;
  }

  const devSalary = (Number(baseSalary) / 30) * Number(workedDays);

  alert(`
    Resumen del empleado
    ---------------------------------
    Nombre: ${name}
    Cargo: ${jobTittle}
    Ciudad: ${city}
    Edad: ${age}
    Dias trabajados: ${workedDays}
    Salario base: ${baseSalary}
    Salario devengado: ${devSalary.toFixed(2)}
    --------------------------------
    `);

  const information = {
    name,
    jobTittle,
    city,
    age,
    workedDays,
    baseSalary,
    devSalary: devSalary.toFixed(2),
  };

  employeeList = [...employeeList, information];
  //console.log(employeeList);

  //renderCart
  const tableHeader = document.querySelector(".table-header");
  tableHeader.style.visibility = "visible";
  renderCart(employeeList, ".table-body");
}

function deleteEmployees() {
  if (employeeList.length === 0) {
    alert("No hay usuarios para eliminar");
    return;
  }

  const confirmDelete = confirm(
    "Estas seguro que deseas eliminar los usuarios?",
  );
  if (!confirmDelete) return;

  employeeList = [];
  renderCart(employeeList, ".table-body");
}
