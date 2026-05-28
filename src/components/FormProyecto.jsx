import "../css/FormProyecto.css";
import { useState } from "react";

const FormProyecto = ({ agregarProyecto }) => {

    const [formulario, setFormulario] = useState({
        titulo: "",
        categoria: "",
        estado: "",
        descripcion: "",
        descripcion2: "",
        recursos: {
            pdf: "",
            drive: "",
            github: ""
        },
        equipo: [
            {
                nombre: "",
                rol: ""
            }
        ]
       
    });

    const manejarCambio = (e) => {

        const { name, value } = e.target;

        setFormulario({
            ...formulario,
            [name]: value
        });
    };

    const manejarRecursos = (e) => {

        const { name, value } = e.target;

        setFormulario({
            ...formulario,
            recursos: {
                ...formulario.recursos,
                [name]: value
            }
        });
    };

    const manejarEquipo = (index, e) => {

        const { name, value } = e.target;

        const nuevoEquipo = [...formulario.equipo];

        nuevoEquipo[index][name] = value;

        setFormulario({
            ...formulario,
            equipo: nuevoEquipo
        });
    };

    const agregarIntegrante = () => {

        setFormulario({
            ...formulario,
            equipo: [
                ...formulario.equipo,
                {
                    nombre: "",
                    rol: ""
                }
            ]
        });
    };

    const manejarSubmit = (e) => {

        e.preventDefault();

        const nuevoProyecto = {
            ...formulario,
            descripcion: [
                formulario.descripcion,
                formulario.descripcion2
            ]
        };

        agregarProyecto(nuevoProyecto);

        setFormulario({
            titulo: "",
            categoria: "",
            estado: "",
            descripcion: "",
            descripcion2: "",
            recursos: {
                pdf: "",
                drive: "",
                github: ""
            },
            equipo: [
                {
                    nombre: "",
                    rol: ""
                }
            ]
        });
    };

    return (

        <form
            className="formulario"
            onSubmit={manejarSubmit}
        >
        <h2>FORMULARIO</h2>
        <div className="fila-principal">
            <div className="campo">
            <label>Ingresar titulo</label>
            <input
                type="text"
                name="titulo"
                placeholder="Título"
                value={formulario.titulo}
                onChange={manejarCambio}
                required
            />
            </div>
            <div className="campo">
            <label>Ingresar categoria</label>
            <input
                type="text"
                name="categoria"
                placeholder="Categoría"
                value={formulario.categoria}
                onChange={manejarCambio}
                required
            />
            </div>

            <div className="campo">
            <label>Seleccionar Estado</label>
            <select
                name="estado"
                value={formulario.estado}
                onChange={manejarCambio}
                required
            >

                <option value="">
                    Estado
                </option>

                <option value="Activo">
                    Activo
                </option>

                <option value="Pendiente">
                    Pendiente
                </option>

                <option value="Finalizado">
                    Finalizado
                </option>
            </select>
            </div>
        </div>
            <label>Agregar Descripcion</label>
            <textarea
                name="descripcion"
                placeholder="Descripción párrafo 1"
                value={formulario.descripcion}
                onChange={manejarCambio}
                required
            />

            <textarea
                name="descripcion2"
                placeholder="Descripción párrafo 2"
                value={formulario.descripcion2}
                onChange={manejarCambio}
                required
            />
            
            <label>Ingresar recursos</label>
            <div className="fila-recursos">
            <input
                type="text"
                name="pdf"
                placeholder="PDF"
                value={formulario.recursos.pdf}
                onChange={manejarRecursos}
            />

            <input
                type="text"
                name="drive"
                placeholder="Drive"
                value={formulario.recursos.drive}
                onChange={manejarRecursos}
            />

            <input
                type="text"
                name="github"
                placeholder="GitHub"
                value={formulario.recursos.github}
                onChange={manejarRecursos}
            />
            </div>
            <div className="seccion-integrante">

            <label>Registrar Integrantes</label>
             <button
                type="button"
                onClick={agregarIntegrante}
            >
                Agregar integrante
            </button>
            </div>
            {
                formulario.equipo.map((integrante, index) => (
                
                    <div className="integrante" key={index}>

                        <input
                            type="text"
                            name="nombre"
                            placeholder="Nombre"
                            value={integrante.nombre}
                            onChange={(e) =>
                                manejarEquipo(index, e)
                            }
                            required
                        />

                        <input
                            type="text"
                            name="rol"
                            placeholder="Rol"
                            value={integrante.rol}
                            onChange={(e) =>
                                manejarEquipo(index, e)
                            }
                            required
                        />

                    </div>

                ))
            }
            <button type="submit">
                Agregar Proyecto
            </button>

        </form>
    );
};

export default FormProyecto;