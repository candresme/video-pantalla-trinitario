import React, { useContext } from 'react';
import {SedesContext} from '../../contexts/SedesContext';
import Swal from 'sweetalert2';
import { db } from '../../services/fb';
import { deleteDoc, doc } from "firebase/firestore";

const Locations = () => {
  const { sedes, dispatch } = useContext(SedesContext);

  const handleDeleteSede = async (sede) => {
    try {
      // Elimina la sede de Firebase
      await deleteDoc(doc(db, "sedes", sede));

      // Elimina la sede del contexto
      dispatch({ type: "DELETE_SEDE", payload: sede });

      // Elimina la sede del localStorage
      localStorage.removeItem(`sede-${sede}`);
      
      // Muestra un sweetAlert de confirmación
      Swal.fire({
        icon: 'success',
        title: 'Sede Eliminada exitosamente',
        showCancelButton: false,
        showConfirmButton: false,
        timer: 2000,
      });
      
    } catch (error) {
      console.error(error);
    }
  };

  const handleConfirmDeleteSede = (sede) => {
    Swal.fire({
      title: '¿Está seguro que desea eliminar la sede?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        handleDeleteSede(sede);
      }
    });
  }

  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Nombre</th>
          <th scope="col">Dirección</th>
          <th scope="col">Teléfono</th>
          <th scope="col">Estado</th>
          <th scope="col">Acción</th>
        </tr>
      </thead>
      <tbody>
        {sedes.map(sede => (
          <tr key={sede.id}>
            <td>{sede.nombre}</td>
            <td>{sede.direccion}</td>
            <td>{sede.telefono}</td>
            <td>{sede.estado ? 'Activo' : 'Inactivo'}</td>
            <td>
              <button className="btn btn-primary m-1">Editar</button>
              <button className="btn btn-danger m-1" onClick={() => handleConfirmDeleteSede(sede.id)}>Eliminar</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Locations;
