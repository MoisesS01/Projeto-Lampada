const lampada = document.getElementById('lampada');
let quebrada = false;

lampada.addEventListener('mouseenter', function() {
    if (!quebrada) {
        this.src = '1lampadaA.png';
    }
});

lampada.addEventListener('mouseleave', function() {
    if (!quebrada) {
        this.src = '2lampadaB.png';
    }
});

lampada.addEventListener('click', function() {
    if (!quebrada) {
        this.src = '3lampadaC.png';
        const audio = new Audio('quebra.mp3');
        audio.play();
        quebrada = true;
    }
});
