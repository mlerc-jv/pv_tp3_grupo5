import Header from "./components/Header";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

import Dashboard from "./views/Dashboard";
import ListaProyectos from "./views/ListaProyectos";
import PerfilUsuario from "./views/PerfilUsuario";
import DetalleProyecto from "./views/DetalleProyecto";

import { Routes, Route, Navigate } from "react-router-dom";

function App() {

    return (
        <>
            <Header />

            <Nav />

            <main>

                <Routes>

                    <Route
                        path="/"
                        element={<Navigate to="/dashboard" />}
                    />

                    <Route
                        path="/dashboard"
                        element={<Dashboard />}
                    />

                    <Route
                        path="/proyectos"
                        element={<ListaProyectos />}
                    />

                    <Route
                        path="/proyectos/:id"
                        element={<DetalleProyecto />}
                    />

                    <Route
                        path="/perfil"
                        element={<PerfilUsuario />}
                    />

                </Routes>

            </main>

            <Footer />
        </>
    );
}

export default App;