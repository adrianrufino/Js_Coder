// PROMEDIO NOTAS ESTUDIANTES


let nombreSolicitado = '';
let nota1, nota2, nota3, nota4, nota5 = 0;

solicitarDatos();

promedio(nota1, nota2, nota3, nota4, nota5);

function solicitarDatos() {
    nombreSolicitado = prompt("Ingrese su Nombre y Apellido");
    nota1 = prompt("Ingrese la primera Nota");
    nota2 = prompt("Ingrese la segunda Nota");
    nota3 = prompt("Ingrese la tercera Nota");
    nota4 = prompt("Ingrese la cuarta Nota");
    nota5 = prompt("Ingrese la quinta Nota");
}

function promedio(n1, n2, n3, n4, n5) {

    let promedioNota = 0.0;

    for (i = 0; i <= 4; i++) {
        let sumaNota = (parseInt(n1) + parseInt(n2) + parseInt(n3) + parseInt(n4) + parseInt(n5));
        promedioNota = (sumaNota / 5);
    }

    alert(nombreSolicitado + ", su promedio es " + promedioNota +"." + " " + "Muchas gracias por su consulta");
}
