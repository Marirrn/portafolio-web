// Esqueleto de JavaScript del portafolio

// --- 1. Idioma ES/EN ---
// El texto en español se lee del propio HTML; aquí solo va la versión en inglés.
const en = {
    "skip": "Skip to content",
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
    "c.linea": "Email: <a href=\"mailto:m.rodriguez.portafolio@gmail.com\">m.rodriguez.portafolio@gmail.com</a> · <a href=\"https://marirrn.github.io/portafolio-web/\">Published portfolio</a>",
    "pc.d": "Cryptocurrency payment platform for merchants. I worked on the backend: product and inventory management (stock is deducted on purchase), PDF invoice generation and delivery by email, per-merchant sales reports, and the layered project structure.",
    "pc.n": "Groups the rows returned by the database: each sale is a parent record and its products are the children.",
    "rg.d": "Dungeon game built around design patterns. I worked on the interface and gameplay: game menus (start, pause and game over), character movement, health bar and potion pickups.",
    "le.d": "Platform for booking concert tickets. I worked on the booking flow: each concert’s page, seat selection and a simulated card payment.",
    "le.n": "Each click adds or removes a seat from the list and recalculates the total.",
    "pb.t": "Online store database",
    "pb.d": "Normalized relational database (3NF) for an online technology store. I developed a large part of the team project: the table model and stored procedures with transactions and savepoints.",
    "pb.n": "Procedure with a transaction and savepoint: if anything fails, it rolls back and returns an error code.",
    "cf.t": "Geometric shapes calculator",
    "cf.d": "Java application using object-oriented programming to calculate areas of geometric shapes. I developed the area calculation part.",
    "cf.n": "Calculates a triangle’s area from its three sides using Heron’s formula.",
    "gy.t": "Gym database",
    "gy.d": "Database for managing a gym (clients, branches, instructors, measurements and routines). I took part from the model diagram through to the code: tables, queries and functions to calculate age, BMI and body composition.",
    "ver.codigo": "View code",
    "f.web": "Web",
    "f.bd": "Databases",
    "f.jue": "Games and desktop",
    "c.intro": "Have a question or want to chat? Send me a message using the form and I’ll gladly reply.",
    "hero.hola": "Hi, I’m Mariana.",
    "hero.lema": "I solve problems with <span class=\"resalta-azul\">logic</span>, build them with <span class=\"resalta-rojo\">code</span> and look after them with <span class=\"resalta-naranja\">design</span>.",
    "hero.bienvenida": "Welcome to my portfolio.",
    "dev.t": "Development",
    "sop.t": "Technical support",
    "her.t": "Tools",
    "dev.0": "Python, Java and SQL",
    "dev.1": "HTML and CSS",
    "dev.2": "Full stack development",
    "dev.3": "Database design and modeling",
    "dev.4": "Object-oriented programming",
    "dev.5": "APIs",
    "sop.0": "Incident resolution",
    "sop.1": "Log analysis and root-cause diagnosis",
    "sop.2": "Container troubleshooting (OpenShift and Kubernetes)",
    "sop.3": "Authentication and access (LDAP, SAML, Active Directory)",
    "sop.4": "Customer support and communication",
    "her.0": "Git/GitHub",
    "her.1": "Docker",
    "her.2": "kubectl",
    "her.3": "Ansible",
    "her.4": "Bash",
    "her.5": "PowerShell",
    "her.6": "VS Code",
    "her.7": "DBeaver",
    "her.8": "MySQL Workbench",
    "her.9": "Postman",
    "her.10": "Jira",
    "her.11": "Eclipse MAT"
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
    const cv = document.querySelector('.btn-cv');
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

// --- 4. Formulario de contacto (EmailJS) ---
// Datos de la cuenta de EmailJS (la clave pública es segura en el navegador)
const EMAILJS = {
    publicKey: 'r-TvbZUdY7loCwLsX',
    serviceId: 'service_4f5tfu3',
    templateId: 'template_ppch55c'
};
const mensajesForm = {
    es: { enviando: 'Enviando…', ok: 'Mensaje enviado. ¡Gracias! Pronto te estaré contactando.', error: 'No se pudo enviar. Intente de nuevo más tarde.', sinConfig: '[PLACEHOLDER] Falta configurar EmailJS.' },
    en: { enviando: 'Sending…', ok: 'Message sent. Thank you! I’ll be in touch soon.', error: 'The message could not be sent. Please try again later.', sinConfig: '[PLACEHOLDER] EmailJS is not configured yet.' }
};
const formulario = document.getElementById('form-contacto');
const estado = document.getElementById('estado-formulario');

formulario.addEventListener('submit', async evento => {
    evento.preventDefault();
    formulario.classList.add('was-validated');
    if (!formulario.checkValidity()) return;

    const msg = mensajesForm[idiomaActual];
    if (EMAILJS.publicKey.startsWith('[PLACEHOLDER')) { estado.textContent = msg.sinConfig; return; }

    const boton = formulario.querySelector('[type="submit"]');
    boton.disabled = true;
    estado.textContent = msg.enviando;
    try {
        // Los campos name="nombre", "correo" y "mensaje" son las variables de la plantilla
        await emailjs.sendForm(EMAILJS.serviceId, EMAILJS.templateId, formulario, { publicKey: EMAILJS.publicKey });
        // El formulario se desvanece, se vacía y vuelve a aparecer con suavidad
        formulario.classList.add('desvanecer');
        await new Promise(r => setTimeout(r, 500));
        formulario.reset();
        formulario.classList.remove('was-validated', 'desvanecer');
        estado.textContent = msg.ok;
    } catch (error) {
        console.error(error);
        estado.textContent = msg.error;
    } finally {
        boton.disabled = false;
    }
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
