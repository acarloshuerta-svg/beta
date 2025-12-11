document.getElementById("nivel").addEventListener("change", function () {
  const nivel = this.value;
  const gradoSelect = document.getElementById("grado");

  gradoSelect.innerHTML = "";
  let opciones = [];

  if (nivel === "inicial") {
    opciones = ["3 AÑOS", "4 AÑOS", "5 AÑOS"];
  } else if (nivel === "primaria") {
    opciones = ["1ro", "2do", "3ro", "4to", "5to", "6to"];
  } else if (nivel === "secundaria") {
    opciones = ["1ro", "2do", "3ro", "4to", "5to"];
  }

  opciones.forEach(grado => {
    const opcion = document.createElement("option");
    opcion.textContent = grado;
    opcion.value = grado;
    gradoSelect.appendChild(opcion);
  });
});