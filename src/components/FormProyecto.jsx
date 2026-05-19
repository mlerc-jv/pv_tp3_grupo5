import { useState } from "react";

const FormProyecto = ({ agregarProyecto }) => {

    const [formulario, setFormulario] = useState({
        titulo: "",
        categoria: "",
        estado: "",
        descripcion: "",
        recursos: "",
        equipo: ""
    });

    const manejarCambio = (e) => {

        const { name, value } = e.target;

        setFormulario({
            ...formulario,
            [name]: value
        });
    };

    const manejarSubmit = (e) => {

        e.preventDefault();

        const nuevoProyecto = {
            id: Date.now(),
            ...formulario
        };

        agregarProyecto(nuevoProyecto);

        setFormulario({
            titulo: "",
            categoria: "",
            estado: "",
            descripcion: "",
            recursos: "",
            equipo: ""
        });
    };

    return (
        <form className="formulario" onSubmit={manejarSubmit}>

            <input
                type="text"
                name="titulo"
                placeholder="Título"
                value={formulario.titulo}
                onChange={manejarCambio}
            />

            <input
                type="text"
                name="categoria"
                placeholder="Categoría"
                value={formulario.categoria}
                onChange={manejarCambio}
            />

            <input
                type="text"
                name="estado"
                placeholder="Estado"
                value={formulario.estado}
                onChange={manejarCambio}
            />

            <textarea
                name="descripcion"
                placeholder="Descripción"
                value={formulario.descripcion}
                onChange={manejarCambio}
            />

            <input
                type="text"
                name="recursos"
                placeholder="Recursos"
                value={formulario.recursos}
                onChange={manejarCambio}
            />

            <input
                type="text"
                name="equipo"
                placeholder="Equipo"
                value={formulario.equipo}
                onChange={manejarCambio}
            />

            <button type="submit">
                Agregar Proyecto
            </button>

        </form>
    );
};

export default FormProyecto;