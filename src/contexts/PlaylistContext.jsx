import React, { createContext, useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../services/fb";

export const PlaylistContext = createContext();

const PlaylistContextProvider = (props) => {
  const [playlist, setPlaylist] = useState([]);

  useEffect(() => {
    const getPlaylist = async () => {
      try {
        const PlaylistRef = collection(db, "playlist");
        const PlaylistSnapshot = await getDocs(PlaylistRef);
        const PlaylistData = PlaylistSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setPlaylist(PlaylistData);
        sessionStorage.setItem("playlist", JSON.stringify(PlaylistData));
      } catch (error) {
        console.log("Error al obtener las Playlist:", error);
      }
    };
    getPlaylist();
  }, []);

  return (
    <PlaylistContext.Provider value={{ playlist, setPlaylist }}>
      {props.children}
    </PlaylistContext.Provider>
  );
};

export default PlaylistContextProvider;
