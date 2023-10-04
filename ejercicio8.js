// Función para verificar si una cadena es un palíndromo
function esPalindromo(cadena) {
    // Eliminamos espacios y convertimos a minúsculas para evitar problemas de capitalización
    cadena = cadena.toLowerCase().replace(/\s/g, '');
    
    // Invertimos la cadena
    var cadenaInvertida = cadena.split('').reverse().join('');
    
    // Comparamos la cadena original con la cadena invertida
    return cadena === cadenaInvertida;
}

// Cadena de texto a verificar
var texto = "La ruta nos aporto otro paso natural";

// Llamamos a la función esPalindromo y mostramos el resultado
if (esPalindromo(texto)) {
    alert(`"${texto}" es un palíndromo.`);
} else {
    alert(`"${texto}" no es un palíndromo.`);
}
