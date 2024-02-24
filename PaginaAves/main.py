
from generate_html import generate_html_template
from export_html import export_to_html
from data import get_birds_data


def main():
    # Obtener datos de la API
    birds_data = get_birds_data()

    # Generar contenido HTML
    html_content = generate_html_template(birds_data)

    # Exportar a archivo HTML
    export_to_html(html_content)

if __name__ == "__main__":
    main()