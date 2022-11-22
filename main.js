const boton = document.querySelector('#button').addEventListener('click', inputNumber );
const titulo =document.querySelector('#pizza');
const subtitulo =document.querySelector('#precio');

function inputNumber() {
    const numberInput = document.querySelector('#input-number').value;
    const parseInput = parseInt (document.querySelector('#input-number').value);
    pizzas.forEach (pizzas => {
     if (parseInput === pizzas.id)
               {titulo.textContent = pizzas.nombre; 
               subtitulo.textContent = pizzas.precio;
               titulo.className='pizza';
               subtitulo.className = 'precio'
            }
     else if (numberInput=== '') 
               {titulo.textContent = 'Ingrese un número de ID'
            subtitulo.textContent = ''
            titulo.className= 'error';
            }
     else if(numberInput > pizzas.id || numberInput <= 0) 
                {titulo.textContent = 'El número de ID debe estar entre 1 y 6'
            subtitulo.textContent = ''
            titulo.className='error';
            subtitulo.className = ''}
            })
  }
  // pizzas 
const pizzas = [ {
    id: 1,
    nombre: 'Muzzarella',
    precio: 500,
    ingredientes : ['salsa', ' queso muzzarella', ' oregano']
},
{
    id: 2,
    nombre: 'Napolitana',
    precio: 700,
    ingredientes : ['salsa', ' muzzarella', ' tomate', ' ajo ']
},
{
    id: 3,
    nombre: 'Fugazzetta',
    precio: 700,
    ingredientes : ['salsa', ' muzzarella', ' cebolla']
},
{
    id: 4,
    nombre: 'Calabresa',
    precio: 800,
    ingredientes : ['muzarella', ' rodajas de calabresa', ' oregano']
},
{
    id: 5,
    nombre: 'Jamón y morrón',
    precio: 700,
    ingredientes : ['salsa', ' muzzarella', ' fetas de jamón', ' morrón']
},
{
    id: 6,
    nombre: 'Vegana',
    precio: 700,
    ingredientes : ['tomates fritos', ' queso vegano', ' champignones'] 
}]