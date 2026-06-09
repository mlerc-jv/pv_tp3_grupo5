import { createContext, useState, useEffect } from "react";

export const UsuarioContext = createContext(null);
export const UsuarioProvider=({children})=>{
    const [usuario, setUsuario]=useState(()=>{
        const usuarioGuardado=localStorage.getItem("usuario");
        if (usuarioGuardado){
            return JSON.parse(usuarioGuardado);
        }
        return null;
    });
    const actualizarPerfil=(nuevosDatos)=>{
        setUsuario((datosActuales)=>({
            ...datosActuales,
            ...nuevosDatos
        }));
    };
    useEffect(()=>{
        if(usuario){
            localStorage.setItem("usuario",
                JSON.stringify(usuario));
        }
        else{
            localStorage.removeItem("usuario");
        }
    },[usuario]);
    return(
        <UsuarioContext.Provider value={{usuario, actualizarPerfil}}>
            {children}
        </UsuarioContext.Provider>
    );
};