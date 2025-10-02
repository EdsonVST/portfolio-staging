// Filtro de projetos funcional
        document.addEventListener('DOMContentLoaded', function() {
            const filterButtons = document.querySelectorAll('.filter-btn');
            const projectCards = document.querySelectorAll('.project-card');
            
            filterButtons.forEach(button => {
                button.addEventListener('click', function() {
                    // Remove a classe active de todos os botões
                    filterButtons.forEach(btn => btn.classList.remove('active'));
                    
                    // Adiciona a classe active ao botão clicado
                    this.classList.add('active');
                    
                    const filterValue = this.getAttribute('data-filter');
                    
                    // Filtra os projetos
                    projectCards.forEach(card => {
                        const categories = card.getAttribute('data-category').split(',');
                        
                        if (filterValue === 'all' || categories.includes(filterValue)) {
                            card.style.display = 'flex';
                            card.style.animation = 'fadeIn 0.6s ease-out';
                        } else {
                            card.style.display = 'none';
                        }
                    });
                    
                    // Reorganiza o grid para projetos em destaque
                    rearrangeFeaturedProjects();
                });
            });
            
            // Animação de flutuação para os cards
            projectCards.forEach((card, index) => {
                card.style.animationDelay = `${index * 0.1}s`;
                
                card.addEventListener('mouseenter', function() {
                    this.style.animation = 'float 3s ease-in-out infinite';
                });
                
                card.addEventListener('mouseleave', function() {
                    this.style.animation = '';
                });
            });
            
            // Função para reorganizar projetos em destaque após filtragem
            function rearrangeFeaturedProjects() {
                const visibleFeaturedProjects = document.querySelectorAll('.project-card.featured-project[style="display: flex;"]');
                
                visibleFeaturedProjects.forEach(project => {
                    // Verifica se o projeto está visível e é destacado
                    if (project.style.display === 'flex' && project.classList.contains('featured-project')) {
                        // Remove o destaque se for o único projeto visível na categoria
                        const category = project.getAttribute('data-category');
                        const visibleProjectsInCategory = document.querySelectorAll(`.project-card[data-category*="${category}"][style="display: flex;"]`);
                        
                        if (visibleProjectsInCategory.length === 1) {
                            project.classList.remove('featured-project');
                            project.style.gridColumn = '';
                            project.style.gridTemplateColumns = '';
                        }
                    }
                });
            }
        });