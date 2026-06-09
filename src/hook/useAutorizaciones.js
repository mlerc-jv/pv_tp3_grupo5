import { useContext } from "react";
import { AutorizacionesContext } from "../context/AutorizacionesContext";

export const useAutorizaciones = () =>
    useContext(AutorizacionesContext);