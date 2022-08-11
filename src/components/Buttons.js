import React from 'react';

const Buttons = ({setSede}) => {
  return (

    <div className='App container '>

        <div className="row mx-auto d-block m-5">
          <img className="w-25" src="https://firebasestorage.googleapis.com/v0/b/trinitario-coffee.appspot.com/o/Logo%20Trinitario%20Nuevo-04.png?alt=media&token=ceead99d-99ee-42be-957f-5665fe50f323" alt="" />
        </div>
      
      <div class="container text-center m-4">
        <div class="row align-items-center" >
        
          <div className="col lista shadow rounded" onClick={()=>setSede('alameda')}>
            <i className="fa-solid fa-location-dot"></i>
               Alameda
          </div>

          <div className="col lista shadow rounded" onClick={()=>setSede('san-antonio')}>
            <i className="fa-solid fa-location-dot"></i>
               San Antonio
          </div>

        </div>        
      </div>
    </div>    
  )
}

export default Buttons
