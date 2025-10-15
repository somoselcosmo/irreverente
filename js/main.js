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

// header shrink-on-scroll: add/remove class .site-header--small
(function(){
    const header = document.querySelector('.site-header');
    if(!header) return;
    const threshold = 60;
    function onScroll(){
        const y = window.scrollY || window.pageYOffset;
        if(y > threshold){
            header.classList.add('site-header--small');
        } else {
            header.classList.remove('site-header--small');
        }
    }
    window.addEventListener('scroll', onScroll, {passive:true});
    onScroll();
})();