document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.team-carousel');
    const arrows = document.querySelectorAll('.nav-arrow');
    const dotsContainer = document.querySelector('.carousel-dots');
    
    // Kart sayısını al
    const cardCount = document.querySelectorAll('.team-member').length;
    
    // Her kartın genişliğini ve gap değerini al
    const cardStyle = window.getComputedStyle(document.querySelector('.team-member'));
    const cardWidth = parseInt(cardStyle.width) + parseInt(cardStyle.marginRight);
    
    // Carousel genişliğini ayarla
    const visibleCards = Math.floor(carousel.offsetWidth / cardWidth);
    
    // Toplam kaydırma sayfalarını hesapla
    const totalPages = Math.ceil(cardCount / visibleCards);
    
    // Aktif sayfa index'i
    let currentPage = 0;
    
    // Noktaları oluştur
    for (let i = 0; i < totalPages; i++) {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (i === 0) dot.classList.add('active');
        dot.dataset.page = i;
        dotsContainer.appendChild(dot);
    }
    
    const dots = document.querySelectorAll('.dot');
    
    // Kaydırma fonksiyonu
    function scrollCarousel(pageIndex) {
        const scrollAmount = pageIndex * visibleCards * cardWidth;
        carousel.scrollTo({
            left: scrollAmount,
            behavior: 'smooth'
        });
        
        // Aktif noktayı güncelle
        dots.forEach(dot => dot.classList.remove('active'));
        dots[pageIndex].classList.add('active');
        
        currentPage = pageIndex;
    }
    
    // Nokta tıklamalarını dinle
    dots.forEach(dot => {
        dot.addEventListener('click', function() {
            const pageIndex = parseInt(this.dataset.page);
            scrollCarousel(pageIndex);
        });
    });
    
    // Ok tuşlarını dinle
    arrows.forEach(arrow => {
        arrow.addEventListener('click', function() {
            if (this.classList.contains('left-arrow')) {
                if (currentPage > 0) {
                    scrollCarousel(currentPage - 1);
                }
            } else {
                if (currentPage < totalPages - 1) {
                    scrollCarousel(currentPage + 1);
                }
            }
        });
    });
    
    // Fare tekerleği ile kaydırma
    carousel.addEventListener('wheel', function(e) {
        e.preventDefault();
        if (e.deltaY > 0) {
            if (currentPage < totalPages - 1) {
                scrollCarousel(currentPage + 1);
            }
        } else {
            if (currentPage > 0) {
                scrollCarousel(currentPage - 1);
            }
        }
    });
    
    // Klavye ok tuşları ile kontrol
    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowLeft') {
            if (currentPage > 0) {
                scrollCarousel(currentPage - 1);
            }
        } else if (e.key === 'ArrowRight') {
            if (currentPage < totalPages - 1) {
                scrollCarousel(currentPage + 1);
            }
        }
    });
    
    // Pencere boyutu değiştiğinde yeniden hesapla
    window.addEventListener('resize', function() {
        const newVisibleCards = Math.floor(carousel.offsetWidth / cardWidth);
        if (newVisibleCards !== visibleCards) {
            // Sayfayı yenilemek yerine sadece aktif sayfayı koruyarak kaydır
            scrollCarousel(currentPage);
        }
    });
});
