// Obtener todos los botones
const buttons = document.querySelectorAll('.btn');

// Agregar event listeners a cada botón
buttons.forEach(button => {
    button.addEventListener('click', function() {
        // Agregar animación
        this.classList.add('clicked');
        
        // Obtener el número del botón
        const buttonNumber = this.getAttribute('data-sound');
        
        // Mostrar mensaje en consola
        console.log(`Botón ${buttonNumber} presionado`);
        
        // Puedes agregar aquí la funcionalidad que desees
        // Por ejemplo, reproducir un sonido, cambiar de página, etc.
        
        // Remover la clase de animación después de que termine
        setTimeout(() => {
            this.classList.remove('clicked');
        }, 300);
    });
});

// Opcional: Agregar soporte para atajos de teclado (teclas 0-9)
document.addEventListener('keydown', function(event) {
    const key = event.key;
    
    if (key >= '0' && key <= '9') {
        const buttonIndex = key === '0' ? 9 : parseInt(key) - 1;
        if (buttons[buttonIndex]) {
            buttons[buttonIndex].click();
        }
    }
});
