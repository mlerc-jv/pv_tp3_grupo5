import "../css/ProyectoCard.css";
const ProyectoCard = ({proyecto, eliminarProyecto, verDetalle}) =>{
    const {id, titulo, categoria, estado}=proyecto;
    return (
        <article className="proyecto-card">
            <div className="info-card">
            <h3>{titulo}</h3>
            <p>{categoria}</p>
            <p>{estado}</p>
            </div>
            <div className="botones">
                <button onClick={()=> eliminarProyecto(id)}>
                    Eliminar
                </button>
                <button onClick={()=> verDetalle(proyecto)}>
                    Ver Detalles
                </button>
            </div>
        </article>
    );
};
export default ProyectoCard;