import React from 'react'

const CreateProducts = () => {
  return (
    <form className='container-fluid text-start'>
      <h2>Datos básicos</h2>  
      <section className="row align-items-end mb-3">
        <div className="mb-3 col-6">
          <label for="nombreProducto" className="form-label">Nombre del Producto</label>
          <input type="text" className="form-control" id="nombreProducto"/>
        </div>

        <div className="mb-3 col-3">
          <label for="formFile">Añadir foto</label>
          <input className="form-control" type="file" id="formFile"/>
        </div>

        <div className="mb-3 col-3">
          <label for="categoria">Categoria</label>
          <select id="categoria" className="form-select">
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>

        <div className="mb-3 col-12">
          <label for="floatingTextarea">Descripción</label>
          <textarea className="form-control" placeholder="Descripción del producto" id="floatingTextarea"></textarea>
        </div>
      </section>

      <section className="row align-items-end mb-3">  
       
        <div className="col-5 shadow rounded p-4 m-2">
          <h2>Nombre sede:</h2>      
          <div className="mb-3 col">
            <label for="precio" className="form-label">Precio sede...</label>
            <input type="number" className="form-control" id="precio"/>
          </div>

          <div className="mb-3 col">
            <input type="checkbox" className="btn-check" id="btn-check-outlined" autocomplete="off"/>
            <label className="btn btn-outline-success" for="btn-check-outlined">Estado: Activo</label>
          </div>
        </div>

        <div className="col-5 shadow rounded p-4 m-2">
          <h2>Nombre sede:</h2>     
          <div className="mb-3 col">
            <label for="precio" className="form-label">Precio sede...</label>
            <input type="number" className="form-control" id="precio"/>
          </div>

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

export default CreateProducts