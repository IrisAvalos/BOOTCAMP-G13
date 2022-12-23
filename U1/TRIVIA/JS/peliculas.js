var preguntas=["pregunta1","pregunta2","pregunta3","pregunta4"];

var opciones=[
    ["opcion0","opcion1","opcion2","opcion3"],
    ["opcion0","opcion1","opcion2","opcion3"],
    ["opcion0","opcion1","opcion2","opcion3"],
    ["opcion0","opcion1","opcion2","opcion3"]
]

var puntaje=[
    [5,0,0,0],
    [5,0,0,0],
    [5,0,0,0],
    [5,0,0,0]
]

var i=0;
function siguientePregunta(){
    document.getElementById("pregunta").innerHTML=preguntas[i]

    document.getElementById("opcion0").innerHTML=opciones[i][0];
    document.getElementById("opcion1").innerHTML=opciones[i][1];
    document.getElementById("opcion2").innerHTML=opciones[i][2];
    document.getElementById("opcion3").innerHTML=opciones[i][3];
}

siguientePregunta();

var totalPuntaje=0;

function actualizarPuntaje(alternativa){

    totalPuntaje=puntaje[i][alternativa]+totalPuntaje;

    i++;
    if (i<4){
        siguientePregunta();
    }
    else{
        mostrarResultado();
    }


}

document.getElementById("opcion0").addEventListener("click",function(){actualizarPuntaje(0)});
document.getElementById("opcion1").addEventListener("click",function(){actualizarPuntaje(1)});
document.getElementById("opcion2").addEventListener("click",function(){actualizarPuntaje(2)});
document.getElementById("opcion3").addEventListener("click",function(){actualizarPuntaje(3)});

function mostrarResultado(){
    document.getElementById("tituloPelicula").innerHTML="Resultados";
    document.getElementById("pregunta").innerHTML="Tu total de puntaje es: "+totalPuntaje;
    document.getElementsByClassName("opciones")[0].innerHTML="";


    //EN VEZ DE CREAR OTRO HTML, CSS Y JAVASCRIPT; AQUÍ ACTUALIZO LO QUE ME FALTA CREAR
    var form1=document.createElement('form'); 
    form1.action=("../html/menu-categorias.html")

    document.getElementsByClassName("opciones")[0].appendChild(form1);

    var input1 = document.createElement('input'); 
    input1.type= ("submit"); 
    input1.className=("boton-volver");
    input1.value = "VOLVER A JUGAR"; 
    

    form1.appendChild(input1);
    
    var form2=document.createElement('form'); 
    form2.action=("../html/index.html");

    document.getElementsByClassName("opciones")[0].appendChild(form2);

    var input2 = document.createElement('input'); 
    input2.type= ("submit"); 
    input2.className=("boton-nuevoUsuario");
    input2.value = "NUEVO USUARIO"; 
    
    form2.appendChild(input2);


}

