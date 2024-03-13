document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        var splash = document.getElementById("splashScreen");
        splash.style.opacity = '0';
        setTimeout(function() {
            splash.style.display = 'none';
            document.getElementById("mainContent").style.display = 'block'; 
        }, 1200); 
    }, 1200); 
});


document.addEventListener('DOMContentLoaded', function() {
    const skillCards = document.querySelectorAll('.skill-card');
    skillCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            const percentage = this.getAttribute('data-skill-percent');
            this.querySelector('.skill-percentage').style.width = percentage;
        });
        card.addEventListener('mouseleave', function() {
            this.querySelector('.skill-percentage').style.width = '0%';
        });
    });
});
