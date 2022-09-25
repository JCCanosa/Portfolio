document.addEventListener('DOMContentLoaded', function(){
    iniciarApp();
});

function iniciarApp(){
    crearGaleria();
}

function crearGaleria(){
    const galeria = document.querySelector('.galeria-imagenes');

    for(let i=1; i<= 12; i++){
        const imagen = document.createElement('picture');
        imagen.innerHTML = `
            <source srcset="/img/AppSalon/${i}.webp" type="image/webp">
            <img loading="lazy" width="450" height="250" src="/img/AppSalon/${i}.png" 
            alt="Imagen galería">   
        `;
        imagen.onclick = function(){
            mostrarImagen(i);
        }

        galeria.appendChild(imagen);
    }
}

function mostrarImagen(id){
    const imagen = document.createElement('picture');
    imagen.innerHTML = `
        <source srcset="/img/AppSalon/grandes/${id}.webp" type="image/webp">
        <img loading="lazy" width="1200" height="600" src="/img/AppSalon/grandes/${id}.png" 
        alt="Imagen galería">
    `;

    //Overlay de la imagen
    const overlay = document.createElement('DIV');
    overlay.appendChild(imagen);
    overlay.classList.add('overlay');
    overlay.onclick = function (){
        const body = document.querySelector('body');
        body.classList.remove('fijar-body');
        overlay.remove();
    }

    //Boton para cerrar el modal
    const cerrarModal = document.createElement('P');
    cerrarModal.textContent = 'X';
    cerrarModal.classList.add('btn-cerrar');
    cerrarModal.onclick = function (){
        const body = document.querySelector('body');
        body.classList.remove('fijar-body');
        overlay.remove();
    }
    overlay.appendChild(cerrarModal);

    //Añadirlo
    const body = document.querySelector('body');
    body.appendChild(overlay);
    body.classList.add('fijar-body');
}
