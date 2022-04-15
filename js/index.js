// TURNERO
for (let turnos = 1; turnos <= 10; turnos++) {
    let ingreseNombre = prompt("Ingrese su Nombre y Apellido");
    alert(" Ingreso el Nombre:" + " " + ingreseNombre + "." + " " + "Su turno es: " + turnos);
}
alert("El dia de hoy se agotaron los turnos. Por favor intente el dia de mañana");


let salida = prompt("Para salir, por favor escriba ESC respetando las mayusculas")
while (salida != "ESC") {
    alert("Por favor ingresar un comando valido")
    salida = prompt("Ingresar ESC para poder salir")
}