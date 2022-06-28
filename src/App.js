
import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ReactPlayer from 'react-player';

import {ALAMEDA, SAN_ANTONIO} from './videos/videos'


function App() {
  
  const listaReproduccion = (sede) => {
    const list = []
    Object.keys(sede).forEach(key => list.push(sede[key]))
    const sorted = list.sort(function(a,b) {return (Math.random()-0.5)});
    return sorted;
  };

  const Buttons = () =>{
    return (
      
      <div className="btn-group d-grid gap-2 col-6 mx-auto  mt-3" role="group" aria-label="Basic example">
        
        < Link to='/alameda'><button type="button" className="btn btn-warning mt-1"><i class="fa-solid fa-location-dot"></i>  Alameda</button></Link>
        < Link to='/san-antonio'><button type="button" className="btn btn-warning mt-1"><i class="fa-solid fa-location-dot"></i> San Antonio</button></Link>

      </div>
     
    );
  }


  return (
    

    <div className="App container ">
      
      <div className="row mx-auto d-block">
        <img className="w-25" src="https://firebasestorage.googleapis.com/v0/b/trinitario-coffee.appspot.com/o/Logo%20Trinitario%20Nuevo-04.png?alt=media&token=ceead99d-99ee-42be-957f-5665fe50f323" alt="" />
      </div>
      
      <div className="row">
        <BrowserRouter>
          <Routes>

            <Route path='/' element={< Buttons />} />
        
            <Route path="alameda" element={< ReactPlayer url= {listaReproduccion(ALAMEDA)} loop controls playing width='100%' height='100%' className='react-player'/>} />

            <Route path="san-antonio" element={< ReactPlayer url= {listaReproduccion(SAN_ANTONIO)} loop controls playing width='100%' height='100%' className='react-player'/>} />

          </Routes>
        </BrowserRouter>
      </div>
      
    </div>

  );
}

export default App;
