from jinja2 import Template

def generate_html_template(birds_data):
    """
    Función para generar el contenido HTML del sitio web con los datos de las aves.
    """
    template_str = """
    <!DOCTYPE html>
    <html lang="en">
  <head>
    <title>Aves de Chile</title>
    <!-- Favicon   -->
    <!-- Required meta tags -->
    <meta charset="utf-8" />

    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />
    <!-- Bootstrap min integrado CSS -->
    <link rel="stylesheet" href="./assets/css/bootstrap.min.css" />
    <!-- Font Awesome -->
    <link
      rel="stylesheet"
      href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
      integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
      crossorigin="anonymous"
    />
    <!-- Fuentes Google -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700;800&display=swap"
      rel="stylesheet"
    />
    <!-- CSS Propio -->
    <link rel="stylesheet" href="./assets/css/style.css" />
  </head>

    <body>
    <h1>Aves de Chile</h1>
    <div class="row">
    {% for bird in birds %}

        <div class="col py-5">
          <div class="card mx-auto" style="width: 18rem">
            <img src="{{ bird['images']['main'] }}"  height=200 class="card-img-top" alt="..." />
            <div class="card-body"> 
              <h5 class="card-title fw-bold"><h2> </h2> </h5>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">{{ bird['name']['spanish'] }}</li>
              <li class="list-group-item">{{ bird['name']['english'] }}</li>
              <li class="list-group-item"><a href="detalle_ave.html?api={{ bird['_links']['self'] }}">Link</a></li>
            </ul>
          </div>
        </div>

    {% endfor %}
    </div>

                    

    </body>
    </html>
    """
    template = Template(template_str)
    html_content = template.render(birds=birds_data)
    return html_content
