document.addEventListener("DOMContentLoaded", () => {
    const cartCount = document.querySelector('.cart-count');
    let itemCount = localStorage.getItem('cartItems') ? parseInt(localStorage.getItem('cartItems')) : 0;
    
    function updateCartCount() {
        cartCount.textContent = itemCount;
    }
    updateCartCount();
    const buyButtons = document.querySelectorAll('.product button');
    buyButtons.forEach(button => {
        button.addEventListener('click', () => {
            itemCount++;
            localStorage.setItem('cartItems', itemCount); // Stocker dans le localStorage
            updateCartCount();
            alert("Produit ajouté au panier !");
        });
    });

    const navLinks = document.querySelectorAll('.navbar a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            if (link.hash !== "") {
                e.preventDefault();
                const targetId = link.hash.substring(1);
                document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});
