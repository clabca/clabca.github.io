import requests
import sys
sys.stdout.reconfigure(encoding='utf-8')


# Definir la URL de la API
API_URL = 'https://aves.ninjas.cl/api/birds'


def get_birds_data():
    """
    Función para obtener los datos de la API de aves.
    Retorna un diccionario con los datos de las aves.
    """
    response = requests.get(API_URL)
    
    # Verificar el estado de la respuesta
    if response.status_code == 200:
        # Especificar la codificación de caracteres adecuada
        response.encoding = 'utf-8'
        
        # Procesar la respuesta JSON
        data = response.json()
        return data
    else:
        # Si la solicitud no es exitosa, imprimir el estado de la respuesta
        print("Error al obtener los datos de la API. Estado:", response.status_code)
        return None
    

def main():
    # Ejemplo de uso de la función get_birds_data()
    birds_data = get_birds_data()
    if birds_data:
        print(birds_data)

if __name__ == "__main__":
    main()    