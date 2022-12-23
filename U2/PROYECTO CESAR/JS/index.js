//CONVERTIR LO QUE ESCRIBE EL USUARIO EN MAYUSCULAS
document.getElementById("msg").addEventListener("keyup", function(){
    this.value = this.value.toUpperCase();
})

//DECLARANDO EL ABECEDARIO NORMAL:
var letras= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

//DECLARANDO EL DESPLAZAMIENTO:
var desplazamiento = 10;

//FUNCIÓN PARA ENCRIPTAR EL MENSAJE CON CODIGO CESAR:

function encriptar(){

    //DEFINICIÓN DE VARIABLES QUE SE UTILIZARÁN:
    var passSistema = "M00bGaGR0Sd%";
    var msgError = "Error en la contraseña, vuelve a intentarlo";
    var mensaje = document.getElementById("msg").value;
    var password = document.getElementById("pass").value;

     //DEFINICIÓN DE VARIABLES UTILIZADAS EN EL CODIGO CESAR:
    var asciiEncriptado=0;
    var formulaCesar=0;
    var nuevaLetra = "";
    var resultadoEncriptado = "";

    // VALIDANDO LA CONTRASEÑA DEL USUARIO:
    if (passSistema===password){
        
        document.getElementById("error").innerHTML = "";

        //FOR QUE RECORRE TODO EL MENSAJE
        for(let i=0;i<mensaje.length; i++){

            //CONDICIONAL PARA VERIFICAR QUE ES UNA LETRA
            if(letras.indexOf(mensaje[i])!=-1){

                //CONVERSIÓN A CÓDIGO CÉSAR:     
                asciiEncriptado= mensaje.charCodeAt(i);
              
                formulaCesar = (asciiEncriptado - 65 + desplazamiento) %26 + 65;
                
                nuevaLetra = String.fromCharCode(formulaCesar);
                resultadoEncriptado = resultadoEncriptado + nuevaLetra;
            }

            //EN CASO CONTRARIO ES UN NUMERO O ESPACIO EN BLANCO
            else{
                resultadoEncriptado = resultadoEncriptado + mensaje[i];
            }
        }

        document.getElementById("demo1").innerHTML = resultadoEncriptado;

    }
    
    else{
       
        document.getElementById("error").innerHTML = msgError;

    }
}

function desencriptar(){

    var mensajeCodigo = document.getElementById("msgCodigo").value;
    var asciiDesencriptado = 0;
    var resultadoDesencriptado = "";
    var letraNueva = "";
    var formulaCesar = 0;

     //FOR QUE RECORRE TODO EL MENSAJE
     for(let i=0;i<mensajeCodigo.length; i++){

        //CONDICIONAL PARA VERIFICAR QUE ES UNA LETRA
        if(letras.indexOf(mensajeCodigo[i])!=-1){

            //CONVERSIÓN A CÓDIGO CÉSAR:     
            asciiDesencriptado= mensajeCodigo.charCodeAt(i);

            for(let ascii=65; ascii<=90;ascii++){
                formulaCesar = (ascii- 65 + desplazamiento) %26 + 65;

                if(asciiDesencriptado===formulaCesar){
                    letraNueva = String.fromCharCode(ascii);
                    resultadoDesencriptado = resultadoDesencriptado + letraNueva;
                }
            }
        }

        //EN CASO CONTRARIO ES UN NUMERO O ESPACIO EN BLANCO
        else{
            resultadoDesencriptado = resultadoDesencriptado + mensajeCodigo[i];
        }
    }
    document.getElementById("demo2").innerHTML = resultadoDesencriptado;
}