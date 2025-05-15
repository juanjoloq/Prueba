const axios = require('axios');
const Message = require('../models/Message');

// GET /messages
const getMessages = (req, res) => {
    Message.getAllMessages((err, results) => {
        if (err) return res.status(500).json({ error: 'Error al obtener mensajes' });
        res.json(results);
    });
};

// POST /messages
const postMessage = async (req, res) => {
    const userMessage = req.body.content;

    // Guardar el mensaje del usuario
    Message.createMessage(userMessage, 'user', (err) => {
        if (err) return res.status(500).json({ error: 'Error guardando mensaje del usuario' });
    });

    try {
        // Llamar a la API externa
        const response = await axios.post('http://pocki-api-env-1.eba-pprtwpab.us-east-1.elasticbeanstalk.com/api/getOpenaiResponse', {
            input: userMessage
        });

        const botReply = response.data.choices[0].message.content;

        // Guardar la respuesta del bot
        Message.createMessage(botReply, 'bot', (err) => {
            if (err) console.log("Error guardando mensaje del bot", err);
        });

        res.json({ reply: botReply });

    } catch (error) {
        console.error("Error con la API de IA:", error.message);
        res.status(500).json({ error: 'Error al obtener respuesta de la IA' });
    }
};

module.exports = {
    getMessages,
    postMessage
};
