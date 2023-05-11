import React, { useContext } from 'react';
import Swal from 'sweetalert2';
import { db } from '../../services/fb';
import { deleteDoc, doc, getDocs, collection } from "firebase/firestore";
import { VideosContext } from '../../contexts/VideosContext';

const Locations = () => {
  const { videos, dispatch } = useContext(VideosContext);

  const handleDeleteVideo = async (videoId) => {
    try {
      // Elimina el video de Firebase
      await deleteDoc(doc(db, "videos", videoId));

      // Elimina el video del contexto
      dispatch({ type: "DELETE_VIDEO", payload: videoId });

      // Elimina el video del localStorage
      localStorage.removeItem(`video-${videoId}`);
      
      // Muestra un sweetAlert de confirmación
      Swal.fire({
        icon: 'success',
        title: 'Video eliminado exitosamente',
        showCancelButton: false,
        showConfirmButton: false,
        timer: 2000,
      });
      
    } catch (error) {
      console.error(error);
    }
  };

  const handleConfirmDeleteVideo = (videoId) => {
    Swal.fire({
      title: '¿Está seguro que desea eliminar el video?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        handleDeleteVideo(videoId);
      }
    });
  }

  return (
    <table className="table text-center">
      <thead>
        <tr>
          <th scope="col">URL</th>
          <th scope="col">Nombre</th>
          <th scope="col">Acción</th>
        </tr>
      </thead>
      <tbody>
        {videos.map(video => (
          <tr key={video.id} className="align-middle">
            <td>              
              <video src={video.url} width="220" controls />              
            </td>
            <td>{video.nombre}</td>
            <td>
              <button className="btn btn-primary m-1">Editar</button>
              <button className="btn btn-danger m-1" onClick={() => handleConfirmDeleteVideo(video.id)}>Eliminar</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Locations;
