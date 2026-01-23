// document.addEventListener("DOMContentLoaded", () => {
//   const selectElements = document.querySelectorAll(
//     "[data-custom-select-element]",
//   );

//   selectElements.forEach((select) => {
//     const trigger = select.querySelector("[data-custom-select-triger]");
//     const dropdown = select.querySelector("[data-custom-select-dropdown]");
//     const searchInput = select.querySelector(
//       ".custom-select-options-search input",
//     );
//     const options = select.querySelectorAll(".custom-select-option");
//     const labelTxt = select.querySelector(".custom-select-label-txt");

//     // --- Helper Function: Search reset karne ke liye ---
//     const resetSearch = () => {
//       if (searchInput) {
//         searchInput.value = ""; // Input khali karein
//         options.forEach((opt) => (opt.style.display = "block")); // Saare options wapas dikhayein
//       }
//     };

//     // 1. Click karne par Open/Close Toggle
//     trigger.addEventListener("click", (e) => {
//       e.stopPropagation();

//       // Baqi sab open dropdowns ko band karo
//       document
//         .querySelectorAll("[data-custom-select-dropdown]")
//         .forEach((d) => {
//           if (d !== dropdown) d.classList.remove("active");
//         });

//       // Is wale dropdown ko toggle karo
//       dropdown.classList.toggle("active");
//     });

//     // 2. Search Filter Logic
//     if (searchInput) {
//       searchInput.addEventListener("input", (e) => {
//         const searchTerm = e.target.value.toLowerCase().trim();

//         options.forEach((option) => {
//           const text = option.innerText.toLowerCase();
//           option.style.display = text.includes(searchTerm) ? "block" : "none";
//         });
//       });
//     }

//     // 3. Option Select karne par logic
//     options.forEach((option) => {
//       option.addEventListener("click", () => {
//         // Label change karein
//         if (labelTxt) {
//           labelTxt.innerText = option.innerText;
//         }

//         // Dropdown band karein
//         dropdown.classList.remove("active");

//         // --- Search Reset jab selection ho jaye ---
//         resetSearch();
//       });
//     });

//     // Dropdown ke andar click par band na ho (taake search input work kare)
//     dropdown.addEventListener("click", (e) => {
//       e.stopPropagation();
//     });
//   });

//   // 4. Kahin bhi bahir click karne par hide ho jaye aur search reset ho
//   document.addEventListener("click", () => {
//     const allDropdowns = document.querySelectorAll(
//       "[data-custom-select-dropdown]",
//     );

//     allDropdowns.forEach((d) => {
//       if (d.classList.contains("active")) {
//         d.classList.remove("active");

//         // Is specific select element ki search reset karein
//         const parentSelect = d.closest("[data-custom-select-element]");
//         const sInput = parentSelect.querySelector(
//           ".custom-select-options-search input",
//         );
//         const sOptions = parentSelect.querySelectorAll(".custom-select-option");

//         if (sInput) sInput.value = "";
//         sOptions.forEach((opt) => (opt.style.display = "block"));
//       }
//     });
//   });
// });

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
