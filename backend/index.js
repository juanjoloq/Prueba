const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const messageRoutes = require('./src/routes/messageRoutes'); // Mensajes

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

    // Para interactuar con la IA
app.use('/api/', messageRoutes);  // CRUD de mensajes

app.listen(PORT, () => {
    console.log(`✅ Servidor escuchando en http://localhost:${PORT}`);
});
