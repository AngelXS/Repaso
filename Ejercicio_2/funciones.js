a1 = {nombre: "Luis", profesion: "Doctor", edad: 24};
a2 = {nombre: "Angel", profesion: "Ingeniero", edad: 20};
a3 = {nombre: "Patrik", profesion: "Doctor", edad: 19};
a4 = {nombre: "Pepito", profesion: "Doctor", edad: 4};
a5 = {nombre: "Martin", profesion: "Ingeniero", edad: 2};
a6 = {nombre: "Juanito", profesion: "Doctor", edad: 23};
a7 = {nombre: "Pepe", profesion: "Cantante", edad: 90};
a8 = {nombre: "Matias", profesion: "Profesor", edad: 2};
clientes = [a1,a2,a3,a4,a5,a6,a7,a8];

var cargardatos = () => {
    cadena = "<table><tr><th>Nombre</th><th>Profesion</th><th>Edad</th></tr>";
    clientes.forEach(element => {
        cadena=cadena+"<tr><td>"+element.nombre+"</td>"+"<td>"+element.profesion+"</td>"+"<td>"+element.edad+"</td></tr>";
    });
    cadena =cadena+"<tr><th></th><th></th><th></th></tr>";
    cadena=cadena+"</table>";
    document.getElementById("tabla").innerHTML = cadena;
};
var buscar = (buscado) => {
    cadena = "<table><tr><th>Nombre</th><th>Profesion</th><th>Edad</th></tr>";
    clientes.filter(element => {
        if(element.nombre == buscado){
            cadena=cadena+"<tr><td>"+element.nombre+"</td>"+"<td>"+element.profesion+"</td>"+"<td>"+element.edad+"</td></tr>";
            document.getElementById("persona").innerText = "Hola soy "+element.nombre;
        }
        
    });
    cadena =cadena+"<tr><th></th><th></th><th></th></tr>";
    cadena=cadena+"</table>";
    console.log(cadena);
    document.getElementById("tabla").innerHTML = cadena;
   
}
var limpiar = () => document.getElementById("texto1").value=""; 

var cambiar = (element) => {
    if(element == "a"){
        cadena = "<table><tr><th>Nombre</th><th>Profesion</th><th>Edad</th></tr>";
        clientes.forEach(element => {
            if(element.profesion == "Ingeniero"){
                cadena=cadena+"<tr><td>"+element.nombre+"</td>"+"<td>"+element.profesion+"</td>"+"<td>"+element.edad+"</td></tr>";
            }
        });
        cadena =cadena+"<tr><th></th><th></th><th></th></tr>";
        cadena=cadena+"</table>";
        document.getElementById("tabla").innerHTML = cadena;
    }
    else if(element=="b"){
        cadena = "<table><tr><th>Nombre</th><th>Profesion</th><th>Edad</th></tr>";
        clientes.forEach(element => {
            if(element.profesion == "Doctor"){
                cadena=cadena+"<tr><td>"+element.nombre+"</td>"+"<td>"+element.profesion+"</td>"+"<td>"+element.edad+"</td></tr>";
            }
        });
        cadena =cadena+"<tr><th></th><th></th><th></th></tr>";
        cadena=cadena+"</table>";
        document.getElementById("tabla").innerHTML = cadena;
    }
    else if(element=="c"){
        cadena = "<table><tr><th>Nombre</th><th>Profesion</th><th>Edad</th></tr>";
        clientes.forEach(element => {
            if(element.profesion == "Profesor"){
                cadena=cadena+"<tr><td>"+element.nombre+"</td>"+"<td>"+element.profesion+"</td>"+"<td>"+element.edad+"</td></tr>";
            }
        });
        cadena =cadena+"<tr><th></th><th></th><th></th></tr>";
        cadena=cadena+"</table>";
        document.getElementById("tabla").innerHTML = cadena;
    }
    else if(element=="d"){
        cadena = "<table><tr><th>Nombre</th><th>Profesion</th><th>Edad</th></tr>";
        clientes.forEach(element => {
            if(element.profesion == "Cantante"){
                cadena=cadena+"<tr><td>"+element.nombre+"</td>"+"<td>"+element.profesion+"</td>"+"<td>"+element.edad+"</td></tr>";
            }
        });
        cadena =cadena+"<tr><th></th><th></th><th></th></tr>";
        cadena=cadena+"</table>";
        document.getElementById("tabla").innerHTML = cadena;
    }
    else {
        cargardatos();
    }
}