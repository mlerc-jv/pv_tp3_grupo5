import { createContext, useState, useEffect } from "react";

export const UsuarioContext = createContext(null);

export const UsuarioProvider = ({ children, usuarioActivo }) => {

    const [usuario, setUsuario] = useState(null);

    useEffect(() => {
        if (usuarioActivo) {
            setUsuario(usuarioActivo);
        }
    }, [usuarioActivo]);

    const actualizarPerfil = (nuevosDatos) => {
        setUsuario((datosActuales) => ({
            ...datosActuales,
            ...nuevosDatos
        }));
    };

    useEffect(() => {
        if (usuario) {
            localStorage.setItem("usuario", JSON.stringify(usuario));
        } else {
            localStorage.removeItem("usuario");
        }
    }, [usuario]);

    return (
        <UsuarioContext.Provider value={{ usuario, actualizarPerfil }}>
            {children}
        </UsuarioContext.Provider>
    );
};