# MQTT SvelteKit Web Application

This repository demonstrates how to implement MQTT communication in a SvelteKit web application.

## Prerequisites

- Node.js (23)
- Python 3.11
- Git

## Installation

1. Clone the repository:
```bash
git clone https://github.com/ChimaeraStudios/MqttOnSvelteKit.git
cd MqttOnSvelteKit

npm install

cd DummyClients
python -m venv mqtt_env
source mqtt_env/bin/activate  # On Windows use: mqtt_env\Scripts\activate
pip install -r requirements.txt

# Development mode
npm run dev

# Production build
npm run build
npm run preview

https://ffcdpq61-5173.euw.devtunnels.ms/