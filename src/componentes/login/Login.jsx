import style from './Login.module.css';
import imgLogo from './6259.png';

function Login(){
    return(
        <div className={style.Body}>
            <div className={style.Card}>
                <img className={style.imgLogo} src={imgLogo} alt="" />
                <input className={style.inputDatos} type="text" placeholder='Nombre de usuario'/>
                <input className={style.inputDatos} type="password" placeholder='Contraseña'/>
                <span className={style.recoveryPass}>Olvide mi Contraseña</span>
                <button id="btniniciar" class={style.button}>Iniciar sesión</button>
            </div>
        </div>
        
    )
    
}
export default Login;