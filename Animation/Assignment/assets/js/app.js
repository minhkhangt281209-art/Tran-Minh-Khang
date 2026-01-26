document.addEventListener('DOMContentLoaded', () => {
    const modeBtn = document.getElementById('mode-toggle');
    modeBtn.onclick = () => {
        document.body.classList.toggle('dark-mode');
        modeBtn.innerText = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
    };

    const slider = document.querySelector('.slider-container');
    const slides = document.querySelectorAll('.slide');
    let index = 0;
    setInterval(() => {
        index = (index + 1) % slides.length;
        slider.style.transform = `translateX(-${index * (100 / slides.length)}%)`;
    }, 5000);

    const reveals = document.querySelectorAll('.scroll-reveal');
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');

    window.onscroll = () => {
        reveals.forEach(el => {
            if (el.getBoundingClientRect().top < window.innerHeight - 100) {
                el.classList.add('reveal-active');
            }
        });

        let current = "";
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 150) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    };

    const cursor = document.querySelector('.cursor');
    document.onmousemove = (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    };
});