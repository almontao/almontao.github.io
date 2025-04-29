/*
* Template Name: BreezyCV - Resume / CV / vCard / Portfolio Template
* Author: LMPixels
* Author URL: http://themeforest.net/user/lmpixels
* Version: 1.3.0
*/

// Función que devuelve el año actual
function getCurrentYear() {
  return new Date().getFullYear();
}

// Inserta el año en el elemento con id="currentYear"
function updateYear() {
  const currentYearElement = document.getElementById('currentYear');
  if (currentYearElement) {
    currentYearElement.textContent = getCurrentYear();
  }
}

// Cuando el DOM esté listo, ejecuta updateYear()
document.addEventListener('DOMContentLoaded', updateYear);
  
  // // Llama a la función para actualizar el año cuando la página se cargue
  // window.addEventListener('DOMContentLoaded', function () {
  //   updateYear();
  // });
