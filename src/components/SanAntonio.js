import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import ListaReproduccion from '../functions/ListaReproduccion'


//IMPORTACION LISTAS DE REPRODUCCION
import { SAN_ANTONIO, MORNING_SAN_ANTONIO, TARDE_SAN_ANTONIO, NOCHE_SAN_ANTONIO} from '../videos/videos';


const SanAntonio = () => {
  
  const [horario, setHorario] = useState();

  const PantallaBotones = () => {
    return(
      <div class="container text-center m-4">
        <div class="row align-items-center" >
            
          <div class="col lista shadow rounded" onClick={()=>setHorario("mañanas")}>
            Mañanas
          </div>

          <div class="col lista shadow rounded" onClick={()=>setHorario("tardes")}>
            Tardes
          </div>

          <div class="col lista shadow rounded" onClick={()=>setHorario("noches")}>
            Noches
          </div>

        </div>
      </div>
    )
  };
  
  switch(horario){  

    case 'mañanas':
      return (
        < ReactPlayer 
            url= {ListaReproduccion(MORNING_SAN_ANTONIO)}
            loop controls playing
            width='100%'
            height='100%'
            className='react-player'                   
        />
      )

    case 'tardes':
      return (
        < ReactPlayer 
            url= {ListaReproduccion(TARDE_SAN_ANTONIO)}
            loop controls playing
            width='100%'
            height='100%'
            className='react-player'                   
        />
      )

    case 'noches':
      return (
        < ReactPlayer 
              url= {ListaReproduccion(NOCHE_SAN_ANTONIO)}
              loop controls playing
              width='100%'
              height='100%'
              className='react-player'                   
        />
      )  
      
    default:
      return (
        <div>

          <div className='h1 m-4'>
            Seleccione la lista de reproducción
          </div>

          <PantallaBotones />    
        </div>    
      )

  }
}

export default SanAntonio
