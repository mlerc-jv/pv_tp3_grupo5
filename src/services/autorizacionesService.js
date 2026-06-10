const usuarios = [
    {
        dni: "12345678",
        password: "1234",
        nombre: "Juan Pérez",
        rol: "Alumno"
    },
    {
        dni: "87654321",
        password: "abcd",
        nombre: "María Gómez",
        rol: "Docente"
    }
];

const login = (dni, password) => {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            const usuario = usuarios.find(
                (u) =>
                    u.dni === dni &&
                    u.password === password
            );

            if (usuario) {

                resolve(usuario);

            } else {

                reject(
                    "DNI o contraseña incorrectos"
                );
            }

        }, 1000);

    });

};

export default {
    login
};