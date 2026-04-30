
  const menuToggle = document.getElementById("menuToggle");
  const offcanvas = document.getElementById("mobileMenu");

  // Toggle animation
  menuToggle.addEventListener("click", () => {
    menuToggle.classList.toggle("active");
  });

  // Reset when sidebar closes
  offcanvas.addEventListener("hidden.bs.offcanvas", () => {
    menuToggle.classList.remove("active");
  });
