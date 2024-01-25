
// Storing preferred theme in localStorage
localStorage.setItem('theme', 'light');

// Retrieving and applying theme on page load
const theme = localStorage.getItem('theme') || 'light';
document.body.style.backgroundColor = theme === 'dark' ? '#222' : '#fff';

// Storing items in sessionStorage (e.g., shopping cart)
const cartItems = ['item1', 'item2', 'item3'];
sessionStorage.setItem('cart', JSON.stringify(cartItems));

// Retrieving and using cart items during the session
const storedCart = sessionStorage.getItem('cart');
const cart = storedCart ? JSON.parse(storedCart) : [];
console.log(cart); // Outputs: ['item1', 'item2', 'item3']
