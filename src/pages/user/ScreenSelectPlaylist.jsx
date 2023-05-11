import React, {useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';

//import contexts
import { PlaylistContext } from '../../contexts/PlaylistContext';

const ScreenSelectPlaylist = () => {

  const { idSede } = useParams();
  const {playlist} = useContext(PlaylistContext);
  const playlistXSede = playlist.filter(play => idSede === play.sede);

  return (
    <>
      {playlistXSede.map(play =>(
        <a href={`/#/reproductor/${play.id}`} key={play.id} className="col btn btn-primary m-3 p-4">{play.nombre}</a>
      ))}

    </>
  )
}

export default ScreenSelectPlaylist