import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent
} from "@mui/material";

import proyectoService from "../services/proyectoService";
import Login from "./Login";
import { useAutorizaciones } from "../hook/useAutorizaciones";

function Dashboard() {

  const { usuarioActivo } = useAutorizaciones();

  const proyectos = proyectoService.obtenerProyectos();

  const total = proyectos.length;

  const activos = proyectos.filter(
    proyecto => proyecto.estado === "Activo"
  ).length;

  const pendientes = proyectos.filter(
    proyecto => proyecto.estado === "Pendiente"
  ).length;

  const finalizados = proyectos.filter(
    proyecto => proyecto.estado === "Finalizado"
  ).length;

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>

      <Typography variant="body1" sx={{ mb: 4 }}>
        Bienvenido al sistema de gestión de proyectos educativos.
        Aquí podrás consultar información general sobre los proyectos registrados.
      </Typography>

      <Grid container spacing={3}>

        <Grid size={{ xs: 12, md: 3 }}>
          <Card>
            <CardContent>
              <Typography variant="h6">
                Total de proyectos
              </Typography>

              <Typography variant="h4">
                {total}
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid size={{ xs: 12, md: 3 }}>
          <Card>
            <CardContent>
              <Typography variant="h6">
                Activos
              </Typography>

              <Typography variant="h4">
                {activos}
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid size={{ xs: 12, md: 3 }}>
          <Card>
            <CardContent>
              <Typography variant="h6">
                Pendientes
              </Typography>

              <Typography variant="h4">
                {pendientes}
              </Typography>
            </CardContent>
          </Card>
        </Grid>

                <Grid size={{ xs: 12, md: 3 }}>
          <Card>
            <CardContent>
              <Typography variant="h6">
                Finalizados
              </Typography>

              <Typography variant="h4">
                {finalizados}
              </Typography>
            </CardContent>
          </Card>
        </Grid>

      </Grid>

      {
        !usuarioActivo && (
          <Grid container spacing={3} sx={{ mt: 3 }}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Card>
                <CardContent>
                  <Login />
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        )
      }
    </Container>
  );
}

export default Dashboard;