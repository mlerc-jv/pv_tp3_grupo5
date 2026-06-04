import "../css/FormProyecto.css";
import { useState } from "react";

import {
TextField,
Button,
MenuItem
} from "@mui/material";

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

                <TextField
                    name="titulo"
                    label="Título"
                    value={formulario.titulo}
                    onChange={manejarCambio}
                    fullWidth
                    required
                />

            </div>

            <div className="campo">

                <label>Ingresar categoria</label>

                <TextField
                    name="categoria"
                    label="Categoría"
                    value={formulario.categoria}
                    onChange={manejarCambio}
                    fullWidth
                    required
                />

            </div>

            <div className="campo">

                <label>Seleccionar Estado</label>

                <TextField
                    select
                    name="estado"
                    label="Estado"
                    value={formulario.estado}
                    onChange={manejarCambio}
                    fullWidth
                    required
                >

                    <MenuItem value="">
                        Estado
                    </MenuItem>

                    <MenuItem value="Activo">
                        Activo
                    </MenuItem>

                    <MenuItem value="Pendiente">
                        Pendiente
                    </MenuItem>

                    <MenuItem value="Finalizado">
                        Finalizado
                    </MenuItem>

                </TextField>

            </div>

        </div>

        <label>Agregar Descripcion</label>

        <TextField
            name="descripcion"
            label="Descripción párrafo 1"
            value={formulario.descripcion}
            onChange={manejarCambio}
            multiline
            rows={4}
            fullWidth
            required
        />

        <TextField
            name="descripcion2"
            label="Descripción párrafo 2"
            value={formulario.descripcion2}
            onChange={manejarCambio}
            multiline
            rows={4}
            fullWidth
            required
        />

        <label>Ingresar recursos</label>

        <div className="fila-recursos">

            <TextField
                name="pdf"
                label="PDF"
                value={formulario.recursos.pdf}
                onChange={manejarRecursos}
                fullWidth
            />

            <TextField
                name="drive"
                label="Drive"
                value={formulario.recursos.drive}
                onChange={manejarRecursos}
                fullWidth
            />

            <TextField
                name="github"
                label="GitHub"
                value={formulario.recursos.github}
                onChange={manejarRecursos}
                fullWidth
            />

        </div>

        <div className="seccion-integrante">

            <label>Registrar Integrantes</label>

            <Button
                variant="outlined"
                type="button"
                onClick={agregarIntegrante}
            >
                Agregar integrante
            </Button>

        </div>

        {
            formulario.equipo.map((integrante, index) => (

                <div
                    className="integrante"
                    key={index}
                >

                    <TextField
                        name="nombre"
                        label="Nombre"
                        value={integrante.nombre}
                        onChange={(e) =>
                            manejarEquipo(index, e)
                        }
                        fullWidth
                        required
                    />

                    <TextField
                        name="rol"
                        label="Rol"
                        value={integrante.rol}
                        onChange={(e) =>
                            manejarEquipo(index, e)
                        }
                        fullWidth
                        required
                    />

                </div>

            ))
        }

        <Button
            variant="contained"
            type="submit"
        >
            Agregar Proyecto
        </Button>

    </form>

);

};

export default FormProyecto;
