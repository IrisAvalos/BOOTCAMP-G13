
var numero=5;
while(numero<=20){

    console.log("Hola");
    numero=numero+1;  //numero=5+1=6  numero=6+1=7

}

//RETO 1
let num=0;  //INICIALIZANDO UNA VARIABLE O LET
while( num<=100  ){

    console.log(num);
    num=num+2;  //ACTUALIZANDO A LOS PARES

}

//RETO 2
let number=1;
while( number<=12   ){

    console.log(number);
    number=number+2;

}

//RETO 3
let numeros=1;
while( numeros<=12   ){

    console.log(numeros);
    numeros=numeros+1;

}

//RETO 4: RECORRIENDO ARREGLOS
var juegos = ["Minecraft","FIFA",50,25,10]; //5 elementos = juegos.length

let i=0; //INICIALIZANDO
while( i <= (juegos.length-1) ){

    console.log(juegos[i]);
    i=i+1;
}


let valor = 0;
do{
    console.log(valor);
    valor=valor+1;

}while( valor<=10     );


let inicio=1;
do{
    console.log(inicio);
    inicio=inicio+2;

}while( inicio<=100 );

let comienzo=10;
do{
    console.log(comienzo);
    comienzo=comienzo+4;

}while( comienzo <=50 );


let dato;

//const patron = /hola/;     //patrones de palabras
//const patron = /^[0-9]+$/;   //patrones de numeros

//const patron = /hola[0-9]/;   //patrones de una palabra con un numero
//const patron = /hola[0-9]mundo/;  //patron de palabra,numero,palabra

const patron = /hola[0-9]+mundo/;  //patron de palabra, numeros, palabra 

do{
    dato = prompt(" INGRESA UNA PALABRA: ");

}while(!patron.test(dato))
