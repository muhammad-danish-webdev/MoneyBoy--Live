document.addEventListener("DOMContentLoaded", () => {
  const dropdowns = document.querySelectorAll(".content-filter-card-wrapper");

  dropdowns.forEach((card) => {
    const label = card.querySelector(".custom-select-label-wrapper");
    const listContainer = card.querySelector(".custom-select-list-container");

    label.addEventListener("click", (e) => {
      // Prevent the click from immediately triggering the "click outside" window listener
      e.stopPropagation();

      const isOpen = card.classList.contains("is-open");

      // Close all other dropdowns first (Optional: remove if you want multiple open at once)
      closeAllDropdowns();

      if (!isOpen) {
        card.classList.add("is-open");
        // Calculate the exact height of the content inside
        listContainer.style.height = `${listContainer.scrollHeight}px`;
      }
    });
  });

  // Helper to reset heights and classes
  function closeAllDropdowns() {
    dropdowns.forEach((card) => {
      card.classList.remove("is-open");
      const container = card.querySelector(".custom-select-list-container");
      container.style.height = "0px";
    });
  }

  // Close dropdowns if user clicks anywhere else on the page
  window.addEventListener("click", () => {
    closeAllDropdowns();
  });
});
