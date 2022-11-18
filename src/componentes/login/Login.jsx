import style from './Login.module.css';
import imgLogo from './6259.png';
import { useEffect, useState } from 'react';
import Loading from './Loading/Loading';
import ReactDOM from 'react-dom/client';

function Login(){
    const [hola, setHola] = useState("");
    const root = ReactDOM.createRoot(document.getElementById('root'));
    const btnLogin = () => {
        setHola(
                root.render(
                    <Loading />
                )
        )
    };
    return(
        <div className={style.Body}>
            <div className={style.Card}>
                <img className={style.imgLogo} src={imgLogo} alt="" />
                <input className={style.inputDatos} type="text" placeholder='Nombre de usuario'/>
                <input className={style.inputDatos} type="password" placeholder='Contraseña'/>
                <span className={style.recoveryPass}>Olvide mi Contraseña</span>
                <button id="btniniciar" class={style.button} onClick={btnLogin}>Iniciar sesión</button>
                <h1 className={style.load}>{hola}</h1>
            </div>
        </div>
        
    )
    
}
export default Login;