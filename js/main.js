const form = document.getElementById('leadForm');
form.addEventListener('submit', async (e) => {
e.preventDefault();
const data = new FormData(form);
const response = await fetch(form.action, {
    method: form.method,
    body: data,
    headers: { 'Accept': 'application/json' }
});
if (response.ok) {
    form.innerHTML = "<p><b>¡Gracias!</b> Tu mensaje ha sido enviado con éxito.</p>";
} else {
    form.innerHTML = "<p>Hubo un error al enviar el mensaje. Intenta de nuevo.</p>";
}
});

document.getElementById('year').textContent = new Date().getFullYear();