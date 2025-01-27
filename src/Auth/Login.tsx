import React, { useState } from 'react';
import './Styles.module.css'; 
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const LoginForm: React.FC = () => {
    const [role, setRole] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        console.log({ role, username, password });
      
    };

    const navigate = useNavigate();
    const hadleClick = () => navigate('/roles') 

    return (
        <div className = 'loginForm'>
            <div className= 'loginFormContent'>
                <h1>Iniciar Sesión</h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="role">Rol de Usuario:</label>
                        <select id="role" value={role} onChange={(e) => setRole(e.target.value)}>
                            <option value="">Seleccione un rol</option>
                            <option value="admin">Administrador</option>
                            <option value="user">Usuario</option>
                            <option value="guest">Invitado</option>
                        </select>
                    </div>
                    <div className= 'inputGroup'>
                        <label htmlFor="username">
                            <FaUser className= 'userIcon' />
                            Usuario:
                        </label> 
                        <input 
                            type="text" 
                            id="username" 
                            value={username} 
                            onChange={(e) => setUsername(e.target.value)} 
                            required 
                        />
                    </div>
                    <div>
                        <label htmlFor="password">
                            <FaLock className= 'PasswordIcon' />
                            Contraseña:
                        </label>
                        <input 
                            type="password" 
                            id="password" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                            required 
                        />
                    </div>
                    <button onClick ={hadleClick}>Iniciar Sesión</button>
                </form>
            </div>
        </div>
    );
};

export default LoginForm;
