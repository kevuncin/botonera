// Obtener todos los botones
const buttons = document.querySelectorAll('.btn');

// Agregar event listeners a cada botón
buttons.forEach(button => {
    button.addEventListener('click', function() {
        // Agregar animación
        this.classList.add('clicked');

        // Obtener el valor del atributo data-sound
        const sound = this.getAttribute('data-sound');

        // Mostrar mensaje en consola
        console.log(`Botón ${sound} presionado`);

        // Si el botón es el de pedo, reproducir el sonido
        if (sound === './sonidos/pedo.mp4') {
            let audio = new Audio(sound);
            audio.play();
        }

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
