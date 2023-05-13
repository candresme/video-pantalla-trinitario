import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';

import { PlaylistContext } from '../../contexts/PlaylistContext';
import { VideosContext } from '../../contexts/VideosContext';

const Reproductor = () => {
  const { idPlay } = useParams();
  const { playlist } = useContext(PlaylistContext);
  const { videos } = useContext(VideosContext);

  const playlistFilter = playlist.find(play => play.id === idPlay);

  const getVideoUrls = () => {
    const videoIds = Object.keys(playlistFilter.videos);
    const urls = videoIds.map(videoId => {
      const url = videos.find(video => video.id === videoId)?.url;
      console.log(ReactPlayer.canPlay(url));
      return url;
    }).filter(url => url);
    return urls.join(',');
  }

  useEffect(() => {
    console.log(getVideoUrls());
  });

  return (
    <>
      {playlistFilter && (
        <ReactPlayer
          url={getVideoUrls()}
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
