let mouseX = 0;
let mouseY = 0;
let bolaX = 0;
let bolaY = 0;
const bola = document.querySelector('.bola');

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

function animate() {
  bolaX += (mouseX - bolaX) * 0.1;
  bolaY += (mouseY - bolaY) * 0.1;
  bola.style.left = bolaX + 'px';
  bola.style.top = bolaY + 'px';
  requestAnimationFrame(animate);
}

animate();
