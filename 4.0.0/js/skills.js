// Sistema de Habilidades Interativas
document.addEventListener('DOMContentLoaded', function() {
    // Banco de dados de habilidades
    const skillsDB = {
        python: {
            title: "Python",
            icon: '<i class="fab fa-python"></i>',
            level: "Intermediário",
            description: `
                <p>Minha principal ferramenta para análise de dados e automação de processos. Tenho experiência com:</p>
                <ul>
                    <li>Desenvolvimento de scripts para tratamento e análise de grandes volumes de dados</li>
                    <li>Criação de APIs REST com Flask e FastAPI</li>
                    <li>Automação de tarefas repetitivas e extração de dados de diversas fontes</li>
                    <li>Implementação de algoritmos de machine learning básicos</li>
                    <li>Integração com bancos de dados relacionais e NoSQL</li>
                </ul>
                <p>Utilizo frequentemente bibliotecas como Pandas, NumPy, Matplotlib e Requests para resolver problemas complexos de forma eficiente.</p>
            `
        },
        java: {
            title: "Java",
            icon: '<i class="fab fa-java"></i>',
            level: "Básico",
            description: `
                <p>Linguagem que estou aprendendo para desenvolver aplicativos:</p>
                <ul>
                    <li>Noções básicas de sintaxe e estrutura da linguagem</li>
                    <li>Programação Orientada a Objetos (POO): Classes, objetos, métodos, encapsulamento e herança simples</li>
                    <li>Aplicações simples: Jogos e programas de console como calculadoras e sistemas de cadastro básico</li>
                    <li>Tratamento de erros: Uso de try-catch para lidar com exceções</li>
                    <li>Coleções: Introdução a ArrayList e HashMap para armazenar dados</li>
                </ul>
                <p>Atualmente, estou praticando com pequenos projetos para consolidar os fundamentos e evoluir para aplicações mais complexas.</p>
            `
        },
        javascript: {
            title: "JavaScript",
            icon: '<i class="fab fa-js"></i>',
            level: "Intermediário",
            description: `
                <p>A linguagem que me permite criar experiências web interativas e dinâmicas:</p>
                <ul>
                    <li>Desenvolvimento front-end com manipulação do DOM e eventos</li>
                    <li>Consumo de APIs REST/GraphQL para aplicações web modernas</li>
                    <li>Implementação de lógica de interface complexa</li>
                    <li>Validação de formulários e feedback ao usuário</li>
                    <li>Conhecimento em ES6+ e padrões modernos de JavaScript</li>
                </ul>
                <p>Utilizo JavaScript para tornar interfaces estáticas em experiências ricas e responsivas.</p>
            `
        },
        sql: {
            title: "SQL",
            icon: '<i class="fas fa-database"></i>',
            level: "Intermediário",
            description: `
                <p>Minha ferramenta essencial para trabalhar com bancos de dados relacionais:</p>
                <ul>
                    <li>Modelagem e normalização de bancos de dados</li>
                    <li>Criação de queries complexas com múltiplos joins</li>
                    <li>Otimização de consultas para melhor desempenho</li>
                    <li>Implementação de stored procedures e triggers</li>
                    <li>Exportação e importação de dados</li>
                </ul>
                <p>Experiência prática com MySQL, SQL Server e SQLite em projetos acadêmicos.</p>
            `
        },
        c: {
            title: "C",
            icon: '<i class="fas fa-code"></i>',
            level: "Intermediário",
            description: `
                <p>Minha primeira linguagem de programação, utilizada para desenvolvimento de sistemas:</p>
                <ul>
                    <li>Manipulação de ponteiros e gerenciamento manual de memória</li>
                    <li>Desenvolvimento de algoritmos eficientes e estruturas de dados</li>
                    <li>Interação com hardware e sistemas embarcados</li>
                    <li>Uso de bibliotecas padrão para entrada/saída e manipulação de arquivos</li>
                </ul>
                <p>Utilização em projetos educacionais para compreensão de conceitos fundamentais de computação.</p>
            `
        },
        cplusplus: {
            title: "C++",
            icon: '<i class="fas fa-code"></i>',
            level: "Básico",
            description: `
                <p>Linguagem de programação para desenvolvimento de sistemas complexos:</p>
                <ul>
                    <li>Programação Orientada a Objetos avançada</li>
                    <li>Gerenciamento de memória com smart pointers</li>
                    <li>Templates e programação genérica</li>
                    <li>STL (Standard Template Library)</li>
                    <li>Desenvolvimento de aplicações de alto desempenho</li>
                </ul>
                <p>Utilizada em projetos que exigem performance e controle de baixo nível.</p>
            `
        },
        html: {
            title: "HTML5",
            icon: '<i class="fab fa-html5"></i>',
            level: "Avançado",
            description: `
                <p>Domínio completo da linguagem de marcação para construção de interfaces web profissionais:</p>
                <ul>
                    <li>Estruturação otimizada para SEO com tags semânticas</li>
                    <li>Templates dinâmicos para CMS</li>
                    <li>Integração com JavaScript</li>
                    <li>HTML modular e reutilizável</li>
                </ul>
                <p>Transformo designs complexos em HTML eficiente, com foco em semântica e acessibilidade.</p>
            `
        },
        css: {
            title: "CSS3",
            icon: '<i class="fab fa-css3-alt"></i>',
            level: "Intermediário",
            description: `
                <p>Conhecimento sólido em estilização web com capacidade de implementar layouts responsivos:</p>
                <ul>
                    <li>Flexbox e Grid Layout</li>
                    <li>Animações e transições CSS</li>
                    <li>Design responsivo e mobile-first</li>
                    <li>Pré-processadores (SASS/SCSS)</li>
                </ul>
                <p>Crio interfaces modernas e responsivas com código limpo e organizado.</p>
            `
        },
        api: {
            title: "API",
            icon: '<i class="fas fa-cloud"></i>',
            level: "Intermediário",
            description: `
                <p>Conhecimento sólido em estilização web com capacidade de implementar layouts responsivos:</p>
                <ul>
                    <li>Flexbox e Grid Layout</li>
                    <li>Animações e transições CSS</li>
                    <li>Design responsivo e mobile-first</li>
                    <li>Pré-processadores (SASS/SCSS)</li>
                </ul>
                <p>Crio interfaces modernas e responsivas com código limpo e organizado.</p>
            `
        },
        git: {
            title: "Git/GitHub",
            icon: '<i class="fab fa-github"></i>',
            level: "Intermediário",
            description: `
                <p>Controle de versão e colaboração em projetos:</p>
                <ul>
                    <li>Git flow e branching strategies</li>
                    <li>Resolução de conflitos</li>
                    <li>GitHub Actions para CI/CD</li>
                    <li>Colaboração em equipe</li>
                </ul>
                <p>Experiência em gerenciamento de projetos versionados.</p>
            `
        },
        arduino: {
            title: "Arduino",
            icon: '<i class="fas fa-microchip"></i>',
            level: "Intermediário",
            description: `
                <p>Biblioteca JavaScript para construção de interfaces de usuário:</p>
                <ul>
                    <li>Componentes funcionais e hooks</li>
                    <li>Gerenciamento de estado com Context API</li>
                    <li>Integração com APIs</li>
                    <li>Desenvolvimento de SPAs</li>
                </ul>
                <p>Em processo de aprendizado e desenvolvimento de projetos.</p>
            `
        },
        arduino: {
            title: "powerbi",
            icon: '<i class="fas fa-chart-line"></i>',
            level: "Intermediário",
            description: `
                <p>Biblioteca JavaScript para construção de interfaces de usuário:</p>
                <ul>
                    <li>Componentes funcionais e hooks</li>
                    <li>Gerenciamento de estado com Context API</li>
                    <li>Integração com APIs</li>
                    <li>Desenvolvimento de SPAs</li>
                </ul>
                <p>Em processo de aprendizado e desenvolvimento de projetos.</p>
            `
        },
        Office: {
            title: "Pacote Office",
            icon: '<i class="fas fa-file-excel"></i>',
            level: "Avançado",
            description: `
                <p>Biblioteca JavaScript para construção de interfaces de usuário:</p>
                <ul>
                    <li>Componentes funcionais e hooks</li>
                    <li>Gerenciamento de estado com Context API</li>
                    <li>Integração com APIs</li>
                    <li>Desenvolvimento de SPAs</li>
                </ul>
                <p>Em processo de aprendizado e desenvolvimento de projetos.</p>
            `
        },
        datasul: {
            title: "Datasul",
            icon: '<i class="fas fa-industry"></i>',
            level: "Intermediário",
            description: `
                <p>Biblioteca JavaScript para construção de interfaces de usuário:</p>
                <ul>
                    <li>Componentes funcionais e hooks</li>
                    <li>Gerenciamento de estado com Context API</li>
                    <li>Integração com APIs</li>
                    <li>Desenvolvimento de SPAs</li>
                </ul>
                <p>Em processo de aprendizado e desenvolvimento de projetos.</p>
            `
        },
        rm: {
            title: "RM",
            icon: '<i class="fas fa-cogs"></i>',
            level: "Básico",
            description: `
                <p>Biblioteca JavaScript para construção de interfaces de usuário:</p>
                <ul>
                    <li>Componentes funcionais e hooks</li>
                    <li>Gerenciamento de estado com Context API</li>
                    <li>Integração com APIs</li>
                    <li>Desenvolvimento de SPAs</li>
                </ul>
                <p>Em processo de aprendizado e desenvolvimento de projetos.</p>
            `
        },
        tms: {
            title: "TMS",
            icon: '<i class="fas fa-truck"></i>',
            level: "Avançado",
            description: `
                <p>Biblioteca JavaScript para construção de interfaces de usuário:</p>
                <ul>
                    <li>Componentes funcionais e hooks</li>
                    <li>Gerenciamento de estado com Context API</li>
                    <li>Integração com APIs</li>
                    <li>Desenvolvimento de SPAs</li>
                </ul>
                <p>Em processo de aprendizado e desenvolvimento de projetos.</p>
            `
        },
        autocad: {
            title: "AutoCAD",
            icon: '<i class="fas fa-ruler-combined"></i>',
            level: "Avançado",
            description: `
                <p>Biblioteca JavaScript para construção de interfaces de usuário:</p>
                <ul>
                    <li>Componentes funcionais e hooks</li>
                    <li>Gerenciamento de estado com Context API</li>
                    <li>Integração com APIs</li>
                    <li>Desenvolvimento de SPAs</li>
                </ul>
                <p>Em processo de aprendizado e desenvolvimento de projetos.</p>
            `
        },
        sketchup: {
            title: "SketchUp",
            icon: '<i class="fas fa-cube"></i>',
            level: "Avançado",
            description: `
                <p>Biblioteca JavaScript para construção de interfaces de usuário:</p>
                <ul>
                    <li>Componentes funcionais e hooks</li>
                    <li>Gerenciamento de estado com Context API</li>
                    <li>Integração com APIs</li>
                    <li>Desenvolvimento de SPAs</li>
                </ul>
                <p>Em processo de aprendizado e desenvolvimento de projetos.</p>
            `
        },
        max: {
            title: "3ds Max",
            icon: '<i class="fas fa-cube"></i>',
            level: "Básico",
            description: `
                <p>Biblioteca JavaScript para construção de interfaces de usuário:</p>
                <ul>
                    <li>Componentes funcionais e hooks</li>
                    <li>Gerenciamento de estado com Context API</li>
                    <li>Integração com APIs</li>
                    <li>Desenvolvimento de SPAs</li>
                </ul>
                <p>Em processo de aprendizado e desenvolvimento de projetos.</p>
            `
        },
    };

    // Elementos do DOM
    const skillsContainer = document.querySelector('.skills-grid');
    const filterButtons = document.querySelectorAll('.skill-filter-btn');
    const modalOverlay = document.getElementById('skillModal');
    const closeBtn = document.querySelector('.skill-modal-close');
    
    // Criar modal se não existir
    if (!modalOverlay) {
        createSkillModal();
    }

    // Filtro de habilidades
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Atualizar botão ativo
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            const filterValue = this.getAttribute('data-filter');
            filterSkills(filterValue);
        });
    });

    // Animação de entrada das habilidades
    function animateSkills() {
        const skillCards = document.querySelectorAll('.skill-card');
        skillCards.forEach((card, index) => {
            const cardTop = card.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (cardTop < windowHeight * 0.8) {
                setTimeout(() => {
                    card.classList.add('visible');
                }, index * 100);
            }
        });
    }

    // Filtragem de habilidades
    function filterSkills(filter) {
        const skillCards = document.querySelectorAll('.skill-card');
        
        skillCards.forEach(card => {
            const categories = card.getAttribute('data-category').split(',');
            
            if (filter === 'all' || categories.includes(filter)) {
                card.style.display = 'block';
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
    function createSkillModal() {
        const modalHTML = `
            <div id="skillModal" class="skill-modal-overlay">
                <div class="skill-modal-content">
                    <span class="skill-modal-close">&times;</span>
                    <div class="skill-modal-header">
                        <div class="skill-modal-icon" id="modalIcon"></div>
                        <div>
                            <h2 class="skill-modal-title" id="modalTitle"></h2>
                            <span class="skill-modal-level" id="modalLevel"></span>
                        </div>
                    </div>
                    <div class="skill-modal-body" id="modalBody"></div>
                </div>
            </div>
        `;
        
        document.body.insertAdjacentHTML('beforeend', modalHTML);
        
        // Adicionar event listeners ao modal criado
        setupModalEvents();
    }

    // Configurar eventos do modal
    function setupModalEvents() {
        const modalOverlay = document.getElementById('skillModal');
        const closeBtn = document.querySelector('.skill-modal-close');
        const skillCards = document.querySelectorAll('.skill-card');
        
        // Abrir modal ao clicar no card
        skillCards.forEach(card => {
            card.addEventListener('click', function() {
                const skillId = this.getAttribute('data-skill');
                openSkillModal(skillId);
            });
        });
        
        // Fechar modal
        closeBtn.addEventListener('click', closeSkillModal);
        modalOverlay.addEventListener('click', function(e) {
            if (e.target === modalOverlay) {
                closeSkillModal();
            }
        });
        
        // Fechar com ESC
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
                closeSkillModal();
            }
        });
    }

    // Abrir modal da habilidade
    function openSkillModal(skillId) {
        const skill = skillsDB[skillId];
        const modalOverlay = document.getElementById('skillModal');
        
        if (!skill) return;
        
        // Preencher modal com dados
        document.getElementById('modalIcon').innerHTML = skill.icon;
        document.getElementById('modalTitle').textContent = skill.title;
        document.getElementById('modalLevel').textContent = skill.level;
        document.getElementById('modalBody').innerHTML = skill.description;
        
        // Mostrar modal
        document.body.style.overflow = 'hidden';
        modalOverlay.classList.add('active');
    }

    // Fechar modal
    function closeSkillModal() {
        const modalOverlay = document.getElementById('skillModal');
        modalOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    // Inicializar
    setTimeout(animateSkills, 500);
    window.addEventListener('scroll', animateSkills);
    
    // Inicializar eventos do modal
    setTimeout(setupModalEvents, 100);
});