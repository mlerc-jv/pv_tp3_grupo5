import "../css/RegistroActividad.css";

import Alert from "@mui/material/Alert";

const RegistroActividad = ({ fechaHora }) => {

    return (

        <Alert
            severity="info"
            className="registro-actividad"
        >
            Última actualización de la lista: {fechaHora}
        </Alert>

    );

};

export default RegistroActividad;