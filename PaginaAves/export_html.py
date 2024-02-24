
def export_to_html(html_content):
    """
    Función para exportar el contenido HTML a un archivo.
    """
    with open('aves_de_chile.html', 'w', encoding='utf-8') as file:
        file.write(html_content)