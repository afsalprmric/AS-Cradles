let cartCount = 0;

document.querySelectorAll('.add-to-cart').forEach(button => {
  button.addEventListener('click', () => {
    cartCount++;
    document.getElementById('cart-count').innerText = cartCount;
    alert('Product added to cart!');
  });
});

// Additional functionality for viewing product details can be added here