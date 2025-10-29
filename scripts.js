  const form = document.getElementById("formCadastro");

    form.addEventListener("submit", function(event) {
      event.preventDefault(); // evita o reload da página

      // Pega os dados do formulário
      const usuario = {
        email: document.getElementById("inputEmail4").value,
        senha: document.getElementById("inputPassword4").value,
        endereco: document.getElementById("inputAddress").value,
        endereco2: document.getElementById("inputAddress2").value,
        cidade: document.getElementById("inputCity").value,
        estado: document.getElementById("inputState").value,
        cep: document.getElementById("inputZip").value
      };

      // Salva no localStorage
      let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
      usuarios.push(usuario);
      localStorage.setItem("usuarios", JSON.stringify(usuarios));

      alert("✅ Cadastro realizado com sucesso!");
      form.reset();
    });

    // main.js
document.addEventListener("DOMContentLoaded", () => {
    console.log("Página carregada com sucesso!");

    // 🌟 Mensagem de boas-vindas
    alert("🎅 Bem-vindo à loja de Natal de Gabriel Freire Bacelar!");

    // 🧭 Botão de rolar ao topo (exemplo interativo)
    const btnTopo = document.createElement("button");
    btnTopo.textContent = "⬆️ Voltar ao topo";
    btnTopo.className = "btn btn-danger position-fixed bottom-0 end-0 m-3";
    document.body.appendChild(btnTopo);

    btnTopo.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    // 💡 Exemplo de validação simples de formulário
    const formCadastro = document.getElementById("formCadastro");
    if (formCadastro) {
        formCadastro.addEventListener("submit", (event) => {
            event.preventDefault();

            const email = document.getElementById("inputEmail4").value;
            const cidade = document.getElementById("inputCity").value;

            if (email && cidade) {
                alert(`✅ Cadastro realizado com sucesso!\nEmail: ${email}\nCidade: ${cidade}`);
                formCadastro.reset();
            } else {
                alert("⚠️ Por favor, preencha todos os campos obrigatórios!");
            }
        });
    }
});


// scripts.js

// Exibir mensagem de boas-vindas dinâmica
document.addEventListener("DOMContentLoaded", () => {
  alert("🎅 Bem-vindo à Loja Natalina do Gabriel!");
});

// Validação do formulário de cadastro
document.getElementById("formCadastro").addEventListener("submit", (e) => {
  e.preventDefault();

  const email = document.getElementById("inputEmail4").value;
  const senha = document.getElementById("inputPassword4").value;
  const cidade = document.getElementById("inputCity").value;

  if (!email.includes("@")) {
    alert("⚠️ Insira um e-mail válido!");
    return;
  }

  if (senha.length < 6) {
    alert("🔒 A senha precisa ter no mínimo 6 caracteres!");
    return;
  }

  alert(`✅ Cadastro realizado com sucesso!\nBem-vindo, usuário de ${cidade}!`);
  e.target.reset();
});

// Alterar tema da página (modo escuro/claro)
const botaoTema = document.createElement("button");
botaoTema.textContent = "🌙 Modo Escuro";
botaoTema.classList.add("btn", "btn-dark", "m-3");
document.body.prepend(botaoTema);

let darkMode = false;
botaoTema.addEventListener("click", () => {
  darkMode = !darkMode;
  document.body.classList.toggle("bg-dark");
  document.body.classList.toggle("text-white");
  botaoTema.textContent = darkMode ? "☀️ Modo Claro" : "🌙 Modo Escuro";
});

// Interatividade com cards
const cards = document.querySelectorAll(".card");
cards.forEach(card => {
  card.addEventListener("mouseenter", () => {
    card.classList.add("shadow-lg", "border-danger");
  });
  card.addEventListener("mouseleave", () => {
    card.classList.remove("shadow-lg", "border-danger");
  });
});

// Exemplo de armazenamento local (salvar dados do formulário)
document.getElementById("formCadastro").addEventListener("submit", () => {
  const dados = {
    email: document.getElementById("inputEmail4").value,
    cidade: document.getElementById("inputCity").value
  };
  localStorage.setItem("cadastro", JSON.stringify(dados));
});
