const precioArticulo = document.getElementById('precioArticulo');

const precioTD = document.querySelectorAll('.precioTapaDura');
const precioTB = document.querySelectorAll('.precioTapaBlanda');
const precioR = document.querySelectorAll('.precioRestauracion');

const textTD = 'Agenda de tapa dura, su precio esta entre XXXX y YYYY'
const textTB = 'Agenda de tapa blanda, su precio esta entre XXXX y YYYY'
const textR = 'Los libros restaurados estan en dependecia del deterioro del mismo pero usualmente ronda entre XXXX y YYYY'

precios(precioTD, textTD);
precios(precioTB, textTB);
precios(precioR, textR);


//esta funcion le asigna un evento a cada imagen para que el div fixeado
// obtenga el texto predeterminado y luego desaparezca el div nuevamente.
function precios(listItems, text) {
    listItems.forEach(imagen => {
        console.log(imagen.id)
        imagen.addEventListener('mouseover', function() {
            const precioculto = document.getElementById('preciosOculto');
            console.log('que sucede')
            precioArticulo.innerHTML = '';
            precioArticulo.textContent = text;
            precioculto.id = 'preciosVisibles'
        })
    
        imagen.addEventListener('mouseout', function() {
            const preciovisible = document.getElementById('preciosVisibles')
            preciovisible.id = 'preciosOculto'
        })
    })    
}
