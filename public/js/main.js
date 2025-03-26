document.addEventListener('DOMContentLoaded', () => {
    // Мобильное меню
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navCenter = document.querySelector('.nav-center');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            navCenter.classList.toggle('active');
            mobileMenuBtn.classList.toggle('active');
        });
    }

    // Эффект прокрутки шапки
    const header = document.querySelector('.header');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        lastScroll = currentScroll;
    });

    // Анимация появления элементов при скролле
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.service-card, .advantage-card, .testimonial-card');
        
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementBottom = element.getBoundingClientRect().bottom;
            
            if (elementTop < window.innerHeight && elementBottom > 0) {
                element.classList.add('animate');
            }
        });
    };

    // Плавный скролл для якорных ссылок
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Инициализация анимаций
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Запускаем при загрузке страницы
}); 