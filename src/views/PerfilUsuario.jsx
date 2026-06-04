import {
  Container,
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

const PerfilUsuario = () => {
  const integrantes = [
    {nombre: "Aramayo Lourdes",rol: "Estudiante",institucion: "Escuela de Minas"},
    {nombre: "Cabrera Maia",rol: "Estudiante",institucion: "Escuela de Minas"},
    {nombre: "Carrillo Abril",rol: "Estudiante",institucion: "Escuela de Minas"},
    {nombre: "Maidana Antonella",rol: "Estudiante",institucion: "Escuela de Minas"},
    {nombre: "Meruvia Jimena",rol: "Estudiante",institucion: "Escuela de Minas"},
    {nombre: "Quispe Guadalupe",rol: "Estudiante",institucion: "Escuela de Minas"}
  ];

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Perfil del Grupo
      </Typography>

      <Typography variant="body1" color="text.secondary" gutterBottom>
        Integrantes del TP3
      </Typography>

      {integrantes.map((integrante, index) => (
        <Paper key={index} elevation={3}sx={{ p: 2, mb: 2 }}>
          <List>
            <ListItem>
              <ListItemText
                primary="Nombre"
                secondary={integrante.nombre}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Rol"
                secondary={integrante.rol}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Institucion"
                secondary={integrante.institucion}
              />
            </ListItem>
          </List>
        </Paper>
      ))}
    </Container>
  );
};

export default PerfilUsuario;