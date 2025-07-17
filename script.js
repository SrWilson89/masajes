// Espera a que el DOM (Document Object Model) esté completamente cargado antes de ejecutar el script.
// Esto asegura que todos los elementos HTML estén disponibles cuando intentemos acceder a ellos.
document.addEventListener('DOMContentLoaded', () => {
    // Selecciona el formulario de contacto por su ID.
    const contactForm = document.getElementById('contactForm');
    // Selecciona el elemento donde se mostrarán los mensajes del formulario (éxito/error).
    const formMessage = document.getElementById('formMessage');

    // Verifica si el formulario de contacto existe en la página.
    if (contactForm) {
        // Agrega un "event listener" para el evento 'submit' del formulario.
        // Cuando el usuario envía el formulario, se ejecuta la función anónima.
        contactForm.addEventListener('submit', (event) => {
            // Previene el comportamiento predeterminado del formulario, que es recargar la página
            // o intentar enviar a una URL (como contact.php). Esto nos permite manejar la lógica.
            event.preventDefault();

            // Oculta cualquier mensaje anterior del formulario y limpia sus clases.
            formMessage.style.display = 'none';
            formMessage.className = '';
            formMessage.textContent = '';

            // Obtiene los valores de los campos del formulario.
            const name = document.getElementById('nombre').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('telefono').value;
            const message = document.getElementById('mensaje').value;

            // Define la dirección de correo electrónico a la que se enviará el mensaje.
            // ¡IMPORTANTE!: Cambia esta dirección por tu email real para recibir los mensajes.
            const recipientEmail = 'info@masajesarmonia.com'; // Dirección de email de tu negocio

            // Construye el asunto del email, codificando los caracteres especiales para URLs.
            const subject = encodeURIComponent(`Mensaje desde la web de Masajes Armonía de: ${name}`);

            // Construye el cuerpo del email, incluyendo todos los datos del formulario.
            // encodeURIComponent se usa para asegurar que los espacios y caracteres especiales sean correctos en la URL.
            const body = encodeURIComponent(
                `Nombre: ${name}\n` +
                `Email: ${email}\n` +
                `Teléfono: ${phone || 'No proporcionado'}\n\n` + // Si no hay teléfono, muestra "No proporcionado"
                `Mensaje:\n${message}`
            );

            // Construye el enlace 'mailto:'.
            // Este enlace, al ser clicado o activado por JavaScript, intentará abrir el cliente de correo predeterminado del usuario.
            const mailtoLink = `mailto:${recipientEmail}?subject=${subject}&body=${body}`;

            try {
                // Abre el enlace mailto:. Esto generará un borrador de correo en el cliente del usuario.
                window.location.href = mailtoLink;

                // Muestra un mensaje de éxito. Esto aparecerá en la web.
                formMessage.textContent = '¡Tu cliente de correo se ha abierto con el mensaje listo! Por favor, envíalo.';
                formMessage.classList.add('success'); // Añade la clase CSS para estilo de éxito
                contactForm.reset(); // Reinicia el formulario, vaciando los campos
            } catch (error) {
                // En caso de que algo salga mal (raro con mailto), muestra un mensaje de error.
                console.error('Error al intentar abrir el cliente de correo:', error);
                formMessage.textContent = 'No se pudo abrir tu cliente de correo. Por favor, contáctanos directamente.';
                formMessage.classList.add('error'); // Añade la clase CSS para estilo de error
            } finally {
                // Asegura que el mensaje del formulario siempre sea visible después de un intento.
                formMessage.style.display = 'block';
            }
        });
    }
});