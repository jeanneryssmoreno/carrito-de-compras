const carrito = document.querySelector("#cart");
const contenedorCarrito = document.querySelector("#lista-carrito tbody");
const vaciarCarrito = document.querySelector("#vaciar-carrito");
const listasushi = document.querySelector("#products");
const agregarAdicionales = document.querySelector(".adicionales-list");
let articulosCarrito = [];

// cargarEventListener()

const cargarEventListener = () => {
  //cuando agg un sushi al carrito
  listasushi.addEventListener("click", agregarsushi);
  agregarAdicionales.addEventListener("click", manejarAdicional);
  //eliminar comida de carrito
  carrito.addEventListener('click', eliminarSushi )
};

const agregarsushi = (e) => {
  e.preventDefault();
  if (e.target.classList.contains("agg-carrito")) {
    const sushiSeleccionado = e.target.parentElement;
    leerDatosSuchi(sushiSeleccionado);
  }
};

const manejarAdicional = (e) => {
  e.preventDefault();
  if (e.target.classList.contains("agg-carrito")) {
    const adicionalSeleccionado = e.target.parentElement;
    leerDatosAdicional(adicionalSeleccionado);
  }
};

//eliminar productos del carrito

const eliminarSushi = (e) => {


if(e.target.classList.contains('borrar-sushi')){

  const sushiId = e.target.getAttribute('id')
  //eliminar los articulos por el data id
  
  articulosCarrito = articulosCarrito.filter(sushi => sushi.id !== sushiId)
  console.log(articulosCarrito)

}
muestraCarrito()//iterar y mostrar
}





// 1. capturar el evento del click
// leer el contenido al cual le hicimos
//  click y extraer la informacion del sushi

const leerDatosSuchi = (sushi) => {
  // console.log(sushi)
  const infoSushi = {
    imagen: sushi.querySelector("img").src,
    titulo: sushi.querySelector("h2").textContent,
    precio: sushi.querySelector("span").textContent,
    id: sushi.getAttribute("id"),
    cantidad: 1,
  };

  //revisa si un elemento ya existe en el carrito

  const siExiste = articulosCarrito.some((sushi) => sushi.id === infoSushi.id);

  // agregar elementos al arreglo de carrito

  if (siExiste) {
    //actualiza la cantidad
    const sushiCantidad = articulosCarrito.map((sushi) => {
      if (sushi.id === infoSushi.id) {
        return {...sushi, cantidad: sushi.cantidad + 1,}
      } else {
        return sushi;
      }
    });
    articulosCarrito = [...sushiCantidad];
  } else {
    articulosCarrito = [...articulosCarrito, infoSushi];
   
  }
 muestraCarrito();

};

// const leerDatosAdicional = (adicional) => {
// const infoAdicional = {
//   imagen: adicional.querySelector('img').src,
//   titulo: adicional.querySelector('h3').textContent,
//   precio: adicional.querySelector('span').textContent,
//   id: adicional.getAttribute('data-id'), cantidad: 1

// }

// }
//mostrar el carrito de compras en el html

const muestraCarrito = () => {
  //limpiar html
  limpiarHTML();

  //recorre el carrito y genera el html

  articulosCarrito.forEach((sushi) => {
    const { imagen, titulo, precio, cantidad, id } = sushi;
    const row = document.createElement("tr");
    row.innerHTML = `

           <td> 
            <img src='${imagen}' width = '100'>
           </td>
           <td>${titulo} </td>
            <td>${precio}</td>
            <td>${cantidad}</td>
            <td>
           <a href= "#" class='borrar-sushi' id="${id}">X</a>
           </td>
           
      
      `;
    contenedorCarrito.appendChild(row);

    //agg el html en el tbody
    contenedorCarrito.appendChild(row);
  });
};

//eliminar los cursos del tbody
const limpiarHTML = () => {
  //esta es la forma lenta
  contenedorCarrito.innerHTML = "";

  //para la forma rapida
  while (contenedorCarrito.firstChild) {
    contenedorCarrito.removeChild(contenedorCarrito.firstChild);
  }
};

cargarEventListener();
