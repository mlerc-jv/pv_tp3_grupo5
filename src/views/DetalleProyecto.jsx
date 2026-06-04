import "../css/DetalleProyecto.css";
import { useParams } from "react-router-dom";
import proyectoService from "../services/proyectoService";

const DetalleProyecto = () => {

    const { id } = useParams();

    const proyecto =
        proyectoService.obtenerProyectoPorId(Number(id));

        if (!proyecto) {
            return (
                <div className="detalle-proyecto">
                    <h2>Proyecto no encontrado</h2>
                </div>
            );
        }

    const {
        titulo,
        descripcion,
        recursos,
        equipo
    } = proyecto;

    return (

        <div className="detalle-proyecto">

         <h2>{titulo}</h2>
         {descripcion.map((p, i) => (
            <p key={i}>{p}</p>
        ))}

         <h3>Recursos</h3>
         <ul>
            {recursos?.pdf && (
             <li>PDF: {recursos.pdf}</li>
             )}

            {recursos?.drive && (
             <li>Drive: {recursos.drive}</li>
             )}

            {recursos?.github && (
              <li>GitHub: {recursos.github}</li>
             )}
         </ul>

        <h3>Equipo</h3>
         <ul>
           {equipo.map((m, i) => (
            <li key={i}>{m.nombre} - {m.rol}</li>
           ))}
        </ul>
        

        </div>

    );
};

export default DetalleProyecto;