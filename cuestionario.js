var nombre = prompt("Esta es la Trivia de la primavera. Escribe tu nombre:");
var p1 = prompt("¿Cómo se llama al primer día de la Primavera?\nA: Primer Día de la Primavera\nB: Equinoccio de Primavera\nC: Equinoccio de Invierno");
var c = 0
var i = 0

if(p1 == "B"){
    i = i + 1
}else if(p1 == "A"){
    i = i + 1
}else if(p1 == "C"){
    i = i + 1
}else{
    alert("No es una opción válida")
}
var p2 = prompt("¿Qué sucede en el Polo Norte cuando llega la Primavera?\nA: 6 meses de luz diurna ininterrumpida\nB: 6 meses de luz diurna ininterrumpida\nC: 6 meses de alternancia de luz y oscuridad");
if(p2 == "A"){
    c = c + 1
}else if(p2 == "B"){
    i = i + 1
}else if(p2 == "C"){
    i = i + 1
}else{
    alert("No es una opción válida")
}
var p3 = prompt("¿En qué mes empieza la Primavera en el Hemisferio Norte?\nA: Setiembre\nB: Junio\nC: Marzo");
if(p3 == "C"){
    c = c + 1
}else if(p3 == "A"){
    i = i + 1
}else if(p3 == "B"){
    i = i + 1
}else{
    alert("No es una opción válida")
}
var p4 = prompt("¿Qué es la Fiesta de la Primavera en China?\nA: La Navidad\nB: El Año Nuevo\nC. Fiestas Patrias de China");
if(p1 == "B"){
    c = c + 1
}else if(p4 == "A"){
    i = i + 1
}else if(p4 == "C"){
    i = i + 1
}else{
    alert("No es una opción válida")
}
if(c > i){
    document.write(nombre + ", has completado exitosamente el test<br>")
    document.write("Correctas: "+c)
    document.write(" Incorrectas: "+i)
}else if(c < i){
    document.write(nombre + ", has presentado problemas el test<br>")
    document.write("Correctas: "+c)
    document.write(" Incorrectas: "+i)
}else{
    document.write(nombre + ", usted ha comletado el test a medias<br>")
    document.write("Correctas: "+c)
    document.write(" Incorrectas: "+i)
}