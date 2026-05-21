import "../css/FormProyecto.css"
 import { useState } from "react";

const FormProyecto = ({ agregarProyecto }) => {

    const [formulario, setFormulario] = useState({
        titulo: "",
        categoria: "",
        estado: "",
        descripcion: "",
       
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
    titulo: formulario.titulo,
    categoria: formulario.categoria,
    estado: formulario.estado,
    descripcion: formulario.descripcion
};

  agregarProyecto(nuevoProyecto);
  setFormulario({
    titulo: "",
    categoria: "",
    estado: "",
    descripcion: "",
  
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
                required
            />

            <input
                type="text"
                name="categoria"
                placeholder="Categoría"
                value={formulario.categoria}
                onChange={manejarCambio}
                required
            />

            <input
                type="text"
                name="estado"
                placeholder="Estado"
                value={formulario.estado}
                onChange={manejarCambio}
                required
            />

            <textarea
                name="descripcion"
                placeholder="Descripción"
                value={formulario.descripcion}
                onChange={manejarCambio}
            />


            <button type="submit">
                Agregar Proyecto
            </button>

        </form>
    );
};

export default FormProyecto;