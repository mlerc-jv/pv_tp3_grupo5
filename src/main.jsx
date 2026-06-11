import { StrictMode, useContext } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./css/index.css";
import App from "./App.jsx";

import { UsuarioProvider } from "./context/UsuarioContext.jsx";
import {
    ProveedorAutorizaciones,
    AutorizacionesContext
} from "./context/AutorizacionesContext.jsx";

const SincronizadorUsuario = ({ children }) => {
  const { usuarioActivo } = useContext(AutorizacionesContext);
     return (
        <UsuarioProvider usuarioActivo={usuarioActivo}>
            {children}
        </UsuarioProvider>
    );
};

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <ProveedorAutorizaciones>
            <SincronizadorUsuario>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </SincronizadorUsuario>
        </ProveedorAutorizaciones>
    </StrictMode>
);