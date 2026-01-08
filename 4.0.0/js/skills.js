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
                    <p>Utilização em projetos educacionais para compreensão de conceitos fundamentais de computação, desde o baixo nível até abstrações mais complexas.</p>
                `
        },
        cplusplus: {
            title: "C++",
            icon: '<i class="fas fa-code"></i>',
            level: "Básico",
            description: `
                <p>Minha primeira linguagem de programação, utilizada para desenvolvimento de sistemas:</p>
                    <ul>
                        <li>Manipulação de ponteiros e gerenciamento manual de memória</li>
                        <li>Desenvolvimento de algoritmos eficientes e estruturas de dados</li>
                        <li>Interação com hardware e sistemas embarcados</li>
                        <li>Uso de bibliotecas padrão para entrada/saída e manipulação de arquivos</li>
                    </ul>
                    <p>Utilização em projetos educacionais para compreensão de conceitos fundamentais de computação, desde o baixo nível até abstrações mais complexas.</p>
                `
        },
        html: {
            title: "HTML5",
            icon: '<i class="fab fa-html5"></i>',
            level: "Avançado",
            description: `
                <p>Domínio completo da linguagem de marcação para construção de interfaces web profissionais:</p>
                    <ul>
                        <li>Estruturação otimizada para SEO com tags semânticas (article, section, nav, etc..)</li>
                        <li>Templates dinâmicos para CMS (WordPress, Drupal)</li>
                        <li>Integração com JavaScript (data attributes, DOM manipulation)</li>
                        <li>HTML modular e reutilizável</li>
                    </ul>
                    <p>Transformo designs complexos em HTML eficiente, com foco em semântica, performance e acessibilidade.</p>
                `
        },
        css: {
            title: "CSS3",
            icon: '<i class="fab fa-css3-alt"></i>',
            level: "Intermediário",
            description: `
                <p>Conhecimento sólido em estilização web com capacidade de implementar layouts responsivos e efeitos visuais:</p>
                    <ul>
                        <li>Criação de UI components (buttons, modals, tooltips)</li>
                        <li>Estilização de formulários acessíveis</li>
                        <li>Landing pages responsivas</li>
                        <li>Animações e transições CSS (keyframes, transform)</li>
                    </ul>
                    <p>Transformo designs em código mantível, com foco em organização e adaptabilidade.</p>
                `
        },
        api: {
            title: "API",
            icon: '<i class="fas fa-cloud"></i>',
            level: "Intermediário",
            description: `
                <p>Desenvolvimento e integração de APIs para conectar sistemas e serviços: </p>
                    <ul>
                        <li>Criação de APIs RESTful</li>
                        <li>Autenticação e autorização (JWT, OAuth2, API Keys)</li>
                        <li>Consumo de APIs externas (Google Maps, Telegram, Pagamentos, etc.)</li>
                        <li>Testes de endpoints (Postman, Insomnia)</li>
                        <li>Integração com front-end e IoT</li>
                    </ul>
                    <p>Experiência em projetos acadêmicos e integrações com IoT (Arduino + APIs).</p>
                `
        },
        git: {
            title: "Git/GitHub",
            icon: '<i class="fab fa-github"></i>',
            level: "Intermediário",
            description: `
                <p>Plataforma de versionamento e colaboração para projetos de código e hardware:</p>
                    <ul>
                        <li>Controle de versão com Git (branching, merging, rebase)</li>
                        <li>Gerenciamento de repositórios públicos e privados</li>
                        <li>GitHub Pages para hospedagem de projetos</li>
                        <li>Colaboração em equipe (issues, pull requests, code review)</li>
                    </ul>
                    <p>Experiência em projetos acadêmicos e colaboração remota.</p>
                `
        },
        arduino: {
            title: "Arduino",
            icon: '<i class="fas fa-microchip"></i>',
            level: "Intermediário",
            description: `
                <p>Plataforma que me permite prototipar soluções de hardware e IoT:</p>
                    <ul>
                        <li>Desenvolvimento de sistemas embarcados básicos</li>
                        <li>Integração com sensores e atuadores diversos</li>
                        <li>Comunicação serial com computadores</li>
                        <li>Projetos de automação residencial simples</li>
                        <li>Monitoramento ambiental com coleta de dados</li>
                    </ul>
                    <p>Experiência em projetos acadêmicos envolvendo controle de dispositivos e automação.</p>
                `
        },
        powerbi: {
            title: "powerbi",
            icon: '<i class="fas fa-chart-line"></i>',
            level: "Intermediário",
            description: `
                <p>Ferramenta de análise e visualização de dados que permite transformar informações em insights acionáveis:</p>
                    <ul>
                        <li>Criação de dashboards interativos e relatórios dinâmicos</li>
                        <li>Transformação e limpeza de dados usando Power Query</li>
                        <li>Modelagem de dados e criação de medidas com DAX</li>
                        <li>Integração com diversas fontes de dados (Excel, SQL, APIs)</li>
                        <li>Automação de atualizações e compartilhamento de relatórios</li>
                    </ul>
                    <p>Experiência em projetos de análise de dados para tomada de decisão empresarial.</p>
                `
        },
        Office: {
            title: "Pacote Office",
            icon: '<i class="fas fa-file-excel"></i>',
            level: "Avançado",
            description: `
                <p>Suíte de produtividade que domino profundamente:</p>
                    <ul>
                        <li>Excel avançado com fórmulas complexas, tabelas dinâmicas e macros VBA</li>
                        <li>Criação de documentos profissionais no Word com estilos e modelos</li>
                        <li>Apresentações dinâmicas no PowerPoint com animações e design</li>
                        <li>Automação de fluxos de trabalho entre aplicativos</li>
                        <li>Criação de dashboards e relatórios analíticos</li>
                    </ul>
                    <p>Utilizo essas ferramentas diariamente para análise de dados e documentação profissional.</p>
                `
        },
        datasul: {
            title: "Datasul",
            icon: '<i class="fas fa-industry"></i>',
            level: "Intermediário",
            description: `
                <p>Sistema ERP que utilizo no suporte técnico profissional:</p>
                    <ul>
                        <li>Gerenciamento de usuários e perfis de acesso</li>
                        <li>Diagnóstico e correção de problemas funcionais no sistema</li>
                        <li>Parametrização básica do sistema</li>
                        <li>Extração de relatórios e dados</li>
                        <li>Integração com outros sistemas corporativos</li>
                    </ul>
                    <p>Experiência prática no suporte diário aos usuários e manutenção do sistema.</p>
                `
        },
        rm: {
            title: "RM",
            icon: '<i class="fas fa-cogs"></i>',
            level: "Básico",
            description: `
                <p>Sistema de gestão de relacionamento que domino no contexto profissional:</p>
                    <ul>
                        <li>Configuração e manutenção do sistema</li>
                        <li>Gerenciamento de acessos e segurança</li>
                        <li>Resolução de problemas e inconsistências</li>
                        <li>Extração e análise de dados do sistema</li>
                        <li>Integração com outros sistemas corporativos</li>
                    </ul>
                    <p>Atuação direta no suporte técnico e manutenção do sistema em ambiente profissional.</p>
                `
        },
        tms: {
            title: "TMS",
            icon: '<i class="fas fa-truck"></i>',
            level: "Avançado",
            description: `
                <p>Sistema de gerenciamento de transporte com que trabalho atualmente:</p>
                    <ul>
                        <li>Configuração avançada do sistema: parametrização completa de fretes, tabelas de preços, impostos (ICMS, ISS) e regras fiscais</li>
                        <li>Integração sistêmica: conexão e sincronização de dados entre TMS e ERP Datasul (pedidos, notas fiscais, cadastros)</li>
                        <li>Gestão de banco de dados: realização de ajustes diretos via SQL para correções e otimizações</li>
                        <li>Suporte especializado: resolução de problemas complexos e treinamento de usuários</li>
                    </ul>
                    <p>Experiência prática no suporte diário aos usuários e operação do sistema.</p>
                `
        },
        autocad: {
            title: "AutoCAD",
            icon: '<i class="fas fa-ruler-combined"></i>',
            level: "Avançado",
            description: `
                <p>Ferramenta de CAD que utilizo para projetos técnicos precisos:</p>
                    <ul>
                        <li>Desenho de plantas arquitetônicas em 2D</li>
                        <li>Desenvolvimento de projetos elétricos e hidráulicos</li>
                        <li>Criação de detalhes construtivos</li>
                        <li>Modelagem 3D básica de elementos arquitetônicos</li>
                        <li>Configuração de layouts e impressão profissional</li>
                    </ul>
                    <p>Utilizado em projetos acadêmicos e profissionais na área de edificações.</p>
                `
        },
        sketchup: {
            title: "SketchUp",
            icon: '<i class="fas fa-cube"></i>',
            level: "Avançado",
            description: `
                <p>Ferramenta de modelagem 3D que domino para visualização arquitetônica:</p>
                    <ul>
                        <li>Modelagem volumétrica de edificações</li>
                        <li>Criação de cenários e contextos urbanos</li>
                        <li>Utilização de componentes dinâmicos</li>
                        <li>Renderização básica com V-Ray</li>
                        <li>Apresentação de projetos para clientes</li>
                    </ul>
                    <p>Utilizado para desenvolvimento de projetos acadêmicos e maquetes eletrônicas.</p>
                `
        },
        max: {
            title: "3ds Max",
            icon: '<i class="fas fa-cube"></i>',
            level: "Básico",
            description: `
                <p>Software de modelagem 3D avançada que estou aprendendo:</p>
                    <ul>
                        <li>Modelagem poligonal básica</li>
                        <li>Aplicação de materiais e texturas</li>
                        <li>Configuração de iluminação simples</li>
                        <li>Renderização básica with Scanline</li>
                        <li>Criação de animações simples</li>
                    </ul>
                    <p>Conhecimento inicial adquirido em cursos e projetos pessoais de aprendizagem.</p>
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