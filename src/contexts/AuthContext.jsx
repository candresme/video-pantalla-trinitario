import { createContext, useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from "../services/fb";

export const UserContext = createContext({ user: null, setUser: () => {} });

const USER_STORAGE_KEY = "user";

export default function UserContextProvider({ children }) {
  useEffect(() => {
    const auth = getAuth(app);
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      sessionStorage.setItem(USER_STORAGE_KEY, JSON.stringify(user));
    });
    return () => unsubscribe();
  }, []);

  const storedUser = JSON.parse(sessionStorage.getItem(USER_STORAGE_KEY));
  const [user, setUser] = useState(storedUser);

  useEffect(() => {
    if (user !== storedUser) {
      sessionStorage.setItem(USER_STORAGE_KEY, JSON.stringify(user));
    }
  }, [user]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
