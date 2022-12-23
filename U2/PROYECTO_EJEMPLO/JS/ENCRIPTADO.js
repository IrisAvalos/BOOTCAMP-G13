function encriptar(){

    var passSistema = "M00bGaGR0Sd%";
    var msgError = "Error en la contraseña, vuelve a intentarlo";

    var mensaje = document.getElementById("msg").value;

    var password = document.getElementById("pass").value;


    if (passSistema===password){
        
        document.getElementById("error").innerHTML = "";
        var encriptado = btoa(mensaje);
        document.getElementById("demo1").innerHTML = encriptado;
    }
    else{
       
        document.getElementById("error").innerHTML = msgError;

    }
}

function desencriptar(){

    var mensajeCodigo = document.getElementById("msgCodigo").value;
    var desencriptado = atob(mensajeCodigo);
    document.getElementById("demo2").innerHTML = desencriptado;

}