// Hàm xử lý chính cho toàn bộ trang
const handleTechStore = () => {
    const modeBtn = document.getElementById('mode-toggle');
    const body = document.body;

    // 1. Kiểm tra và áp dụng chế độ nền từ LocalStorage ngay khi tải trang
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'dark') {
        body.classList.add('dark-mode');
        if (modeBtn) modeBtn.innerText = '☀️';
    }

    // 2. Gắn sự kiện Click cho nút đổi nền
    if (modeBtn) {
        modeBtn.addEventListener('click', () => {
            const isDark = body.classList.toggle('dark-mode');
            
            // Lưu trạng thái vào máy người dùng
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
            
            // Đổi icon nút bấm
            modeBtn.innerText = isDark ? '☀️' : '🌙';
            
            console.log("Trạng thái tối:", isDark); 
        });
    } else {
        console.error("LỖI: Không tìm thấy nút có ID là 'mode-toggle' trong file HTML này.");
    }

    // 3. Khởi tạo hiệu ứng cuộn AOS (nếu có thư viện)
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 1000,
            once: false
        });
    }
};

// Đảm bảo Script chạy sau khi toàn bộ HTML đã tải xong
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', handleTechStore);
} else {
    handleTechStore();
}