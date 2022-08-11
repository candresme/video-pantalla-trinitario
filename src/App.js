
//IMPORTACIONES BASICAS
import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";


//COMPONENTE DE PANTALLA QUE VALIDA EL ESTADO DE LA SEDE
import Screen from './components/Screen';

function App() {

 //ESTADO PARA DEFINIR QUE SEDE VISUALIZAR
  const [sede, setSede] = useState('');

  return (
    <div className="App container ">      
      <div className="row">

        <BrowserRouter>
          <Routes>

            <Route path='/' element={<Screen sede={sede} setSede={setSede} />} />
                  
            {/* <Route path="san-antonio" element={< ReactPlayer url= {listaReproduccion(SAN_ANTONIO)} loop controls playing width='100%' height='100%' className='react-player'/>} /> */}
          </Routes>
        </BrowserRouter>

      </div>
      
    </div>

  );
}

export default App;
