import { Navigate } from "react-router-dom";
import { useAutorizaciones } from "../hook/useAutorizaciones";

function RutaProtegida({ children }) {
    const { usuarioActivo } = useAutorizaciones();

    if (!usuarioActivo) {
        return <Navigate to="/error" />;
    }

    return children;
}

export default RutaProtegida;