document.addEventListener('DOMContentLoaded', function() {
    
    // --- LÓGICA PARA O MENU HAMBURGUER (MOBILE) ---
    const hamburger = document.getElementById('hamburger');
    const mobileNav = document.getElementById('mobile-nav');
    const navLinks = document.querySelectorAll('.nav-list a, .mobile-nav a');

    // Alterna a visibilidade do menu mobile ao clicar no ícone
    hamburger.addEventListener('click', () => {
        mobileNav.classList.toggle('active');
    });

    // Fecha o menu mobile ao clicar em um dos links
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (mobileNav.classList.contains('active')) {
                mobileNav.classList.remove('active');
            }
        });
    });

    // --- LÓGICA PARA ROLAGEM SUAVE ---
    // Seleciona todos os links que começam com '#'
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault(); // Previne o comportamento padrão de pular para a âncora

            // Rola suavemente para a seção correspondente
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

});