// Script principal pour le site

document.addEventListener('DOMContentLoaded', function() {
    // Animation pour les cartes de produits
    const productCards = document.querySelectorAll('.product-card, .player-card, .news-article');
    
    productCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transition = 'transform 0.3s ease';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transition = 'transform 0.3s ease';
        });
    });
    
    // Gestion du bouton "Ajouter au panier"
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productName = this.closest('.product-info').querySelector('h3').textContent;
            alert(`"${productName}" a été ajouté à votre panier!`);
            // Ici, vous pourriez ajouter la logique pour gérer le panier
        });
    });
    
    // Animation de défilement doux pour les liens d'ancrage
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Mise à jour de l'année dans le footer
    const currentYear = new Date().getFullYear();
    const yearElement = document.querySelector('footer p');
    if (yearElement) {
        yearElement.innerHTML = yearElement.innerHTML.replace('2024', currentYear);
    }
});