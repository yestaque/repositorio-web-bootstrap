setTimeout(() => {
  alert("Bem-vindo ao meu portfólio natalino 🎅🎁");
}, 2000);

setInterval(() => {
  document.getElementById("data").textContent = new Date().toLocaleString();
}, 1000);

document.querySelector('.icon-link').addEventListener('click', e => {
  if (!confirm("Quer abrir o WhatsApp para falar comigo?")) e.preventDefault();
});

document.getElementById("botaoTema").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

const topo = document.getElementById("topo");
window.addEventListener("scroll", () => {
  topo.style.display = window.scrollY > 200 ? "block" : "none";
});
topo.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

const musica = document.getElementById("musica");
document.getElementById("play").addEventListener("click", () => {
  if (musica.paused) musica.play(); else musica.pause();
});

const alvo = new Date("Dec 25, 2025 00:00:00").getTime();
setInterval(() => {
  const agora = new Date().getTime();
  const falta = alvo - agora;
  const dias = Math.floor(falta / (1000 * 60 * 60 * 24));
  document.getElementById("natal").textContent = `🎄 Faltam ${dias} dias para o Natal!`;
}, 1000);
