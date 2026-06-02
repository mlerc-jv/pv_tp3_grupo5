import "../css/ListaProyectos.css"
import { useEffect, useState, useRef } from "react";

import proyectoService from "../services/proyectoService";

import ProyectoCard from "../components/ProyectoCard";
import FormProyecto from "../components/FormProyecto";
import DetalleProyecto from "./DetalleProyecto";
import RegistroActividad from "../components/RegistroActividad";

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

        const dia = fecha.getDate()
             .toString()
             .padStart(2, "0");

        const mes = (fecha.getMonth() + 1)
             .toString()
             .padStart(2, "0");

        const anio = fecha.getFullYear();

        const hora = fecha.getHours()
             .toString()
             .padStart(2,"0");

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

      setBusqueda(e.target.value);
    };

    const proyectosFiltrados = busqueda.trim() === ""
    ? proyectos
    : proyectos.filter((proyecto) =>
        proyecto.titulo
            .toLowerCase()
            .includes(busqueda.toLowerCase())
    );

    return (

        <section className="panel-trabajo">

            <FormProyecto
                agregarProyecto={agregarProyecto}
            />

            <div className="encabezado-lista">

                <h2>LISTA DE PROYECTOS</h2>

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

                    {proyectosFiltrados.map((proyecto) => (
                        <div key={proyecto.id}>
                         <ProyectoCard
                            proyecto={proyecto}
                            eliminarProyecto={eliminarProyecto}
                            verDetalle={verDetalle}
                         />
                        </div>
                    ))}
            </div>
            {
             proyectoSeleccionado && (
              <DetalleProyecto
                proyecto={proyectoSeleccionado}
                cerrarDetalle={cerrarDetalle}
              />
            )}

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