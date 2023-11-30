# Esta es mi librería de pruebal

def saludo():
    print("Hola mundo desde el módulo my_lib ")
    
def isBisiesto(year):
    """
    Verifica si el año ingresado es bisiesto o no

    Parámetros:
    year (int): año a evaluar

    Salida:
    (boolean): dependiendo si es o no bisiesto

    """
    
    if (year % 4 == 0) and (not (year % 100 == 0) or (year % 400 == 0)):
        return True
    else:
        return False
