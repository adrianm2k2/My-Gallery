const precioArticulo = document.getElementById('precioArticulo');

const precioTD = document.querySelectorAll('.precioTapaDura');
const precioTB = document.querySelectorAll('.precioTapaBlanda');
const precioR = document.querySelectorAll('.precioRestauracion');
const lupas = document.querySelectorAll('.lupa')

const textTD = 'Agenda de tapa dura, su precio esta entre XXXX y YYYY'
const textTB = 'Agenda de tapa blanda, su precio esta entre XXXX y YYYY'
const textR = 'Los libros restaurados estan en dependecia del deterioro del mismo pero usualmente ronda entre XXXX y YYYY'

let i = 10;
let l = 10;
 

precios(precioTD, textTD);
precios(precioTB, textTB);
precios(precioR, textR);



//esta funcion le asigna un evento a cada imagen para que el div fixeado
// obtenga el texto predeterminado y luego desaparezca el div nuevamente.
function precios(listItems, text) {
    listItems.forEach(imagen => {
        
        imagen.id = 'imagen' + i
        i++;
        imagen.addEventListener('mouseover', function() {
            const precioculto = document.getElementById('preciosOculto');
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

function aumentarImagen () {
    lupas.forEach(lupa => {
        lupa.id = 'lupa' + l
        l++;
        
        let numberItem = parseInt(lupa.id[4])*10+parseInt(lupa.id[5]);
        var idsss = 'imagen' + numberItem;

        const restaurarImg = document.getElementById(idsss)

        const listaDeImagenes = []
        listaDeImagenes[l-10]= restaurarImg.className
        console.log(listaDeImagenes)
        console.log(listaDeImagenes[l-10])

        restaurarImg.addEventListener('click', () => {
            let restaurarIndex = parseInt(restaurarImg.id[4])*10+parseInt(restaurarImg.id[5])-10;
            restaurarImg.className = listaDeImagenes[restaurarIndex]
        })

        lupa.addEventListener('click', () => {
            let numberItem = parseInt(lupa.id[4])*10+parseInt(lupa.id[5]);
            var ids = 'imagen' + numberItem;
            const cambioClase = document.getElementById(ids)
            var guardarClase = cambioClase.className
            cambioClase.className = 'imgZoom'
        })
    })
}



aumentarImagen()
