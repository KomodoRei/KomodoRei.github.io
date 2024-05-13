let estadoPendiente = 'Pendiente'
let estadoAutorizado = 'Autorizado'
let estadoRevision = 'Revision'

const estadoRechazado = 'Rechazado'
// no varia a lo largo de la ejecuciò, se mantiene fijo durante la ejecuciòn del programa 


console.warn('el recurso precargado no está disponible')

// platoTercero = 'distinto';

/*Funciones Nativas PRedeterminadas del Lenguaje
-->prompt, cuadro de texto con un input (guardado en string , num, char, boolean)
-->alert, cuadro de texto solo con Aceptar (guardado True boolean)
-->confirm, cuadro de texto con Aceptar y Cancelar (guardado True or False boolean) 
*/

/* el ciclo FOR es cuando se sabe la 
cantidad de veces que se repetirá el ciclo */

for(let i=0; i<=10;i++){

    if(i==5){
        console.warn("iteracion interrumpida por break en el ciclo " + i);
        break;
    }
    alert(i);
}

for(let i=0; i<=10;i++){

    if(i==5){
        console.warn("iteracion saltada por continue en el ciclo " + i);
        continue;
    }
    alert(i);
}

// ciclo while
let i = 1;

while(i<6){
    console.log('iteracion numero '+ i);
    i++;
}

// ciclo do whie

let numeroA = 0;

do{
    numeroA = prompt('ingrese un numero');
    console.log(numeroA);
}while(parseInt(numeroA));

let tiempo = prompt('como está hoy el clima');


switch (tiempo){
    case 'lluvioso':
        alert('lleva paraguas');
        break;
    case 'soleado':
        alert('ponte protector solar');
        break;
    case 'ventoso':
        alert('se pueden volar tus prendas');
        break;
    case 'nevando':
        alert('haz un monito de nieve y abrigate mucho');
        break;
    default:
        alert('introduce una opcion valida');
        break;
}





/* ciclo continue o break, con un if podemos realizar un paro del conteo en el cilco
for.
y con continue 
*/


// prompt, alert, confirm

let eleccion = prompt('¿que deseas comer?');
let nombre = prompt('dime tu nombnre');
let apellido = prompt('dimetu apellido');
let nombreCompleto = (nombre + ' '+ apellido);
let edad = prompt('Dime tu edad');


alert('hoy es un gran dia para comer, ' + eleccion + ', gracias por preferirnos ' + nombre + ' ' + apellido);
alert('Bienvenid@ ' +nombreCompleto);

console.log(nombreCompleto);


let precioSalsa = 900;
let precioTocino = 900;
let precioChampiñon = 400;
let precioChoclo = 400;

let totalToppin = precioChampiñon + precioChoclo + precioSalsa;
let porcionesDos = 2
let porcionesTres = 3
let porcionesCuatro = 4


alert('el precio total del pedido es ' + totalToppin);
alert('total de porciones ' + porcionesDos + ',el precio total: ' + totalToppin * porcionesDos);




// alamcenar datos con funciones nativas y luego ocupar funciones personalizables para el usuario

/* Concatenación y operaciones variables


*/

// 

/* const frutas = ['manzana','naranja','platano']
console.log(frutas)

frutas.push('pera')


const productos = [{id:1, nombre: "arroz", precio:1500}, 
{id:2, nombre: "fideos", precio:1000}, 
{id:3, nombre: "aceite", precio:2100}, 
{id:4, nombre: "pan", precio:1390}
]

for(const producto of productos){
    let contenedor = document.createElement("div")
    contenedor.innerHTML= '<h1>Nombre: ${producto.nombre} </h1>'
    '<h3>Precio: ${producto.precio} </h3>'

} */