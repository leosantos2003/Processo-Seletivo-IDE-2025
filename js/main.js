document.addEventListener('DOMContentLoaded', () => {

    const sections = [
        { id: 'inicio', file: 'sections/1_inicio.html' },
        { id: 'quem_somos_nos', file: 'sections/2_quem_somos_nos.html' },
        { id: 'nossos_objetivos', file: 'sections/3_nossos_objetivos.html' },
        { id: 'projetos', file: 'sections/4_projetos.html' },
        { id: 'meninas_digitais', file: 'sections/5_meninas_digitais.html' },
        { id: 'integrantes', file: 'sections/6_integrantes.html' },
        { id: 'contate_nos', file: 'sections/7_contate_nos.html' }
    ];

    // Função responsável por buscar e colocar o conteúdo HTML
    const loadSection = async (section) => {
        try {
            const response = await fetch(section.file);
            if (!response.ok) {
                throw new Error(`Erro ao carregar ${section.file}`);
            }
            const content = await response.text();
            const sectionContainer = document.getElementById(section.id);
            if (sectionContainer) {
                sectionContainer.innerHTML = content;
            }
        } catch (error) {
            console.error('Falha ao carregar a seção:', error);
        }
    };

    // Carrega todas as seções definidas no array
    sections.forEach(section => {
        loadSection(section);
    });
});