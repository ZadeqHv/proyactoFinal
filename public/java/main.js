const imgOpen = document.querySelector('.imgOpen');
const menu = document.querySelector('.menu-navegacion');
// const shake = document.querySelector('.animation')


// console.log(shake);


imgOpen.addEventListener('click', () => {
    menu.classList.toggle('aparecer');
});

window.addEventListener('click', e => {
    if (menu.classList.contains('aparecer') && e.target != menu && e.target != imgOpen) {
        menu.classList.toggle('aparecer');
    }
});
// shake.addEventListener('click', ()=> {
//     for(let i =0; i<shake.length; i++){
//         shake[i].classList.toggle('mono')
//     }
// });

// shake.addEventListener('click', ()=>{
//     shake.classList.toggle('mono')

// })


const imagenes = document.querySelectorAll('.img-galeria')
const imageneLight = document.querySelector('.agregar-imagen')
const contenedorLight = document.querySelector('.imagen-ligth')
// const shake = document.querySelector('.animation')

imagenes.forEach(imagen => {
    imagen.addEventListener('click', () => {
        aparecerImagen(imagen.getAttribute('src'))

    })
})


const aparecerImagen = (imagen) => {
    imageneLight.src = imagen
    contenedorLight.classList.toggle('show')
    imageneLight.classList.toggle('showImage')

}


contenedorLight.addEventListener('click', (r) => {
    if (r.target !== imageneLight) {
        contenedorLight.classList.toggle('show')
        imageneLight.classList.toggle('showImage')

    }
})



