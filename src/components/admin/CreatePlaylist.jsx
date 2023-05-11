import React, { useContext, useState } from 'react';
import Swal from 'sweetalert2';
import { db } from '../../services/fb';
import { addDoc, collection } from "firebase/firestore";

// Importa contextos
import { SedesContext } from '../../contexts/SedesContext';
import { VideosContext } from '../../contexts/VideosContext';
import { PlaylistContext } from '../../contexts/PlaylistContext';

const CreatePlaylist = () => {

  const {sedes} = useContext(SedesContext);
  const {videos} = useContext(VideosContext);
  const {playlist, setPlaylist } = useContext(PlaylistContext);

  const [newPlaylist, setNewPlaylist] = useState({ nombre: '', sede: '', videos: {} });
  const [selectedVideos, setSelectedVideos] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const docRef = await addDoc(collection(db, "playlist"), {
        ...newPlaylist,
        videos: selectedVideos.reduce((obj, videoId) => ({ ...obj, [videoId]: true }), {})
      });
      const list = {
        id: docRef.id,
        ...newPlaylist,
        videos: selectedVideos.reduce((obj, videoId) => ({ ...obj, [videoId]: true }), {})
      }
      setPlaylist([...playlist, list]);
      sessionStorage.setItem('playlist', JSON.stringify([...playlist, list]));

      Swal.fire({
        icon: 'success',
        title: 'Playlist guardada',
        showCancelButton: false,
        showConfirmButton: false,
        timer: 2000,
      });

      setNewPlaylist({  nombre: '', sede: '', videos:{} });
      setSelectedVideos([]);

    } catch (error) {
      console.log('Error al guardar la playlist:', error);
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
    setNewPlaylist((prevPlaylist) => ({ ...prevPlaylist, [name]: value }));
  };

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedVideos([...selectedVideos, value]);
    } else {
      setSelectedVideos(selectedVideos.filter((video) => video !== value));
    }
  };

  return (
              
              <form className="row" onSubmit={handleSubmit}>
                <h2 className="mb-4">Crear Nueva Playlist</h2>
                
                <div className="mb-3 col-5">

                  <label htmlFor="nombre" className="form-label">
                    Nombre de la Playlist
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    value={newPlaylist.nombre}
                    onChange={handleChange}
                    required
                    className="form-control"
                  />

                </div>

                <div className="mb-3 col-5">

                  <label htmlFor="sede" className="form-label">
                    Sede
                  </label>
                  <select
                    id="sede"
                    name="sede"
                    value={newPlaylist.sede}
                    onChange={handleChange}
                    required
                    className="form-control"
                  >
                    <option value="" disabled>
                      Selecciona una sede
                    </option>
                    {sedes.map((sede) => (
                      <option key={sede.id} value={sede.id}>
                        {sede.nombre}
                      </option>
                    ))}
                  </select>

                </div>

                <div className="mb-3 col-5">

                  <label className="form-label">Seleccione los videos</label>
                  <div className="form-check col-3">
                    {videos.map((video) => (
                      <div className="" key={video.id}>
                        <input
                          type="checkbox"
                          id={`video-${video.id}`}
                          name="videos"
                          value={video.id}
                          checked={selectedVideos.includes(video.id)}
                          onChange={handleCheckboxChange}
                          className="form-check-input"
                        />
                        <label
                          htmlFor={`video-${video.id}`}
                          className="form-check-label"
                        >
                          {video.nombre}
                        </label>
                      </div>
                    ))}
                  </div>

                </div>
                <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                  <button type="submit" className="btn btn-primary">Crear playlist</button>
                </div>
              </form>
  );
  
    
}

export default CreatePlaylist