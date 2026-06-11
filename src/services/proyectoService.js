const proyectoService = (() => {

    const proyectosIniciales = [
        {
            id: 1,
            titulo: "Sistema Escolar",
            categoria: "Educación",
            estado: "Activo",
            disponible: true,
            descripcion: [
                "Este proyecto permite administrar información académica de estudiantes, materias y actividades escolares.",
                "Su objetivo es mejorar la organización educativa y facilitar la comunicación entre alumnos y docentes."
            ],
            recursos: {
                pdf: "Documentación del sistema",
                drive: "Carpeta compartida del proyecto",
                github: "Repositorio Sistema Escolar"
            },
            equipo: [
                { nombre: "Carrillo Abril", rol: "Desarrollo Frontend" },
                { nombre: "Meruvia Jimena", rol: "Integración del sistema" }
            ]
        },
        {
            id: 2,
            titulo: "Tienda Online",
            categoria: "E-commerce",
            estado: "Pendiente",
            disponible: true,
            descripcion: [
                "La tienda online permite publicar productos y realizar compras desde una plataforma web.",
                "El sistema incluye gestión de clientes, productos y seguimiento de pedidos."
            ],
            recursos: {
                pdf: "Manual de usuario",
                drive: "Carpeta Ecommerce",
                github: "Repositorio Tienda Online"
            },
            equipo: [
                { nombre: "Cabrera Luisana", rol: "Formularios y validaciones" },
                { nombre: "Quispe Guadalupe", rol: "Lógica del sistema" }
            ]
        },
        {
            id: 3,
            titulo: "App de Musica",
            categoria: "Entretenimiento",
            estado: "Finalizado",
            disponible: true,
            descripcion: [
                "Esta aplicación permite reproducir música y organizar playlists personalizadas.",
                "También incorpora funciones de búsqueda de artistas y administración de canciones favoritas."
            ],
            recursos: {
                pdf: "Informe técnico",
                drive: "Drive App Música",
                github: "Repositorio Música"
            },
            equipo: [
                { nombre: "Aramayo Lourdes", rol: "Testing y estructura" },
                { nombre: "Maidana Antonella", rol: "Componentes React" }
            ]
        },
        {
            id: 4,
            titulo: "Gestor de Tareas",
            categoria: "Productividad",
            estado: "Activo",
            disponible: true,
            descripcion: [
                "El gestor de tareas ayuda a organizar actividades pendientes y proyectos personales.",
                "El sistema permite marcar tareas completadas y administrar prioridades."
            ],
            recursos: {
                pdf: "Guía de tareas",
                drive: "Drive Gestor",
                github: "Repositorio Gestor"
            },
            equipo: [
                { nombre: "Carrillo Abril", rol: "Diseño visual" },
                { nombre: "Quispe Guadalupe", rol: "Backend lógico" }
            ]
        },
        {
            id: 5,
            titulo: "TP3 Parte 2 - Gestión de Proyectos Educativos",
            categoria: "React",
            estado: "Activo",
            disponible: true,
            descripcion: [
                "Este proyecto corresponde a la segunda parte del TP3, donde se trabaja con React, componentes, props y desestructuración de objetos.",
                "El objetivo es mejorar la estructura del proyecto anterior separando responsabilidades en componentes como ProyectoCard, DetalleProyecto, FormProyecto y ListaProyectos."
            ],
            recursos: {
                pdf: "Consigna TP3 Parte 2",
                drive: "Carpeta compartida del grupo",
                github: "Repositorio pv_tp3_grupo5"
            },
            equipo: [
                { nombre: "Aramayo Lourdes", rol: "Formulario y manejo de datos" },
                { nombre: "Cabrera Luisana", rol: "Listado y renderizado de proyectos" },
                { nombre: "Carrillo Abril", rol: "Servicio de proyectos y estructura de datos" },
                { nombre: "Maidana Antonella", rol: "CSS e integración visual" },
                { nombre: "Meruvia Jimena", rol: "Tarjetas de proyectos" },
                { nombre: "Quispe Guadalupe", rol: "Detalle e información extendida" }
            ]
        }
    ];

    let proyectos =
        JSON.parse(localStorage.getItem("proyectos"))
        || proyectosIniciales;

    const guardarEnLocalStorage = () => {
        localStorage.setItem(
            "proyectos",
            JSON.stringify(proyectos)
        );
    };

    const obtenerProyectos = () => {
        return [...proyectos];
    };

    const obtenerProyectosDisponibles = () => {
        return obtenerProyectos().filter(
            proyecto => proyecto.disponible === true
        );
    };

    const agregarProyecto = (p) => {
        const nuevoProyecto = {
            ...p,
            id: Date.now(),
            disponible: true,

            descripcion: p.descripcion,

            recursos: p.recursos,

            equipo: p.equipo
        };

        proyectos.push(nuevoProyecto);

        guardarEnLocalStorage();
    };

    const eliminarProyecto = (id) => {
        const proyecto = proyectos.find(
            proyecto => proyecto.id === id
        );

        if (proyecto) {
            proyecto.disponible = false;

            guardarEnLocalStorage();
        }
    };

    const buscarProyecto = (texto) => {
        return obtenerProyectosDisponibles().filter(
            proyecto => proyecto.titulo
                .toLowerCase()
                .includes(texto.toLowerCase())
        );
    };

    const obtenerProyectoPorId = (id) => {
        return obtenerProyectosDisponibles().find(
            proyecto => proyecto.id === id
        );
    };

    return {
        obtenerProyectos,
        obtenerProyectosDisponibles,
        agregarProyecto,
        eliminarProyecto,
        buscarProyecto,
        obtenerProyectoPorId
    };

})();

export default proyectoService;