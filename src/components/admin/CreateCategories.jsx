import React from 'react'

const CreateCategories = () => {
  return (
    <form className='container-fluid text-start'>
        <section className="row align-items-end mb-3">
          <div className="mb-3 col-6">
            <label for="nombreProducto" className="form-label">Nombre categoría</label>
            <input type="text" className="form-control" id="nombreProducto"/>
          </div>

          <div className="mb-3 col-12">
            <label for="floatingTextarea">Descripción</label>
            <textarea className="form-control" placeholder="Descripción de la categoría" id="floatingTextarea"></textarea>
          </div>
        </section>

        <section className="row align-items-end mb-3"> 

          <div className="col-5 shadow rounded p-4 m-2">
            <h2>Nombre sede:</h2>      
            <div className="mb-3 col">
              <input type="checkbox" className="btn-check" id="btn-check-outlined" autocomplete="off"/>
              <label className="btn btn-outline-success" for="btn-check-outlined">Estado: Activo</label>
            </div>
          </div>

          <div className="col-5 shadow rounded p-4 m-2">
            <h2>Nombre sede:</h2>     
            <div className="mb-3 col">
              <input type="checkbox" className="btn-check" id="btn-check-outlined" autocomplete="off"/>
              <label className="btn btn-outline-success" for="btn-check-outlined">Estado: Activo</label>
            </div>
          </div>

        </section>

        <button type="submit" className="btn btn-primary">Guardar</button>
    </form>
  )
}

export default CreateCategories