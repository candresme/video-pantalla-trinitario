import React, { useContext, useState } from 'react';
import Swal from 'sweetalert2';
import {SedesContext} from '../../contexts/SedesContext';
import { db } from '../../services/fb';
import { addDoc, collection } from "firebase/firestore";

const CreateLocation = () => {
  const { sedes, setSedes } = useContext(SedesContext);
  const [newSede, setNewSede] = useState({
    nombre: '',
    direccion: '',
    telefono: '',
    estado: true
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const docRef = await addDoc(collection(db, "sedes"), newSede);
      const sede = {
        id: docRef.id,
        ...newSede
      }
      setSedes([...sedes, sede]);

      sessionStorage.setItem('sedes', JSON.stringify([...sedes, sede]));

      Swal.fire({
        icon: 'success',
        title: 'Sede guardada',
        showCancelButton: false,
        showConfirmButton: false,
        timer: 2000,
      })
      

      setNewSede({
        nombre: '',
        direccion: '',
        telefono: '',
        estado: true
      });

    } catch (error) {
      console.log('Error al guardar la sede:', error);
      Swal.fire({
        icon: 'error',
        title: 'No se pudo guardar',
        showCancelButton: false,
        showConfirmButton: false,
        timer: 2000
      });
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewSede(prevSede => ({
      ...prevSede,
      [name]: value
    }));
  };

  return (
    <form onSubmit={handleSubmit} className='container-fluid text-start'>
        <section className="row align-items-end mb-3">
          <div className="mb-3 col-6">
            <label htmlFor="nombreSede" className="form-label">Nombre de la sede</label>
            <input type="text" className="form-control" id="nombreSede" name="nombre" value={newSede.nombre} onChange={handleChange} required />
          </div>

          <div className="mb-3 col-6">
            <label htmlFor="direccionSede" className="form-label">Dirección</label>
            <input type="text" className="form-control" id="direccionSede" name="direccion" value={newSede.direccion} onChange={handleChange} required />
          </div>

          <div className="mb-3 col-6">
            <label htmlFor="telefonoSede" className="form-label">Teléfono</label>
            <input type="text" className="form-control" id="telefonoSede" name="telefono" value={newSede.telefono} onChange={handleChange} required />
          </div>

          <div className="mb-3 col">
            <input type="checkbox" className="btn-check" id="btn-check-outlined" autoComplete="off" checked={newSede.estado} onChange={() => setNewSede(prevSede => ({...prevSede, estado: !prevSede.estado}))} />
            <label className="btn btn-outline-success" htmlFor="btn-check-outlined">{newSede.estado ? 'Estado: Activo' : 'Estado: Inactivo'}</label>
          </div>
        </section>
        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
          <button type="submit" className="btn btn-primary">Crear nueva sede</button>
        </div>
    </form>
  )
}

export default CreateLocation;
