var respuesta = prompt("¿Cómo te sientes el día de hoy?")

switch(respuesta){

    case 'feliz':
        alert("Sigue estando feliz");
        break;

    case 'triste':
        alert("No estes triste, todo se soluciona");
        break;

    case 'molesto':
        alert("Trata de tranquilizarte");
        break;

    default:
        alert("Tu estado de animo es complicado");
        break;

}
