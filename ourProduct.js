
document.addEventListener("DOMContentLoaded", () => {
  const sidebar = document.querySelector(".main-ctaegory");
  const toggleBtn = document.querySelector("#sidebarToggle");

  // Create a background overlay for mobile focus effect
  const overlay = document.createElement("div");
  overlay.className = "sidebar-overlay";
  document.body.appendChild(overlay);

  // Toggle sidebar open/close
  toggleBtn.addEventListener("click", () => {
    sidebar.classList.toggle("active");
    overlay.classList.toggle("show");
    document.body.classList.toggle("no-scroll");
  });

  // Hide sidebar when overlay clicked
  overlay.addEventListener("click", () => {
    sidebar.classList.remove("active");
    overlay.classList.remove("show");
    document.body.classList.remove("no-scroll");
  });
});

