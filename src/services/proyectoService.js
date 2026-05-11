const proyectoService = (() => {

    let proyectos=[
        {
            id: 1,
            titulo: "Sistema Escolar",
            categoria: "Educación",
            estado: "Activo"
        },
        {
            id: 2,
            titulo: "Tienda Online",
            categoria: "E-commerce",
            estado: "Pendiente"
        },
        {
            id: 3,
            titulo: "App de Música",
            categoria: "Entretenimiento",
            estado: "Finalizado"
        },
        {
            id: 4,
            titulo: "Gestor de Tareas",
            categoria: "Productividad",
            estado: "Activo"
        },
        {
            id: 5,
            titulo: "Red Social",
            categoria: "Comunicación",
            estado: "En progreso"
        }
    ];

    const obtenerProyectos=() => [...proyectos];

    const agregarProyecto=(nuevoProyecto) => {
        proyectos.push(nuevoProyecto);
    };

    const eliminarProyecto=(id) => {
        proyectos=proyectos.filter(
            proyecto => proyecto.id !== id
        );
    };

    const buscarProyecto=(texto) => {
        return proyectos.filter(proyecto =>
            proyecto.titulo
                .toLowerCase()
                .includes(texto.toLowerCase())
        );
    };

    return{
        obtenerProyectos,
        agregarProyecto,
        eliminarProyecto,
        buscarProyecto
    };

})();
export default proyectoService; 