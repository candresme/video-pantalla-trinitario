
import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ReactPlayer from 'react-player';

import {ALAMEDA, SAN_ANTONIO} from './videos/videos'


function App() {
  
  const listaReproduccion = (sede) => {
    const list = []
    Object.keys(sede).forEach(key => list.push(sede[key]))
    return list;
  };

  const Buttons = () =>{
    return (
      
      <div class="btn-group" role="group" aria-label="Basic example">
        
        < Link to='/alameda'><button type="button" className="btn btn-secondary mt-5">Alameda</button></Link>
        < Link to='/san-antonio'><button type="button" className="btn btn-secondary mt-5">San Antonio</button></Link>

      </div>
     
    );
  }


  return (
    

    <div className="App">
      <BrowserRouter>
        <Routes>

          <Route path='/' element={< Buttons />} />
      
          <Route path="alameda" element={< ReactPlayer url= {listaReproduccion(ALAMEDA)} loop controls playing width='100%' height='100%' className='react-player'/>} />

          <Route path="san-antonio" element={< ReactPlayer url= {listaReproduccion(SAN_ANTONIO)} loop controls playing width='100%' height='100%' className='react-player'/>} />

        </Routes>
      </BrowserRouter>
      
    </div>

  );
}

export default App;
