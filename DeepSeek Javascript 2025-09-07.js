document.addEventListener('DOMContentLoaded', function() {
    // Tüm çalışan kartlarını seç
    const employeeCards = document.querySelectorAll('.employee-card');

    // Her bir kart için mouse olaylarını dinle
    employeeCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            // Mouse kartın üzerine geldiğinde 'active' classını ekle
            this.classList.add('active');
        });

        card.addEventListener('mouseleave', function() {
            // Mouse kartın üzerinden çekildiğinde 'active' classını kaldır
            this.classList.remove('active');
        });
    });
});