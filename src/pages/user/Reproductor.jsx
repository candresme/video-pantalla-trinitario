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

  const videoIds = Object.keys(playlistFilter.videos);
  const videoUrls = videoIds.map(videoId => {
    const video = videos.find(video => video.id === videoId);
    return video.url;
  });

  const videoListUrl = videoUrls.join(',');

  return (
    <>
      {playlistFilter && (
        <ReactPlayer
          url={videoListUrl}
          controls
          playing
          loop
          width="100%"
          height="100%"
        />
      )}
    </>
  );
};

export default Reproductor;
