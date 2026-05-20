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

        <div>

            <h2>{titulo}</h2>

            <p>{descripcion}</p>

            <p>
                Este proyecto fue desarrollado utilizando herramientas modernas
                y trabajo colaborativo en equipo.
            </p>

            <h3>Recursos</h3>

            <ul>

                <li>
                    <a href={recursos.pdf}>
                        PDF
                    </a>
                </li>

                <li>
                    <a href={recursos.drive}>
                        Drive
                    </a>
                </li>

                <li>
                    <a href={recursos.github}>
                        GitHub
                    </a>
                </li>

            </ul>

            <h3>Equipo</h3>

            <ul>

                {
                    equipo.map((persona, index) => (

                        <li key={index}>
                            {persona.nombre} - {persona.rol}
                        </li>

                    ))
                }

            </ul>

            <button onClick={cerrarDetalle}>
                Cerrar
            </button>

        </div>

    );
};

export default DetalleProyecto;