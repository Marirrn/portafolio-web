// Esqueleto de JavaScript del portafolio

// --- 1. Idioma ES/EN (esqueleto: solo navegación y botones del inicio) ---
const textos = {
    es: { 'nav.inicio': 'Inicio', 'nav.sobre': 'Sobre mí', 'nav.habilidades': 'Habilidades',
          'nav.proyectos': 'Proyectos', 'nav.contacto': 'Contacto',
          'inicio.proyectos': 'Ver proyectos', 'inicio.contacto': 'Contacto' },
    en: { 'nav.inicio': 'Home', 'nav.sobre': 'About me', 'nav.habilidades': 'Skills',
          'nav.proyectos': 'Projects', 'nav.contacto': 'Contact',
          'inicio.proyectos': 'View projects', 'inicio.contacto': 'Contact' }
};

function cambiarIdioma(idioma) {
    document.documentElement.lang = idioma;
    document.querySelectorAll('[data-i18n]').forEach(el => {
        el.textContent = textos[idioma][el.dataset.i18n];
    });
    document.querySelectorAll('.btn-idioma').forEach(btn => {
        const activo = btn.dataset.idioma === idioma;
        btn.classList.toggle('activo', activo);
        btn.setAttribute('aria-pressed', activo);
    });
}

document.querySelectorAll('.btn-idioma').forEach(btn => {
    btn.addEventListener('click', () => cambiarIdioma(btn.dataset.idioma));
});

// --- 2. Botón scrolltop ---
const botonScrollTop = document.getElementById('scrolltop');

window.addEventListener('scroll', () => {
    botonScrollTop.classList.toggle('visible', window.scrollY > 400);
});

botonScrollTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// --- 3. Galería: filtro por categoría ---
const botonesFiltro = document.querySelectorAll('[data-filtro]');

botonesFiltro.forEach(boton => {
    boton.addEventListener('click', () => {
        const filtro = boton.dataset.filtro;
        botonesFiltro.forEach(b => b.classList.toggle('activo', b === boton));
        document.querySelectorAll('.proyecto').forEach(proyecto => {
            const visible = filtro === 'todos' || proyecto.dataset.categoria === filtro;
            proyecto.classList.toggle('oculto', !visible);
        });
    });
});

// --- 4. Formulario de contacto ---
const formulario = document.getElementById('form-contacto');
const estado = document.getElementById('estado-formulario');

formulario.addEventListener('submit', evento => {
    evento.preventDefault();
    formulario.classList.add('was-validated');
    if (!formulario.checkValidity()) return;

    // TODO: conectar aquí la librería de envío (p. ej. EmailJS) con los datos:
    const datos = Object.fromEntries(new FormData(formulario));
    console.log('Datos listos para enviar:', datos);
    estado.textContent = '[PLACEHOLDER] Envío aún no conectado.';
});
