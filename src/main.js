function startCount() {
  // a los 3 segundos aparece la ventana modal
  setTimeout(showWindow, 5000);
}

// se seleccionan los elementos y se les asigna una variable:
let windowBackground = document.getElementById("windowBackground");
let audioAlert = document.getElementById("audioAlert");

/* una vez terminados los 5 segundos la alerta sonará y el contenido de la ventana
se mostrará. */
function showWindow() {
  audioAlert.volume = 0.3; // el volumen del audio estará en 30%
  audioAlert.play(); // el audio se reproduce
  windowBackground.style.display = "flex"; // los elementos se mostrarán según la disposición dada en el archivo de estilos
}

// seleccionamos estos elementos para cerrar la ventana
let closeBtn = document.getElementById("closeBtn");
let windowContainer = document.getElementById("windowContainer");

closeBtn.addEventListener("click", () => hideWindow()); // al hacer click sobre el botón cerra se ejecutará la función para ocultar la ventana

function hideWindow() {
  windowContainer.classList.add("close"); // agregamos la clase "close", la cual trasladará nuestra ventana hasta desaparecerla

  // la transición anterior se ejecuta 1 segundo después de haberse pulsado el botón cerrar, la animación será más suave
  setTimeout(() => {
    // primero se traslada y luego desaparece el contenedor
    windowContainer.classList.remove("close");
    windowBackground.style.display = "none";
  }, 1000); /* si las instrucciones no se ejecutan en este orden entonces el efecto de traslado no será suave. */
}
