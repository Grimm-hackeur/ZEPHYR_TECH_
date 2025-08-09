// === Sélection des éléments ===
const settingsBtn = document.getElementById('settingsBtn');
const settingsMenu = document.getElementById('settingsMenu');
const overlay = document.getElementById('overlay');
const darkModeToggle = document.getElementById('darkModeToggle');

// === Ouvrir / Fermer menu paramètres ===
settingsBtn.addEventListener('click', () => {
    settingsMenu.classList.toggle('open');
    overlay.classList.toggle('active');
});

overlay.addEventListener('click', () => {
    settingsMenu.classList.remove('open');
    overlay.classList.remove('active');
});

// === Mode sombre ===
darkModeToggle.addEventListener('change', () => {
    document.body.classList.toggle('dark');
});

// === Navigation vers sections ===
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}