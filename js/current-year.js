/*
* Template Name: BreezyCV - Resume / CV / vCard / Portfolio Template
* Author: LMPixels
* Author URL: http://themeforest.net/user/lmpixels
* Version: 1.3.0
*/

// Función para obtener el año actual
function getCurrentYear() {
    return new Date().getFullYear();
  }
  
  // Actualiza el año en la página
  function updateYear() {
    const currentYearElement = document.getElementById('currentYear');
    if (currentYearElement) {
      currentYearElement.textContent = getCurrentYear();
    }
  }
  
  // Llama a la función para actualizar el año cuando la página se cargue
  window.addEventListener('DOMContentLoaded', function () {
    updateYear();
  });
  