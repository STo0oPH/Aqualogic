document.addEventListener("DOMContentLoaded", () => {
    // Validation simple du numéro de carte (Luhn)
    const cardNumberInput = document.getElementById('card-number');
    const expiryDateInput = document.getElementById('expiry-date');
    const cvvInput = document.getElementById('cvv');
	document.addEventListener("DOMContentLoaded", () => {
    // Sélectionner tous les éléments de prix
    const priceElements = document.querySelectorAll('.product-price');
    const totalAmountElement = document.getElementById('total-amount');
    
    // Fonction pour calculer le total
    function calculateTotal() {
        let total = 0;
        priceElements.forEach(priceElement => {
            // Extraire le montant numérique (sans l'euro)
            const price = parseFloat(priceElement.textContent.replace('€', '').trim());
            total += price;
        });
        // Mettre à jour l'affichage du total
        totalAmountElement.textContent = `€${total.toFixed(2)}`;
    }

    // Calcul initial au chargement de la page
    calculateTotal();
});

    
    // Formulaire de paiement
    const paymentForm = document.querySelector('.payment-form form');
    
    paymentForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Empêche l'envoi pour validation côté client
        
        const cardNumber = cardNumberInput.value.replace(/\s+/g, '');
        const expiryDate = expiryDateInput.value;
        const cvv = cvvInput.value;
        
        // Vérification du numéro de carte simple
        if (!/^\d{16}$/.test(cardNumber)) {
            alert("Numéro de carte invalide. Il doit contenir 16 chiffres.");
            return;
        }
        
        // Vérification de la date d'expiration (format MM/AA)
        if (!/^\d{2}\/\d{2}$/.test(expiryDate)) {
            alert("Format de date d'expiration invalide. Utilisez MM/AA.");
            return;
        }
        
        // Vérification du CVV (3 chiffres)
        if (!/^\d{3}$/.test(cvv)) {
            alert("CVV invalide. Il doit contenir 3 chiffres.");
            return;
        }
        
        // Confirmation de paiement (simulation)
        alert("Paiement réussi ! Merci pour votre achat.");
        // Redirection ou soumission finale ici (peut être simulée)
        paymentForm.submit();
    });
});
