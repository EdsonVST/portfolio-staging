// Navegação e Menu Mobile
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    const header = document.querySelector('header');
    const navOverlay = document.createElement('div');
    
    // Criar overlay para o menu
    navOverlay.className = 'nav-overlay';
    document.body.appendChild(navOverlay);
    
    // Menu Mobile
    mobileMenuBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        toggleMobileMenu();
    });
    
    // Fechar menu ao clicar no overlay
    navOverlay.addEventListener('click', function() {
        closeMobileMenu();
    });
    
    // Fechar menu ao clicar em um link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function() {
            closeMobileMenu();
        });
    });
    
    // Fechar menu ao pressionar ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && navLinks.classList.contains('active')) {
            closeMobileMenu();
        }
    });
    
    // Fechar menu ao redimensionar a janela para desktop
    window.addEventListener('resize', function() {
        if (window.innerWidth > 992 && navLinks.classList.contains('active')) {
            closeMobileMenu();
        }
    });
    
    function toggleMobileMenu() {
        const isActive = navLinks.classList.contains('active');
        
        if (isActive) {
            closeMobileMenu();
        } else {
            openMobileMenu();
        }
    }
    
    function openMobileMenu() {
        navLinks.classList.add('active');
        navOverlay.classList.add('active');
        mobileMenuBtn.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        // Animar os itens do menu sequencialmente
        const menuItems = document.querySelectorAll('.nav-links li');
        menuItems.forEach((item, index) => {
            item.style.animation = `slideInFromRight 0.3s ease forwards ${index * 0.1}s`;
            item.style.opacity = '0';
        });
    }
    
    function closeMobileMenu() {
        navLinks.classList.remove('active');
        navOverlay.classList.remove('active');
        mobileMenuBtn.classList.remove('active');
        document.body.style.overflow = '';
        
        // Resetar animações dos itens
        const menuItems = document.querySelectorAll('.nav-links li');
        menuItems.forEach(item => {
            item.style.animation = '';
            item.style.opacity = '';
        });
    }
    
    // Atualizar navegação ativa ao rolar
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.nav-links a');
        
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
        
        // Header scroll effect
        if (window.scrollY > 100) {
            header.classList.add('header-scrolled');
        } else {
            header.classList.remove('header-scrolled');
        }
    });
    
    // Smooth scroll para links internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
});