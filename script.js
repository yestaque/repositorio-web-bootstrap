// script.js
window.addEventListener("DOMContentLoaded", () => {
  const hora = new Date().getHours();
  let mensagem = "";

  if (hora < 12) mensagem = "Bom dia, Gabriel!";
  else if (hora < 18) mensagem = "Boa tarde, Gabriel!";
  else mensagem = "Boa noite, Gabriel!";

  alert(mensagem + " Bem-vindo ao meu portfólio natalino 🎅");
});

// script.js
document.getElementById("darkModeToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

document.querySelector('.icon-link').addEventListener('click', (e) => {
  if (!confirm("Você deseja abrir o WhatsApp para falar com Gabriel?")) {
    e.preventDefault();
  }
});

function criarNeve() {
  const floco = document.createElement("div");
  floco.classList.add("floco");
  floco.style.left = Math.random() * window.innerWidth + "px";
  document.body.appendChild(floco);

  setTimeout(() => floco.remove(), 5000);
}

setInterval(criarNeve, 200);

let visitas = localStorage.getItem("visitas") || 0;
visitas++;
localStorage.setItem("visitas", visitas);
console.log(`Você já visitou esta página ${visitas} vezes.`);

setInterval(() => {
  document.getElementById("data").textContent = new Date().toLocaleString();
}, 1000);


const alvo = new Date("Dec 25, 2025 00:00:00").getTime();
setInterval(() => {
  const agora = new Date().getTime();
  const falta = alvo - agora;
  const dias = Math.floor(falta / (1000 * 60 * 60 * 24));
  document.getElementById("natal").textContent = `🎄 Faltam ${dias} dias para o Natal!`;
}, 1000);

const cores = ["#ffcccc", "#ccffcc", "#ccccff", "#fffccc"];
let i = 0;
setInterval(() => {
  document.body.style.backgroundColor = cores[i];
  i = (i + 1) % cores.length;
}, 5000);
