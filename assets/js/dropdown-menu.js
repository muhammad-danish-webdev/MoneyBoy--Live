document.addEventListener("DOMContentLoaded", () => {
  const contentDropdowns = document.querySelectorAll(".content-filter-card");
  const langWrapper = document.querySelector(".lang-filter-wrapper");
  const langListContainer = langWrapper?.querySelector(
    ".custom-select-list-container",
  );

  // --- 1. Global Close Function (Sab kuch band karne ke liye) ---
  function closeAllEverywhere() {
    // Content filter cards band karein
    contentDropdowns.forEach((card) => {
      card.classList.remove("is-open");
      const container = card.querySelector(".custom-select-list-container");
      if (container) container.style.height = "0px";
    });

    // Language wrapper band karein
    if (langWrapper) {
      langWrapper.classList.remove("is-open");
      if (langListContainer) langListContainer.style.height = "0px";
    }
  }

  // --- 2. Content Filter Cards Logic ---
  contentDropdowns.forEach((card) => {
    const listContainer = card.querySelector(".custom-select-list-container");

    card.addEventListener("click", (e) => {
      e.stopPropagation();
      const isOpen = card.classList.contains("is-open");

      // Pehle sab kuch band karein (Language wala bhi aur doosre cards bhi)
      closeAllEverywhere();

      // Agar ye pehle band tha, to ab ise khol dein
      if (!isOpen) {
        card.classList.add("is-open");
        if (listContainer) {
          listContainer.style.height = `${listContainer.scrollHeight}px`;
        }
      }
    });
  });

  // --- 3. Language Filter Logic ---
  if (langWrapper) {
    langWrapper.addEventListener("click", (e) => {
      e.stopPropagation();
      const isOpen = langWrapper.classList.contains("is-open");

      // Pehle sab kuch band karein (Content cards bhi aur ye khud bhi)
      closeAllEverywhere();

      // Agar band tha to khol dein
      if (!isOpen) {
        langWrapper.classList.add("is-open");
        if (langListContainer) {
          langListContainer.style.height = `${langListContainer.scrollHeight}px`;
        }
      }
    });
  }

  // --- 4. Window Click (Kahin bhi bahar click ho to sab band) ---
  window.addEventListener("click", () => {
    closeAllEverywhere();
  });
});
