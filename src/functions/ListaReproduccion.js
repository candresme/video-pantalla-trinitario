import React from 'react'

//FUNCION QUE CREA LA LISTA DE REPRODUCCION SEGUN LA SEDE 
const ListaReproduccion = (lista) => {
      
  const list = []
  Object.keys(lista).forEach(key => list.push(lista[key]))
  const sorted = list.sort(function(a,b) {return (Math.random()-0.5)});
  return sorted;

}

export default ListaReproduccion
