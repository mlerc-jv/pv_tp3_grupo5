import "../css/Nav.css";
import { NavLink } from "react-router-dom";

const Nav = () => {
    return (
        <nav className="nav">
            <ul className="nav-lista">
                <li>
                    <NavLink to="/dashboard">
                        Dashboard
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/proyectos">
                        Proyectos
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/perfil">
                        Perfil
                    </NavLink>
                </li>

            </ul>
        </nav>
    );
};
export default Nav;