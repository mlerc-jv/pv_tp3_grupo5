import "../css/RegistroActividad.css"
const RegistroActividad = ({ fechaHora }) => {

    return (

        <div className="registro-actividad">

            <p>
                Última actualización de la lista:
                {" "}
                {fechaHora}
            </p>

        </div>

    );
};

export default RegistroActividad;