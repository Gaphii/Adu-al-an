document.addEventListener('DOMContentLoaded', function() {
    const employeeCards = document.querySelectorAll('.employee-card');
    
    employeeCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.classList.add('expanded');
        });
        
        card.addEventListener('mouseleave', function() {
            this.classList.remove('expanded');
        });
    });
});
