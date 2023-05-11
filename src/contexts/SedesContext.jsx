import React, { createContext, useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../services/fb";

export const SedesContext = createContext();

const SedesContextProvider = (props) => {
  const [sedes, setSedes] = useState([]);

  useEffect(() => {
    const getSedes = async () => {
      try {
        const sedesRef = collection(db, "sedes");
        const sedesSnapshot = await getDocs(sedesRef);
        const sedesData = sedesSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setSedes(sedesData);
        sessionStorage.setItem("sedes", JSON.stringify(sedesData));
      } catch (error) {
        console.log("Error al obtener las sedes:", error);
      }
    };
    getSedes();
  }, []);

  return (
    <SedesContext.Provider value={{ sedes, setSedes }}>
      {props.children}
    </SedesContext.Provider>
  );
};

export default SedesContextProvider;
