let nombre = prompt('Introduce tu nombre porfavor');
let amor = "Yoly";
let amorDos = "yoly";

let numeroPersonaje = prompt('ingresa un numero para elegir un personaje')

/*   */

switch(numeroPersonaje){
    case '1':
        alert('elegiste a Homero');
        break;
    case '2':
        alert('elegiste a Marge');
        break;
    case '3':
        alert('elegiste a Lisa');
        break;
    case '4':
        alert('elegiste a Bart');
        break;
    default:
        alert('error');
        break;         
}

if (nombre == amor) {
    let nombre = amor;
    alert('eres la puta ama');
}else if(nombre == amorDos){
    let nombre = amorDos;
    alert('te amo');
}else{
    alert('Bienvenido(a) '+ nombre);
}



