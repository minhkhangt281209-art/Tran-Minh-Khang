const btnTheme = document.getElementById('doinen');
btnTheme.onclick = function() {
    document.body.classList.toggle('dark');
};

const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

window.onscroll = function() {
    let current = "";
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });

    const boxes = document.querySelectorAll('.box');
    boxes.forEach(box => {
        const boxPos = box.getBoundingClientRect().top;
        if (boxPos < window.innerHeight - 50) {
            box.classList.add('show');
        }
    });
};

const btnJump = document.getElementById('btn-jump');
btnJump.onmouseover = function() {
    btnJump.classList.add('animate');
};
btnJump.onanimationend = function() {
    btnJump.classList.remove('animate');
};

const circle = document.getElementById('circle');
window.onmousemove = function(e) {
    circle.style.left = e.clientX - 15 + 'px';
    circle.style.top = e.clientY - 15 + 'px';
};