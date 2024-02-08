const lampada = document.getElementById('lampada');
let quebrada = false;

lampada.addEventListener('mouseover', function() {
    if (!quebrada) {
        this.src = '1lampadaA.png';
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
