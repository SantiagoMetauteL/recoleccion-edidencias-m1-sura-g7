let votosA = 0;
let votosB = 0;
let votosBlanco = 0;

let codigosUsados = [];

function menu() {
  let opcion;

  do {
    opcion = Number(prompt(
      "=== SISTEMA DE VOTACIÓN 'DemoVoto' ===\n" +
      "1. Votar por Candidato A\n" +
      "2. Votar por Candidato B\n" +
      "3. Votar en Blanco\n" +
      "4. Consultar Resultados Parciales\n" +
      "5. Salir\n\n" +
      "Seleccione una opción:"
    ));

    switch (opcion) {
      case 1:
        votar("A");
        break;
      case 2:
        votar("B");
        break;
      case 3:
        votar("Blanco");
        break;
      case 4:
        mostrarResultados();
        break;
      case 5:
        alert("Programa finalizado. ¡Gracias por participar!");
        break;
      default:
        alert("Opción no válida, intenta de nuevo.");
    }

  } while (opcion !== 5);
}

function votar(candidato) {
  let codigo = prompt("Ingrese su código de estudiante:");

  if (codigosUsados.includes(codigo)) {
    alert("Este estudiante ya registró su voto. Voto rechazado.");
    return;
  }

  codigosUsados.push(codigo);

  if (candidato === "A") votosA++;
  else if (candidato === "B") votosB++;
  else votosBlanco++;

  alert("Voto registrado correctamente para: " + candidato);
}

function mostrarResultados() {
  var mensaje = "=== RESULTADOS PARCIALES ===\n";
  mensaje += "Candidato A: " + votosA + " votos\n";
  mensaje += "Candidato B: " + votosB + " votos\n";
  mensaje += "Voto en Blanco: " + votosBlanco + " votos\n";

  if (votosA > votosB) {
    mensaje += "El Candidato A va ganando.";
  } else if (votosB > votosA) {
    mensaje += "El Candidato B va ganando.";
  } else {
    mensaje += "Hay un empate.";
  }

  alert(mensaje);
}

menu();
