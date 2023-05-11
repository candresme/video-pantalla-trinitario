import React, { createContext, useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../services/fb";

export const VideosContext = createContext();

const VideosContextProvider = (props) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const getVideos = async () => {
      try {
        const videosRef = collection(db, "videos");
        const videosSnapshot = await getDocs(videosRef);
        const videosData = videosSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setVideos(videosData);
        sessionStorage.setItem("videos", JSON.stringify(videosData));
      } catch (error) {
        console.log("Error al obtener los videos:", error);
      }
    };
    getVideos();
  }, []);

  return (
    <VideosContext.Provider value={{ videos, setVideos }}>
      {props.children}
    </VideosContext.Provider>
  );
};

export default VideosContextProvider;
