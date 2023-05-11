import React, { useContext, useState } from 'react';
import Swal from 'sweetalert2';
import { VideosContext } from '../../contexts/VideosContext';
import { db, storage } from '../../services/fb';
import { addDoc, collection } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const CreateVideo = () => {
  const { videos, setVideos } = useContext(VideosContext);
  const [newVideo, setNewVideo] = useState({ nombre: '', url: '' });
  const [loading, setLoading] = useState(false);

  const handleFileChange = async (event) => {
    try {
      setLoading(true);
      const file = event.target.files[0];
      const storageRef = ref(storage, `videos/${file.name}`);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on('state_changed', 
        () => {}, 
        (error) => {
          console.log('Error al cargar el video:', error);
          setLoading(false);
          Swal.fire({
            icon: 'error',
            title: 'No se pudo cargar el video',
            showCancelButton: false,
            showConfirmButton: false,
            timer: 2000
          });
        },
        async () => {
          const url = await getDownloadURL(uploadTask.snapshot.ref);
          setNewVideo(prevVideo => ({...prevVideo, url}));
          setLoading(false);
          Swal.fire({
            icon: 'success',
            title: 'Video cargado',
            showCancelButton: false,
            showConfirmButton: false,
            timer: 2000,
          });
        }
      );
    } catch (error) {
      console.log('Error al cargar el video:', error);
      setLoading(false);
      Swal.fire({
        icon: 'error',
        title: 'No se pudo cargar el video',
        showCancelButton: false,
        showConfirmButton: false,
        timer: 2000
      });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const docRef = await addDoc(collection(db, "videos"), newVideo);
      const video = {
        id: docRef.id,
        ...newVideo
      }
      setVideos([...videos, video]);

      sessionStorage.setItem('video', JSON.stringify([...videos, video]));

      Swal.fire({
        icon: 'success',
        title: 'Video guardado',
        showCancelButton: false,
        showConfirmButton: false,
        timer: 2000,
      });

      setNewVideo({ nombre: '', url: '' });

    } catch (error) {
      console.log('Error al guardar el video:', error);
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
    setNewVideo((prevVideo) => ({ ...prevVideo, [name]: value }));
  };

  return (
    <>
      {loading && (
        <div className="text-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
      <form onSubmit={handleSubmit} className="container-fluid text-start">
        <section className="row align-items-end mb-3">
          <div className="mb-3 col-6">
            <label htmlFor="Nombrevideo" className="form-label">
              Nombre
            </label>
            <input
              type="text"
              className="form-control"
              id="Nombrevideo"
              value={newVideo.nombre}
              onChange={handleChange}
              name="nombre"
            />
          </div>

          <div className="mb-3 col-6">
            <label htmlFor="video" className="form-label">
              Video
            </label>
            <input
              type="file"
              className="form-control"
              id="video"
              onChange={handleFileChange}
              accept="video/*"
              name="video"
            />
          </div>
        </section>
        <button type="submit" className="btn btn-primary">
          Guardar
        </button>
      </form>
    </>
  );
};

export default CreateVideo;