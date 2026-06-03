document.addEventListener("DOMContentLoaded", function () {
    
    // 1. Rolagem suave para os links do menu
    const linksMenu = document.querySelectorAll(".nav-links a");

    linksMenu.forEach(link => {
        link.addEventListener("click", function (evento) {
            // Verifica se o link é para uma seção interna (começa com #)
            const href = this.getAttribute("href");
            if (href.startsWith("#")) {
                evento.preventDefault(); // Evita o salto brusco padrão
                
                const secaoAlvo = document.querySelector(href);
                if (secaoAlvo) {
                    secaoAlvo.scrollIntoView({
                        behavior: "smooth", // Efeito de rolagem suave
                        block: "start"
                    });
                }

                // Atualiza a classe ativa no menu
                linksMenu.forEach(l => l.classList.remove("active"));
                this.classList.add("active");
            }
        });
    });

    // 2. Interatividade dos botões dos cards (Simulação de Acesso)
    const botoesCard = document.querySelectorAll(".btn-card, .btn-principal");

    botoesCard.forEach(botao => {
        botao.addEventListener("click", function () {
            // Pega o título do card mais próximo para personalizar a mensagem
            const card = this.closest(".card");
            let nomeTarefa = "Painel Geral";
            
            if (card) {
                nomeTarefa = card.querySelector("h3").innerText;
            } else if (this.classList.contains("btn-principal")) {
                nomeTarefa = "Área do Estudante - Agrinho 2026";
            }

            // Exibe um feedback visual ou redirecionamento simulado
            alert(`Conectando à plataforma: ${nomeTarefa}.\nCarregando dados do aluno...`);
        });
    });
});