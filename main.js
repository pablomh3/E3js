const boton = document.querySelector('#button').addEventListener('click', inputNumber );
const nombrePizza =document.querySelector('#pizza');
const precioPizza =document.querySelector('#precio');
const container = document.querySelector('#container')
const imgPizza = document.querySelector('#imagen')
const errorText = document.querySelector('#small')
const ingPizza = document.querySelector('#ingredientes')

function inputNumber() {
    let numberInput = document.querySelector('#input-number').value;
    let parseInput = parseInt (document.querySelector('#input-number').value);
    pizzas.forEach (pizzas => {
     if (parseInput === pizzas.id)
               {container.style.display = 'flex';
                nombrePizza.textContent = pizzas.nombre; 
                imgPizza.style.display = 'block'
                imgPizza.src = pizzas.imagen;
                precioPizza.textContent = `$ ${pizzas.precio}`;
                ingPizza.textContent = pizzas.ingredientes;
                errorText.textContent = '';
                localStorage.setItem( 'pizza', JSON.stringify( pizzas));
            }
     else if (numberInput=== '' || NaN) 
               {container.style.display = 'block';
               errorText.textContent = 'Por favor escribe un valor numérico'
               imgPizza.style.display = 'none';
               nombrePizza.textContent = '';
               imgPizza.src = '';
               precioPizza.textContent = '';
               ingPizza.textContent = '';
        
            }
     else if(numberInput > pizzas.id || numberInput <= 0) 
                {container.style.display = 'block';
                errorText.textContent = 'El número de ID debe estar entre 1 y 6'
                imgPizza.style.display = 'none';
                nombrePizza.textContent = ''; 
                imgPizza.src = '';
                precioPizza.textContent = '';
                ingPizza.textContent = '';
                 
            }
            })
  }

 document.addEventListener('DOMContentLoaded', function (event) {
    if (localStorage = !''){
        let itemLocalStorage = JSON.parse (localStorage.getItem ('pizza'));
        console.log(itemLocalStorage.ingredientes);
        container.style.display = 'flex';
        ingPizza.textContent = itemLocalStorage.ingredientes;
        imgPizza.src = itemLocalStorage.imagen;
        precioPizza.textContent = `$ ${itemLocalStorage.precio}`;
        nombrePizza.textContent = itemLocalStorage.nombre
    } else {
        console.log('No hay nada guardado en LS')
    }
 })
  
  // pizzas 
const pizzas = [ {
    id: 1,
    nombre: 'Muzzarella',
    precio: 500,
    ingredientes : ['salsa', ' queso muzzarella', ' oregano'],
    imagen: './muzarella.png',
},
{
    id: 2,
    nombre: 'Napolitana',
    precio: 700,
    ingredientes : ['salsa', ' muzzarella', ' tomate', ' ajo '],
    imagen: 'napo.png',
},
{
    id: 3,
    nombre: 'Fugazzetta',
    precio: 700,
    ingredientes : ['salsa', ' muzzarella', ' cebolla'],
    imagen: 'Fugazzeta.png',
},
{
    id: 4,
    nombre: 'Calabresa',
    precio: 800,
    ingredientes : ['muzarella', ' rodajas de calabresa', ' oregano'],
    imagen: 'calabresa.png',
},
{
    id: 5,
    nombre: 'Jamón y palmitos',
    precio: 700,
    ingredientes : ['salsa', ' muzzarella', ' fetas de jamón', ' palmitos'],
    imagen: 'jamon.png',
},
{
    id: 6,
    nombre: 'Rucula',
    precio: 700,
    ingredientes : ['Rucula', ' jamón', ' queso parmesano'],
    imagen: 'rucula.png',
}]