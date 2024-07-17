//asignación de variables
// document.getElementById()

const carrito = document.getElementById("carrito");
const contenedorCarrito = document.querySelector("#lista-carrito tbody");
const vaciarCarrito = document.getElementById("vaciar-carrito");
const listaCursos = document.querySelector("#lista-cursos");

let articulosCarrito = [];

//apartado de los métodos
cargaEventos();
//metodo para cargar todos los eventos para el carrito de cursos
function cargaEventos(){
  listaCursos.addEventListener("click", agregarCurso) 
  carrito.addEventListener("click", eliminarCurso);

  //eliminamos todos los elementos de los cursos del array
  vaciarCarrito.addEventListener("click", ()=>{
    articulosCarrito = [];
    removerHTML();
  })
}

function agregarCurso(e){
  e.preventDefault(); //evitamos que la etiqueta <a> redireccione, cancelando su evento por defecto 
  if(e.target.classList.contains("agregar-carrito")){
    // console.log(e.target); //validamos que exista la clase 'agregar-carrito'en el elemento que yo seleccione
    const cursoSeleccionado = e.target.parentElement.parentElement;

    leerDatosCurso(cursoSeleccionado)
  }
}

//metodo para convertir el curso seleccionado en un objeto y agregarlo en el array
function leerDatosCurso(curso){
  //creando objeto del curso seleccionado
  const infoCurso = {
    imagen: curso.querySelector("img").src,
    titulo: curso.querySelector("h5").textContent,
    precio: curso.querySelector(".precio").textContent,
    id: curso.querySelector("a").getAttribute("data-id"),
    cantidad: 1
  }

  //revisar si el curso ya existe en array articulosCarrito
  const existe_curso = articulosCarrito.some(curso => curso.id === infoCurso.id);
  if(existe_curso){
    //si el curso existe, actualizamos la cantidad en base al id del curso
    const curso_actualizado = articulosCarrito.map(curso => {
      if(curso.id == infoCurso.id){
        curso.cantidad += 1;
        return curso; //actualizamos el curso que tiene el mismo id del curso actual
      }
      else{
        return curso; // retomamos los otros cursos que ya estan dentro del array
      }
    })
    articulosCarrito = [...curso_actualizado];
  }
  else{
    articulosCarrito = [...articulosCarrito, infoCurso];
  }
  carritoHTML();
}

//metodo para iterar los elementos del array en una tabla
function carritoHTML(){
  removerHTML();
  articulosCarrito.forEach(curso=>{
    const {imagen, titulo, precio, id, cantidad} = curso;

    const fila = document.createElement("tr");
    fila.innerHTML = `
            <td>
                <img src="${imagen}" width="100">
            </td>
            <td>
                ${titulo}
            </td>
            <td>
                ${precio}
            </td>
            <td>
                ${cantidad}
            </td>
            
            <td>
                <a href="#" class="borrar-curso" data-id=${id}> X </a>
            </td>
           `;
    //agregamos los cursos al apartado del tbody
    contenedorCarrito.appendChild(fila)
  })
}
//removiendo al primer hijo que se repita
function removerHTML(){
  while(contenedorCarrito.firstChild){
    contenedorCarrito.removeChild(contenedorCarrito.firstChild);
  }
}

//metodo para eliminar un curso id
function eliminarCurso(e){
  if(e.target.classList.contains("borrar-curso")){
    const cursoId = e.target.getAttribute("data-id");

    //filtramos un nuevo array con todos los cursos diferentes al curso Id
    articulosCarrito = articulosCarrito.filter(curso => curso.id !== cursoId);

    carritoHTML();
  }
}