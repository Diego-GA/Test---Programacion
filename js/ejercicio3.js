

const cuentaHora = (mediaNoche) =>{


    let horaActual = new Date()
    let resto = ( new Date(mediaNoche) - horaActual + 1000) / 1000;

    let segundos, minutos, horas;
    
    segundos = Math.floor(resto % 60 );;
    minutos = Math.floor( resto / 60 % 60 );
    horas = Math.floor( resto / 3600 % 24); 


    return { resto , segundos, minutos, horas }
};

const contador = () =>{
    let mediaNoche = new Date();
    mediaNoche.setHours(23,59,59)

    const reloj = document.getElementById("reloj");

    const controlador = setInterval( () => {
        let tiempo = cuentaHora(mediaNoche);
        reloj.innerHTML = `${tiempo.horas}Hora(s) ${tiempo.minutos}Mn(s) ${tiempo.segundos}Sg(s)`
        
        if( tiempo.resto <= 1 ){
            clearInterval(timerUpdate)
        }
    },1000);
}

contador();


console.log("\nEJERCICIO 3");
console.log("Para el tercer ejercicio me enfoque utilizando el objeto Date() dentro de JS, realice las operaciones necesarias para cambiar los daatos")