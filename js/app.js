// Variables
const carrito = document.querySelector('#carrito');
const listaCursos = document.querySelector('#lista-cursos');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn =document.querySelector('vaciar-carrito');
let articulosCarito = [];


// Listeners
cargarEventListeners();

function cargarEventListeners() {
    // Agregar curso al carrito
    listaCursos.addEventListener('click', agregarCurso);
    // Eliminar curso del carrito
    carrito.addEventListener('click', eliminarCurso);
    // Vaciar el carrito
    vaciarCarritoBtn.addEventListener('click', vaciarCarrito);
}


// Funciones

function agregarCurso(e) {
    e.preventDefault();
    if(e.target.classList.contains('agregar-carrito')) {
        const curso = e.target.parentElement.parentElement;
        leerDatosCurso(curso);
    }
}

function leerDatosCurso(curso) {
    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad: 1
    }

    if(articulosCarito.some(curso => curso.id === infoCurso.id)) {
        const cursos = articulosCarito.map( curso => {
            if(curso.id === infoCurso.id) {
                curso.cantidad++;
                return curso;
            } else {
                return curso;
            }
        })
        articulosCarito = [...cursos];
    } else {
        articulosCarito = [...articulosCarito, infoCurso];
    }
    carritoHTML();
}