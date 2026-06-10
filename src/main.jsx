import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./css/index.css";
import App from "./App.jsx";

import { UsuarioProvider } from "./context/UsuarioContext.jsx";
import { ProveedorAutorizaciones } from "./context/AutorizacionesContext.jsx";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <ProveedorAutorizaciones>
            <UsuarioProvider>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </UsuarioProvider>
        </ProveedorAutorizaciones>
    </StrictMode>
);