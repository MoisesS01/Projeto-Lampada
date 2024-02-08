const lampada = document.getElementById('lampada');

lampada.addEventListener('mouseover', function() {
    this.src = '1lampadaA.png';
});

lampada.addEventListener('click', function() {
    this.src = '3lampadaC.png';
    const audio = new Audio('quebra.mp3');
    audio.play();
});
