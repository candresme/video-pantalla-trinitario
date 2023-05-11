import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';

import { PlaylistContext } from '../../contexts/PlaylistContext';
import { VideosContext } from '../../contexts/VideosContext';

const Reproductor = () => {
  const { idPlay } = useParams();
  const { playlist } = useContext(PlaylistContext);
  const { videos } = useContext(VideosContext);

  const playlistFilter = playlist.find(play => play.id === idPlay);

  const videoUrls = Object.keys(playlistFilter.videos)
    .map(videoId => videos.find(video => video.id === videoId)?.url)
    .filter(url => url);

  return (
    <>
      {playlistFilter && (
        <div style={{ position: 'relative', paddingTop: '56.25%' }}>
          <ReactPlayer
            url={videoUrls}
            playing
            controls
            width="100%"
            height="100%"
            fullscreen={true}
            loop
            style={{ position: 'absolute', top: 0, left: 0 }}
          />
        </div>
      )}
    </>
  );
};

export default Reproductor;
