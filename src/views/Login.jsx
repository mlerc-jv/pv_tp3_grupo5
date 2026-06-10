import { useState } from "react";

import autorizacionesService from "../services/autorizacionesService";

import { useAutorizaciones } from "../hook/useAutorizaciones";

const Login = () => {

    const [dni, setDni] = useState("");

    const [password, setPassword] = useState("");

    const [error, setError] = useState("");

    const [loading, setLoading] = useState(false);

    const { guardarSesion } = useAutorizaciones();

    const manejarSubmit = async (e) => {

        e.preventDefault();

        setError("");

        if (
            dni.trim() === "" ||
            password.trim() === ""
        ) {

            setError(
                "Debe completar todos los campos"
            );

            return;
        }

        try {

            setLoading(true);

            const usuario =
                await autorizacionesService.login(
                    dni,
                    password
                );

            guardarSesion(usuario);

            console.log(usuario);

        } catch (err) {

            setError(err);

        } finally {

            setLoading(false);
        }
    };

    return (

        <main>

            <h2>Iniciar Sesión</h2>

            <form onSubmit={manejarSubmit}>

                <input
                    type="text"
                    placeholder="DNI"
                    value={dni}
                    onChange={(e) =>
                        setDni(e.target.value)
                    }
                />

                <input
                    type="password"
                    placeholder="Contraseña"
                    value={password}
                    onChange={(e) =>
                        setPassword(e.target.value)
                    }
                />

                <button type="submit">

                    {
                        loading
                            ? "Ingresando..."
                            : "Ingresar"
                    }

                </button>

            </form>

            {
                error && (
                    <p>{error}</p>
                )
            }

        </main>
    );
};

export default Login;