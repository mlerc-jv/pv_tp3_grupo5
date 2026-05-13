import "../css/ListaProyectos.css";
import { useState } from "react";
import proyectoService from "../services/proyectoService";

function ListaProyectos() {

    const [proyectos, setProyectos] = useState(
        proyectoService.obtenerProyectos()
    );

    const handleEliminar = (id) => {

        proyectoService.eliminarProyecto(id);

        setProyectos(
            proyectoService.obtenerProyectos()
        );
    };

    const handleBuscar = (e) => {

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

            <input
                className="buscador"
                type="text"
                placeholder="Buscar proyecto..."
                onChange={handleBuscar}
            />

            {
                proyectos.map((proyecto) => (
                    <div key={proyecto.id} className="card-proyecto">

                        <h3>{proyecto.titulo}</h3>

                        <p>
                            Categoría: {proyecto.categoria}
                        </p>

                        <p>
                            Estado: {proyecto.estado}
                        </p>

                        <button
                            onClick={() =>
                                handleEliminar(proyecto.id)
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
}

export default ListaProyectos;