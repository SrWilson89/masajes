# Masajes Armonía - Sitio Web Profesional (Versión Estática)

Este es el sitio web oficial para el negocio de masajes "Masajes Armonía", diseñado para proporcionar información esencial sobre nuestros servicios, experiencia, ubicación y detalles de contacto. Esta versión es completamente estática (HTML, CSS, JavaScript) y es ideal para ser desplegada en servicios como GitHub Pages.

---

## Estructura del Proyecto

El proyecto sigue una estructura simple y eficiente, con todos los archivos ubicados en la carpeta raíz para facilitar la navegación y el mantenimiento.

-   `index.html`: La página principal del sitio web, que contiene toda la información de cara al usuario.
-   `style.css`: Hoja de estilos CSS para dar diseño y presentación visual al sitio.
-   `script.js`: Archivo JavaScript para añadir interactividad, como la construcción del enlace `mailto:` para el formulario de contacto.
-   `README.md`: Este archivo, que proporciona una descripción del proyecto y las instrucciones de configuración.

---

## Características

-   **Sección de Experiencia:** Detalla la filosofía y la experiencia de los terapeutas.
-   **Precios y Servicios:** Una tabla clara con los diferentes tipos de masajes, duración y precios.
-   **Ubicación:** Dirección y horario de atención del negocio.
-   **Formulario de Contacto:** Al ser enviado, el formulario abre el cliente de correo predeterminado del usuario con un mensaje pre-rellenado. Esto evita la necesidad de un backend.
-   **Diseño Responsivo:** (Pendiente de implementar/mejorar con más CSS si es necesario) Diseñado para verse bien en diferentes dispositivos.

---

## Configuración y Despliegue con GitHub Pages

Para desplegar este proyecto con **GitHub Pages**, sigue estos pasos:

1.  **Crear un nuevo repositorio de GitHub:**
    -   Ve a [GitHub](https://github.com/) y crea un **nuevo repositorio público**. Nómbralo como quieras (ej. `masajes-armonia-web`).

2.  **Subir los archivos al repositorio:**
    -   Clona tu nuevo repositorio a tu máquina local:
        `git clone https://github.com/tu_usuario/masajes-armonia-web.git`
    -   Copia todos los archivos de este proyecto (`index.html`, `style.css`, `script.js`, `README.md`) dentro de la carpeta del repositorio que acabas de clonar.
    -   Añade los archivos, haz un commit y súbelos a GitHub:
        ```bash
        cd masajes-armonia-web
        git add .
        git commit -m "Initial commit of Masajes Armonia static website"
        git push origin main
        ```
        (Reemplaza `main` si tu rama principal se llama `master`).

3.  **Configurar GitHub Pages:**
    -   Una vez que los archivos estén en GitHub, ve a la configuración de tu repositorio en GitHub.
    -   Haz clic en la pestaña "**Pages**" (o "GitHub Pages" en algunas interfaces).
    -   En la sección "Source" o "Build and deployment", selecciona la rama donde están tus archivos (normalmente `main` o `master`) y la carpeta `/ (root)` como origen.
    -   Guarda los cambios.

4.  **Acceder al Sitio Web:**
    -   GitHub Pages tardará uno o dos minutos en construir y desplegar tu sitio.
    -   Una vez listo, verás un mensaje en la sección "Pages" que indica la URL de tu sitio (ej. `https://tu_usuario.github.io/masajes-armonia-web/`).
    -   Abre esta URL en tu navegador y ¡tu sitio web estará en línea!

---

## Consideraciones Adicionales

-   **Dirección de Email para Contacto:** En el archivo `script.js`, asegúrate de cambiar `info@masajesarmonia.com` a tu dirección de correo electrónico real para que los mensajes del formulario te lleguen correctamente.
-   **Formulario de Contacto `mailto:`:** Ten en cuenta que esta solución depende de que el usuario tenga un cliente de correo configurado en su dispositivo. Si el usuario no tiene uno, o no lo usa, el formulario no funcionará como esperaría. Para una solución de formulario más robusta sin backend, considera un servicio de terceros como [Formspree](https://formspree.io/) o [Netlify Forms](https://www.netlify.com/products/forms/) (si usas Netlify para el despliegue).
-   **Mejoras de Diseño:** El `style.css` proporciona una base. Siéntete libre de expandirlo para mejorar la estética, añadir animaciones o implementar un diseño más complejo.
-   **SEO:** Para mejorar la visibilidad en motores de búsqueda, considera añadir meta-descripciones, palabras clave relevantes y asegurar que el contenido sea accesible.