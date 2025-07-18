// ----- Mobile Navigation Toggle (Handled by CSS + checkbox) -----
// Already working via CSS, no JS needed unless you want to close menu on click

// Optional: Auto-close mobile menu when a link is clicked
document.querySelectorAll('.nav-menu a').forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById('menu-toggle').checked = false;
  });
});

// ----- Smooth Scroll for all internal links -----
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// ----- Register Form Submit Handler -----
const form = document.querySelector(".footer-form");
if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thank you for registering your interest!");
    form.reset();
  });
}

// ----- Optional: Auto-snap scroll to first image in model-gallery on load -----
document.querySelectorAll('.model-gallery').forEach(gallery => {
  gallery.scrollLeft = 0;
});








// Cart Array
let cart = [];

// Modal Elements
const modal = document.getElementById("cartModal");
const carTitle = document.getElementById("carTitle");
const closeBtn = document.querySelector(".close");
const addToCartBtn = document.getElementById("addToCart");
const bookNowBtn = document.getElementById("bookNow");

let currentCar = "";

// Open modal when Explore is clicked
document.querySelectorAll(".octa-btn").forEach(button => {
  button.addEventListener("click", function (e) {
    e.preventDefault();
    currentCar = this.dataset.car;
    carTitle.textContent = `Book ${currentCar}`;
    modal.style.display = "flex";
  });
});

// Close modal
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target == modal) modal.style.display = "none";
});

// Add to Cart
addToCartBtn.addEventListener("click", () => {
  cart.push(currentCar);
  alert(`${currentCar} added to cart!`);
  modal.style.display = "none";
  console.log("Cart:", cart);
});

// Book Now
bookNowBtn.addEventListener("click", () => {
  alert(`Booking started for ${currentCar}`);
  modal.style.display = "none";
});
