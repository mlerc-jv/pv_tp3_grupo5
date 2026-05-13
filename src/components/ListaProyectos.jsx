import "../css/ListaProyectos.css";
import { useState } from "react";
import proyectoService from "../services/proyectoService";

const ListaProyectos = () => {

    const [proyectos, setProyectos] = useState(
        proyectoService.obtenerProyectos()
    );

    const [nuevoTitulo, setNuevoTitulo] = useState("");
    const [nuevaCategoria, setNuevaCategoria] = useState("");
    const [nuevoEstado, setNuevoEstado] = useState("");

    const manejarAgregar = () => {

        if (
            nuevoTitulo === "" ||
            nuevaCategoria === "" ||
            nuevoEstado === ""
        ) {
            return;
        }

        const nuevoProyecto = {
            id: Date.now(),
            titulo: nuevoTitulo,
            categoria: nuevaCategoria,
            estado: nuevoEstado
        };

        proyectoService.agregarProyecto(nuevoProyecto);

        setProyectos(
            proyectoService.obtenerProyectos()
        );

        setNuevoTitulo("");
        setNuevaCategoria("");
        setNuevoEstado("");
    };

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

    return (
        <main className="lista-proyectos">

            <h2>Lista de Proyectos</h2>

            <div className="formulario">

                <input
                    type="text"
                    placeholder="Título"
                    value={nuevoTitulo}
                    onChange={(e) =>
                        setNuevoTitulo(e.target.value)
                    }
                />

                <input
                    type="text"
                    placeholder="Categoría"
                    value={nuevaCategoria}
                    onChange={(e) =>
                        setNuevaCategoria(e.target.value)
                    }
                />

                <input
                    type="text"
                    placeholder="Estado"
                    value={nuevoEstado}
                    onChange={(e) =>
                        setNuevoEstado(e.target.value)
                    }
                />

                <button onClick={manejarAgregar}>
                    Agregar Proyecto
                </button>

            </div>

            <input
                className="buscador"
                type="text"
                placeholder="Buscar proyecto..."
                onChange={manejarBuscar}
            />

            {
                proyectos.map((proyecto) => (
                    <div
                        key={proyecto.id}
                        className="card-proyecto"
                    >

                        <h3>{proyecto.titulo}</h3>

                        <p>
                            Categoría: {proyecto.categoria}
                        </p>

                        <p>
                            Estado: {proyecto.estado}
                        </p>

                        <button
                            onClick={() =>
                                manejarEliminar(proyecto.id)
                            }
                        >
                            Eliminar
                        </button>

                        <hr />

                    </div>
                ))
            }

        </main>
    );
};

export default ListaProyectos;