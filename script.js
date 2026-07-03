// Manejo del cambio de pestañas
function openTab(tabId) {
    const contents = document.querySelectorAll('.tab-content');
    const tabs = document.querySelectorAll('.tab-btn');
    
    contents.forEach(content => content.classList.remove('active-content'));
    tabs.forEach(tab => tab.classList.remove('active'));
    
    document.getElementById(tabId).classList.add('active-content');
    event.currentTarget.classList.add('active');
}

// Seguimiento dinámico de ojos
document.addEventListener('mousemove', (e) => {
    const pupils = document.querySelectorAll('.pupil');
    
    pupils.forEach(pupil => {
        const eye = pupil.parentElement;
        const rect = eye.getBoundingClientRect();
        const eyeX = rect.left + rect.width / 2;
        const eyeY = rect.top + rect.height / 2;
        
        const angle = Math.atan2(e.clientY - eyeY, e.clientX - eyeX);
        const distance = Math.min(10, Math.hypot(e.clientX - eyeX, e.clientY - eyeY) / 15);
        
        const targetX = Math.cos(angle) * distance;
        const targetY = Math.sin(angle) * distance;
        
        pupil.style.transform = `translate(${targetX}px, ${targetY}px)`;
    });
});

// Validador del ARG
function checkCode() {
    const codeInput = document.getElementById('access-code').value.trim();
    const errorMsg = document.getElementById('error-msg');
    
    if (codeInput === '1351046447') {
        errorMsg.textContent = "";
        const glitchScreen = document.getElementById('glitch-screen');
        glitchScreen.style.display = 'flex';
        
        // Redirección al proyecto de Scratch tras el glitch de 4 segundos
        setTimeout(() => {
            window.location.href = `https://scratch.mit.edu/projects/1351046447`;
        }, 4000);
        
    } else {
        errorMsg.textContent = ">> CÓDIGO INCORRECTO. ACCESO DENEGADO. REINTENTANDO INTRUSIÓN...";
        document.body.style.borderColor = 'red';
        setTimeout(() => document.body.style.borderColor = 'transparent', 500);
    }
}