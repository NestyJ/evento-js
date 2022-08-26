const agregarCarrito = document.querySelector ("#lista-carrito");

let articulosCarrito = [];
console.log (agregarCarrito)

cargarEventListener();
function cargarEventListener() {
    agregarCarrito.addEventListener("click", carritoClickeado)
}

function carritoClickeado (e){
    if(e.target.classList.contains("btn-success")){
        let cursoClickeado = e.target.parentElement.parentElement
        console.log (cursoClickeado)
        leerdatosCurso(cursoClickeado);
    }

}

function leerdatosCurso(curso){
    console.log(curso)
    const articulos = {
        nombre: curso.querySelector ("h5").textContent,
        precio: curso.querySelector("p").textContent,
        cantidad: 1,
        id: Number(curso.querySelector (".btn-success").getAttribute("data-id"))
    }

    console.log (articulos.id)
}