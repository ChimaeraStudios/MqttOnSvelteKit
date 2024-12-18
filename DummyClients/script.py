import paho.mqtt.client as mqtt
import random
import time
# Client Connection
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
        # Generate random values and publish them on topics
        for topic in topics:
            value = round(random.uniform(0, 100), 2)  # Values between 0 and 100 with 2 decimal digits
            client.publish(topic, str(value))
            print(f"Pubblicato {value} su {topic}")
            
            time.sleep(random.uniform(0.1, 1))  # Random wait between 0.1 and 1 seconds
            

except KeyboardInterrupt:
    print("\nChiusura client...")
    client.disconnect()