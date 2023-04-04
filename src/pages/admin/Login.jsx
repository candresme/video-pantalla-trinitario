import React, { useContext } from 'react';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { UserContext } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';

import {app} from '../../services/fb';

const Login = () => {
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const iniciarSesion = (correo, password) => {
    const auth = getAuth(app);
    signInWithEmailAndPassword(auth, correo, password)
      .then((userCredential) => {
        console.log("sesión iniciada con:", userCredential.user);
        setUser(userCredential.user);
        Swal.fire({
          icon: 'success',
          title: '¡Inicio de sesión exitoso!',
          showConfirmButton: false,
          timer: 1500
        }).then(() => {
            navigate('/admin');
        });
      })
      .catch((error) => {
        console.error("Error al iniciar sesión:", error.code, error.message);
        Swal.fire({
          icon: 'error',
          title: '¡Error!',
          text: 'Usuario o contraseña incorrectos',
          confirmButtonText: 'Intentar de nuevo'
        });
      });        
  };
    
  const submitHandler = (e) => {
    e.preventDefault();
    const correo = e.target.emailField.value;
    const password = e.target.passwordField.value;              
    iniciarSesion(correo, password);  
  };

  return (
    <div className="row m-5 justify-content-center">
        <form className='col-5' onSubmit={submitHandler}>
            <div className="mb-3">
                <label htmlFor="emailField" className="form-label">Email</label>
                <input type="email" className="form-control" id="emailField" aria-describedby="emailHelp"/>                
            </div>
            <div className="mb-3">
                <label htmlFor="passwordField" className="form-label">Contraseña</label>
                <input type="password" className="form-control" id="passwordField"/>
            </div>            
            <button type="submit" className="btn btn-primary">Iniciar Sesión</button>
        </form>
    </div>
  );
};

export default Login;
