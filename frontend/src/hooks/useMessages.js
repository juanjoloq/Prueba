import { useEffect, useState } from "react";
import axios from "axios";

const API_URL = "http://localhost:3001/api/messages";

export const useMessages = (initial) => {
    const [formData, setformData] = useState(initial);
    const [mensajes, setMensajes] = useState([]);

    useEffect(() => {
        cargarMensajes();
    }, []);

    const cargarMensajes = async () => {
        try {
            const res = await axios.get(API_URL);
            setMensajes(res.data);
        } catch (error) {
            console.log("Error al traer los mensajes: ", error);
        }
    };

    const enviarMensaje = async () => {
        if (!formData.content.trim()) return;

        try {
            await axios.post(API_URL, formData);
            setformData({ ...formData, content: '' }); // limpia input
            cargarMensajes();
        } catch (error) {
            console.log("Error al guardar el mensaje: ", error);
        }
    };

    return {
        mensajes,
        enviarMensaje,
        cargarMensajes,
        setformData,
        formData
    };
};
