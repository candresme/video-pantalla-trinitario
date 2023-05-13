import React, { useState, useEffect, useRef, useContext } from 'react';
import { useParams } from 'react-router-dom';
import screenfull from 'screenfull';

import { VideosContext } from '../../contexts/VideosContext';
import { PlaylistContext } from '../../contexts/PlaylistContext';

const Reproductor = () => {
  const { idPlay } = useParams();
  const { videos } = useContext(VideosContext);
  const { playlist } = useContext(PlaylistContext);

  const playlistFilter = playlist.find(play => play.id === idPlay);

  const playlistVideos = Object.keys(playlistFilter.videos).map(videoId => videos.find(video => video.id === videoId));

  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const videoRef = useRef(null);

  const handleVideoEnd = () => {
    if (currentVideoIndex < playlistVideos.length - 1) {
      setCurrentVideoIndex(currentVideoIndex + 1);
    } else {
      setCurrentVideoIndex(0);
    }
  };

  useEffect(() => {
    const videoPlayer = videoRef.current;

    // Set the first video source
    videoPlayer.src = playlistVideos[currentVideoIndex].url;

    // Add the event listener for the 'ended' event
    videoPlayer.addEventListener('ended', handleVideoEnd);

    // Clean up the event listener on unmount
    return () => {
      videoPlayer.removeEventListener('ended', handleVideoEnd);
    };
  }, [currentVideoIndex, playlistVideos]);

  useEffect(() => {
    const videoPlayer = videoRef.current;

    // Enter fullscreen mode on load
    if (screenfull.isEnabled) {
      screenfull.request(videoPlayer);
    }
  }, []);

  return (
    <video ref={videoRef} className="video-js vjs-big-play-centered" autoPlay playsInline/>
  );
};

export default Reproductor;
