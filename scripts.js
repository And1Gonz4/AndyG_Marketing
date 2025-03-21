// Manejo del formulario de contacto
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name && email && message) {
        alert(`Gracias, ${name}. Hemos recibido tu mensaje y nos pondremos en contacto contigo pronto.`);
        document.getElementById('contact-form').reset();
    } else {
        alert('Por favor, completa todos los campos del formulario.');
    }
});