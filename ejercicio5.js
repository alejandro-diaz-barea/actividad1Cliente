var valores = [true, 5, false, "hola", "adios",2]
// Lista strings
let = listaStrings = []
for (i = 0; i< valores.length; i++) {
    if (typeof valores[i] === "string")
    listaStrings.push(valores[i])
}
let stringMasGrande = ""
for ( i = 0; i< listaStrings.length; i++) {
    if (listaStrings[i].length> stringMasGrande.length){
        stringMasGrande = listaStrings[i]
    }
}

console.log(stringMasGrande)
//lista booleanos
let = listaBoolean = []
for (i = 0; i< valores.length; i++) {
    if (typeof valores[i] === "boolean")
    listaBoolean.push(valores[i])
}

for (i=0; i<listaBoolean.length; i++){
    if(listaBoolean[i]===true){
        console.log(`El numero ${i} de la lista de los booleanos es ${listaBoolean[i]}`)
    }
    else{
        console.log(`El numero ${i} de la lista de los booleanos es ${listaBoolean[i]}`)
    }
}
// lista integers
let = listaInteger = []
for (i = 0; i< valores.length; i++) {
    if (typeof valores[i] === "number" && Number.isInteger(valores[i]))
    listaInteger.push(valores[i])
}
// Suma
console.log("Suma:", listaInteger[0] + listaInteger[1]); 

// Resta
console.log("Resta:", listaInteger[0] - listaInteger[1]);

// Multiplicación
console.log("Multiplicación:", listaInteger[0] * listaInteger[1]); 
// División
console.log("División:", listaInteger[0] / listaInteger[1]); 

// Módulo
console.log("Módulo:", listaInteger[0] % listaInteger[1]); 
