estudiante1 = {nombre: "juanito", edad: 12};
estudiante2 = {nombre: "marquito", edad: 10};
estudiante3 = {nombre: "julianito", edad: 2};
estudiante4 = {nombre: "pepito", edad: 9};
estudiante5 = {nombre: "trapito", edad: 11};
estudiantes = [estudiante1,estudiante2,estudiante3,estudiante4,estudiante5];

var aumentar = (elemento) =>  elemento.innerText = parseInt(elemento.innerText) +1;
var borrar = () => document.getElementById("entrada").value= "";
var quitar = () => document.getElementById("defin").style.display="none";
var cambiar = function(elemento) {
    if(elemento.innerText=="Login"){
        elemento.innerText = "Log Out";
    }
    else {
        elemento.innerText = "Login";
    }
}

var cargando = () => document.getElementById("cargado").style.display="block";
var tabla = function(){
    var cadena ="<table><tr><th>Nombre</th><th>Edad</th></tr>";
    estudiantes.forEach(element => {
        cadena=cadena+"<tr><td>"+element.nombre+"</td>"+"<td>"+element.edad+"</td></tr>";
    });
    cadena=cadena+"</table>"
    document.getElementById("aux_1").innerHTML=cadena;
    console.log(cadena);
} 
var cambio = function(element){
    var cadena ="<table><tr><th>Nombre</th><th>Edad</th></tr>";
    if(element.value == "a"){
        a=estudiantes.filter((estudiante)=>estudiante.edad>10);
        a.forEach(element => {
            cadena=cadena+"<tr><td>"+element.nombre+"</td>"+"<td>"+element.edad+"</td></tr>";
        });
        cadena=cadena+"</table>"
        console.log(cadena);
        document.getElementById("aux_1").innerHTML=cadena;
    }
    else {
        a=estudiantes.filter((estudiante)=>estudiante.edad<10);
        a.forEach(element => {
            cadena=cadena+"<tr><td>"+element.nombre+"</td>"+"<td>"+element.edad+"</td></tr>";
        });
        cadena=cadena+"</table>"
        console.log(cadena);
        document.getElementById("aux_1").innerHTML=cadena;
    }
}



