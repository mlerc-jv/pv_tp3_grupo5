import { useEffect, useState, useRef } from "react";

import proyectoService from "../services/proyectoService";

import ProyectoCard from "./ProyectoCard";
import FormProyecto from "./FormProyecto";
import DetalleProyecto from "./DetalleProyecto";
import RegistroActividad from "./RegistroActividad";

const ListaProyectos = () => {

    const [proyectos, setProyectos] = useState(() => {

        const proyectosGuardados = localStorage.getItem("proyectos");

        return proyectosGuardados
            ? JSON.parse(proyectosGuardados)
            : proyectoService.obtenerProyectosDisponibles();
    });

    const [busqueda, setBusqueda] = useState("");

    const [proyectoSeleccionado, setProyectoSeleccionado] = useState(null);

    const [fechaHora, setFechaHora] = useState("");

    const primeraCarga = useRef(true);

    useEffect(() => {

        localStorage.setItem(
            "proyectos",
            JSON.stringify(proyectos)
        );

        if (primeraCarga.current) {

            primeraCarga.current = false;
            return;
        }

        const fecha = new Date();

        const dia = fecha.getDate();

        const mes = fecha.getMonth() + 1;

        const anio = fecha.getFullYear();

        const hora = fecha.getHours();

        const minutos = fecha.getMinutes()
            .toString()
            .padStart(2, "0");

        const mensaje =
            `${dia}/${mes}/${anio} a las ${hora}:${minutos} hs.`;

        setFechaHora(mensaje);

    }, [proyectos]);

    const agregarProyecto = (nuevoProyecto) => {

        proyectoService.agregarProyecto(nuevoProyecto);

        const proyectosActualizados =
            proyectoService.obtenerProyectosDisponibles();

        setProyectos(proyectosActualizados);
    };

    const eliminarProyecto = (id) => {

        proyectoService.eliminarProyecto(id);

        const proyectosActualizados =
            proyectoService.obtenerProyectosDisponibles();

        setProyectos(proyectosActualizados);

        if (
            proyectoSeleccionado &&
            proyectoSeleccionado.id === id
        ) {
            setProyectoSeleccionado(null);
        }
    };

    const verDetalle = (proyecto) => {

        if (
            proyectoSeleccionado &&
            proyectoSeleccionado.id === proyecto.id
        ) {

            setProyectoSeleccionado(null);

        } else {

            setProyectoSeleccionado(proyecto);
        }
    };

    const cerrarDetalle = () => {

        setProyectoSeleccionado(null);
    };

    const manejarBusqueda = (e) => {

        const texto = e.target.value;

        setBusqueda(texto);

        if (texto.trim() === "") {

            setProyectos(
                proyectoService.obtenerProyectosDisponibles()
            );

        } else {

            const resultados =
                proyectoService.buscarProyecto(texto);

            setProyectos(resultados);
        }
    };

    return (

        <section className="panel-trabajo">

            <FormProyecto
                agregarProyecto={agregarProyecto}
            />

            <div className="encabezado-lista">

                <h2>Lista de proyectos</h2>

                <div className="busqueda">

                    <label>Buscar por título</label>

                    <input
                        type="text"
                        placeholder="Ej: biblioteca"
                        value={busqueda}
                        onChange={manejarBusqueda}
                    />

                </div>

            </div>

            <div className="lista-proyectos">

                {
                    proyectos.map((proyecto) => (

                        <div key={proyecto.id}>

                            <ProyectoCard
                                proyecto={proyecto}
                                eliminarProyecto={eliminarProyecto}
                                verDetalle={verDetalle}
                            />

                            {
                                proyectoSeleccionado &&
                                proyectoSeleccionado.id === proyecto.id && (

                                    <DetalleProyecto
                                        proyecto={proyectoSeleccionado}
                                        cerrarDetalle={cerrarDetalle}
                                    />

                                )
                            }

                        </div>

                    ))
                }

            </div>

            {
                fechaHora !== "" && (

                    <RegistroActividad
                        fechaHora={fechaHora}
                    />

                )
            }

        </section>
    );
};

export default ListaProyectos;