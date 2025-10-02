// Sistema de Projetos Interativos
document.addEventListener('DOMContentLoaded', function() {
    // Banco de dados de projetos
    const projectsDB = {
        freegaze: {
            title: "FreeGaze",
            subtitle: "Sistema de Controle por Movimentos Oculares",
            image: "images/FreeGaze.jpg",
            description: `
                <p>Desenvolvido para revolucionar a acessibilidade digital, o FreeGaze é um sistema inovador de automação residencial controlado inteiramente por movimentos oculares, destinado a oferecer independência a pessoas com deficiências motoras severas.</p>
                <p>Utilizando uma combinação de visão computacional (OpenCV) e hardware embarcado (Raspberry Pi), a solução permite o controle preciso de iluminação, eletrodomésticos e dispositivos IoT sem exigir comandos de voz ou interação física.</p>
            `,
            features: [
                "Controle por movimentos oculares preciso",
                "Integração com dispositivos IoT",
                "Interface intuitiva e acessível",
                "Sistema em tempo real",
                "Baixo custo de implementação"
            ],
            technologies: ["Python", "C++", "OpenCV", "Raspberry Pi", "IoT", "Computer Vision"],
            tags: ["Python", "C++", "Raspberry Pi"],
            links: {
                github: "https://github.com/EdsonVST/FreeGaze",
                demo: null,
                video: null
            },
            category: "iot,embedded"
        },
        eeco: {
            title: "E-Eco",
            subtitle: "Plataforma de Economia Circular Eletrônica",
            image: "images/E-Eco.png",
            description: `
                <p>O E-Eco é uma plataforma web inovadora que promove a economia circular de dispositivos eletrônicos, conectando doadores, receptores e reparadores em um ecossistema colaborativo.</p>
                <p>Desenvolvida em Node.js, a solução combate o descarte inadequado de e-lixo ao incentivar a reutilização, reparo e reciclagem de forma gamificada, tornando a sustentabilidade acessível e recompensadora.</p>
            `,
            features: [
                "Gamificação da sustentabilidade",
                "Matchmaking entre doadores e receptores",
                "Sistema de reputação e recompensas",
                "Dashboard analítico",
                "Integração com mapas"
            ],
            technologies: ["Node.js", "PostgreSQL", "Docker", "React", "Mapbox API"],
            tags: ["Node.js", "PostgreSQL", "Docker"],
            links: {
                github: "https://github.com/EdsonVST/web-frontend",
                backend: "https://github.com/dangerprogrammer/web-backend",
                demo: null
            },
            category: "web,fullstack"
        },
        semaforo: {
            title: "Semáforo Adaptativo",
            subtitle: "Sistema Inteligente de Controle de Tráfego",
            image: "images/semaforo.png",
            description: `
                <p>Sistema de semáforos inteligentes e adaptativos utilizando Arduino e Tinkercad, projetado para otimizar o fluxo de veículos em cruzamentos urbanos e reduzir congestionamentos.</p>
                <p>O protótipo emprega sensores simulados (como detectores de presença ou contagem de veículos) para monitorar o tráfego em tempo real e ajustar dinamicamente os tempos dos sinais, priorizando vias com maior movimento.</p>
            `,
            features: [
                "Adaptação em tempo real ao tráfego",
                "Otimização do fluxo veicular",
                "Simulação de sensores inteligentes",
                "Algoritmos de priorização",
                "Interface de monitoramento"
            ],
            technologies: ["C++", "Arduino", "Tinkercad", "API", "Embedded Systems"],
            tags: ["C++", "Arduino", "API"],
            links: {
                demo: "https://www.tinkercad.com/things/eKPnl0QGhBf/copy-of-semaforo/editel",
                github: "https://github.com/EdsonVST/Sem-foro_adaptativo",
                video: null
            },
            category: "embedded,iot"
        },
        portfolio: {
            title: "Portfólio Pessoal",
            subtitle: "Site Portfolio Moderno e Responsivo",
            image: "images/portfolio.jpg",
            description: `
                <p>Desenvolvimento de um portfólio pessoal moderno e totalmente responsivo, destacando habilidades, projetos e experiência profissional.</p>
                <p>O projeto utiliza as melhores práticas de desenvolvimento web, com foco em performance, acessibilidade e experiência do usuário.</p>
            `,
            features: [
                "Design totalmente responsivo",
                "Animações e transições suaves",
                "Otimização para SEO",
                "Modais interativos",
                "Carregamento rápido"
            ],
            technologies: ["HTML5", "CSS3", "JavaScript", "Git", "Responsive Design"],
            tags: ["HTML", "CSS", "JavaScript"],
            links: {
                github: "https://github.com/EdsonVST/portfolio",
                demo: "#home",
                video: null
            },
            category: "web,frontend"
        }
    };

    // Elementos do DOM
    const projectsContainer = document.querySelector('.projects-grid');
    const filterButtons = document.querySelectorAll('.project-filter-btn');
    const modalOverlay = document.getElementById('projectModal');
    
    // Criar modal se não existir
    if (!modalOverlay) {
        createProjectModal();
    }

    // Filtro de projetos
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Atualizar botão ativo
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            const filterValue = this.getAttribute('data-filter');
            filterProjects(filterValue);
        });
    });

    // Animação de entrada dos projetos
    function animateProjects() {
        const projectCards = document.querySelectorAll('.project-card');
        projectCards.forEach((card, index) => {
            const cardTop = card.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (cardTop < windowHeight * 0.8) {
                setTimeout(() => {
                    card.classList.add('visible');
                }, index * 100);
            }
        });
    }

    // Filtragem de projetos
    function filterProjects(filter) {
        const projectCards = document.querySelectorAll('.project-card');
        
        projectCards.forEach(card => {
            const categories = card.getAttribute('data-category').split(',');
            
            if (filter === 'all' || categories.includes(filter)) {
                card.style.display = 'flex';
                // Re-animar ao filtrar
                setTimeout(() => {
                    card.classList.add('visible');
                }, 100);
            } else {
                card.style.display = 'none';
                card.classList.remove('visible');
            }
        });
    }

    // Criar modal dinamicamente
    function createProjectModal() {
        const modalHTML = `
            <div id="projectModal" class="project-modal-overlay">
                <div class="project-modal-content">
                    <span class="project-modal-close">&times;</span>
                    <div class="project-modal-header">
                        <img src="" alt="" class="project-modal-image" id="modalImage">
                        <div class="project-modal-tags" id="modalTags"></div>
                    </div>
                    <div class="project-modal-body">
                        <h2 class="project-modal-title" id="modalTitle"></h2>
                        <p class="project-modal-subtitle" id="modalSubtitle"></p>
                        <div class="project-modal-description" id="modalDescription"></div>
                        
                        <div class="project-modal-features">
                            <h4>Características Principais</h4>
                            <ul id="modalFeatures"></ul>
                        </div>
                        
                        <div class="project-modal-tech">
                            <h4>Tecnologias Utilizadas</h4>
                            <div class="tech-badges" id="modalTech"></div>
                        </div>
                        
                        <div class="project-modal-links" id="modalLinks"></div>
                    </div>
                </div>
            </div>
        `;
        
        document.body.insertAdjacentHTML('beforeend', modalHTML);
        
        // Adicionar event listeners ao modal criado
        setupProjectModalEvents();
    }

    // Configurar eventos do modal
    function setupProjectModalEvents() {
        const modalOverlay = document.getElementById('projectModal');
        const closeBtn = document.querySelector('.project-modal-close');
        const projectCards = document.querySelectorAll('.project-card');
        
        // Abrir modal ao clicar no card
        projectCards.forEach(card => {
            card.addEventListener('click', function(e) {
                // Prevenir abertura se clicar em um link
                if (e.target.tagName === 'A' || e.target.closest('a')) {
                    return;
                }
                
                const projectId = this.getAttribute('data-project');
                openProjectModal(projectId);
            });
        });
        
        // Fechar modal
        closeBtn.addEventListener('click', closeProjectModal);
        modalOverlay.addEventListener('click', function(e) {
            if (e.target === modalOverlay) {
                closeProjectModal();
            }
        });
        
        // Fechar com ESC
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
                closeProjectModal();
            }
        });
    }

    // Abrir modal do projeto
    function openProjectModal(projectId) {
        const project = projectsDB[projectId];
        const modalOverlay = document.getElementById('projectModal');
        
        if (!project) return;
        
        // Preencher modal com dados
        document.getElementById('modalImage').src = project.image;
        document.getElementById('modalImage').alt = project.title;
        document.getElementById('modalTitle').textContent = project.title;
        document.getElementById('modalSubtitle').textContent = project.subtitle;
        document.getElementById('modalDescription').innerHTML = project.description;
        
        // Preencher tags
        const tagsContainer = document.getElementById('modalTags');
        tagsContainer.innerHTML = '';
        project.tags.forEach(tag => {
            tagsContainer.innerHTML += `<span class="project-modal-tag">${tag}</span>`;
        });
        
        // Preencher características
        const featuresContainer = document.getElementById('modalFeatures');
        featuresContainer.innerHTML = '';
        project.features.forEach(feature => {
            featuresContainer.innerHTML += `<li>${feature}</li>`;
        });
        
        // Preencher tecnologias
        const techContainer = document.getElementById('modalTech');
        techContainer.innerHTML = '';
        project.technologies.forEach(tech => {
            techContainer.innerHTML += `<span class="tech-badge">${tech}</span>`;
        });
        
        // Preencher links
        const linksContainer = document.getElementById('modalLinks');
        linksContainer.innerHTML = '';
        
        Object.entries(project.links).forEach(([type, url]) => {
            if (url) {
                let text, icon, className;
                
                switch(type) {
                    case 'github':
                        text = 'Código Fonte';
                        icon = 'fab fa-github';
                        className = 'btn-primary';
                        break;
                    case 'demo':
                        text = 'Ver Demo';
                        icon = 'fas fa-external-link-alt';
                        className = 'btn-secondary';
                        break;
                    case 'video':
                        text = 'Ver Vídeo';
                        icon = 'fas fa-play';
                        className = 'btn-secondary';
                        break;
                    case 'backend':
                        text = 'Backend';
                        icon = 'fas fa-server';
                        className = 'btn-primary';
                        break;
                    default:
                        return;
                }
                
                linksContainer.innerHTML += `
                    <a href="${url}" class="btn ${className}" target="_blank">
                        <i class="${icon}"></i> ${text}
                    </a>
                `;
            }
        });
        
        // Mostrar modal
        document.body.style.overflow = 'hidden';
        modalOverlay.classList.add('active');
    }

    // Fechar modal
    function closeProjectModal() {
        const modalOverlay = document.getElementById('projectModal');
        modalOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    // Inicializar
    setTimeout(animateProjects, 500);
    window.addEventListener('scroll', animateProjects);
    
    // Inicializar eventos do modal
    setTimeout(setupProjectModalEvents, 100);
});