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

            if (section.id === 'integrantes') {
                var scrollArea = document.getElementById("members-scroll-area");
                var scrollUp = document.getElementById("members-scroll-up");
                var scrollDown = document.getElementById("members-scroll-down");
                var scrollBar = document.getElementById("members-scroll-bar");

                var updateScrollBar = function() {
                    var maxOffsetHeight = scrollArea.scrollHeight - scrollArea.offsetHeight;
                    var pos = scrollArea.scrollTop / maxOffsetHeight;
                    var maxScrollBarTop = scrollBar.parentElement.offsetHeight - scrollBar.offsetHeight;
                    scrollBar.style.top = `${maxScrollBarTop * pos}px`;
                }

                scrollDown.addEventListener("click", function () {
                    scrollArea.scrollTop += scrollArea.offsetHeight;
                    updateScrollBar();
                });
                scrollUp.addEventListener("click", function () {
                    scrollArea.scrollTop -= scrollArea.offsetHeight;
                    updateScrollBar();
                });

                scrollArea.addEventListener("wheel", function (e) {
                    if (e.deltaY > 0) {
                        scrollArea.scrollTop += scrollArea.offsetHeight;
                    } else if (e.deltaY < 0) {
                        scrollArea.scrollTop -= scrollArea.offsetHeight;
                    }
                    updateScrollBar();
                    e.preventDefault();
                });
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
