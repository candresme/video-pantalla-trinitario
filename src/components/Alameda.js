import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import ListaReproduccion from '../functions/ListaReproduccion'

//IMPORTACION LISTAS DE REPRODUCCION
import { ALAMEDA, MORNING_ALAMEDA, TARDE_ALAMEDA, FDS_MORNING_ALAMEDA, FDS_TARDE_ALAMEDA } from '../videos/videos';

const Alameda = () => {
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

          <div class="col lista shadow rounded" onClick={()=>setHorario("fds-mañanas")}>
            Mañanas Fines de semana
          </div>

          <div class="col lista shadow rounded" onClick={()=>setHorario("fds-tardes")}>
            Tardes Fines de semana
          </div>

        </div>
      </div>
    )
  };
  
  switch(horario){  

    case 'mañanas':
      return (
        < ReactPlayer 
            url= {ListaReproduccion(MORNING_ALAMEDA)}
            loop controls playing
            width='100%'
            height='100%'
            className='react-player'                   
        />
      )

    
    case 'fds-mañanas':
      return (
          < ReactPlayer 
              url= {ListaReproduccion(FDS_MORNING_ALAMEDA)}
              loop controls playing
              width='100%'
              height='100%'
              className='react-player'                   
          />
      )


    case 'tardes':
      return (
        < ReactPlayer 
            url= {ListaReproduccion(TARDE_ALAMEDA)}
            loop controls playing
            width='100%'
            height='100%'
            className='react-player'                   
        />
      )
      
    case 'fds-tardes':
        return (
          < ReactPlayer 
              url= {ListaReproduccion(FDS_TARDE_ALAMEDA)}
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


export default Alameda