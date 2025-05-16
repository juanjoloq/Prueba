# Pasos para correr el proyecto

## 1. Clonar el proyecto

```bash
git clone https://github.com/juanjoloq/Prueba.git
```

---

## 2. Instalar dependencias

```bash
cd frontend
npm install
cd ../backend
npm install
```

---

## 3. Crear la base de datos

a. Inicia **XAMPP**, **WAMP** o **Laragon**

b. Abre **phpMyAdmin** o **MySQL Workbench**

c. Crea una base de datos con el nombre que prefieras

d. Ejecuta la siguiente consulta SQL para crear la tabla:

```sql
CREATE TABLE messages (
  id_message INT AUTO_INCREMENT PRIMARY KEY,
  content TEXT NOT NULL,
  sender ENUM('user', 'bot') NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

---

## 4. Crear y configurar el archivo `.env`

a. Ve a la carpeta `backend`

b. Crea el archivo `.env` usando uno de los siguientes comandos, según tu sistema operativo:

**si no te funciona ningun comando crea el archivo manual en la carpeta del backend a la misma altura de index.js**

### Comandos por sistema

* **Windows (CMD):**

  ```cmd
  type nul > .env
  ```

* **PowerShell:**

  ```powershell
  New-Item -Path .env -ItemType File
  ```

* **macOS / Linux:**

  ```bash
  touch .env
  ```

c. Abre el archivo `.env` y agrega la siguiente configuración:

```env
PORT=3001  # Recomendado usar este puerto
DB_HOST=localhost
DB_USER=tu_usuario
DB_PASSWORD=tu_contraseña
DB_NAME=nombre_de_tu_base_de_datos
```

---

## 5. Iniciar el proyecto

a. Abre **dos terminales**

### Primera terminal (backend)

```bash
cd backend
node index.js
```

### Segunda terminal (frontend)

```bash
cd frontend
npm start
```

---

¡Listo! Ahora deberías tener tu aplicación corriendo con el frontend en `http://localhost:3000` y el backend en `http://localhost:3001`.
