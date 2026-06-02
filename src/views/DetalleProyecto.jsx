import "../css/DetalleProyecto.css"
const DetalleProyecto = ({ proyecto, cerrarDetalle }) => {

    if (!proyecto) {
        return null;
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
        <button onClick={cerrarDetalle}>
            Cerrar
        </button>

        </div>

    );
};

export default DetalleProyecto;