/*
// TURNERO
// for (let turnos = 1; turnos <= 10; turnos++) {
//     let ingreseNombre = prompt("Ingrese su Nombre y Apellido");
//     alert(" Ingreso el Nombre:" + " " + ingreseNombre + "." + " " + "Su turno es: " + turnos);
// }
// alert("El dia de hoy se agotaron los turnos. Por favor intente el dia de mañana");


// let salida = prompt("Para salir, por favor escriba ESC respetando las mayusculas")
// while (salida != "ESC") {
//     alert("Por favor ingresar un comando valido")
//     salida = prompt("Ingresar ESC para poder salir")
//




// PROMEDIO NOTAS

let nombreSolicitado = prompt ("ingrese su Nombre y Apellido");

let nota1 = prompt("Ingrese la primera Nota");
let nota2 = prompt("Ingrese la segunda Nota");
let nota3 = prompt("Ingrese la tercera Nota");
let nota4 = prompt("Ingrese la cuarta Nota");
let nota5 = prompt("Ingrese la quinta Nota");
let sumaNota = (parseInt(nota1) + parseInt(nota2) + parseInt(nota3) + parseInt(nota4) + parseInt(nota5));
var promedioNota = (sumaNota/5);

function solicitarNombre () {
    let nombreSolicitado = prompt ("Ingrese su Nombre y Apellido")
}

alert("su promedio es"+""+ promedioNota);

//function solicitarDatos (nota1, nota2, nota3, nota4, nota5) {
 //   for (let notas; notas <= 5; notas++) 
   // return (" Ingreso el Nombre:" + " " + nombreSolicitado + "." + " " + "Su turno promedio es: " promedioNota  );
//    }
//}


//solicitarNombre ();
//olicitarDatos ();


//parseInt(prompt("Ingrese la primera Nota"))

// let nota1= Number;
// let nota2= Number;
// let nota3= Number;
// let nota4= Number;
// let nota5= Number;
*/

// var txt1, acumulador = 0;

// for(var i = 0; i <=4; i++ ){
//     txt1 =parseInt(prompt("ingrese nota :  "));
//     acumulador = acumulador + txt1;
//     }
// alert = parseInt(" el promedio de notas es:  ",(acumulador/5).toFixed(2));








function solicitarNombre () {
    let nombreSolicitado = prompt ("Ingrese su Nombre y Apellido")
}

function promedio(){



let nota1 = prompt("Ingrese la primera Nota");
let nota2 = prompt("Ingrese la segunda Nota");
let nota3 = prompt("Ingrese la tercera Nota");
let nota4 = prompt("Ingrese la cuarta Nota");
let nota5 = prompt("Ingrese la quinta Nota");
let salida = prompt("Para salir, por favor escriba ESC respetando las mayusculas");


for(i=0; i<=4; i++){
let sumaNota = (parseInt(nota1) + parseInt(nota2) + parseInt(nota3) + parseInt(nota4) + parseInt(nota5));
let promedioNota = (sumaNota/5);
alert(nombreSolicitado + "su promedio es"+" "+ promedioNota);

}
}

function salir(){
    while (salida != "ESC") {
    alert("Por favor ingresar un comando valido")
    salida = prompt("Ingresar ESC para poder salir")
    
}
}

solicitarNombre();
promedio();
salir();

