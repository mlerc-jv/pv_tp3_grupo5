import "../css/ListaProyectos.css";
import { useState } from "react";
import proyectoService from "../services/proyectoService";

import ProyectoCard from "./ProyectoCard";
import FormProyecto from "./FormProyecto";
import DetalleProyecto from "./DetalleProyecto";

const ListaProyectos=() => {

    const [proyectos, setProyectos] = useState(
        proyectoService.obtenerProyectos()
    );

    const [proyectoSeleccionado, setProyectoSeleccionado]=useState(null);

    const manejarEliminar = (id) => {

        proyectoService.eliminarProyecto(id);

        setProyectos(
            proyectoService.obtenerProyectos()
        );
    };

    const manejarBuscar = (e) => {

        const texto = e.target.value;

        if (texto === "") {

            setProyectos(
                proyectoService.obtenerProyectos()
            );

        } else {
            setProyectos(
                proyectoService.buscarProyecto(texto)
            );
        }
    };

    const manejarVerDetalle = (proyecto) => {

        setProyectoSeleccionado(proyecto);
    };

    const cerrarDetalle = () => {

        setProyectoSeleccionado(null);
    };

    const agregarProyecto = (nuevoProyecto) => {

        proyectoService.agregarProyecto(nuevoProyecto);

        setProyectos(
            proyectoService.obtenerProyectos()
        );
    };
    return(

        <main className="lista-proyectos">

            <h2>Lista de Proyectos</h2>

            <FormProyecto agregarProyecto={agregarProyecto} />

            <input
                className="buscador"
                type="text"
                placeholder="Buscar proyecto..."
                onChange={manejarBuscar}
            />
            {
                proyectos.map((proyecto) => (
                    <ProyectoCard
                        key={proyecto.id}
                        proyecto={proyecto}
                        eliminarProyecto={manejarEliminar}
                        verDetalle={manejarVerDetalle}
                    />

                ))
            }
            {
                proyectoSeleccionado && (
                    <DetalleProyecto
                        proyecto={proyectoSeleccionado}
                        cerrarDetalle={cerrarDetalle}
                    />

                )
            }
        </main>
    );
};

export default ListaProyectos;