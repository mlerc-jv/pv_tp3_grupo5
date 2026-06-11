const usuarios = [
    {dni: "12345678", password: "abcdefg", nombre: "Aramayo Lourdes", rol: "alumno", institucion: "Escuela de Minas"},
    {dni: "23456789", password: "ghijklm", nombre: "Cabrera Maia", rol: "alumno", institucion: "Escuela de Minas"},
    {dni: "48142585", password: "nopqrst", nombre: "Carrillo Abril", rol: "alumno", institucion: "Escuela de Minas"},
    {dni: "48141988", password: "1234567", nombre: "Maidana Antonella", rol: "alumno", institucion: "Escuela de Minas"},
    {dni: "48910310", password: "2345678", nombre: "Meruvia Jimena", rol: "alumno", institucion: "Escuela de Minas"},
    {dni: "45678912", password: "3456789", nombre: "Quispe Guadalupe", rol: "alumno", institucion: "Escuela de Minas"}
   
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