import React, { useContext } from 'react';

//IMPORTS CONTEXT
import { SedesContext } from '../../contexts/SedesContext';

const Screen = () => {
    const { sedes } = useContext(SedesContext);

  return (
    <>
        <div className="row">
            {sedes.map(sede=>(
                <a href={`/#/select-play/${sede.id}`} key={sede.id} className="col btn btn-primary m-3 p-4">{sede.nombre}</a>
            ))}
        </div>
    </>
  )
}

export default Screen