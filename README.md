# MQTT SvelteKit Web Application

[![SvelteKit](https://img.shields.io/badge/SvelteKit-FF3E00?style=flat&logo=svelte&logoColor=white)](https://kit.svelte.dev/)
[![MQTT](https://img.shields.io/badge/MQTT-3C5280?style=flat&logo=eclipse-mosquitto&logoColor=white)](https://mqtt.org/)
[![Node.js](https://img.shields.io/badge/Node.js-23-339933?style=flat&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Python](https://img.shields.io/badge/Python-3.11-3776AB?style=flat&logo=python&logoColor=white)](https://www.python.org/)

A real-time web application demonstrating MQTT communication using SvelteKit and Python dummy clients.

## 🚀 Features

- Real-time MQTT messaging
- SvelteKit frontend
- Python dummy clients for testing
- Development and production environments

## 📋 Prerequisites

- Node.js (v23)
- Python 3.11
- Git

## 🛠️ Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ChimaeraStudios/MqttOnSvelteKit.git
   cd MqttOnSvelteKit
   ```

2. Install Node.js dependencies:
   ```bash
   npm install
   ```

3. Set up Python environment for dummy clients:
   ```bash
   cd DummyClients
   python -m venv mqtt_env
   mqtt_env\Scripts\activate
   pip install -r requirements.txt
   ```

## 🔧 Development

Start the development server:
```bash
npm run dev
```

Access the development server at: http://localhost:5173

## 🏗️ Production

Build and preview the production version:
```bash
npm run build
npm run preview
```

## 🌐 Live Demo

Access the live demo at: https://ffcdpq61-4173.euw.devtunnels.ms/

## 👥 Contributors

| Name | Role | GitHub |
|------|------|--------|
| Andrea Menci | Owner | [@Mancee28](https://github.com/Mancee28) |

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

Made with ❤️ by Chimaera Studios
