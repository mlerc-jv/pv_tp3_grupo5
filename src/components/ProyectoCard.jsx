import "../css/ProyectoCard.css";

import {
    Card,
    CardContent,
    CardActions,
    Typography,
    Button
} from "@mui/material";

const ProyectoCard = ({ proyecto, eliminarProyecto, verDetalle }) => {

    const { id, titulo, categoria, estado } = proyecto;

    return (

        <Card className="proyecto-card">

            <CardContent>

                <Typography variant="h5">
                    {titulo}
                </Typography>

                <Typography variant="body1">
                    Categoría: {categoria}
                </Typography>

                <Typography variant="body2">
                    Estado: {estado}
                </Typography>

            </CardContent>

            <CardActions>

                <Button
                    variant="contained"
                    color="error"
                    onClick={() => eliminarProyecto(id)}
                >
                    Eliminar
                </Button>

                <Button
                    variant="outlined"
                    onClick={() => verDetalle(proyecto)}
                >
                    Ver Detalles
                </Button>

            </CardActions>

        </Card>

    );
};

export default ProyectoCard;