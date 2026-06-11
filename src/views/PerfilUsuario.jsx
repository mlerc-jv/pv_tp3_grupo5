import { useContext, useState } from "react";

import {
    Container,
    Paper,
    Typography,
    TextField,
    Button,
    Stack
} from "@mui/material";

import { UsuarioContext } from "../context/UsuarioContext";

const PerfilUsuario = () => {

    const { usuario, actualizarPerfil } =
        useContext(UsuarioContext);

    const [editando, setEditando] = useState(false);

    const [datos, setDatos] = useState(
        usuario || {
            nombre: "",
            dni: "",
            rol: "",
            institucion: ""
        }
    );

    const manejarCambio = (e) => {

        const { name, value } = e.target;

        setDatos({
            ...datos,
            [name]: value
        });
    };

    const guardarCambios = () => {

        actualizarPerfil(datos);

        setEditando(false);
    };

    if (!usuario) {
        return (
            <Container sx={{ mt: 4 }}>
                <Typography variant="h5">
                    No hay usuario cargado
                </Typography>
            </Container>
        );
    }

    return (
        <Container maxWidth="sm" sx={{ mt: 4 }}>

            <Paper elevation={3} sx={{ p: 3 }}>

                <Typography
                    variant="h4"
                    gutterBottom
                >
                    Perfil de Usuario
                </Typography>

                <Stack spacing={2}>

                    <TextField
                        label="Nombre"
                        name="nombre"
                        value={datos.nombre}
                        onChange={manejarCambio}
                        disabled={!editando}
                        fullWidth
                    />

                    <TextField
                        label="DNI"
                        name="dni"
                        value={datos.dni}
                        onChange={manejarCambio}
                        disabled={!editando}
                        fullWidth
                    />

                    <TextField
                        label="Rol"
                        name="rol"
                        value={datos.rol}
                        onChange={manejarCambio}
                        disabled={!editando}
                        fullWidth
                    />

                    <TextField
                        label="Institución"
                        name="institucion"
                        value={datos.institucion}
                        onChange={manejarCambio}
                        disabled={!editando}
                        fullWidth
                    />

                    {
                        !editando ? (
                            <Button
                                variant="contained"
                                onClick={() =>
                                    setEditando(true)
                                }
                            >
                                Editar Perfil
                            </Button>
                        ) : (
                            <Button
                                variant="contained"
                                color="success"
                                onClick={guardarCambios}
                            >
                                Guardar Cambios
                            </Button>
                        )
                    }

                </Stack>

            </Paper>

        </Container>
    );
};

export default PerfilUsuario;