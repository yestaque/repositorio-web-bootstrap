function criarNeve() {
  const floco = document.createElement("div");
  floco.classList.add("floco");
  floco.style.left = Math.random() * window.innerWidth + "px";
  document.body.appendChild(floco);
  setTimeout(() => floco.remove(), 6000);
}
setInterval(criarNeve, 200);

document.getElementById("botaoTema").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

const cores = ["#ffcccc", "#ccffcc", "#ccccff", "#fffccc"];
let i = 0;
setInterval(() => {
  document.body.style.backgroundColor = cores[i];
  i = (i + 1) % cores.length;
}, 5000);

let carrinho = [];
function adicionar(item) {
  carrinho.push(item);
  alert(`${item} adicionado ao carrinho 🛍️`);
}

document.addEventListener("click", e => {
  const efeito = document.createElement("span");
  efeito.classList.add("click");
  efeito.style.left = e.pageX + "px";
  efeito.style.top = e.pageY + "px";
  document.body.appendChild(efeito);
  setTimeout(() => efeito.remove(), 800);
});
