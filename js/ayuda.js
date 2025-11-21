// JavaScript específico para la página Ayuda

document.addEventListener('DOMContentLoaded', function() {
    // Variables para el menú fijo
    const navbar = document.getElementById('navbar');
    const menuToggle = document.getElementById('menuToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    
    console.log('Página Ayuda cargada');
    
    // Función para el menú fijo
    function handleScroll() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 100) {
            navbar.classList.add('fixed');
        } else {
            navbar.classList.remove('fixed');
        }
    }
    
    // Función para el menú móvil
    function toggleMobileMenu() {
        menuToggle.classList.toggle('active');
        mobileMenu.classList.toggle('active');
    }
    
    
    // Función para navegación suave en el índice
    function setupSmoothScroll() {
        const links = document.querySelectorAll('.manual-sidebar a');
        
        links.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    const offsetTop = targetSection.offsetTop - 100;
                    
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                    
                    // Cerrar menú móvil si está abierto
                    if (mobileMenu.classList.contains('active')) {
                        menuToggle.classList.remove('active');
                        mobileMenu.classList.remove('active');
                    }
                }
            });
        });
    }
    
    // Event Listeners
    window.addEventListener('scroll', handleScroll);
    
    // Menú móvil
    if (menuToggle) {
        menuToggle.addEventListener('click', toggleMobileMenu);
    }
    
    // Cerrar menú móvil al hacer clic en un enlace
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            mobileMenu.classList.remove('active');
        });
    });
    
    // Configurar navegación suave
    setupSmoothScroll();
    
    // Inicializar
    handleScroll();
});