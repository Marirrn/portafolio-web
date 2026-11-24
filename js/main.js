// Esqueleto de JavaScript del portafolio

// --- 1. Idioma ES/EN ---
// El texto en español se lee del propio HTML; aquí solo va la versión en inglés.
const en = {
    "skip": "Skip to content",
    "hero.rol": "Developer and technical support",
    "hero.frase": "[PLACEHOLDER] Short introduction line.",
    "sk.dev": "[PLACEHOLDER] Development",
    "sk.sop": "[PLACEHOLDER] Technical support",
    "sk.her": "[PLACEHOLDER] Tools",
    "sk.lista": "[PLACEHOLDER] Skills list.",
    "sk.listah": "[PLACEHOLDER] Tools list.",
    "f.todos": "All",
    "f.a": "[PLACEHOLDER] Category A",
    "f.b": "[PLACEHOLDER] Category B",
    "p.1": "[PLACEHOLDER] Project 1",
    "p.2": "[PLACEHOLDER] Project 2",
    "p.3": "[PLACEHOLDER] Project 3",
    "p.4": "[PLACEHOLDER] Project 4",
    "p.desc": "[PLACEHOLDER] Short project description.",
    "p.tec": "[PLACEHOLDER] Technology",
    "c.nombre": "Name",
    "c.correo": "Email",
    "c.mensaje": "Message",
    "c.e1": "Enter your name.",
    "c.e2": "Enter a valid email.",
    "c.e3": "Enter your message.",
    "c.enviar": "Send",
    "nav.inicio": "Home",
    "nav.sobre": "About me",
    "nav.habilidades": "Skills",
    "nav.proyectos": "Projects",
    "nav.contacto": "Contact",
    "inicio.proyectos": "View projects",
    "inicio.contacto": "Contact",
    "about.p1": "I am a responsible and committed person whose curiosity for solving problems drove me to join the world of technology. I describe myself as collaborative, with a strong ability to adapt to new technical environments. I enjoy learning innovative tools, exploring different areas of the industry, and adding value through teamwork.",
    "c.linea": "Email: <a href=\"mailto:m.rodriguez.portafolio@gmail.com\">m.rodriguez.portafolio@gmail.com</a> · <a href=\"https://mrodriguez-git.github.io/portafolio-web/\">Published portfolio</a>"
};
const es = {};
document.querySelectorAll('[data-i18n]').forEach(el => { es[el.dataset.i18n] = el.innerHTML; });
let idiomaActual = 'es';

function cambiarIdioma(idioma) {
    idiomaActual = idioma;
    const textos = idioma === 'en' ? en : es;
    document.documentElement.lang = idioma;
    document.querySelectorAll('[data-i18n]').forEach(el => {
        el.innerHTML = textos[el.dataset.i18n];
    });
    const cv = document.querySelector('.boton-cv');
    cv.href = idioma === 'en' ? cv.dataset.cvEn : cv.dataset.cvEs;
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
    estado.textContent = idiomaActual === 'en' ? '[PLACEHOLDER] Sending not connected yet.' : '[PLACEHOLDER] Envío aún no conectado.';
});

// --- 5. Aparición suave al hacer scroll ---
// Las secciones (menos el inicio) aparecen al entrar en pantalla
const bloques = document.querySelectorAll('.seccion:not(.seccion-inicio) .container');
const observador = new IntersectionObserver((entradas) => {
    entradas.forEach(entrada => {
        // Aparece al entrar en pantalla y se oculta al salir, así se repite al subir y bajar
        entrada.target.classList.toggle('visible', entrada.isIntersecting);
    });
}, { threshold: 0.15 });

bloques.forEach(bloque => {
    bloque.classList.add('revelar');
    observador.observe(bloque);
});
