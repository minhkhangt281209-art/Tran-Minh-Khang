// Khởi tạo Scroll Animation (AOS)
document.addEventListener('DOMContentLoaded', () => {
    if (typeof AOS !== 'undefined') {
        AOS.init({ duration: 1000, once: true });
    }

    // 1. Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle?.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        menuToggle.classList.toggle('is-active');
    });

    // 2. Xử lý Form Liên hệ (Trang Contact)
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const btn = this.querySelector('button');
            const originalText = btn.innerText;
            
            // Hiệu ứng Loading
            btn.innerText = "Đang xử lý...";
            btn.disabled = true;

            // Lưu LocalStorage
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                date: new Date().toLocaleString()
            };
            localStorage.setItem('lastFeedback', JSON.stringify(formData));

            // Hiển thị Toast thông báo
            setTimeout(() => {
                btn.innerText = originalText;
                btn.disabled = false;
                showToast("Gửi tin nhắn thành công!");
                contactForm.reset();
            }, 1500);
        });
    }
});

function showToast(msg) {
    const toast = document.getElementById('toast');
    if (toast) {
        toast.innerText = msg;
        toast.classList.add('show');
        setTimeout(() => toast.classList.remove('show'), 3000);
    }
}