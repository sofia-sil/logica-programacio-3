document.addEventListener('DOMContentLoaded', function () {
    calcularFactorial();
  });
  
  function calcularFactorial() {
    let inputNumber;
    
    do {
      // Solicitar al usuario un número
      let input = prompt('Ingrese un número para calcular su factorial:');
      
      // Verificar si el dato de entrada es un número
      inputNumber = parseFloat(input);
      
      if (isNaN(inputNumber)) {
        alert('Por favor, ingrese un número válido.');
      }
    } while (isNaN(inputNumber));
  
    // Calcular el factorial
    let factorial = calcularFactorialRecursivo(inputNumber);
  
    // Mostrar el resultado en el DOM
    mostrarResultado(factorial);
  }
  
  function calcularFactorialRecursivo(numero) {
    if (numero === 0 || numero === 1) {
      return 1;
    } else {
      return numero * calcularFactorialRecursivo(numero - 1);
    }
  }
  
  function mostrarResultado(resultado) {
    // Crear un elemento <p> para mostrar el resultado
    let resultadoElement = document.createElement('p');
    resultadoElement.textContent = `El factorial es: ${resultado}`;
  
    // Agregar el elemento al cuerpo del documento
    document.body.appendChild(resultadoElement);
  }
  