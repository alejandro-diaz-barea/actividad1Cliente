const diaHoy = new Date();
const hora = diaHoy.getHours();

if (hora >= 1 && hora <= 12) {
    alert("Buenos días");
} else if (hora > 12 && hora <= 18) {
    alert("Buenas tardes");
} else {
    alert("Buenas noches");
}