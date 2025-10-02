const carrito = document.querySelector('#cart');
const contenedorCarrito = document.querySelector('#lista-carrito tbody')
const vaciarCarrito = document.querySelector('#vaciar-carrito')
const listasushi = document.querySelector('#products')
const agregarAdicionales = document.querySelector('.adicionales-list')
// cargarEventListener()

const cargarEventListener = () => {
  //cuando agg un sushi al carrito
listasushi.addEventListener('click', agregarsushi)
agregarAdicionales.addEventListener('click', manejarAdicional)
}


const agregarsushi = (e) => {
  e.preventDefault()
  if (e.target.classList.contains('agg-carrito')){
    const sushiSeleccionado = e.target.parentElement;
    leerDatosSuchi(sushiSeleccionado)
  }
}

const manejarAdicional = (e) => {
  e.preventDefault();
  if(e.target.classList.contains('agg-carrito')){
    const sushiSeleccionado = e.target.parentElement;
     leerDatosSuchi(sushiSeleccionado)

  }
}


// leer el contenido al cual le hicimos
//  click y extraer la informacion del sushi


const leerDatosSuchi = (sushi) => {
  // console.log(sushi)
  const infoSushi = {
    imagen: sushi.querySelector('img').src,
    titulo: sushi.querySelector('h2').textContent,
    precio: sushi.querySelector('span').textContent
  }

  console.log(infoSushi)
}

cargarEventListener()

