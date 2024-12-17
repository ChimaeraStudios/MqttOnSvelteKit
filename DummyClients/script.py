import paho.mqtt.client as mqtt
import random
import time
# Configurazione client
client = mqtt.Client()
client.connect("localhost", 1883, 60) # (host, port, keepalive)
# Topic MQTT
topics = [
    "sensors/value1",
    "sensors/value2",
    "sensors/value3",
    "sensors/value4"
]
try:
    while True:
        # Genera e pubblica valori random per ogni topic
        for topic in topics:
            value = round(random.uniform(0, 100), 2)  # Valori tra 0 e 100 con 2 decimali
            client.publish(topic, str(value))
            print(f"Pubblicato {value} su {topic}")
        
        time.sleep(1000) # Attendi 1000ms
except KeyboardInterrupt:
    print("\nChiusura client...")
    client.disconnect()