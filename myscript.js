// ICON CONTROLS IN NAVBAR
let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () => 
{
    searchForm.classList.toggle('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}


let shoppingCart = document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick = () => 
{
    shoppingCart.classList.toggle('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}


let loginForm = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () => 
{
    loginForm.classList.toggle('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    navbar.classList.remove('active');
}


let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () => 
{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
}


window.onscroll = () =>
{
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}


// HERO SLIDER
const track = document.getElementById('carouselTrack');
const slides = Array.from(track.children);
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const dotsContainer = document.getElementById('carouselDots');

let currentIndex = 0;

// Clone first and last slides
const firstClone = slides[0].cloneNode(true);
const lastClone = slides[slides.length - 1].cloneNode(true);

track.appendChild(firstClone);
track.insertBefore(lastClone, slides[0]);

// Get updated slides
const allSlides = Array.from(track.children);

// Initial setup (start from real first slide)
let slideWidth = slides[0].getBoundingClientRect().width;
track.style.transform = `translateX(-${slideWidth}px)`;

// Create dots dynamically
slides.forEach((_, index) => {
  const dot = document.createElement('span');
  dot.classList.add('dot');
  if (index === 0) dot.classList.add('active');
  dot.addEventListener('click', () => goToSlide(index));
  dotsContainer.appendChild(dot);
});
const dots = Array.from(dotsContainer.children);

function updateDots() {
  dots.forEach(dot => dot.classList.remove('active'));
  dots[currentIndex].classList.add('active');
}

function goToSlide(index) {
  currentIndex = index;
  track.style.transition = 'transform 0.6s ease';
  track.style.transform = `translateX(-${(index + 1) * slideWidth}px)`;
  updateDots();
}

// Auto adjust when window resizes
window.addEventListener('resize', () => {
  slideWidth = slides[0].getBoundingClientRect().width;
  track.style.transition = 'none';
  track.style.transform = `translateX(-${(currentIndex + 1) * slideWidth}px)`;
});

// Seamless loop handler
track.addEventListener('transitionend', () => {
  if (allSlides[currentIndex + 1] === firstClone) {
    track.style.transition = 'none';
    track.style.transform = `translateX(-${slideWidth}px)`;
    currentIndex = 0;
  }
  if (allSlides[currentIndex + 1] === lastClone) {
    track.style.transition = 'none';
    track.style.transform = `translateX(-${slides.length * slideWidth}px)`;
    currentIndex = slides.length - 1;
  }
});

// Buttons
nextBtn.addEventListener('click', () => {
  goToSlide((currentIndex + 1) % slides.length);
});

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  goToSlide(currentIndex);
});

// Auto-slide every 5s
setInterval(() => {
  goToSlide((currentIndex + 1) % slides.length);
}, 2500);






// Reviews Slider JavaScript

document.addEventListener("DOMContentLoaded", function () {
    const wrapper = document.querySelector('.review-slider .wrapper');
    const boxes = Array.from(wrapper.querySelectorAll('.box'));
    const prevBtn = document.querySelector('.review-slider .prev');
    const nextBtn = document.querySelector('.review-slider .next');
    const REVIEWS_PER_ROW = 4; // Number of reviews to display per slide

    let currentIndex = 0;

    // Function to update visible reviews
    function updateVisibleReviews() {
        boxes.forEach((box, idx) => {
            // Hide all by default
            box.style.display = "none";
        });

        // Show 4 at a time starting from currentIndex
        for (let i = currentIndex; i < currentIndex + REVIEWS_PER_ROW; i++) {
            if (boxes[i]) {
                boxes[i].style.display = "block";
            }
        }

        // Disable/enable buttons appropriately
        prevBtn.disabled = (currentIndex === 0);
        nextBtn.disabled = (currentIndex + REVIEWS_PER_ROW >= boxes.length);
    }

    // Previous button event
    prevBtn.addEventListener("click", function () {
        if (currentIndex >= REVIEWS_PER_ROW) {
            currentIndex -= REVIEWS_PER_ROW;
            updateVisibleReviews();
        }
    });

    // Next button event
    nextBtn.addEventListener("click", function () {
        if (currentIndex + REVIEWS_PER_ROW < boxes.length) {
            currentIndex += REVIEWS_PER_ROW;
            updateVisibleReviews();
        }
    });

    // Responsive fallback: adjust reviews per row based on screen width
    function adjustReviewsPerRow() {
        if (window.innerWidth <= 500) {
            REVIEWS_PER_ROW_NEW = 1;
        } else if (window.innerWidth <= 700) {
            REVIEWS_PER_ROW_NEW = 2;
        } else {
            REVIEWS_PER_ROW_NEW = 4;
        }
        // Only reset if value actually changes
        if (REVIEWS_PER_ROW_NEW !== REVIEWS_PER_ROW) {
            currentIndex = 0;
            REVIEWS_PER_ROW = REVIEWS_PER_ROW_NEW;
            updateVisibleReviews();
        }
    }

    window.addEventListener('resize', function () {
        // Adjust the reviews per row when the window resizes
        adjustReviewsPerRow();
    });

    // Initial display
    updateVisibleReviews();
});




// Email submission in footer section
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.newsletter-form');
    const emailInput = form.querySelector('.email');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = emailInput.value.trim();

        if (!email || !validateEmail(email)) {
            alert('Please enter a valid email address.');
            emailInput.focus();
            return;
        }

        // Here put your AJAX or form submission logic
        alert('Thank you for subscribing!');
        form.reset();
    });

    function validateEmail(email) {
        // Simple email regex validation
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
});
