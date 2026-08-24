// Botão para alternar entre tema claro e escuro

const temaBtn = document.getElementById("temaBtn");

temaBtn.addEventListener("click", function () {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        temaBtn.textContent = "☀️";
    } else {
        temaBtn.textContent = "🌙";
    }

});


// Mensagens de acolhimento

const mensagemBtn = document.getElementById("mensagemBtn");
const mensagemExtra = document.getElementById("mensagemExtra");

const mensagens = [
    "Sua voz importa. Você não está sozinho(a). 💜",
    "Respeito não é privilégio, é um direito de todas as pessoas.",
    "Pequenas atitudes podem gerar grandes mudanças.",
    "Não tenha medo de questionar o preconceito. A mudança começa com cada um de nós.",
    "Acolher, ouvir e respeitar também são formas de combater o machismo."
];

mensagemBtn.addEventListener("click", function () {

    const numero = Math.floor(Math.random() * mensagens.length);

    mensagemExtra.textContent = mensagens[numero];

});


// Animação simples ao aparecer na tela

const elementos = document.querySelectorAll(".card, .section-title, .content");

const observador = new IntersectionObserver((entradas) => {

    entradas.forEach((entrada) => {

        if (entrada.isIntersecting) {
            entrada.target.style.opacity = "1";
            entrada.target.style.transform = "translateY(0)";
        }

    });

}, {
    threshold: 0.15
});


elementos.forEach((elemento) => {

    elemento.style.opacity = "0";
    elemento.style.transform = "translateY(20px)";
    elemento.style.transition = "0.6s ease";

    observador.observe(elemento);

});