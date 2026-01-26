document.addEventListener("DOMContentLoaded", () => {
  // Sabhi elements ko select karein jin pe humne attribute lagaya hai
  const selectElements = document.querySelectorAll(
    "[data-custom-select-element]",
  );

  selectElements.forEach((select) => {
    const trigger = select.querySelector("[data-custom-select-triger]");
    const dropdown = select.querySelector("[data-custom-select-dropdown]");
    const searchInput = select.querySelector(
      ".custom-select-options-search input",
    );
    const options = select.querySelectorAll(".custom-select-option");
    const labelTxt = select.querySelector(".custom-select-label-txt");

    // Search reset function
    const resetSearch = () => {
      if (searchInput) {
        searchInput.value = "";
        options.forEach((opt) => (opt.style.display = "block"));
      }
    };

    if (trigger && dropdown) {
      // 1. Click Toggle Logic
      trigger.addEventListener("click", (e) => {
        e.stopPropagation();

        // Baqi sab ko band karein
        document
          .querySelectorAll("[data-custom-select-dropdown]")
          .forEach((d) => {
            if (d !== dropdown) d.classList.remove("active");
          });

        dropdown.classList.toggle("active");
      });

      // 2. Search Filter (Sirf tab chale agar search input ho)
      if (searchInput) {
        searchInput.addEventListener("input", (e) => {
          const searchTerm = e.target.value.toLowerCase().trim();
          options.forEach((option) => {
            const text = option.innerText.toLowerCase();
            option.style.display = text.includes(searchTerm) ? "block" : "none";
          });
        });
      }

      // 3. Option Selection
      options.forEach((option) => {
        option.addEventListener("click", (e) => {
          e.stopPropagation();
          if (labelTxt) {
            labelTxt.innerText = option.innerText;
          }
          dropdown.classList.remove("active");
          resetSearch();
        });
      });

      // Dropdown ke andar click se dropdown band na ho
      dropdown.addEventListener("click", (e) => e.stopPropagation());
    }
  });

  // 4. Bahir click karne par band hona
  document.addEventListener("click", () => {
    document.querySelectorAll("[data-custom-select-dropdown]").forEach((d) => {
      if (d.classList.contains("active")) {
        d.classList.remove("active");
        // Reset search for this specific dropdown
        const parent = d.closest("[data-custom-select-element]");
        const sInput = parent.querySelector(
          ".custom-select-options-search input",
        );
        const sOptions = parent.querySelectorAll(".custom-select-option");
        if (sInput) sInput.value = "";
        if (sOptions) sOptions.forEach((opt) => (opt.style.display = "block"));
      }
    });
  });
});
