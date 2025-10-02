// Funcionalidades principais
document.addEventListener('DOMContentLoaded', function() {
    // Atualizar ano no copyright
    document.getElementById('year').textContent = new Date().getFullYear();
    
    // Efeito de digitação no título
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const text = heroTitle.textContent;
        heroTitle.textContent = '';
        
        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                heroTitle.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        };
        
        // Iniciar efeito de digitação após um pequeno delay
        setTimeout(typeWriter, 500);
    }
    
    // Animação de entrada dos elementos
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.skill-card, .project-card, .contact-card');
        
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementTop < windowHeight * 0.8) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Inicializar animações
    setTimeout(animateOnScroll, 500);
    window.addEventListener('scroll', animateOnScroll);
    
    // Tooltip para ícones de tecnologia
    const techIcons = document.querySelectorAll('.tech-icon');
    techIcons.forEach(icon => {
        icon.addEventListener('mouseenter', function() {
            this.style.zIndex = '10';
        });
        
        icon.addEventListener('mouseleave', function() {
            this.style.zIndex = '1';
        });
    });
    
    // Efeito de flutuação para cards de projeto
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.animation = 'float 3s ease-in-out infinite';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.animation = '';
        });
    });
});