import Header from "./components/Header";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

import Dashboard from "./views/Dashboard";
import ListaProyectos from "./views/ListaProyectos";
import PerfilUsuario from "./views/PerfilUsuario";
import DetalleProyecto from "./views/DetalleProyecto";
import ErrorPage from "./views/ErrorPage";

import RutaProtegida from "./routes/RutaProtegida";

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
                        element={
                            <RutaProtegida>
                                <ListaProyectos />
                            </RutaProtegida>
                        }
                    />

                    <Route
                        path="/proyectos/:id"
                        element={
                            <RutaProtegida>
                                <DetalleProyecto />
                            </RutaProtegida>
                        }
                    />

                    <Route
                        path="/perfil"
                        element={
                            <RutaProtegida>
                                <PerfilUsuario />
                            </RutaProtegida>
                        }
                    />

                    <Route
                        path="/error"
                        element={<ErrorPage />}
                    />

                </Routes>
            </main>

            <Footer />
        </>
    );
}

export default App;