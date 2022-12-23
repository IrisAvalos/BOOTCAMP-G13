//BUCLE FOR

for(var i=1; i<=10; i++){

    console.log(i);

}

for(var x=2; x<=12; x+=2){

    console.log(x);
}

for(var y=60; y>=4; y-=4){

    console.log(y);
}

for(var mensaje=1; mensaje<=10;mensaje++){
    console.log("Hola como estas");
}


//REPASANDO ARREGLOS

var resultado=[4,20,"Bien","Mal",20.3];
console.log(resultado[3]);

var mensajes=["COMO ESTAS","TODO BIEN","TODO MAL",54.5,14,"HOLA"];
console.log(mensajes.length);


for(var i=0;i<=5;i++){

    console.log(mensajes[i]);

}

var numeros = [4,5,28,45,52,30,60.8,74,59]; //9 elementos = numeros.length
console.log(numeros[8])   //posiciones 0-8  = (numeros.length-1)

for(var x=0; x<=(numeros.length-1);x++){
    console.log(numeros[x]);
}