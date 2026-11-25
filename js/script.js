const topo = document.querySelector('header');

function aoRolar() {
  topo.classList.toggle('rolou', window.scrollY > 60);
}
window.addEventListener('scroll', aoRolar);
aoRolar();

document.querySelector('.menu-botao').onclick = () => topo.classList.toggle('aberto');
document.querySelectorAll('nav a').forEach((link) => {
  link.onclick = () => topo.classList.remove('aberto');
});

const palavras = ['imprime', 'corta', 'monta', 'programa', 'testa'];
const palavra = document.getElementById('palavra');
let posicao = 0;
setInterval(() => {
  palavra.style.opacity = 0;
  setTimeout(() => {
    posicao = (posicao + 1) % palavras.length;
    palavra.textContent = palavras[posicao];
    palavra.style.opacity = 1;
  }, 300);
}, 2200);

const alvos = document.querySelectorAll('section:not(.hero) .titulo, .intro, .cartao, .regra, .passos li, figure, .historia, .linha, .duas-colunas, .carrossel');
const observador = new IntersectionObserver((itens) => {
  itens.forEach((item) => {
    if (item.isIntersecting) {
      item.target.classList.add('aparece');
      observador.unobserve(item.target);
    }
  });
}, { threshold: 0.12 });
alvos.forEach((elemento) => {
  elemento.classList.add('revelar');
  observador.observe(elemento);
});

const videos = new IntersectionObserver((itens) => {
  itens.forEach((item) => {
    if (item.isIntersecting) item.target.play().catch(() => {});
    else item.target.pause();
  });
}, { threshold: 0.5 });
document.querySelectorAll('video').forEach((video) => videos.observe(video));
