// === Quantity Buttons ===
document.addEventListener("DOMContentLoaded", () => {
  const minusBtn = document.querySelector(".fa-minus").closest(".q-btn");
  const plusBtn = document.querySelector(".fa-plus").closest(".q-btn");
  const inputQty = document.querySelector(".input-qty");

  minusBtn.addEventListener("click", () => {
    let value = parseInt(inputQty.value) || 1;
    if (value > 1) inputQty.value = value - 1;
  });

  plusBtn.addEventListener("click", () => {
    let value = parseInt(inputQty.value) || 1;
    inputQty.value = value + 1;
  });
});






// TAB SWITCHING
document.querySelectorAll(".nav-tab").forEach(button => {
  button.addEventListener("click", () => {
    // Remove 'active' from all buttons
    document.querySelectorAll(".nav-tab").forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");

    // Hide all tab panes
    document.querySelectorAll(".tab-pane").forEach(pane => pane.classList.remove("active"));

    // Show target pane
    const target = button.getAttribute("data-bs-target");
    document.querySelector(target).classList.add("active");
  });
});







// FEATURED PRODUCT SLIDER
document.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector(".pro-container");
  let scrollSpeed = 1; // pixels per step
  let scrollInterval;

  // Function to start auto-scrolling
  function startScroll() {
    scrollInterval = setInterval(() => {
      container.scrollTop += scrollSpeed;
      if (container.scrollTop + container.clientHeight >= container.scrollHeight) {
        container.scrollTop = 0; // loop back
      }
    }, 60);
  }

  // Function to stop auto-scrolling
  function stopScroll() {
    clearInterval(scrollInterval);
  }

  // Start scrolling by default
  startScroll();

  // Stop scrolling on hover
  container.addEventListener("mouseenter", stopScroll);
  container.addEventListener("mouseleave", startScroll);
});







// AUTO SCROLL FOR REVIEW SECTION
document.addEventListener("DOMContentLoaded", () => {
  const reviewBox = document.querySelector(".review");
  let scrollSpeed = 1; // pixels per frame
  let scrollInterval;

  function startAutoScroll() {
    scrollInterval = setInterval(() => {
      reviewBox.scrollTop += scrollSpeed;
      if (reviewBox.scrollTop + reviewBox.clientHeight >= reviewBox.scrollHeight) {
        reviewBox.scrollTop = 0; // loop back to top
      }
    }, 50); // adjust speed (lower = faster)
  }

  function stopAutoScroll() {
    clearInterval(scrollInterval);
  }

  reviewBox.addEventListener("mouseenter", stopAutoScroll);
  reviewBox.addEventListener("mouseleave", startAutoScroll);

  startAutoScroll();
});





// RELATED PRODUCT SLIDER STARTS
document.addEventListener("DOMContentLoaded", () => {
  const slider = document.querySelector(".veg-slider");
  const nextBtn = document.querySelector(".carousel-btn.next");
  const prevBtn = document.querySelector(".carousel-btn.prev");

  let autoSlideInterval;
  const autoSpeed = 0.5; // pixels per frame (low speed)
  const frameRate = 16; // ~60fps

  // Clone items for seamless infinite scroll
  const items = Array.from(slider.children);
  items.forEach(item => {
    const clone = item.cloneNode(true);
    slider.appendChild(clone);
  });
  items.forEach(item => {
    const clone = item.cloneNode(true);
    slider.insertBefore(clone, slider.firstChild);
  });

  // Update dimensions dynamically
  let scrollStep;
  function updateScrollStep() {
    const item = slider.querySelector(".veg-item");
    scrollStep = item ? item.offsetWidth + 16 : 300;
  }
  updateScrollStep();

  // Start from middle (real section)
  const middle = slider.scrollWidth / 3;
  slider.scrollLeft = middle;

  // --- AUTO SLIDE ---
  function startAutoSlide() {
    autoSlideInterval = setInterval(() => {
      slider.scrollLeft += autoSpeed;

      // Reset seamlessly when near end
      if (slider.scrollLeft >= slider.scrollWidth - slider.clientWidth - 1) {
        slider.scrollLeft = middle - slider.clientWidth;
      }

      // Reset seamlessly when near start
      if (slider.scrollLeft <= 0) {
        slider.scrollLeft = middle;
      }
    }, frameRate);
  }

  // --- STOP AUTO SLIDE ---
  function stopAutoSlide() {
    clearInterval(autoSlideInterval);
  }

  // --- MANUAL BUTTONS ---
  nextBtn.addEventListener("click", () => {
    slider.scrollLeft += scrollStep;
    if (slider.scrollLeft >= slider.scrollWidth - slider.clientWidth) {
      slider.scrollLeft = middle;
    }
  });

  prevBtn.addEventListener("click", () => {
    slider.scrollLeft -= scrollStep;
    if (slider.scrollLeft <= 0) {
      slider.scrollLeft = middle;
    }
  });

  // --- HOVER BEHAVIOR ---
  slider.addEventListener("mouseenter", stopAutoSlide);
  slider.addEventListener("mouseleave", startAutoSlide);
  nextBtn.addEventListener("mouseenter", stopAutoSlide);
  nextBtn.addEventListener("mouseleave", startAutoSlide);
  prevBtn.addEventListener("mouseenter", stopAutoSlide);
  prevBtn.addEventListener("mouseleave", startAutoSlide);

  // --- START ---
  startAutoSlide();

  // --- RESPONSIVE HANDLING ---
  window.addEventListener("resize", () => {
    stopAutoSlide();
    updateScrollStep();
    slider.scrollLeft = middle;
    startAutoSlide();
  });
});
