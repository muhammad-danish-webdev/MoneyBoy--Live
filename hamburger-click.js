// Select elements
const menuTrigger = document.querySelector(".toggle-icons");
const ctaButtons = document.querySelector(".header-cta-buttons");

// Click Event
menuTrigger.addEventListener("click", () => {
  // Menu ko slide karne ke liye
  ctaButtons.classList.toggle("active");

  // Hamburger icon ko xmark mein badalne ke liye
  menuTrigger.classList.toggle("is-active");

  // Optional: Menu khulne par body scroll lock karne ke liye
  if (ctaButtons.classList.contains("active")) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
});
