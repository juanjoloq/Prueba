import React, { useEffect } from "react";
import "../assets/chatStyle.css";
import { useMessages } from "../hooks/useMessages";

const ChatLayaout = () => {
    const {
        mensajes,
        enviarMensaje,
        cargarMensajes,
        setformData,
        formData
    } = useMessages({ content: '', sender: 'user' });

    useEffect(() => {
        cargarMensajes();
    }, [cargarMensajes]);

    const handleSubmit = (e) => {
        e.preventDefault();
        enviarMensaje();
    };

    return (
        <section className="sectionChatbot">
            <div className="chatbotContainer">
                <div className="TopBar">
                    <ion-icon name="chatbox" class="icon"></ion-icon>
                    <span>Chat With Pocki</span>
                </div>

                <div className="ChatContent">
                    {mensajes.map((msg) => (
                        <div key={msg.id_message} className={`messageWrapper ${msg.sender}`}>
                            <span className={`message icon ${msg.sender}`}>
                                <ion-icon name="person"></ion-icon>
                            </span>
                            <div className={`message ${msg.sender}`}>
                                {msg.content}
                            </div>
                        </div>
                    ))}
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="Sends">
                        <input
                            type="text"
                            className="InputSend"
                            placeholder="Escribe tu mensaje..."
                            value={formData.content}
                            onChange={(e) => setformData({ ...formData, content: e.target.value })}
                        />
                        <button type="submit" className="BtnSend">Send</button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default ChatLayaout;
