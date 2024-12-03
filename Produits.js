document.addEventListener("DOMContentLoaded", () => {
    // Initialisation du compteur du panier
    let itemCount = localStorage.getItem('cartItems') ? parseInt(localStorage.getItem('cartItems')) : 0;

    // Mettre à jour le compteur dans le panier
    function updateCartCount() {
        const cartCount = document.querySelector('.cart-count');
        if (cartCount) {
            cartCount.textContent = itemCount;
        }
    }
    updateCartCount();

    // Gestion des boutons "Acheter"
    const buyButtons = document.querySelectorAll('.product-card a');
    buyButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault(); // Empêche la redirection automatique
            itemCount++;
            localStorage.setItem('cartItems', itemCount); // Enregistrement dans le localStorage
            updateCartCount();
            alert("Produit ajouté au panier !");
        });
    });

    // Effet d'affichage des détails supplémentaires
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => {
        card.addEventListener('click', () => {
            card.classList.toggle('expanded'); // Change la classe pour ajouter des effets CSS
        });
    });
});
