// script.js

// Filtro de produtos por categoria
document.addEventListener('DOMContentLoaded', function() {
    const categoryButtons = document.querySelectorAll('.categorias button');
    const products = document.querySelectorAll('.produto');

    categoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            const category = this.textContent.toLowerCase();
            products.forEach(product => {
                if (product.classList.contains(category) || category === 'todos') {
                    product.style.display = 'block';
                } else {
                    product.style.display = 'none';
                }
            });
        });
    });
});
