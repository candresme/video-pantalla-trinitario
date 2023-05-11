import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { db } from '../../services/fb';
import { deleteDoc, doc } from "firebase/firestore";

// Importa contextos
import { SedesContext } from '../../contexts/SedesContext';
import { VideosContext } from '../../contexts/VideosContext';
import { PlaylistContext } from '../../contexts/PlaylistContext';

const Playlist = () => {

  const { sedes } = useContext(SedesContext);
  const { videos } = useContext(VideosContext);
  const { playlist, dispatch } = useContext(PlaylistContext);
  const navigate = useNavigate();


  const handleDeletePlaylist = async (playlistId) => {
    try {
      // Elimina la playlist de Firebase
      await deleteDoc(doc(db, "playlist", playlistId));
  
      // Elimina la playlist del contexto
      dispatch({ type: "DELETE_PLAYLIST", payload: playlistId });
  
      // Elimina la playlist del localStorage
      localStorage.removeItem(`playlist-${playlistId}`);
      
       // Muestra un sweetAlert de confirmación
      Swal.fire({
        icon: 'success',
        title: 'Playlist eliminada exitosamente',
        showCancelButton: false,
        showConfirmButton: false,
        timer: 2000,
      }).then(() => {
        navigate('/playlist');
      });
      
    } catch (error) {
      console.error(error);
    }
  };

  const handleConfirmDeletePlaylist = (playlistId) => {
    Swal.fire({
      title: '¿Está seguro que desea eliminar la playlist?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        handleDeletePlaylist(playlistId);
      }
    });
  }

  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Nombre</th>
          <th scope="col">Sede</th>
          <th scope="col">Videos</th>
          <th scope="col">Acción</th>
        </tr>
      </thead>

      <tbody>
        {playlist.map(play => { 
          console.log(play);
          return(
            <tr key={play.id}>
              <td>{play.nombre}</td>
              <td>{sedes.filter(sede => sede.id === play.sede)[0].nombre}</td>
              <td>
              {Object.keys(play.videos).map(videoId => (
                <span class="badge rounded-pill text-bg-secondary">{videos.filter(video => video.id === videoId)[0].nombre}</span>
              ))}
              </td>
              <td>
                <button className="btn btn-primary m-1">Editar</button>
                <button className="btn btn-danger" onClick={() => handleConfirmDeletePlaylist(play.id)}>Eliminar</button>
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default Playlist;
