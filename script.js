var almendras = prompt("Cuantas almendras come por semana?");
var verduras = prompt("Cuantas verduras come por semana?");
var frutas = prompt("Cuantas almendras come por semana?");

if ((Number(almendras) > 5) && (Number(verduras) > 5) && (Number(frutas) > 5)){
    alert ("Sos muy saludable");
}
else if ((Number(almendras) >= 5) || (Number(verduras) >= 5) || (Number(frutas) >= 5)){
    alert ("Sos bastante saludable");
}
else ((Number(almendras) < 5) && (Number(verduras) < 5) && (Number(frutas) < 5));{
    alert ("Largá el delivery");
}