import "../css/header.css";
import { useAutorizaciones } from "../hook/useAutorizaciones";

const Header = () => {

    const { usuarioActivo, cerrarSesion } = useAutorizaciones();

    return (
        <header className="header">
            <div className="texto">
                <h1>Gestion de Proyectos Educativos</h1>
                <p>Bienvenidos a la plataforma "Proyectos Educativos", <br />
                    en esta podras visualizar tus tareas, proyectos en curso y terminados.<br />
                    Podras comunicarte con profesores y compañeros
                </p>            
            </div>
           
           {
              usuarioActivo && (
                  <div className="usuario-header">
                      <p>
                          {usuarioActivo.nombre} - {usuarioActivo.rol}
                      </p>

                      <button onClick={cerrarSesion}>
                          Cerrar sesión
                      </button>
                  </div>
               )
           }
        </header>
    );
};
export default Header;