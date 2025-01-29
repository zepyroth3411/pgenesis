# 🦾 Proyecto Génesis - Control Remoto de Brazo Robótico

## 📖 Descripción
**Proyecto Génesis** es una plataforma que permite controlar remotamente un **brazo robótico** a través de una **landing web** (Next.js), un **backend en Flask** y un **NodeMCU ESP8266**. 

Los usuarios pueden **enviar comandos en tiempo real** desde la interfaz web, y el backend se encarga de comunicarse con el NodeMCU para ejecutar las acciones.

---

## 🚀 **Características**
✔️ **Interfaz web moderna** con **Next.js** y **Tailwind CSS**  
✔️ **Backend en Flask** para gestionar la comunicación entre la web y el NodeMCU  
✔️ **Conexión con el ESP8266 (NodeMCU)** vía **HTTP**  
✔️ **Registro de comandos enviados** en tiempo real  
✔️ **Estado de conexión del microcontrolador**  
✔️ **Posibilidad de expansión con WebSockets y ONVIF para video en el futuro**  

---

## 🛠 **Tecnologías utilizadas**
- **Frontend**: Next.js + Tailwind CSS
- **Backend**: Flask + Flask-SocketIO + Flask-CORS
- **Microcontrolador**: ESP8266 (NodeMCU)
- **Comunicación**: HTTP Requests (en fase inicial)

---

## 📂 **Estructura del Proyecto**
