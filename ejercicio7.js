// Solicitar al usuario un número entero
var numero = parseInt(prompt("Por favor, ingresa un número entero:"));

// Verificar si el número es un entero válido
if (!isNaN(numero)) {
    // Comprobar si el número es par o impar
    if (numero % 2 === 0) {
        alert(`El número ${numero} es PAR.`);
    } else {
        alert(`El número ${numero} es IMPAR.`);
    }
} else {
    alert("No ingresaste un número entero válido.");
}
