/** <---------- Ponemos en marcha la fábrica ---------->
En el taller de Santa, los elfos tienen una lista de regalos que desean fabricar y un conjunto
limitado de materiales. Los regalos son cadenas de texto y los materiales son caracteres.
Tu tarea es escribir una función que, dada una lista de regalos y los materiales disponibles,
devuelva una "lista de los regalos que se pueden fabricar". Un regalo se puede fabricar si 
contamos con todos los materiales necesarios para fabricarlo.
*/

// <---------- Solución ---------->
function manufacture(gifts, materials) {
  
  let lista_regalos_a_fabricar = []

  for (let gif of gifts) { // recorro cada regalo de la lista de regalos

    let bandera = true

    for (let caracter of gif) { // recorro cada caracter de cada regalo
      if (materials.includes(caracter) === false) { // si el caracter no esta dentro de materiales
        bandera = false
        break
      } 
    }
    
    if (bandera === true) {
      lista_regalos_a_fabricar.push(gif)
    }
  }
  return lista_regalos_a_fabricar
}

// <---------- Salidas ---------->
const gifts1 = ['tren', 'oso', 'pelota']
const materials1 = 'tronesa'

manufacture(gifts1, materials1) // ["tren", "oso"]
// 'tren' SÍ porque sus letras están en 'tronesa'
// 'oso' SÍ porque sus letras están en 'tronesa'
// 'pelota' NO porque sus letras NO están en 'tronesa'

const gifts2 = ['juego', 'puzzle']
const materials2 = 'jlepuz'

manufacture(gifts2, materials2) // ["puzzle"]

const gifts3 = ['libro', 'ps5']
const materials3 = 'psli'

manufacture(gifts3, materials3) // []